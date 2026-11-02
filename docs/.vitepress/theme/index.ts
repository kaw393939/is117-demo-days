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
