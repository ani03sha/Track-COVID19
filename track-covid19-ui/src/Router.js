import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ArticleView from './components/ArticleView/ArticleView';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ App } />
                <Route path="/article/:id" component={ ArticleView } />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;