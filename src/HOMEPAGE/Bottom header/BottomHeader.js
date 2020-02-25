import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import _ from 'lodash';

export default class BottomHeader extends Component {

    // componentDidMount() {
    //     if (!_.isEmpty(localStorage)) {
    //         return maLoaiNguoiDung = JSON.parse(localStorage.getItem("currentUser")).maLoaiNguoiDung
    //     }
    // }

    render() {
        const user = JSON.parse(localStorage.getItem("currentUser"))
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
                                !_.isEmpty(localStorage) ? 
                                ((user.maLoaiNguoiDung === "HV") ?
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
                                !_.isEmpty(localStorage) ? ((user.maLoaiNguoiDung === "HV") ?
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
