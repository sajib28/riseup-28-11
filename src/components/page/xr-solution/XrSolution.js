import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import { Link } from "react-router-dom";
import WOW from 'wowjs';
class XrSolution extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
         // Activated WoW Js
         new WOW.WOW({
            live: false,
            mobile: false,
        }).init();
        // End Activated WoW Js
        var bottomImg = document.getElementsByClassName("bottom-img")[0];
        var TopImg = document.getElementsByClassName("top-img")[0];
        bottomImg.addEventListener("mouseover", function (event) {
            bottomImg.classList.add("show-top");
            TopImg.classList.remove("show-top");
        });
        TopImg.addEventListener("mouseover", function (event) {
            TopImg.classList.add("show-top");
            bottomImg.classList.remove("show-top");
        });
    }

    render() {
        let alt = "Rise Up Labs, iOS and Android Mobile Game Developer";
        return (
            <div className="page app-details">
                <Nav className="navbar navbar-expand-lg" />
                <section id="xrDetailsBanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/xr-solution-banner.jpg')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText display-bottom">
                                    <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">XR Solution</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-with-shadow" style={{"background": "linear-gradient(-30deg, rgba(250, 232, 232, 0.1), rgba(32, 139, 0, 0.6))","boxShadow": "0 20px 60px rgba(32, 139, 0, 0.25)"}}></div>
                </section>
                <section className="top-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-lg-2">
                                <div className="list-box wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">
                                    <div className="list-box-inner">
                                        <ul className="list-unstyled">
                                            <li><i className="fab fa-apple"></i>iOS</li>
                                            <li><i className="fab fa-android"></i>Android</li>
                                            <li><i className="fab fa-windows"></i>Windows Mobile</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8  order-lg-1">
                                <div className="content-padding wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">
                                    <p>Extended reality is the most updated and trending technology around the world, where users interact with the virtual world in seemingly real situations or physical action. AR, VR, MR interactive experiences are the digital version of older technologies, e.g. watching the science in front of eyes and do a chemical test on own hand for education rather than watching digital content online.</p>
                                    <p>Our experts have deep ambition in developing such digital interactive experiences, where users would love to interact with the content, feel them inside that virtual world and learn the objectives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="app-development top-bottom-image">
                    <div className="container">
                        <div className="row">
                            <div className="align-middle">
                                <div className="col-lg-7 order-lg-1">
                                    <div className="content-block">
                                        <h2 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">XR Services</h2>
                                        <ul className="list-unstyled list-with-hyphen wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">
                                            <li><span></span>Augmented Reality Solution</li>
                                            <li><span></span>Virtual Reality Solution</li>
                                            <li><span></span>Mixed Reality Solution</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-lg-2">
                                    <div className="double-img float-right wow zoomIn" animation-delay="0.6s" data-wow-delay="0.6s">
                                        <img className="top-img" src={require('../../../assets/img/apps-solution-top.jpg')} alt={alt} />
                                        <img className="bottom-img" src={require('../../../assets/img/apps-solution-bottom.jpg')} alt={alt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-project project" data-ui="dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <div className="title">
                                        <h2 className="text-left wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-color">Some of our</span><br />Apps</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row app-list">
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meet-meena.jpg')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.jpg')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="col-lg-8">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.jpg')})` }}>
                                        </div>
                                        <div className="item-body">
                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt={alt} />
                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect for Facebook Profile video and Instagram video moments.</p>
                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.jpg')})` }}>
                                        </div>
                                        <div className="item-body">
                                            <h3>Demo title</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn details">See All<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}
export default XrSolution;