
import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import mixitup from 'mixitup';
import $ from 'jquery';
import WOW from 'wowjs';
// import {Link} from "react-router-dom";

class Work extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        // Activated WoW Js
        new WOW.WOW({
            live: true,
            mobile: false,
        }).init();
        // End Activated WoW Js
        var mixer = mixitup('.projectfilter', {
            selectors: {
                target: '.mix',
                control: 'button.data-filter'
            }
        });
        $(".mix:odd").addClass('reverse-items');


    }

    render() {
        let alt = "Rise Up Labs Some Of Our Software Solutions";
        return (
            <div className="page work">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <section className="banner middle-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText col-lg-3wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">
                                    <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-color">Some Of Our</span><br />Software Solutions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <button className="data-filter" type="button" data-filter="all">All</button>
                                <button className="data-filter" type="button" data-filter=".client">Client</button>
                                <button className="data-filter" type="button" data-filter=".rise-up">Rise up</button>
                                <button className="data-filter" type="button" data-filter=".app">App</button>
                                <button className="data-filter" type="button" data-filter=".game">Game</button>
                                <button className="data-filter" type="button" data-filter=".x-r">X-R</button>
                                <button className="data-filter" type="button" data-filter=".web-system">Web System</button>
                            </div>

                        </div>
                    </div>
                    <div className="projectfilter app-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mix x-r">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meet-meena.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt={alt} />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mix app app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mix game x-r">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            {/* <h3>Meena Game</h3> */}
                                            <img src={require('../../../assets/img/project/grido-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mix app client rise-up">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            {/* <h3>Adolescent App</h3> */}
                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mix game app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Tap Tap Ants: Battlefield</h3>
                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mix x-r client">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/rooftop-frenzy.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Rooftop Frenzy</h3>
                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mix web-system client">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/language-movement.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Meena Game</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mix game x-r client">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meena-game.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Adolescent App</h3>
                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default Work;
