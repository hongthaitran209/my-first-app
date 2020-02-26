import React, { Component } from 'react'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {searchCourse} from '../../Actions/Course';
import _ from 'lodash';
import UserDetail from '../User details/UserDetail';

class TopHeader extends Component {

    constructor (props) {
        super(props);
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.state = {
            keyWord: "",
            currentUser,
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSearch = (keyWord) => {
        this.props._searchCourse(keyWord);
        // this.props.history.push("/courses")
    }

    onLogOut = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("getUserDetail");
        this.props.history.push("/");
        window.location.reload();
    }

    render() {
        const {currentUser} = this.state;
        return (
            <div className="top-header-container">
                <div className="top-header d-flex justify-content-between align-items-center">
                    <div className="top-header-left">
                        <a href="#" className="top-header-left-catalog">Catalog</a>
                        <div className="top-header-left-form">
                            <input type="search" placeholder="Search Courses" className="top-header-left-form-search" onChange={this.onChange}></input>
                            <button type="submit" className="top-header-left-form-button" onClick={ () => this.onSearch(this.state.keyWord)}><i className="fas fa-search"></i></button>
                        </div>
                    </div>

                    <div className="top-header-right">
                        {
                            (!_.isEmpty(currentUser)) ? 
                            ((currentUser.maLoaiNguoiDung === "HV") ?
                            <UserDetail /> : <></>) :
                            <SignUp />
                        }
                        
                        {
                            (!_.isEmpty(currentUser)) ? <button className="btn btn-danger" onClick={() => this.onLogOut()}>Log out</button> : <LogIn />
                        }
                    </div>

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

export default withRouter(connect(null,mapDispatchToProps)(TopHeader))
