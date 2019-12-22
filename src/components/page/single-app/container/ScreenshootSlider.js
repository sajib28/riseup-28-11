import React, { Component } from 'react'
// import Slider from "react-slick";
import 'slick-carousel'
import $ from 'jquery';
// Screenshoot Slider Loop
const screenshoot_slider = [
    {
        screenshoot_img: require('../../../../assets/img/screenshot-slider/screenshot-1.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer'
    },
    {
        screenshoot_img: require('../../../../assets/img/screenshot-slider/screenshot-1.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer'
    },
    {
        screenshoot_img: require('../../../../assets/img/screenshot-slider/screenshot-1.jpg'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer'
    },
]
//  Get Screenshoot Slider Data
const get_screenshoot_slider = screenshoot_slider.map((single_slider, i) => {
    return (
        <div className="image" key={i}>
            <img src={single_slider.screenshoot_img} alt={single_slider.alt_img} />
        </div>
    )
})

class ScreenshootSlider extends Component {
    componentDidMount() {
        $(function () {
            $('#slick').on('init', function (event, slick) {
                $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
                $('.current').text(slick.currentSlide + 1);
                $('.total').text(slick.slideCount);
            }).not('.slick-initialized').slick({
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipeToSlide: true,
                    speed: 500,
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
                })
                .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $('.current').text(nextSlide + 1);
                });
        });
    }

    render() {
        return (
            <div id="slick">
                {get_screenshoot_slider}
            </div>

        )
    }
}
export default ScreenshootSlider;