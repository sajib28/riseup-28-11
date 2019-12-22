import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import CompanyOldLogo from './container/CompanyOldLogo'
import Footer from '../../commonTools/Footer';
import WOW from 'wowjs';
// Process Banner Data
const banner_data = {
    banner_img: require('../../../assets/img/banner/press-kit-banner.jpg'),
    title1: "RiseUp",
    title2: "Press Kit"
}
class PressKit extends Component {
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
        let alt = "Rise Up Labs, iOS and Android Mobile Game Developer";
        return (

            <div className="page press-kit">
                <Nav className="navbar navbar-expand-lg" />
                <section id="processBanner" className="banner middle-content" style={{ backgroundImage: `url(${banner_data.banner_img})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s"><span className="text-color">{banner_data.title1}</span><br />{banner_data.title2}</h1>
                                    <a rel="noopener noreferrer" className="cus-btn wow fadeInUp" animation-delay=".5s" data-wow-delay=".5s" href={process.env.PUBLIC_URL + '/riseup-logo.zip'}><span className="text-color">Download</span> Full Press Kit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-with-shadow" style={{"background": "rgba(0,0,0,.53)","boxShadow": "0 44px 99px rgba(152,131,60,.25)"}}></div>
                </section>
                <section className="our-logo" data-ui="light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Our Logo</h2>
                                        <p className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">This is our logo. There are two versions to ensure optimum legibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                <div className="company-logo-items">
                                    <div className="border-shadow">
                                        <img className="wow zoomIn" animation-delay="0.8s" data-wow-delay="0.8s" src={require('../../../assets/img/big-logo.png')} alt={alt} />
                                    </div>
                                    <h3 className="wow fadeInUp" animation-delay="1.0s" data-wow-delay="1.0s">Logo</h3>
                                    <p className="wow fadeInUp" animation-delay="1.2s" data-wow-delay="1.2s">This is the main Rise up logo. It should be
used in this form whenever possible.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                                <div className="company-logo-items">
                                    <div className="border-shadow inverted">
                                        <img className="wow zoomIn" animation-delay="0.8s" data-wow-delay="0.8s" src={require('../../../assets/img/big-logo.png')} alt={alt} />
                                    </div>
                                    <h3 className="wow fadeInUp" animation-delay="1.0s" data-wow-delay="1.0s">Inverted Logo</h3>
                                    <p className="wow fadeInUp" animation-delay="1.2s" data-wow-delay="1.2s">This version with the white wordmark works 
well on dark and busy backgrounds.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                            <a rel="noopener noreferrer" className="cus-btn wow fadeInUp" animation-delay="1.4s" data-wow-delay="1.4s" href={process.env.PUBLIC_URL + '/riseup-logo.zip'}><span className="text-color">Download</span> Logos</a>
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
                                        <h2 className="text-left wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">Best Practices</h2>
                                        <p className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Here’s a few examples of what should be avoided when using the logo.</p>
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