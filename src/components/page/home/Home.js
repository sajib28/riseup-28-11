import React, { Component } from 'react';
import CompanySummary from '../../commonTools/CompanySummary';
import CompanyLogo from '../../commonTools/CompanyLogo';
import ContactForm from '../../commonTools/ContactForm';
import Footer from '../../commonTools/Footer';
import Nav from '../../commonTools/Nav';
import HomeSlider from './HomeSlider';
import VisibilitySensor from 'react-visibility-sensor';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import {
    Link
} from "react-router-dom";
import $ from 'jquery';
import WOW from 'wowjs';
class Home extends Component {
    state = {
        visible: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ visible: true });
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);

        // Activated WoW Js
        new WOW.WOW({
            live: false,
            mobile: false,
        }).init();
        // End Activated WoW Js
        var Menuheight = 95;
        $('a[href*=\\#]').bind('click', function (e) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $(this.hash).offset().top - Menuheight
            }, 1000);
        });
        $(document).ready(function () {
            var Menuheight = $("#mainMenu").height();
            $('.service-menu a[href^="#"]').bind('click', function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - Menuheight
                }, 500);
                return false;
            });
        });
        $(window).scroll(function () {
            var Menuheight = $("#mainMenu").height();
            var scrollDistance = $(window).scrollTop() + Menuheight;
            // Assign active class to nav links while scolling
            $('.service-block').each(function (i) {
                if ($(this).position().top <= scrollDistance - Menuheight) {

                    $('.service-menu a.active').removeClass('active');
                    $('.service-menu a').eq(i).addClass('active');
                }
            });
        }).scroll();
        // End Sidebar Menu Scroll
        // Add Class for Odd/Even items
        $(".service-block:even").addClass('reverse-items');
        $(".swap-items:odd").addClass('reverse-items');
        //End  Add Class for Odd/Even items
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var serviceMenu = $('.service-menu').height();
            var screenmiddle = ($(window).height() / 2) - (serviceMenu / 2);
            var MenuHeight = $('#mainMenu').height();

            if ($('.wrap').length) {
                var service_menu_position = $('.wrap').offset().top - MenuHeight - screenmiddle - 50;
            }
            // var m = $('.sticky-menu').outerHeight() + $('#mainMenu').outerHeight();

            // var fixtop = $('#mainMenu').outerHeight();
            if ($('.home-project').length) {
                var offset_top_home_project = $('.home-project').offset().top - screenmiddle * 2 - 200;
            }

            if (scrollTop > service_menu_position) {
                $('.sticky-menu').addClass('fixed').css({ 'top': screenmiddle + 50 + 'px' });
                $('.wrap').height($('.sticky-menu').outerHeight());
            }
            else {
                $('.sticky-menu').removeClass('fixed')
                $('.wrap').height(0);
            }
            if (scrollTop > offset_top_home_project) {
                $('.sticky-menu').addClass('footstick');
                $('.wrap').height($('.sticky-menu').outerHeight());

            }
            else {
                $('.sticky-menu').removeClass('footstick');
            }
        });
    }

    render() {
        let alt = "Rise Up Labs, iOS and Android Mobile Game Developer";
        return (
            <div className="home" id="home">
                <Nav className="navbar navbar-expand-lg" />
                <div id="my-scrollbar">
                    <HomeSlider />
                    <section className="intro" data-ui="light">
                        <div className="background-cover">
                            <video autoPlay muted loop playsInline preload="none" poster={require('../../../assets/img/intechnic.jpg')}>
                                <source src={require('../../../assets/media/intechnic.mp4')} type="video/mp4" />
                            </video>
                        </div>
                        <div className="container middle-content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="introText">
                                        <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-uppercase text-color">Riseup</span><br />Beyond Reality Diving <br />into Technology</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="homeService" name="homeservice" className="home-service" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <div className="title">
                                            <h2 className="text-left"><span
                                                className="text-color">Riseup</span> Services</h2>
                                            <p>We provide complete solution of your digital products from research to vision</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="riseupApps" className="service-block" data-ui="light">
                            <div className="first-letter-wrapper">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <ParallaxProvider>
                                        <Parallax y={[10, -30]} tagOuter="figure">
                                            <div className="first-letter">A</div>
                                        </Parallax >
                                    </ParallaxProvider>
                                </VisibilitySensor>
                            </div>
                            <div className="home-sidebar">
                                <div className="wrap"></div>
                                <nav className="service-menu ui-light sticky-menu" id="SideBarMenu">
                                    <ul className="list-unstyled">
                                        <li className="nav-item"><a className="nav-link" href="#riseupApps">Apps <span>Development</span></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#riseupGames">Games <span>Development</span></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#riseupWeb">Web <span>System</span></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#riseupXr">X-R <span>Solution</span></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#riseupItes">ITES <span></span></a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="apps-wrapper">
                                            <VisibilitySensor onChange={this.onVisibilityChange}>
                                                <div className="title">
                                                    <ParallaxProvider>
                                                        <Parallax y={this.state.visible ? [50, -50] : [50, -50]} tagOuter="figure">
                                                            <h2>Apps Development</h2>
                                                        </Parallax >
                                                    </ParallaxProvider>
                                                </div>
                                            </VisibilitySensor>
                                            <figure className="img-box">
                                                <img src={require('../../../assets/img/app-development.jpg')} alt={alt} />
                                                <div className="img-overlay"></div>
                                            </figure>
                                            <div className="apps-content">
                                                <div className="row">
                                                    <div className="swap-apps">
                                                        <div className="col-lg-4 col-md-12">
                                                            <div className="apps-details">
                                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                                    <ParallaxProvider>
                                                                        <Parallax y={this.state.visible ? [30, -30] : [30, -30]} tagOuter="figure">
                                                                            <ul className="apps-info list-unstyled">
                                                                                <li><i className="fab fa-apple"></i>iOS</li>
                                                                                <li><i className="fab fa-android"></i>Android</li>
                                                                                <li><i className="fab fa-windows"></i>Windows Mobile</li>
                                                                            </ul>
                                                                        </Parallax>
                                                                    </ParallaxProvider>
                                                                </VisibilitySensor>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-12">
                                                            <div className="apps-description">
                                                                <p>We offer design, development, and solution for apps across a range of devices. We have developed many commercially successful apps for Apple App Store, Google Play Store and for some other platform.<br /><br />
                                                                    We have millions of active users on those mobile apps. Some of our apps were also being featured by Apple for our unique creativity, design innovation & user feedback.
                                                        </p>
                                                                <Link to={`${process.env.PUBLIC_URL}/apps-development`} className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="riseupGames" className="service-block" data-ui="light">
                            <div className="first-letter-wrapper">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <ParallaxProvider>
                                        <Parallax y={this.state.visible ? [50, -30] : [0, -0]} tagOuter="figure">
                                            <div className="first-letter">G</div>
                                        </Parallax >
                                    </ParallaxProvider>
                                </VisibilitySensor>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="apps-wrapper">
                                            <div className="title">
                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                    <ParallaxProvider>
                                                        <Parallax y={this.state.visible ? [60, -50] : [0, -0]} tagOuter="figure">
                                                            <h2>Games Development</h2>
                                                        </Parallax >
                                                    </ParallaxProvider>
                                                </VisibilitySensor>
                                            </div>
                                            <figure className="img-box">
                                                <img src={require('../../../assets/img/game-development.jpg')} alt={alt} />
                                                <div className="img-overlay"></div>
                                            </figure>
                                            <div className="apps-content">
                                                <div className="row">
                                                    <div className="swap-apps">
                                                        <div className="col-lg-4">
                                                            <div className="apps-details">
                                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                                    <ParallaxProvider>
                                                                        <Parallax y={this.state.visible ? [10, -50] : [0, -0]} tagOuter="figure">
                                                                            <ul className="apps-info list-unstyled">
                                                                                <li><i className="fab fa-apple"></i>iOS</li>
                                                                                <li><i className="fab fa-android"></i>Android</li>
                                                                                <li><i className="fab fa-windows"></i>Windows Mobile</li>
                                                                                <li><i className="fab fa-facebook"></i>Facebook Game</li>
                                                                                <li><i className="fab fa-react"></i>React Native</li>
                                                                            </ul>
                                                                        </Parallax>
                                                                    </ParallaxProvider>
                                                                </VisibilitySensor>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="apps-description">
                                                                <p>We have worked on many successful games, like- Tap Tap Ants, Tap Tap Ants: Battlefield, Highway Chase, Rooftop Frenzy, Brain Boss, iWarehouse, Bubble Attack, Shoot The Monkey, etc.<br /><br />
                                                                    We are the first game developer team in Bangladesh, who developed games for multi-platforms.
                                                    </p>
                                                                <Link to={`${process.env.PUBLIC_URL}/game-development`} className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="riseupWeb" className="service-block" data-ui="light">
                            <div className="first-letter-wrapper">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <ParallaxProvider>
                                        <Parallax y={this.state.visible ? [50, -30] : [0, -0]} tagOuter="figure">
                                            <div className="first-letter">W</div>
                                        </Parallax >
                                    </ParallaxProvider>
                                </VisibilitySensor>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="apps-wrapper">
                                            <div className="title">
                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                    <ParallaxProvider>
                                                        <Parallax y={this.state.visible ? [60, -50] : [0, -0]} tagOuter="figure">
                                                            <h2>Web System</h2>
                                                        </Parallax >
                                                    </ParallaxProvider>
                                                </VisibilitySensor>
                                            </div>
                                            <figure className="img-box">
                                                <img src={require('../../../assets/img/web-development.jpg')} alt={alt} />
                                                <div className="img-overlay"></div>
                                            </figure>
                                            <div className="apps-content">
                                                <div className="row">
                                                    <div className="swap-apps">
                                                        <div className="col-lg-4">
                                                            <div className="apps-details">
                                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                                    <ParallaxProvider>
                                                                        <Parallax y={this.state.visible ? [10, -30] : [0, -0]} tagOuter="figure">
                                                                            <ul className="apps-info list-unstyled">
                                                                                <li><i className="fas fa-laptop"></i>Digital Platform</li>
                                                                                <li><i className="fas fa-globe"></i>Web Portal</li>
                                                                                <li><i className="fa fa-shopping-cart"></i>E-Commerce Solutions</li>
                                                                            </ul>
                                                                        </Parallax>
                                                                    </ParallaxProvider>
                                                                </VisibilitySensor>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="apps-description">
                                                                <p>We provide web-based solutions that can improve user impressions over the interactive experiences and increase the retention period of consumers with content management, cloud storage solutions, communication and marketing solutions, and interactive report presentation.</p>
                                                                <Link to={`${process.env.PUBLIC_URL}/web-system`} className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="riseupXr" className="service-block" data-ui="light">
                            <div className="first-letter-wrapper">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <ParallaxProvider>
                                        <Parallax y={this.state.visible ? [50, -30] : [0, -0]} tagOuter="figure">
                                            <div className="first-letter">X</div>
                                        </Parallax >
                                    </ParallaxProvider>
                                </VisibilitySensor>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="apps-wrapper">
                                            <div className="title">
                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                    <ParallaxProvider>
                                                        <Parallax y={this.state.visible ? [60, -50] : [0, -0]} tagOuter="figure">
                                                            <h2>XR Solution</h2>
                                                        </Parallax >
                                                    </ParallaxProvider>
                                                </VisibilitySensor>
                                            </div>
                                            <figure className="img-box">
                                                <img src={require('../../../assets/img/xr-solution.jpg')} alt={alt} />
                                                <div className="img-overlay"></div>
                                            </figure>
                                            <div className="apps-content">
                                                <div className="row">
                                                    <div className="swap-apps">
                                                        <div className="col-lg-4">
                                                            <div className="apps-details">
                                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                                    <ParallaxProvider>
                                                                        <Parallax y={this.state.visible ? [10, -30] : [0, -0]} tagOuter="figure">
                                                                            <ul className="apps-info list-unstyled">
                                                                                <li><span>AR</span>Augmented reality</li>
                                                                                <li><span>VR</span>Virtual reality</li>
                                                                                <li><span>MR</span>Mixed reality</li>
                                                                            </ul>
                                                                        </Parallax>
                                                                    </ParallaxProvider>
                                                                </VisibilitySensor>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="apps-description">
                                                                <p>Extended reality is the most updated and trending technology around the world, where users interact with the virtual world in seemingly real situations or physical action. AR, VR, MR interactive experiences are the digital version of older technologies, e.g.</p>
                                                                <Link to={`${process.env.PUBLIC_URL}/xr-solution`} className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="riseupItes" className="service-block" data-ui="light">
                            <div className="first-letter-wrapper">
                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                    <ParallaxProvider>
                                        <Parallax y={this.state.visible ? [50, -30] : [0, -0]} tagOuter="figure">
                                            <div className="first-letter">I</div>
                                        </Parallax >
                                    </ParallaxProvider>
                                </VisibilitySensor>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="apps-wrapper">
                                            <div className="title">
                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                    <ParallaxProvider>
                                                        <Parallax y={this.state.visible ? [60, -50] : [0, -0]} tagOuter="figure">
                                                            <h2>ITES</h2>
                                                        </Parallax >
                                                    </ParallaxProvider>
                                                </VisibilitySensor>
                                            </div>
                                            <figure className="img-box">
                                                <img src={require('../../../assets/img/iets.jpg')} alt={alt} />
                                                <div className="img-overlay"></div>
                                            </figure>
                                            <div className="apps-content">
                                                <div className="row">
                                                    <div className="swap-apps">
                                                        <div className="col-lg-4">
                                                            <div className="apps-details">
                                                                <VisibilitySensor onChange={this.onVisibilityChange}>
                                                                    <ParallaxProvider>
                                                                        <Parallax y={this.state.visible ? [10, -30] : [0, -0]} tagOuter="figure">
                                                                            <ul className="apps-info list-unstyled">
                                                                                <li><i className="fab fa-apple"></i>HR Service</li>
                                                                                <li><i className="fab fa-android"></i>Development</li>
                                                                            </ul>
                                                                        </Parallax>
                                                                    </ParallaxProvider>
                                                                </VisibilitySensor>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="apps-description">
                                                                <p>Riseup is one of the emerging leaders as the premier IT/ITES service provider, serving its customers and delivering IT & ITES Solutions to a diverse set of clients in several countries across the globe. The company is backed up with a management team which brings in over 10 years of software development and consultancy experience spread all across the world, specializing in small to enterprise level of system development, implementation and integration services. </p>
                                                                <Link to={`${process.env.PUBLIC_URL}/ites`} className="see-more">See More<i className="fas fa-arrow-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="home-project project dark-bg" data-ui="dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <div className="title">
                                            <h2 className="text-left wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-color">Some of our</span><br />Works</h2>
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
                                                <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Meena Game</h3>
                                                <img className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s" src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                                <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                                <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.jpg')})` }}>

                                            </div>
                                            <div className="item-body">
                                                <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Adolescent App</h3>
                                                <img className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s" src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                                <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="items">
                                    <div className="col-lg-8">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meena-game.jpg')})` }}>
                                            </div>
                                            <div className="item-body">
                                                <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Meena Game</h3>
                                                <img className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s" src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                                <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">Meena is a cartoon character from South Asia. She is a spirited, nine-year-old girl, who braves all the odds – whether in her efforts to go to school or in fighting the discrimination against children.</p>
                                                <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/language-movement.jpg')})` }}>
                                            </div>
                                            <div className="item-body">
                                                <h3 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Demo title</h3>
                                                <img className="wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s" src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                                <p className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link className="cus-btn details wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s" to={`${process.env.PUBLIC_URL}/work`}>View more<i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="company-enterpreneurs" data-ui="light">
                        <CompanySummary />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <div className="title text-left">
                                            <h2 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-color">We can build<br /></span>your story</h2>
                                            <p className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">Through the years we have worked with great companies and entrepreneurs all over the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <CompanyLogo />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="home-work" data-ui="dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <div className="title">
                                            <h2 className="text-left wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-color">Why Work with</span><br />RiseUp</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* odd */}

                                <div className="swap-items">
                                    <div className="col-lg-6">
                                        <div className="image-block wow fadeIn" animation-delay="1s" data-wow-delay="0.4s">
                                            <img src={require('../../../assets/img/work/home-work-1.jpg')} alt={alt} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content-block">
                                            <h2 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s">Full-service, full-stack</h2>
                                            <p className="wow fadeInUp" animation-delay="2s" data-wow-delay="0.4s">From idea to implementation, our complete product development approach means convenience and less risk. Everything under one roof means less risk and a cohesive team to ensure forward momentum. From product strategy to product design to full-stack engineering, Rise up handles every aspect of digital product development so your insight and intelligence result in ample reward.</p>
                                        </div>
                                    </div>
                                    <div className="curbe wow fadeIn" animation-delay="2.5s" data-wow-delay="0.6s"></div>
                                </div>
                                {/* End Odd */}

                                {/* Even */}

                                <div className="swap-items">

                                    <div className="col-lg-6">
                                        <div className="image-block wow fadeIn" animation-delay="1s" data-wow-delay="0.4s">
                                            <img src={require('../../../assets/img/work/home-work-2.jpg')} alt={alt} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content-block">
                                            <h2 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s">More genius within our reach</h2>
                                            <p className="wow fadeInUp" animation-delay="2s" data-wow-delay="0.4s">Our’s nimble, distributed structure means we recruit the most brilliant talent from across the country and our team members each fully allocated to a single project to speed up the process of development of a product.</p>

                                        </div>
                                    </div>
                                    <div className="curbe wow fadeIn" animation-delay="2.5s" data-wow-delay="0.6s"></div>
                                </div>
                                {/* odd */}
                                <div className="swap-items">

                                    <div className="col-lg-6">
                                        <div className="image-block wow fadeIn" animation-delay="1s" data-wow-delay="0.4s">
                                            <img src={require('../../../assets/img/work/home-work-3.jpg')} alt={alt} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content-block">
                                            <h2 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s">Tech that advance the Industry</h2>
                                            <p className="wow fadeInUp" animation-delay="2s" data-wow-delay="0.4s">We always get updated with the latest tools and technology which is used widely across the world. So it's easy for us to catch the trend more easily and develop a quality product.</p>
                                        </div>
                                    </div>
                                    <div className="curbe wow fadeIn" animation-delay="2.5s" data-wow-delay="0.6s"></div>
                                </div>
                                {/* End Odd */}
                                {/* Even */}
                                <div className="swap-items">

                                    <div className="col-lg-6">
                                        <div className="image-block wow fadeIn" animation-delay="1s" data-wow-delay="0.4s">
                                            <img src={require('../../../assets/img/work/home-work-4.jpg')} alt={alt} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content-block">
                                            <h2 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s">Human-centered</h2>
                                            <p className="wow fadeInUp" animation-delay="2s" data-wow-delay="0.4s">We focus on deep customer insights to create tailored experiences for your target audience</p>
                                        </div>
                                    </div>
                                    <div className="curbe wow fadeIn" animation-delay="2.5s" data-wow-delay="0.6s"></div>
                                </div>
                                {/* End Even */}
                                {/* odd */}

                                <div className="swap-items">

                                    <div className="col-lg-6">
                                        <div className="image-block wow fadeIn" animation-delay="1s" data-wow-delay="0.4s">
                                            <img src={require('../../../assets/img/work/home-work-5.jpg')} alt={alt} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content-block">
                                            <h2 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s">We believe in clients success</h2>
                                            <p className="wow fadeInUp" animation-delay="2s" data-wow-delay="0.4s">Making customers more successful is key to business growth so we work closely with you to ensure your needs come first.</p>
                                        </div>
                                    </div>
                                    <div className="curbe wow fadeIn" animation-delay="2.5s" data-wow-delay="0.6s"></div>
                                </div>
                                {/* End Odd */}
                            </div>
                        </div>
                    </section>
                    <section className="contact-form" data-ui="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <div className="title text-left">
                                            <h2 className="text-left wow fadeInUp" animation-delay="0.1s" data-wow-delay="0.1s">
                                                <span className="text-color">Let's</span> Talk!</h2>
                                            <p className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">We’d love to hear what you are working on.<br />Drop us a note here and we’ll get back to you within 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div >
        )
    }
}
export default Home;