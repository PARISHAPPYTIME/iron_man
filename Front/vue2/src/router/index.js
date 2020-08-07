import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uploadFiles',
    name: 'UploadFiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UploadFiles.vue')
  },
  {
    path: '/toDoList',
    name: 'toDoList',
    component: () => import('../views/ToDoList.vue')
  },
  {
    path: '/about',
    name: 'toDoList',
    component: () => import('../views/About.vue')
  },
  {
    path: '/log',
    name: 'toDoList',
    component: () => import('../views/Log.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
