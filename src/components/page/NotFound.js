import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import WOW from 'wowjs';
class NotFound extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        // Activated WoW Js
        new WOW.WOW({
            live: false,
            mobile: false,
        }).init();
        // End Activated WoW Js
    }
    
    render() {
        return (
            <div id="notfound">
                <div className="notfound-inner">
                    <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">404</h1>
                    <p className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Oops! Page not found</p>
                    <Link to={`${process.env.PUBLIC_URL}/`} className="cus-btn wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s"><span className="text-color">Home</span> Page</Link>
                </div>
            </div>
        )
    }
}
export default NotFound;