import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './SASS/main.scss';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './Reducers/rootReducer';
import thunk from "redux-thunk";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CoursePage from './COURSEPAGE/CoursePage';
import CourseList from './COURSEPAGE/Maincontent/CourseList';
import AdminPage from './ADMIN PAGE/AdminPage';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/courses" component={CoursePage}/>
            <Route path="/admin" component={AdminPage} />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
