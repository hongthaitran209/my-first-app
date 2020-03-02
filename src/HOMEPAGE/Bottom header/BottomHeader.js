import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import _ from 'lodash';

export default class BottomHeader extends Component {

    constructor (props) {
        super(props);
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.state = {
            currentUser,
        }
    }

    render() {
        const {currentUser} = this.state;
        return (
            <div className="bottom-header-container">
                <div className="bottom-header d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <a href="#">
                            <img src="http://trending.themescustom.com/theme/image.php/trending/theme/1547037611//logo" alt="logo" />
                        </a>
                    </div>

                    <nav className="navbar my-bottom-header-navbar">
                        <ul className="nav nav-pills d-flex justify-content-around">
                            {
                                !_.isEmpty(currentUser) ? 
                                ((currentUser.maLoaiNguoiDung === "HV") ?
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                activeClassName="active" exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/courses" className="nav-link"
                                                activeClassName="active" >Courses</NavLink>
                                        </li>
                                    </> :
                                    <></>) :
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link"
                                                activeClassName="active" exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/courses" className="nav-link"
                                                activeClassName="active" >Courses</NavLink>
                                        </li>
                                    </>
                            }

                            {
                                !_.isEmpty(currentUser) ? ((currentUser.maLoaiNguoiDung === "HV") ?
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/features">Features</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/news" className="nav-link"
                                                activeClassName="active" >News</NavLink>
                                        </li>
                                    </React.Fragment> :
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/admin/course-page">Course page admin</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/admin/user-page" className="nav-link"
                                                activeClassName="active" >User page admin</NavLink>
                                        </li>
                                    </React.Fragment>) :
                                    (<React.Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/features">Features</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact to="/news" className="nav-link"
                                                activeClassName="active" >News</NavLink>
                                        </li>
                                    </React.Fragment>)
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
