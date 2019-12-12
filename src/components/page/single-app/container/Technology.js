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
        <div rel="noopener noreferrer" href={single_logo.logo_link} className="border-shadow" key={i}>
            <div className="img-inner">
                <img src={single_logo.logo_img} alt={single_logo.alt_img} />
            </div>
            <span>{single_logo.title}</span>
        </div>
    )
})
class Technology extends Component {
    render() {
        return (
            <div className="technology-wrap">
                {get_technology_logo}
            </div>
        )
    }
}
export default Technology;