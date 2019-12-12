import React, { Component } from 'react'
const brnad_logo = [
    {
        barnd_img: require('../../../../assets/img/company-logo/google.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        brand_link: '/'
    },
    {
        barnd_img: require('../../../../assets/img/company-logo/facebook.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        brand_link: '/'
    },
    {
        barnd_img: require('../../../../assets/img/company-logo/apple.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        brand_link: '/'
    },
    {
        barnd_img: require('../../../../assets/img/company-logo/unity.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        brand_link: '/'
    },
    {
        barnd_img: require('../../../../assets/img/company-logo/unreal-engine.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        brand_link: '/'
    },
    {
        barnd_img: require('../../../../assets/img/company-logo/magic-leap.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        brand_link: '/'
    },
]

const get_brnad_logo = brnad_logo.map((single_brand, i) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center" key={i}>
            <div href={single_brand.brand_link} className="border-shadow"><img src={single_brand.barnd_img} alt={single_brand.alt_img} /></div>
        </div>
    )
})
class Brand extends Component {
    render() {
        return (
            <div className="row">
                {get_brnad_logo}
            </div>
        )
    }
}
export default Brand;
