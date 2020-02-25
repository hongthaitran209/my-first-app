import React, { Component } from 'react'
import TopHeader from '../HOMEPAGE/Top header/TopHeader'
import BottomHeader from '../HOMEPAGE/Bottom header/BottomHeader'
import CoursePageBanner from './Banner/CoursePageBanner'
import Navigation from './Navigation/Navigation'
import MainContent from './Maincontent/MainContent'

import Footer from './../HOMEPAGE/Footer/Footer';
import {connect} from 'react-redux';
import { getCourses, getCourseCate } from '../Actions/Course'

class CoursePage extends Component {

    componentDidMount() {
        this.props._getCourses();
        this.props._getCourseCate();
    }

    render() {

        // const {match} = this.props;

        return (
            <div className="course-page">
                <TopHeader />
                <BottomHeader />
                <CoursePageBanner />

                <div className="course-page-content d-flex">
                    <aside className="course-page-aside">
                    <Navigation />
                    </aside>
                    <div className="main-content">
                        <MainContent />
                        {/* <p>#{match.params.id}</p> */}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getCourses: () => {
            dispatch(getCourses())
        },
        _getCourseCate: () => {
            dispatch(getCourseCate())
        }
    }
}

export default connect(null, mapDispatchToProps)(CoursePage)
