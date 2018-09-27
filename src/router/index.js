import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home/index')
const community = () => import('@/views/community')
const cooperation = () => import('@/views/cooperation')
const about = () => import('@/views/about')
const news = () => import('@/views/news')
const contact = () => import('@/views/contact')
const article = () => import('@/views/article')
const recuit = () => import('@/views/recuit')
const certified = () => import('@/views/certified')
const worldwide = () => import('@/views/worldwide')
const independent = () => import('@/views/independent')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: '首页',
          component: home
        }
      ]
    },
    {
      path: '/',
      name: 'cooperation',
      component: cooperation,
      children: [
        {
          path: '/cooperation',
          name: '合作',
          component: cooperation
        }
      ]
    },
    {
      path: '/',
      name: 'community',
      component: community,
      children: [
        {
          path: '/community',
          name: '合作',
          component: community
        }
      ]
    },
    {
      path: '/',
      name: 'about',
      component: about,
      children: [
        {
          path: '/about',
          name: '关于我们',
          component: about
        }
      ]
    },
    {
      path: '/',
      name: 'contact',
      component: contact,
      children: [
        {
          path: '/contact',
          name: '社区',
          component: contact
        }
      ]
    },
    {
      path: '/',
      name: 'news',
      component: news,
      children: [
        {
          path: '/news',
          name: '新闻中心',
          component: news
        }
      ]
    },
    {
      path: '/',
      name: 'article',
      component: article,
      children: [
        {
          path: '/article',
          name: '文章详情',
          component: article
        }
      ]
    },
    {
      path: '/',
      name: 'recuit',
      component: recuit,
      children: [
        {
          path: '/recuit',
          name: '招聘',
          component: recuit
        }
      ]
    },
    {
      path: '/',
      name: 'certified',
      component: certified,
      children: [
        {
          path: '/certified',
          name: '正品甄选',
          component: certified
        }
      ]
    },
    {
      path: '/',
      name: 'worldwide',
      component: worldwide,
      children: [
        {
          path: '/worldwide',
          name: '全球买手',
          component: worldwide
        }
      ]
    },
    {
      path: '/',
      name: 'independent',
      component: independent,
      children: [
        {
          path: '/independent',
          name: '独立设计',
          component: independent
        }
      ]
    }
  ]
})
