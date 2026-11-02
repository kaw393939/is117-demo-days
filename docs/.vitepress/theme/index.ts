import DefaultTheme from 'vitepress/theme'
import SampleAssessment from './SampleAssessment.vue'
import LearningDiagram from './LearningDiagram.vue'
import VersionComparison from './VersionComparison.vue'
import ExampleGallery from './ExampleGallery.vue'
import './custom.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LearningDiagram', LearningDiagram)
    app.component('SampleAssessment', SampleAssessment)
    app.component('ExampleGallery', ExampleGallery)
    app.component('VersionComparison', VersionComparison)
  }
}
