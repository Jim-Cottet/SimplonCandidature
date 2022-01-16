import Vue from 'vue'
import VueRouter from 'vue-router'
import Présentation from '../views/Présentation.vue'
import Parcours from '../views/Parcours'
import Expérience from '../views/Experience'
import Motivation from '../views/Motivation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Présentation',
    component: Présentation
  },
  {
    path: '/parcours',
    name: 'Parcours',
    component: Parcours
  },
  {
    path: '/experience',
    name: 'Expérience',
    component: Expérience
  },
  {
    path: '/motivation',
    name: 'Motivation',
    component: Motivation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
