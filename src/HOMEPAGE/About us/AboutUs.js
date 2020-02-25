import React, { Component } from 'react'
import CollapseExample from './Collapse'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us-container">
                <div className="about-us">
                    <div className="about-us-title">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>

                    <div className="about-us-content row no-gutters">
                        <div className="about-us-left col-sm-6">
                            <img src="http://trending.themescustom.com/theme/image.php/trending/theme/1547037611/aboutusimage" alt="about-us-img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni autem minus sint, commodi.</p>
                        </div>

                        <div className="about-us-right col-sm-6">
                            
                            <CollapseExample />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
