import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import SignUpSuccess from '../views/SignUpSuccess'
import Feedback from '../views/Feedback'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signup/success',
    name: 'SignUpSuccess',
    component: SignUpSuccess,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
