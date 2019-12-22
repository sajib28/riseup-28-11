import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import WOW from 'wowjs';
import ContactForm from '../../commonTools/ContactForm';
class Contact extends Component {
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
        let alt = 'Rise Up Labs, iOS and Android Mobile Game Developer';
        return (
            <div className="page contact">
                <Nav className="navbar navbar-expand-lg dark-color" />
                <section className="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="vertical-middle">
                                <div className="col-lg-4 pr-0">
                                    <div className="company-info text-center">
                                        <div className="company-address wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">
                                            <img src={require('../../../assets/img/icon/address.png')} alt={alt} />
                                            <p className="text-center">Floor-B6, Plot-35, Sonargaon<br />Janapath Road, Sector-07,<br />Uttara, Dhaka-1230, Bangladesh</p>
                                        </div>
                                        <div className="phone wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">
                                            <img src={require('../../../assets/img/icon/phone.png')} alt={alt} />
                                            <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                                        </div>
                                        <div className="email wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">
                                            <img src={require('../../../assets/img/icon/mail.png')} alt={alt} />
                                            <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pl-0">
                                    <div className="contact-form">
                                        <img className="angle-top wow fadeInDown" animation-delay="0.6s" data-wow-delay="0.2s" src={require('../../../assets/img/icon/contact-top-angle.png')} alt={alt} />
                                        <img className="angle-bottom wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.2s" src={require('../../../assets/img/icon/contact-bottom-angle.png')} alt={alt} />
                                        <div className="section-title">
                                            <div className="title text-center">
                                                <h2 className="text-center wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">
                                                    <span className="text-color">Let's</span> Talk!</h2>
                                                <p className="text-center wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s">We’d love to hear what you are working on.<br />
                                                    Drop us a note here and we’ll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                        {/* Contact Form */}
                                        <ContactForm />
                                        {/* End Contact Form */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="google-map">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">
                                <h2 className="title">Find us on Google Map</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 wow zoomIn" animation-delay="0.6s" data-wow-delay="0.6s">
                                <iframe title="Rise Up Labs Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.9168693717875!2d90.39585154647231!3d23.87415825798397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4241b52d99d%3A0xdf7009a05d863ce5!2sRise%20Up%20Labs!5e0!3m2!1sen!2sbd!4v1574333333213!5m2!1sen!2sbd" width="100%" height="493"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <Footer />
            </div>
        )
    }
}
export default Contact;
