
import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";
import WOW from 'wowjs';
class Work extends Component {
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
        let alt = "Rise Up Labs Some Of Our Software Solutions";
        return (
            <div className="page work">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <section className="banner middle-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s"><span className="text-color">Some Of Our</span><br />Software Solutions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 wow zoomIn" animation-delay="0.4s" data-wow-delay="0.4s">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="client-tab" data-toggle="tab" href="#client" role="tab" aria-controls="client" aria-selected="false">Client</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="rise-up-tab" data-toggle="tab" href="#rise-up" role="tab" aria-controls="rise-up" aria-selected="false">Rise up</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">App</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="game-tab" data-toggle="tab" href="#game" role="tab" aria-controls="game" aria-selected="false">Game</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="x-r-tab" data-toggle="tab" href="#x-r" role="tab" aria-controls="x-r" aria-selected="false">X-R</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="web-system-tab" data-toggle="tab" href="#web-system" role="tab" aria-controls="web-system" aria-selected="false">Web System</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="projectfilter app-list">
                        <div className="container">
                            <div className="row">
                                <div className="tab-content col-lg-12" id="myTabContent">
                                    <div className="tab-pane row fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
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
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Adolescent App</h3>
                                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            {/* <h3>Meena Game</h3> */}
                                                            <img src={require('../../../assets/img/project/grido-logo.png')} alt="" />
                                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            {/* <h3>Adolescent App</h3> */}
                                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Tap Tap Ants: Battlefield</h3>
                                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/rooftop-frenzy.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Rooftop Frenzy</h3>
                                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/language-movement.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Meena Game</h3>
                                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meena-game.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Adolescent App</h3>
                                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* items */}
                                    </div>
                                    <div className="tab-pane row fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
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
                                            </Zoom>
                                        </div>
                                        {/* End items */}
                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Adolescent App</h3>
                                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* items */}
                                    </div>
                                    <div className="tab-pane row fade" id="rise-up" role="tabpanel" aria-labelledby="rise-up-tab">
                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            {/* <h3>Adolescent App</h3> */}
                                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/*End  items */}

                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Tap Tap Ants: Battlefield</h3>
                                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* items */}
                                    </div>
                                    <div className="tab-pane row fade" id="app" role="tabpanel" aria-labelledby="app-tab">
                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            {/* <h3>Meena Game</h3> */}
                                                            <img src={require('../../../assets/img/project/grido-logo.png')} alt="" />
                                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/*End items */}

                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            {/* <h3>Adolescent App</h3> */}
                                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* items */}
                                    </div>
                                    <div className="tab-pane row fade" id="game" role="tabpanel" aria-labelledby="game-tab">
                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Tap Tap Ants: Battlefield</h3>
                                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/*End items */}

                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/rooftop-frenzy.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Rooftop Frenzy</h3>
                                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}
                                    </div>
                                    <div className="tab-pane row fade" id="x-r" role="tabpanel" aria-labelledby="x-r-tab">
                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            {/* <h3>Adolescent App</h3> */}
                                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}
                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Tap Tap Ants: Battlefield</h3>
                                                            {/* <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" /> */}
                                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}
                                    </div>
                                    <div className="tab-pane row fade" id="web-system" role="tabpanel" aria-labelledby="web-system-tab">
                                        {/* items */}
                                        <div className="col-lg-4">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/language-movement.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Meena Game</h3>
                                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}

                                        {/* items */}
                                        <div className="col-lg-8">
                                            <Zoom>
                                                <div className="project-list">
                                                    <div className="list-items">
                                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meena-game.jpg')})` }}>

                                                        </div>
                                                        <div className="item-body">
                                                            <h3>Adolescent App</h3>
                                                            <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                            <Link to={`${process.env.PUBLIC_URL}/single-app`} className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                        </div>
                                        {/* End items */}
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
