
const user = () => import('@/user/user')
const profile = () => import('@/user/profile')

// 别名与跳转
// 暂时用别名 后期如为归纳统一路径 则使用跳转比别名好
const pages = [
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: user,
  //   // alias: ['/users', 'u'],
  // },
]

const userPages = [
  {
    path: '/user',
    // 使用默认子路由，则父路由的 name 就得去掉
    // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
    name: '',
    component: user,
    children: [
      {
        path: '/',
        name: 'profile',
        component: profile,
        meta: {
          requiresAuth: true,
        },
        alias: ['profile'],
      },
    ].concat(pages),
  },
]

export default userPages
