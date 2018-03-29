import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const detail = r => require.ensure([], () => r(require('../page/detail/detail')), 'detail')
const test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const doclist = r => require.ensure([], () => r(require('../page/doclist/doclist')), 'doclist')
const docpublic = r => require.ensure([], () => r(require('../page/docpublic/docpublic')), 'docpublic')
const error = r => require.ensure([], () => r(require('../page/error/error')), 'error')


export default [{
    path: '/',
    component:App,
    children:[
        // 页面地址为空时跳转到首页
        {
            path: '',
            redirect:'/home'
        },
        // 首页
        {
            path: '/home',
            component:home,
            // keepAlive为true 保存当前组件不被销毁
            // meta: {
            //   keepAlive: true,
            // }
        },
        // 详情
        {
            path: '/detail',
            component: detail,
        },
        {

            path: '/test',
            component:test,
        },
        {

            path: '/login',
            component:login,
        },
        {

            path: '/doclist',
                    meta: {
               title: 'FlexPLM创意管理平台'
          },
            component:doclist,
        },
        {

            path: '/docpublic',
            component:docpublic,
                                meta: {
               title: 'FlexPLM创意管理平台'
          },
        },

        // 404
        {
            path: '*',
            component:error,
        },

    ]
}]
