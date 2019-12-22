import React, { Component } from 'react'
import {
  Link,
  NavLink
} from "react-router-dom";
import $ from 'jquery';
import SocialMedia from './container/SocialMedia';
import riseuplogo from '../../assets/img/riseup-logo.png';
import logo from '../../assets/img/big-logo.png';
import menubar from '../../assets/img/bars.png';
import menuClose from '../../assets/img/close.png';
class Nav extends Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu = e => {
    e.preventDefault();
    $(this.refs['toggle-div']).slideToggle();
  }
  componentDidMount() {
    $(window).scroll(function () {
      headerFixed();
      function headerFixed() {
        var mainMenu = document.getElementById("mainMenu");
        if ($('#mainMenu').length) {
          var mainMenuSticky = mainMenu.offsetTop;
          if (window.pageYOffset > mainMenuSticky) {
            mainMenu.classList.add("sticky-header");
          } else {
            mainMenu.classList.remove("sticky-header");
          }
        }
      }
    });
    // modal hide after click menu or logo
    $('.fullscreen-menu .navbar-nav li').click(function () {
      if (!$(this).hasClass('dropdown')) {
        $('#fullscreenMenu').modal('hide');
      }
    })
    $('.company-logo a').click(function () {
      if (!$(this).hasClass('dropdown')) {
        $('#fullscreenMenu').modal('hide');
      }
    })
  }
  render() {
    return (
      <header>
        <nav id="mainMenu" className={this.props.className}>
          <div className="container">
            <Link className="navbar-brand" to={`${process.env.PUBLIC_URL}/#home`} exact="true"><img src={riseuplogo} alt="Rise Up Labs" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink activeClassName='active' name="homeService" className="nav-link" to={`${process.env.PUBLIC_URL}/#homeService`} exact>Service</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/work`}>Work</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/process`}>Process</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/about`}>About Us</NavLink>
                </li>
                <li className="nav-item">
                  <a rel="noopener noreferrer" className="nav-link" href="http://www.riseuplabs.com/blog/">Blog</a>
                </li>

                <li className="nav-item">
                  <NavLink activeClassName='active' to={`${process.env.PUBLIC_URL}/contact`} className="nav-link">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="topMenuIcon">
              <Link className="nav-link openMenu" to={`${process.env.PUBLIC_URL}/`} data-toggle="modal" data-target="#fullscreenMenu"><img src={menubar} alt="" /></Link>
            </div>
          </div>
        </nav>
        <div className="modal fade fullscreen-menu" id="fullscreenMenu" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src={menuClose} alt="" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="navbar">
                        <ul className="nav list-unstyled left-menu navbar-nav">
                          <li className="nav-item">
                            <NavLink activeClassName='active' className="nav-link" to={`${process.env.PUBLIC_URL}/`} exact>Home</NavLink>
                          </li>
                          <li className="nav-item dropdown">
                            <Link to={`${process.env.PUBLIC_URL}/`} className="nav-link" onClick={this.toggleMenu}>Our Services <i className="fas fa-chevron-down"></i></Link>
                            <ul className="dropdown-menu" ref="toggle-div">
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/apps-development`}>Apps Development</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/game-development`}>Game Development</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/web-system`}>Web System</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/xr-solution`}>XR Solution</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/ites`}>ITES</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/process`}>Our Process</NavLink>
                          </li>

                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/work`}>Our Work</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/about`}>About Us</NavLink>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" rel="noopener noreferrer" href="http://www.riseuplabs.com/blog/">Blog</a>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/career`}>Career</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/press-kit`}>Press Kit</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to={`${process.env.PUBLIC_URL}/contact`}>Contact</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="company-info">
                        <div className="company-logo">
                          <Link to={`${process.env.PUBLIC_URL}/`}><img src={logo} alt="Rise Up Labs" /></Link>
                        </div>
                        <div className="contact-info">
                          <li><a href="mailto:contact@riseuplabs.com">contact@riseuplabs.com</a></li>
                          <li><a href="tel:01759747387">+88-0175-974-7387</a></li>
                        </div>
                        <div className="company-address">
                          <p>Head Office:B6,<br />Plot-35,Sonargaon<br />Janapath Road,Sector-07,<br />Uttara, Dhaka-1230,<br />Bangladesh</p>
                        </div>
                        <div className="social-media">
                          <SocialMedia />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default Nav;