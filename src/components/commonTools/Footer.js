import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BackTop from './BackToTop';
import SocialMedia from './container/SocialMedia';
import Swal from 'sweetalert2';
import $ from 'jquery';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe_email: '',
            emailError: ''

        };
    }
    handleEmailChange = (event) => {
        this.setState({ subscribe_email: event.target.value }, () => {
            this.validateEmail();
        });
    }
    validateEmail = () => {
        const { subscribe_email } = this.state;
        if (subscribe_email === '') {
            this.setState({
                emailError: 'Please Enter your email'
            });
            return true
        }
        else if (!subscribe_email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({
                emailError: 'Please Enter Valid email'

            });
            return true
        }
        else {
            this.setState({
                emailError: ''

            });
            return false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.validateEmail();
        if (this.validateEmail() === true) {
            $('html, body').animate({ scrollTop: $('#subscribe').offset().top - 150 }, 'slow');
            return false;
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'The form has been successfully submitted',
                text: 'Please check your mail',
                showConfirmButton: true
            })
        }
    }
    render() {
        return (
            <footer className="footer" id="footer" data-ui="dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form className="form-inline center">
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                            <h3>Goto</h3>
                            <ul className="list-unstyled">
                                <li><Link to={`${process.env.PUBLIC_URL}/`} exact="true">Home</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/work`}>Our Work</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/process`}>Our Process</Link></li>
                                <li><a href="http://www.riseuplabs.com/blog/">Blog</a></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/career`}>Career</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/press-kit`}>Press Kit</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <h3>Our Services</h3>
                            <ul className="list-unstyled">
                                <li><Link to={`${process.env.PUBLIC_URL}/apps-development`}>Apps Development</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/game-development`}>Game Development</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/web-system`}>Web System</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/xr-solution`}>XR Solution</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/ites`}>ITES</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <h3>Our Enterprise</h3>
                            <ul className="list-unstyled">
                                <li><a rel="noopener noreferrer" href="http://appilian.com/" target="_blank">Appilian</a></li>
                                <li><a rel="noopener noreferrer" href="http://xtremeinteractive.com/" target="_blank">Xtreme Interactive</a></li>
                            </ul>
                            <div className="footer-contact">
                                <h3>Contact Us</h3>
                                <ul className="list-unstyled">
                                    <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                                    <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <h3>Be Future-Ready</h3>
                            <p>Subscribe now for free to get instant updates on what's happening at the company & in everything details!</p>
                            <div className="newsletter">
                                <form id="subscribe" onSubmit={this.handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input type="email"
                                            name="subscribe_email"
                                            className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} id="subscribe_email"
                                            placeholder="Email"
                                            value={this.state.subscribe_email}
                                            onChange={this.handleEmailChange}
                                            onBlur={this.validateEmail} />
                                        <div className="input-group-append">
                                            <button className="input-group-text" id="subscribe" type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                        </div>
                                        <div className='invalid-feedback'>{this.state.emailError}</div>
                                    </div>

                                </form>
                            </div>
                            <div className="social-media">
                                <SocialMedia/>
                            </div>
                            <div className="term-condition">
                                <span>&copy; 2019 – Rise up | All Rights Reserved</span>
                                <ul className="list-unstyled inline">
                                    <li><Link to={`${process.env.PUBLIC_URL}/terms-of-service`}>Terms of Service</Link></li>|<li><Link to={`${process.env.PUBLIC_URL}/privacy-policy`}>Privacy Policy</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <BackTop />
            </footer>
        )
    }
}
export default Footer;