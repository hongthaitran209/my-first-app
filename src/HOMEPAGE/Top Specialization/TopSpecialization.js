import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopSpecialization extends Component {

    render() {

        return (
            <div className="top-specialization-container">
                <div className="top-specialization">
                    <div className="title">
                        <h2>Top Specialization</h2>
                        <p>All Our Available Categories Listed Below</p>
                    </div>

                    <div className="top-courses">
                        <div className="owl-carousel top-courses-carousel">
                            
                                    <div className="card">
                                        <a href="#" className="card-img">
                                            <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage2/1547037611/05.jpg" alt="Card image" />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">John Doe</h4>
                                            <p className="card-text">Some example text.</p>
                                            <a href="#" className="btn btn-primary">See more</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="#" className="card-img">
                                            <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage3/1547037611/07.jpg" alt="Card image" />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">John Doe</h4>
                                            <p className="card-text">Some example text.</p>
                                            <a href="#" className="btn btn-primary">See more</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="#" className="card-img">
                                            <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage4/1547037611/04.jpg" alt="Card image" />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">John Doe</h4>
                                            <p className="card-text">Some example text.</p>
                                            <a href="#" className="btn btn-primary">See more</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="#" className="card-img">
                                            <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage6/1547037611/08.jpg" alt="Card image" />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">John Doe</h4>
                                            <p className="card-text">Some example text.</p>
                                            <a href="#" className="btn btn-primary">See more</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="#" className="card-img">
                                            <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage5/1547037611/06.jpg" alt="Card image" />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">John Doe</h4>
                                            <p className="card-text">Some example text.</p>
                                            <a href="#" className="btn btn-primary">See more</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a href="#" className="card-img">
                                            <img className="card-img-top" src="http://trending.themescustom.com/pluginfile.php/1/theme_trending/categoryimage7/1547037611/02.jpg" alt="Card image" />
                                        </a>
                                        <div className="card-body">
                                            <h4 className="card-title">John Doe</h4>
                                            <p className="card-text">Some example text.</p>
                                            <a href="#" className="btn btn-primary">See more</a>
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

export default connect(mapStateToProps)(TopSpecialization);