import App from '../App'

const hello = r => require.ensure([], () => r(require('../page/hello')), 'hello')
const index = r => require.ensure([], () => r(require('../page/index')), 'index')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/hello'
        },
        //首页城市列表页
        {
            path: '/hello',
            component: hello
        },        //首页城市列表页
        {
            path: '/index',
            component: index
        },
    ]
}]