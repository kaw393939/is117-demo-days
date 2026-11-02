import DefaultTheme from 'vitepress/theme'
import LearningDiagram from './LearningDiagram.vue'
import VersionComparison from './VersionComparison.vue'
import ExampleGallery from './ExampleGallery.vue'
import './custom.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LearningDiagram', LearningDiagram)
    app.component('ExampleGallery', ExampleGallery)
    app.component('VersionComparison', VersionComparison)
  }
}
