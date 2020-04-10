import { HomePage } from '../view/home';
import { LoginPage } from '../view/login';
import { ErrorPage } from '../components/ErrorPage/404';

// interface routerConfigModel {
//     path: string,
//     component?: any,
//     auth?: boolean
// }
export const routerConfig = [
    {
        path: '/',
        component: HomePage,
        auth: true,
    }, {
        path: '/home',
        component: HomePage,
        auth: true,
    }, {
        path: '/login',
        component: LoginPage,
    }, {
        path: '/404',
        component: ErrorPage
    }
]
