import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import CompanyOldLogo from './container/CompanyOldLogo'
import Footer from '../../commonTools/Footer';
import {
    Link
} from "react-router-dom";
import $ from 'jquery';

// Process Banner Data
const banner_data = {
    banner_img: require('../../../assets/img/banner/press-kit-banner.jpg'),
    title1: "RiseUp",
    title2: "Press Kit"
}
class PressKit extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let alt = "demo";
        return (

            <div className="page press-kit">
                <Nav className="navbar navbar-expand-lg" />
                <section id="processBanner" className="banner middle-content" style={{ backgroundImage: `url(${banner_data.banner_img})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s"><span className="text-color">{banner_data.title1}</span><br />{banner_data.title2}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-logo" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left">Our Logo</h2>
                                        <p>This is our logo. There are two versions to ensure optimum legibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                <div className="company-logo-items">
                                    <div className="border-shadow">
                                        <img src={require('../../../assets/img/big-logo.png')} alt="Rise Up Labs" />
                                    </div>
                                    <h3>Logo</h3>
                                    <p>This is the main Rise up logo. It should be
used in this form whenever possible.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                <div className="company-logo-items">
                                    <div className="border-shadow inverted">
                                        <img src={require('../../../assets/img/big-logo.png')} alt="Rise Up Labs" />
                                    </div>
                                    <h3>Inverted Logo</h3>
                                    <p>This version with the white wordmark works 
well on dark and busy backgrounds.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <a className="cus-btn" href={require('../../../assets/img/big-logo.png')}><span className="text-color">Download</span> Logos</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="company-logo" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left">Best Practices</h2>
                                        <p>Here’s a few examples of what should be avoided when using the logo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <CompanyOldLogo />
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}

export default PressKit;