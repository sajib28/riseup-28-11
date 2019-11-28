import React, { Component } from 'react';
import Slider from "react-slick";
const about_slider = [
    {
        about_img: require('../../../../assets/img/about-slider/about-slide-1.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer'
    },
    {
        about_img: require('../../../../assets/img/about-slider/about-slide-2.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer'
    },
    {
        about_img: require('../../../../assets/img/about-slider/about-slide-1.jpg'),
        alt_img: 'demo3'
    },
    {
        about_img: require('../../../../assets/img/about-slider/about-slide-3.jpg'),
        alt_img: 'Rise Up Labs,iOS and Android Mobile Game Developer'
    }
]

const get_slider = about_slider.map((single_slider, i) => {
    return (
        <div className="image" key={i}>
            <img src={single_slider.about_img} alt={single_slider.alt_img} />
        </div>
    )
})
class AboutSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            swipeToSlide: true,
            slidesToShow: 3,
            speed: 500,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        swipeToSlide: true,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        infinite: true
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    {get_slider}
                </Slider>
            </div>
        )
    }
}
export default AboutSlider;