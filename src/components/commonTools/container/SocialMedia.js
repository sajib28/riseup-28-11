import React, { Component } from 'react';
const social_media = [
    {
        social_link:'https://www.facebook.com/riseuplabs?v=feed',
        social_icon:'fab fa-facebook-f'
    },
    {
        social_link:'https://twitter.com/riseuplabs',
        social_icon:'fab fa-twitter'
    },
    {
        social_link:'https://www.linkedin.com/company/riseuplabs',
        social_icon:'fab fa-linkedin-in'
    },
    {
        social_link:'https://www.youtube.com/user/riseuplabs?sub_confirmation=1',
        social_icon:'fab fa-youtube'
    }
]
const get_social_media = social_media.map((single_media, i) =>{
return(
    <li key={i}><a rel="noopener noreferrer" href={single_media.social_link} target="_blank"><i className={single_media.social_icon}></i></a></li>
)
})

class SocialMedia extends Component {
    render() {
        return (
            <ul className="list-unstyled list-inline">
                {get_social_media}
            </ul>
        )
    }
}
export default SocialMedia;