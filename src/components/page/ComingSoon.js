import React, { Component } from 'react'
import Nav from '../commonTools/Nav';
import Footer from '../commonTools/Footer';
class ComingSoon extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="coming-soon">
                <Nav className="navbar navbar-expand-lg" />
                <section id="demobanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../assets/img/banner/iets-banner.jpg')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1>Coming Soon</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default ComingSoon;