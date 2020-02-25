import React, { Component } from 'react'
import AddCourse from './AddCourse/AddCourse';
import SearchCourse from './SearchCourse/SearchCourse';
import CourseListAdmin from './CourseList/CourseListAdmin';

export default class CoursePageAdmin extends Component {
    render() {
        return (

            <div className="admin-content">
                <div className="admin-content-header">
                    <AddCourse />
                    <SearchCourse />
                </div>
                <CourseListAdmin />
            </div>

        )
    }
}
