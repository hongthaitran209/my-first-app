import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";

import * as Types from '../../Constants';

class CourseList extends Component {

    componentDidMount() {
        this.props.getCoursesByCate("BackEnd")
    }

    render() {

        const { coursesByCate, courses, searchCourse } = this.props;

        const elmCourseList = courses.filter(course => course.danhMucKhoaHoc.maDanhMucKhoahoc === coursesByCate).map(
            (course, index) => {
                return (
                    <div className="course-list-item">
                        <div className="course-list-item-img">
                            <img src={course.hinhAnh} />
                        </div>
                        <div className="course-list-item-content">
                            <h5>Course: {course.tenKhoaHoc}</h5>
                            <p>{course.moTa}</p>
                            {
                                !_.isEmpty(localStorage) ? <button>Register</button> : <></>
                            }

                        </div>
                    </div>
                )
            }
        )

        const elmSearchCourseList = searchCourse.map((course, index) => {
            return (
                <div className="course-list-item">
                    <div className="course-list-item-img">
                        <img src={course.hinhAnh} />
                    </div>
                    <div className="course-list-item-content">
                        <h5>Course: {course.tenKhoaHoc}</h5>
                        <p>{course.moTa}</p>
                        {
                            !_.isEmpty(localStorage) ? <button>Register</button> : <></>
                        }

                    </div>
                </div>
            )
        })
            
        return (
            <div className="course-list">
                {
                    _.isEmpty(this.props.searchCourse) ?  [elmCourseList] :  [elmSearchCourseList]
                }                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coursesByCate: state.coursesByCate,
        courses: state.courses,
        searchCourse: state.searchCourse,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCoursesByCate: (courseCate) => {
            dispatch({
                type: Types.GET_COURSES_BY_CATE,
                payload: courseCate,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList)