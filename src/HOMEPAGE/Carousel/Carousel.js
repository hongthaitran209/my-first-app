import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/* The slideshow */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="http://trending.themescustom.com/theme/trending/pix/slides/slider1.jpg" alt="slider1" />
                        </div>
                        <div className="carousel-item">
                            <img src="http://trending.themescustom.com/theme/trending/pix/slides/slider2.jpg" alt="slider2" />
                        </div>
                        <div className="carousel-item">
                            <img src="http://trending.themescustom.com/theme/trending/pix/slides/slider3.jpg" alt="slider3" />
                        </div>
                        <div className="carousel-item">
                            <img src="http://trending.themescustom.com/theme/trending/pix/slides/slider4.jpg" alt="slider4" />
                        </div>
                        <div className="carousel-item">
                            <img src="http://trending.themescustom.com/theme/trending/pix/slides/slider5.jpg" alt="slider5" />
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon" />
                    </a>
                </div>

            </div>
        )
    }
}
