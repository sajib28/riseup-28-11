import React, { Component } from 'react';
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import $ from 'jquery';
import WOW from 'wowjs';
// process Loop
const work_items = [
    {
        id: '1',
        item_img: require('../../../assets/img/work/product-strategy.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        title: 'Product Strategy',
        description: 'Doing what’s never been done before is common practice at Rise Up Labs. We develop custom web applications by analyzing a wealth of research, defining business and audience goals, establishing a clear vision, and identifying success metrics. This makes our product strategy an intricate story — one that begins and ends with discovery.'
    },
    {
        id: '2',
        item_img: require('../../../assets/img/work/product-design.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        title: 'Product Strategy',
        description: 'Doing what’s never been done before is common practice at Rise Up Labs. We develop custom web applications by analyzing a wealth of research, defining business and audience goals, establishing a clear vision, and identifying success metrics. This makes our product strategy an intricate story — one that begins and ends with discovery.'
    },
    {
        id: '3',
        item_img: require('../../../assets/img/work/development.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        title: 'Product Strategy',
        description: 'Doing what’s never been done before is common practice at Rise Up Labs. We develop custom web applications by analyzing a wealth of research, defining business and audience goals, establishing a clear vision, and identifying success metrics. This makes our product strategy an intricate story — one that begins and ends with discovery.'
    },
    {
        id: '4',
        item_img: require('../../../assets/img/work/testing-and-qa.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        title: 'Product Strategy',
        description: 'Doing what’s never been done before is common practice at Rise Up Labs. We develop custom web applications by analyzing a wealth of research, defining business and audience goals, establishing a clear vision, and identifying success metrics. This makes our product strategy an intricate story — one that begins and ends with discovery.'
    },
    {
        id: '5',
        item_img: require('../../../assets/img/work/release-and-support.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        title: 'Release and Support',
        description: 'Launch isn’t the end goal, it’s the start of the next phase of success. To help apply best practices and make the most of investments, Rise Up Labs provides a menu of support options.'
    }
]
//  Get Screenshoot Slider Data
// count total work
let total_work_items = work_items.length;
if (work_items.length < 10) {
    total_work_items = '0' + work_items.length;
}
//End count total work
let time = 0.2;
const get_work_items = work_items.map((single_item, i) => {
    time += 0.2;
    return (
        <div className="swap-items" key={i}>
            <div className="col-lg-6">
                <div className="image-block wow fadeIn" animation-delay={time.toFixed(2) + 's'} data-wow-delay={time.toFixed(2) + 's'}>
                    <img src={single_item.item_img} alt={single_item.alt_img} />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="content-block">
                    <span className="counter-post wow fadeInUp" animation-delay={time.toFixed(2) + 's'} data-wow-delay={time.toFixed(2) + 's'}>— {single_item.id.length<10?'0'+single_item.id:single_item.id} / {total_work_items}</span>
                    <h2 className="wow fadeInUp" animation-delay={time.toFixed(2) + 's'} data-wow-delay={time.toFixed(2) + 's'}>{single_item.title}</h2>
                    <p className="wow fadeInUp" animation-delay={time.toFixed(2) + 's'} data-wow-delay={time.toFixed(2) + 's'}>{single_item.description}</p>
                </div>
            </div>
            <div className="curbe wow fadeIn" animation-delay={time.toFixed(2) + 's'} data-wow-delay={time.toFixed(2) + 's'}></div>
        </div>
    )
})

// Process Banner Data
const banner_data = {
    banner_img: require('../../../assets/img/banner/process-banner.jpg'),
    title1: "How We Work:",
    title2: "From Idea to Reality"
}
class Press extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        // Activated WoW Js
        new WOW.WOW({
            live: false,
            mobile: false,
        }).init();
        // End Activated WoW Js
        $(".swap-items:odd").addClass('reverse-items');
    }
    render() {
        return (
            <div className="page process">
                <Nav className="navbar navbar-expand-lg" />
                <section id="processBanner" className="banner middle-content" style={{ backgroundImage: `url(${banner_data.banner_img})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                    <h1 className="wow fadeInUp" animation-delay="1.5s" data-wow-delay="0.4s"><span className="text-color">{banner_data.title1}</span><br />{banner_data.title2}</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-with-shadow" style={{"background": "rgba(0,0,0,.53)","boxShadow": "0 44px 99px rgba(152,131,60,.25)"}}></div>
                </section>
                <section className="home-work" data-ui="light">
                    <div className="container">
                        <div className="row">
                            {get_work_items}
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}

export default Press;