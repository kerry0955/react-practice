import React from 'react';
import { HashRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import Form from '../view/form/Form';
// import { getAuth} from '../utils/getCookie.js';
import Home from '../view/home';
import LoginPage from '../view/login';
import RefIndex from '../view/ref';
import HtmlIndex from '../view/vHtml';
import ErrorPage from '../components/ErrorPage/404';

const MainRoute = () => (
    <Router>
        <ul>
            <li><Link to='/login/432'>登录</Link></li>
            <li><Link to='/form'>表格</Link></li>
            <li><Link to='/home'>首页</Link></li>
            <li><Link to='/ref'>ref</Link></li>
        </ul>

        <Route exact path="/login/:id" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/form" component={Form} />
        <Route path="/404" component={ErrorPage} />
        <Route path="*" render={() => <Redirect to="/404" />} />
        <Route exact path="/ref" component={RefIndex} />
        <Route exact path="/html" component={HtmlIndex} />


    </Router>
);

export default MainRoute;