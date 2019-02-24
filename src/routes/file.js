const routes = [{
  path: 'files',
  component: () => import('./../components/file/app'),
  children: [
    {
      path: '',
      name: 'files.index',
      component: () => import('./../components/file/Page/index')
    },
    {
      path: ':id',
      name: 'files.show',
      component: () => import('./../components/file/Page/show')
    }
  ]
}]
module.exports = routes;