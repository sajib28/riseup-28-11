import React from 'react';
import {Route, Switch,withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../../components/page/home/Home';
// import Service from './page/service/Service';
import Process from '../../components/page/process/Process';
import Work from '../../components/page/work/Work';
import Work1 from '../../components/page/work/Work1';
// import Blog from './page/blog/Blog';
import Career from '../../components/page/career/Career';
import ApplicationForm from '../../components/page/career/ApplicationForm';
import About from '../../components/page/about/About';
import Contact from '../../components/page/contact/Contact';
import Iets from '../../components/page/iets/Iets';
import AppsDevelopment from '../../components/page/apps-development/AppsDevelopment';
import SingleApp from '../../components/page/single-app/SingleApp';
import NotFound from '../../components/page/NotFound';
function RoutePath({ location }) {
    return (
        <TransitionGroup className="transition-group">
           <CSSTransition
             key={location.key}
             timeout={{ enter: 300, exit: 300 }}
             classNames="fade"
           >
             
           <Switch >
               <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
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
               <Route path="*" component={NotFound} />
           </Switch>
           </CSSTransition>
         </TransitionGroup>
    )
}
export default withRouter(RoutePath);
