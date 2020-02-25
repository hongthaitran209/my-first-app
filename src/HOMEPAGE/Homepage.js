import React, { Component } from 'react'
import TopHeader from './Top header/TopHeader'
import BottomHeader from './Bottom header/BottomHeader'
import Carousel from './Carousel/Carousel'
import TopSpecialization from './Top Specialization/TopSpecialization';
import {connect} from 'react-redux';
import {getCourses} from '../Actions/Course';
import CoursesProvide from './Courses Provide/CoursesProvide';
import AboutUs from './About us/AboutUs';
import AwesomeStart from './AwesomeStart/AwesomeStart';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';

class Homepage extends Component {

    componentDidMount() {
        this.props._getCourses();
    }

    render() {
        return (
            <div>
                {/* <TopHeader />
                <BottomHeader /> */}
                <Carousel />
                <TopSpecialization />
                <CoursesProvide />
                <AboutUs />
                <AwesomeStart />
                <Newsletter />
                {/* <Footer /> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getCourses: () => {
            dispatch(getCourses())
        }
    }
}

export default connect(null, mapDispatchToProps)(Homepage)
