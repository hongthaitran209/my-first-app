import React, { Component } from 'react'

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="top-footer">
                    <img src="http://trending.themescustom.com/theme/image.php/trending/theme/1547037611/footer-logo" alt="logo" />
                    <ul>
                        <li>
                            <a href="facebook.com" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>

                        <li>
                            <a href="facebook.com" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com" target="_blank">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-footer">
                    <p>Copyright © 2020 cmsbrand | Privacy Policy</p>
                    <img src="http://trending.themescustom.com/theme/trending/pix/googleplay.png" alt="google-play" />
                </div>
            </div>
        )
    }
}
