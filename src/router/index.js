import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import SignUpSuccess from '../views/SignUpSuccess'
import EmailVerify from '../views/EmailVerify'
import Feedback from '../views/Feedback'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  { 
    path: '/', 
    redirect: '/feedback' 
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: { 
        requiresAuth: true
    }
  },
  {
    path: '/login',
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
    path: '/email/verify/:id/:hash',
    name: 'EmailVerify',
    component: EmailVerify,
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters['authentication/isLoggedIn']) {
          next()
          return
      }
      next('/login') 
  } else {
      next() 
  }
})

export default router
