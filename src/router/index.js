import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomePage.vue'
import LoginView from '../components/LoginView.vue'
import MovieView from '../components/MovieView.vue'
import MovieBase from '../components/MovieBase.vue'
import MovieDetailView from '../components/MovieDetail.vue'
import MovieDetailsBase from '../components/MovieDetailsBase.vue'

import AboutView from '../components/AboutView.vue'
import ReviewBase from '../components/ReviewBase.vue'
import ReviewPage from '../components/ReviewView.vue'
import ReviewDeatilPage from '../components/ReviewDetailView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: true // Add this meta field to specify that the route requires authentication
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/movies',
    component: MovieBase,
    children: [
      {
        path: "",
        component: MovieView,
        name: 'Movie',

      },
      {
        path: "/movies/:id",
        component: MovieDetailsBase,
        children: [
          {
            path: "",
            name: 'MovieDetails',
            component: MovieDetailView,
          },
          {
            path: "reviews",
            component: ReviewBase,
            children: [
              {
                path: "",
                name: 'ReviewDetails',
                component: ReviewPage,
              },
              {
                path: ":reviewId",
                name: 'ReviewDeatilPage',
                component: ReviewDeatilPage
              }
            ]
          }
        ]
      }
    ]
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = checkUserLoginStatus()

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name === 'MovieDetails' && !isLoggedIn) {
    next({ name: 'Login' })
  } else if (to.name !== 'Login' && to.name !== 'About' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

function checkUserLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  return isLoggedIn === 'true'
}



export default router
