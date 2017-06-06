
import layout from '../layout/bookmark'
import search from '../pages/search'
import tag from '../bookmarks/tag'
import bookmarkAdd from '../bookmarks/bookmark-add'
// const tag = () => import('../bookmarks/tag')
// const bookmarkAdd = () => import('../bookmarks/bookmark-add')
// const search = () => import('../pages/search')
// const layout = () => import('../pages/layout')
const bookmark = () => import('../bookmarks/bookmark')
const explore = () => import('../bookmarks/explore')
const dev = () => import('../bookmarks/dev')
const tags = () => import('../bookmarks/tags')

// 别名与跳转
// 暂时用别名 后期如为归纳统一路径 则使用跳转比别名好
const pages = [
  {
    path: '/',
    name: 'search',
    component: search,
    alias: ['s', 'search'],
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: bookmark,
    alias: ['b', 'bookmark'],
  },
  {
    path: '/explore',
    name: 'explore',
    component: explore,
  },
  {
    path: '/tags',
    name: 'tags',
    component: tags,
    // alias: ['tag', 't'],
  },
  {
    path: '/tag/:tag',
    name: 'tag',
    component: tag,
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
    // name: '',
    component: layout,
    // component: bookmark,
    children: [].concat(pages),
  },
  {
    path: '/bookmark/add',
    name: 'bookmark-add',
    meta: {
      auth: true,
    },
    component: bookmarkAdd,
  },
]

export default bookmarkPages
