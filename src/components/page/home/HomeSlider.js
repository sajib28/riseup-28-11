import React, { Component } from 'react'
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';
const home_slider = [
    {
        slider_img: require('../../../assets/img/home-slider/home-slide-1.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        caption:"<span class='text-uppercase text-color'>Riseup</span><br/>Beyond Reality Driving <br/>into Technology"
    }
]

const get_home_slider = home_slider.map((single_slider, i) => {
    return (
        <div key={i}>
            <img src={single_slider.slider_img} alt={single_slider.alt_img} />

            <div className="introText">
            <h1>{ReactHtmlParser(single_slider.caption)}</h1>
            </div>
        </div>
    )
})

class HomeSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            swipeToSlide: true,
            slidesToShow: 1,
            speed: 500,
            autoplay: true
        };
        return (
            <div id="homeSlider">
                <Slider {...settings}>
                    {get_home_slider}
                </Slider>
            </div>
        )
    }
}
export default HomeSlider;