// router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// import the components
import Hello from '@/components/Hello'
// import All from '@/components/All'
import News from '@/components/News'
import Publisher from '@/components/Publisher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // Homepage
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      // Publisher List
      path: '/publisher',
      name: 'Publisher',
      component: Publisher
    },
    {
      // Display selected publisher news
      path: '/news/:id',
      name: 'News',
      component: News
    }
  ]
})
