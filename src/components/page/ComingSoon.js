import React, { Component } from 'react'
import Nav from '../commonTools/Nav';
import Footer from '../commonTools/Footer';
import WOW from 'wowjs';
class ComingSoon extends Component {
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
            <div className="coming-soon">
                <Nav className="navbar navbar-expand-lg" />
                <section id="demobanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../assets/img/banner/iets-banner.jpg')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">Coming Soon</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default ComingSoon;