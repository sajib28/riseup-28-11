import React, { Component } from 'react'
const technology_logo = [
    {
        logo_img: require('../../../../assets/img/tools-technology/android.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'Android'
    },
    {
        logo_img: require('../../../../assets/img/tools-technology/unity.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'Unity 2D/3D'
    },
    {
        logo_img: require('../../../../assets/img/tools-technology/csharp.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'C#'
    },
    {
        logo_img: require('../../../../assets/img/tools-technology/asp-net.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'ASP.NET MVC'
    },
    {
        logo_img: require('../../../../assets/img/tools-technology/react.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'ReactJs'
    },
    {
        logo_img: require('../../../../assets/img/tools-technology/c-plus-plus.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'C++'
    },
    {
        logo_img: require('../../../../assets/img/tools-technology/laravel.png'),
        alt_img: 'Rise Up Labs, iOS and Android Mobile Game Developer',
        logo_link: '/',
        title: 'Laravel'
    },
]

const get_technology_logo = technology_logo.map((single_logo, i) => {
    return (
        // <div className="col-lg-4 col-md-4 col-sm-4 col-6 text-center" key={i}>
        //     <a href={single_brand.brand_link} className="border-shadow"><img src={single_brand.barnd_img} alt={single_brand.alt_img} /></a>
        // </div>
        <a rel="noopener noreferrer" href={single_logo.logo_link} className="border-shadow" key={i}>
            <div className="img-inner">
                <img src={single_logo.logo_img} alt={single_logo.alt_img} />
            </div>
            <span>{single_logo.title}</span>
        </a>
    )
})
class Technology extends Component {
    render() {
        return (
            <div className="technology-wrap">
                {get_technology_logo}
                {/* <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/android.png')} alt="" />
                    </div>
                    <span>Android</span>
                </a>
                <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/unity.png')} alt="" />
                    </div>
                    <span>Unity 2D/3D</span>
                </a>
                <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/csharp.png')} alt="" />
                    </div>
                    <span>C#</span>
                </a>
                <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/asp-net.png')} alt="" />
                    </div>
                    <span>ASP.NET MVC</span>
                </a>
                <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/react.png')} alt="" />
                    </div>
                    <span>ReactJs</span>
                </a>
                <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/c-plus-plus.png')} alt="" />
                    </div>
                    <span>Android</span>
                </a>
                <a rel="noopener noreferrer" href="/" className="border-shadow">
                    <div className="img-inner">
                        <img src={require('../../../../assets/img/tools-technology/laravel.png')} alt="" />
                    </div>
                    <span>Android</span>
                </a> */}
            </div>
        )
    }
}
export default Technology;