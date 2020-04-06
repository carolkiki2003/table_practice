import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    name: 'index',
    component: Index
  },
  {
    path: '*',
    redirect: { name: 'index' }
  }
]

let base = '/'
let project = process.env.project
try {
  const index = location.pathname.lastIndexOf(project) === -1 ? location.pathname.lastIndexOf(base) : location.pathname.lastIndexOf(project) + project.length
  base = location.pathname.substr(0, index) + '/'
} catch (err) {
  console.log(err)
}

const router = new VueRouter({
  mode: 'history',
  base,
  pathToRegexpOptions: {
    strict: true
  },
  routes
})

export default router
