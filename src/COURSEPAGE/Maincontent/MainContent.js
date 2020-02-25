import React, { Component } from 'react'
import SearchBar from './SearchBar'
import CourseList from './CourseList'

export default class MainContent extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <CourseList />
            </React.Fragment>
        )
    }
}
