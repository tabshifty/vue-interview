import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'highlight.js/styles/stackoverflow-light.css'
import Markdown from 'vue3-markdown-it'

createApp(App).use(router).component('Markdown', Markdown).mount('#app')

// console.log(Markdown)
