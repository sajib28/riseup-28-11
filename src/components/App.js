import React, { Component } from 'react';
import 'bootstrap';
import '../assets/fontAwesome/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/fontAwesome/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Main from './Main';
// import WOW from 'wowjs';
// import Intro from '../components/intro/Intro';
import Home from './page/home/Home';
// import Service from './page/service/Service';
import Process from './page/process/Process';
import Work from './page/work/Work';
import Work1 from './page/work/Work1';
// import Blog from './page/blog/Blog';
import Career from './page/career/Career';
import ApplicationForm from './page/career/ApplicationForm';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import Ites from './page/ites/Ites';
import AppsDevelopment from './page/apps-development/AppsDevelopment';
import GameDevelopment from './page/game-development/GameDevelopment';
import WebSystem from './page/web-system/WebSystem';
import XrSolution from './page/xr-solution/XrSolution';
import SingleApp from './page/single-app/SingleApp';
import PressKit from './page/press-kit/PressKit';
import NotFound from './page/NotFound';
import ComingSoon from './page/ComingSoon';
import WOW from 'wowjs';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Scrollbar from 'smooth-scrollbar';
import '../assets/scss/main.scss';
// import $ from 'jquery';
class App extends Component {
    componentDidMount() {
        // Activated WoW Js
        new WOW.WOW({
            live: true,
            mobile: false,
        }).init();
        // End Activated WoW Js
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route render={({ location }) => {
                        return (
                            <TransitionGroup className="transition-group">
                                <CSSTransition
                                    key={location.key}
                                    timeout={{ enter: 300, exit: 300 }}
                                    classNames="fade"
                                >
                                    <Switch>
                                        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
                                        {/* <Route path={`${process.env.PUBLIC_URL}/#homeService`} exact component={Home} /> */}
                                        <Route path={`${process.env.PUBLIC_URL}/work`} component={Work} />
                                        <Route path={`${process.env.PUBLIC_URL}/work1`} component={Work1} />
                                        <Route path={`${process.env.PUBLIC_URL}/process`} component={Process} />
                                        <Route path={`${process.env.PUBLIC_URL}/career`} render={() => <Career />} />
                                        <Route path={`${process.env.PUBLIC_URL}/about`} component={props => <About {...props} />} />
                                        <Route path={`${process.env.PUBLIC_URL}/contact`} component={props => <Contact {...props} />} />
                                        <Route path={`${process.env.PUBLIC_URL}/application-form`} render={() => <ApplicationForm />} />
                                        <Route path={`${process.env.PUBLIC_URL}/ites`} render={() => < Ites />} />
                                        <Route path={`${process.env.PUBLIC_URL}/apps-development`} render={() => < AppsDevelopment />} />
                                        <Route path={`${process.env.PUBLIC_URL}/game-development`} render={() => < GameDevelopment />} />
                                        <Route path={`${process.env.PUBLIC_URL}/web-system`} render={() => < WebSystem />} />
                                        <Route path={`${process.env.PUBLIC_URL}/xr-solution`} render={() => < XrSolution />} />
                                        <Route path={`${process.env.PUBLIC_URL}/single-app`} component={props => <SingleApp {...props} />} />
                                        <Route path={`${process.env.PUBLIC_URL}/press-kit`} component={props => <PressKit {...props} />} />
                                        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} render={() => < ComingSoon />} />
                                        <Route path="*" component={NotFound} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )
                    }} />
                </div>
            </BrowserRouter>
        )
    }
}
export default App;