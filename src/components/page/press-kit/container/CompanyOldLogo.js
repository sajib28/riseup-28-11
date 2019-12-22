import React, { Component } from 'react'
const company_old_logo = [
    {
        logo_img: require('../../../../assets/img/old-logo.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_title: 'Don’t use the old logo'
    },
    {
        logo_img: require('../../../../assets/img/old-logo.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_title: 'Don’t use the wordmark alone'
    },
    {
        logo_img: require('../../../../assets/img/old-logo.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_title: 'Don’t stretch or squeeze it'
    },
    {
        logo_img: require('../../../../assets/img/old-logo.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_title: 'Don’t rotate it'
    },
    {
        logo_img: require('../../../../assets/img/old-logo.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_title: 'Don’t use busy backgrounds'
    },
    {
        logo_img: require('../../../../assets/img/old-logo.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_title: 'Don’t create your own version'
    },
]
let time = 0.2;
const get_company_old_logo = company_old_logo.map((single_logo, i) => {
    time += 0.2;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 text-center" key={i}>
            <div className="company-logo-items wow fadeInUp" animation-delay={time.toFixed(2)+'s'} data-wow-delay={time.toFixed(2)+'s'}>
                <div className="border-shadow">
                    <img src={single_logo.logo_img} alt={single_logo.alt_img} />
                </div>
                <p>{single_logo.logo_title}</p>
            </div>
        </div>
    )
})
class CompanyOldLogo extends Component {
    render() {
        return (
            <div className="row">
                {get_company_old_logo}
            </div>
        )
    }
}
export default CompanyOldLogo;
