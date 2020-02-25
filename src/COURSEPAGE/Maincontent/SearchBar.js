import React, { Component } from 'react';
import {searchCourse} from '../../Actions/Course';
import {connect} from "react-redux";

class SearchBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            keyWord: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSearch = (keyWord) => {
        this.props._searchCourse(keyWord)
    }

    render() {
        return (
            <div className="search-bar">
                <span>Search Courses:</span>
                <div className="course-page-search-bar">
                    <input type="search" name="keyWord" onChange={this.onChange}></input>
                    <button onClick={() => this.onSearch(this.state.keyWord)}>Go</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _searchCourse: (keyWord) => {
            dispatch(searchCourse(keyWord))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)