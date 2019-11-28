
import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import mixitup from 'mixitup';
import $ from 'jquery';
import {Link} from "react-router-dom";
const project_items = [
    {
        project_img:require('../../../assets/img/project/meet-meena.png'),
        project_title:'Meena Game',
        project_link:'/apps-details',
        description:'Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival',
        client_logo:require('../../../assets/img/project/unicef-logo.png'),
        client_alt_img:'Logo',
        col_number:8,
        project_categogy:'Client',
        project_slug:'client',

    },
    {
        project_img:require('../../../assets/img/project/adolescent-app.png'),
        project_title:'Adolescent App',
        project_link:'/apps-details',
        description:'A digital application for adolescent club members to connect, share knowledge and have access information.',
        client_logo:require('../../../assets/img/project/unicef-logo.png'),
        client_alt_img:'Logo',
        col_number:4,
        project_categogy:'Rise Up',
        project_slug:'rise-up',
    },
    {
        project_img:require('../../../assets/img/project/grido-apps.png'),
        project_title:'',
        project_link:'/apps-details',
        description:'Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival',
        client_logo:require('../../../assets/img/project/grido-logo.png'),
        client_alt_img:'Logo',
        col_number:4,
        project_categogy:'Game',
        project_slug:'game',
    },
    {
        project_img:require('../../../assets/img/project/vimory-apps.png'),
        project_title:'',
        project_link:'/apps-details',
        description:'Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.',
        client_logo:require('../../../assets/img/project/vimory-logo.png'),
        client_alt_img:'Logo',
        col_number:8,
        project_categogy:'App',
        project_slug:'app',
    },
    
]

const get_project_items = project_items.map((single_item, i) => {
    return (
        // {style.style1+ ' ' + style.style2}
        // <div className='col-lg-'{single_item.col_number} mix x-r key={i}></div>
        <div className={'col-lg-'+single_item.col_number + ' mix'} key={i}>
            <div className="list-items">
                <div className="item-bg" style={{ backgroundImage: `url(${single_item.project_img})` }}>
                </div>
                <div className="item-body">
                    <h3>{single_item.project_title}</h3>
                    <img src={single_item.client_logo} alt={single_item.client_alt_img} />
                    <p>{single_item.description}</p>
                    <Link rel="noopener noreferrer" to="{single_item.project_link}" className="cus-btn">See more<i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
})
class Work extends Component {
    componentDidMount() {
        mixitup('.projectfilter');
        $(".mix:odd").addClass('reverse-items');
        $(".mix:nth-child(3n)").addClass('reverse-items');
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
                                    <h1><span className="text-color">Some Of Our</span><br />Software Solutions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="project text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <button type="button" data-filter="all">All</button>
                                <button type="button" data-filter=".client">Client</button>
                                <button type="button" data-filter=".rise-up">Rise up</button>
                                <button type="button" data-filter=".app">App</button>
                                <button type="button" data-filter=".game">Game</button>
                                <button type="button" data-filter=".x-r">X-R</button>
                                <button type="button" data-filter=".web-system">Web System</button>
                            </div>
                        </div>
                    </div>
                    <div className="projectfilter app-list">
                        <div className="container">
                            <div className="row">
                                {get_project_items}
                                {/* <div className="col-lg-8 col-md-7 mix x-r">
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
                                </div> */}
                                {/* <div className="col-lg-4 col-md-5 mix app app">
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
                                </div> */}

                                {/* <div className="col-lg-4 col-md-5 mix game x-r">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <img src={require('../../../assets/img/project/grido-logo.png')} alt="" />
                                            <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-8 col-md-7 mix app client rise-up">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                           
                                            <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                            <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect forFacebook Profile video and Instagram video moments.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-8 col-md-7 mix game app">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/ants-battlefield.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Tap Tap Ants: Battlefield</h3>
                                            
                                            <p>Are you looking for ant games for kids or your own? Do you have enough tapping skills to protect your food?</p>
                                            <a rel="noopener noreferrer" href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4 col-md-5 mix x-r client">
                                    <div className="list-items">
                                        <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/rooftop-frenzy.png')})` }}>

                                        </div>
                                        <div className="item-body">
                                            <h3>Rooftop Frenzy</h3>
                                            
                                            <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                            <a rel="noopener noreferrer" href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="col-lg-4 col-md-5 mix web-system client">
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
                                </div> */}
                                {/* <div className="col-lg-8 col-md-7 mix game x-r client">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <section className="project text-center">
                    <button type="button" data-filter="all">All</button>
                    <button type="button" data-filter=".client">Client</button>
                    <button type="button" data-filter=".rise-up">Rise up</button>
                    <button type="button" data-filter=".app">App</button>
                    <button type="button" data-filter=".game">Game</button>
                    <button type="button" data-filter=".x-r">X-R</button>
                    <button type="button" data-filter=".web-system">Web System</button>

                    <div className="app-list">
                        <div className="container">
                            <div className="row projectfilter">
                                <div classname="work-swap mix app">
                                    <div className="col-lg-8">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/meet-meena.png')})` }}>

                                            </div>
                                            <div className="item-body">
                                                <h3>Meena Game</h3>
                                                <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                <p>Another mobile oriented channel that UNICEF intends to use to execute its Meena Communication Initiative (MCI) aimed at changing perceptions and behavior that hamper the survival</p>
                                                <a href="/apps-details" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div classname="work-swap mix client">
                                    <div className="col-lg-4">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/adolescent-app.png')})` }}>

                                            </div>
                                            <div className="item-body">
                                                <h3>Adolescent App</h3>
                                                <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div classname="work-swap mix rise-up">
                                    <div className="col-lg-8">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/vimory-apps.png')})` }}>
                                            </div>
                                            <div className="item-body">
                                                <img src={require('../../../assets/img/project/vimory-logo.png')} alt="" />
                                                <p>Fun and fast, Vimory will help your social media posts stand out from the crowd; perfect for Facebook Profile video and Instagram video moments.</p>
                                                <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div classname="work-swap mix web-system">
                                    <div className="col-lg-4">
                                        <div className="list-items">
                                            <div className="item-bg" style={{ backgroundImage: `url(${require('../../../assets/img/project/grido-apps.png')})` }}>
                                            </div>
                                            <div className="item-body">
                                                <h3>Demo title</h3>
                                                <img src={require('../../../assets/img/project/unicef-logo.png')} alt="" />
                                                <p>A digital application for adolescent club members to connect, share knowledge and have access information.</p>
                                                <a href="/" className="cus-btn">See more<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                </section>
                <Footer />
            </div >
        )
    }
}
export default Work;