import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'
import SingleBlog from './components/SingleBlog.vue'

export default [
    { path: '/', component: FormOne },
    { path: '/show', component: FormTwo },
    { path: '/show/:id', component: SingleBlog },
]