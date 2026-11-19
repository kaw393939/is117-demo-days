import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted } from 'vue'
import SampleAssessment from './SampleAssessment.vue'
import LearningDiagram from './LearningDiagram.vue'
import VersionComparison from './VersionComparison.vue'
import ExampleGallery from './ExampleGallery.vue'
import './custom.css'
// Search and deep links must reveal targets inside collapsed worked examples.
function revealHashTarget() {
  let target: HTMLElement | null
  try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))) }
  catch { return }
  if (!target) return
  let opened = false
  for (let parent = target.parentElement; parent; parent = parent.parentElement) {
    if (parent instanceof HTMLDetailsElement && !parent.open) {
      parent.open = true
      opened = true
    }
  }
  if (opened) requestAnimationFrame(() => target?.scrollIntoView({ block: 'start' }))
}
export default {
  extends: DefaultTheme,
  setup() { onMounted(revealHashTarget) },
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', revealHashTarget)
      // Re-selecting the current hash emits no hashchange event. Reveal it on click too.
      document.addEventListener('click', (event: MouseEvent) => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
        const link = event.target instanceof Element ? event.target.closest('a[href]') : null
        if (!link) return
        const url = new URL(link.getAttribute('href')!, location.href)
        if (url.origin === location.origin && url.pathname === location.pathname && url.hash === location.hash) revealHashTarget()
      }, true)
      router.onAfterRouteChange = async () => {
        await nextTick()
        revealHashTarget()
      }
    }
    app.component('LearningDiagram', LearningDiagram)
    app.component('SampleAssessment', SampleAssessment)
    app.component('ExampleGallery', ExampleGallery)
    app.component('VersionComparison', VersionComparison)
  }
}
