import React, { Component } from 'react';

// Company Logo loop 
const company_logo = [
    {
        logo_img: require('../../assets/img/company-logo/ict-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/unicef-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/innovation-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/bbc-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/mages-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/bcc-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/robi-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
    {
        logo_img: require('../../assets/img/company-logo/habson-logo.png'),
        alt_logo: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/'
    },
]
// Get Company Logo data
const get_company_logo = company_logo.map((single_logo, i) => {
    return (
        <li className="wow zoomIn" animation-delay="0.5s" data-wow-delay="0.5s" key={i}>
            <img src={single_logo.logo_img} alt={single_logo.alt_logo} />
        </li>
    )
})

class CompanyLogo extends Component {
    render() {
        return (
            <div className="company-logo">
                <ul className="list-unstyled">
                    {get_company_logo}
                </ul>
            </div>
        )
    }
}
export default CompanyLogo;