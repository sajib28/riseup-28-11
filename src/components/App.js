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
import Iets from './page/iets/Iets';
import AppsDevelopment from './page/apps-development/AppsDevelopment';
import SingleApp from './page/single-app/SingleApp';
import NotFound from './page/NotFound';
import ComingSoon from './page/ComingSoon';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Scrollbar from 'smooth-scrollbar';
import '../assets/scss/main.scss';
import $ from 'jquery';
class App extends Component {
    // Sidebar Menu Scroll
    componentDidMount() {
        // $(document).ready(function () {
        //     var Menuheight = $("#mainMenu").height();
        //     $('a[href^="#"]').bind('click', function (e) {
        //         e.preventDefault();
        //         $('html, body').stop().animate({
        //             scrollTop: $($(this).attr('href')).offset().top - Menuheight
        //         }, 500);
        //         return false;
        //     });
        // });
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
                                <Route path={`${process.env.PUBLIC_URL}/iets`} render={() => < Iets />} />
                                <Route path={`${process.env.PUBLIC_URL}/apps-development`} render={() => < AppsDevelopment />} />
                                <Route path={`${process.env.PUBLIC_URL}/single-app`} render={() => < SingleApp />} />
                                <Route path={`${process.env.PUBLIC_URL}/coming-soon`} render={() => < ComingSoon />} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                      </CSSTransition>
                     </TransitionGroup>
                     )
                    }}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;