import React, { Component } from 'react'
import { connect } from "react-redux";


class CoursesProvide extends Component {
    render() {

        const { courses } = this.props;

        // const elm = courses.map((course, index) => {
        //     return (
        //         <div className="card">
        //             <div className="card-img">
        //                 <img className="card-img-top" src={course.hinhAnh} alt="Card image" />
        //             </div>
        //             <div className="card-body">
        //                 <h4 className="card-title">{course.nguoiTao.hoTen}</h4>
        //                 <p className="card-text">{course.moTa}</p>
        //                 <a href="#" className="btn btn-primary">See Profile</a>
        //             </div>
        //         </div>
        //     )
        // })
        
        return (
            <div className="courses-provide-container">
                <div className="parallax">
                    <div className="courses-provide">
                        <div className="course-provide-title">
                            <h2>Courses We Provide</h2>
                            <p>All Our Available Courses Listed Below</p>
                        </div>

                        <div className="course-provide-items">
                            <div className="owl-carousel course-provide-carousel">
                                {/* {elm} */}
                                <div className="card">
                                    <div className="card-img">
                                        <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage2/1547037611/05.jpg" alt="Card image" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img">
                                        <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage3/1547037611/07.jpg" alt="Card image" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img">
                                        <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage4/1547037611/04.jpg" alt="Card image" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img">
                                        <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage6/1547037611/08.jpg" alt="Card image" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img">
                                        <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage5/1547037611/06.jpg" alt="Card image" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-img">
                                        <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage7/1547037611/02.jpg" alt="Card image" />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
    }
}

export default connect(mapStateToProps)(CoursesProvide)
