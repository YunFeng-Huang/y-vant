import Vue from 'vue';
import Router from 'vue-router';

const Login = resolve => require(['pages/login/index'], resolve);
const Home = resolve => require(['pages/home/index'], resolve);
const NotFound = resolve => require(['pages/errorPage/404'], resolve);

Vue.use(Router);
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
/* 初始路由 */
export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});

