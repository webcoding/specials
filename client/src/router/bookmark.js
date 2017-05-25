
// import layout from '../pages/layout'
const layout = () => import('../pages/layout')
const tag = () => import('../pages/tag')
const svg = () => import('../pages/svg')
const bookmark = () => import('../pages/bookmark')
const explore = () => import('../pages/explore')
const docs = () => import('../pages/docs')
const read = () => import('../pages/read')
const help = () => import('../pages/help')
const changelog = () => import('../pages/changelog')
const about = () => import('../pages/about')
const dev = () => import('../pages/dev')
const bookmarkAdd = () => import('../pages/bookmark-add')
const tagBookmark = () => import('../pages/tag-bookmark')

// 别名与跳转
// 暂时用别名 后期如为归纳统一路径 则使用跳转比别名好
const pages = [
  {
    path: '/explore',
    name: 'explore',
    component: explore,
  },
  {
    path: '/read',
    name: 'read',
    component: read,
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: bookmark,
    alias: ['/bookmarks', 'b'],
  },
  {
    path: '/docs',
    name: 'docs',
    component: docs,
    alias: '/doc',
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: changelog,
  },
  {
    path: '/help',
    name: 'help',
    component: help,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/dev',
    name: 'dev',
    component: dev,
  },
]

const bookmarkPages = [
  {
    path: '/',
    // 使用默认子路由，则父路由的 name 就得去掉
    // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
    name: '',
    component: layout,
    children: [
      {
        path: '/',
        name: 'bookmarks',
        component: bookmark,
      },
      {
        path: '/tags',
        name: 'tag',
        component: tag,
        // alias: ['tag', 't'],
      },
      {
        path: '/t/:tag',
        name: 'tag-bookmarks',
        component: tagBookmark,
      },
      {
        path: '/svg',
        name: 'svg',
        component: svg,
      },
    ].concat(pages),
  },
  {
    path: '/bookmark/add',
    name: 'bookmark-add',
    meta: {
      requiresAuth: true,
    },
    component: bookmarkAdd,
  },
]

export default bookmarkPages
