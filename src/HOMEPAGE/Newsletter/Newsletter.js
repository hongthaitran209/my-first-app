import React, { Component } from 'react'

export default class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="newsletter-title">
                    <h2>NEWSLETTER</h2>
                    <p>Subscribe Trending to receive useful information</p>
                </div>

                <form className="newsletter-form">
                    <input type="text" />
                    <button>SUBSCRIBE</button>
                </form>
            </div>
        )
    }
}
