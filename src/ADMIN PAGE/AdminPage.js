import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import CoursePageAdmin from './Course Page Admin/CoursePageAdmin';
import UserPage from './User Page Admin/UserPage';
import TopHeader from '../HOMEPAGE/Top header/TopHeader';
import BottomHeader from '../HOMEPAGE/Bottom header/BottomHeader';
import Footer from '../HOMEPAGE/Footer/Footer';

export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <TopHeader />
                    <BottomHeader />
                    <Route path="/admin/course-page" exact component={CoursePageAdmin} />
                    <Route path="/admin/user-page" exact component={UserPage} />
                    <Footer />
                </Router>
            </div>
        )
    }
}
