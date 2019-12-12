import React, { Component } from 'react'
class SocialMedia extends Component {
    render() {
        return (
            <ul className="list-unstyled list-inline">
                <li><a rel="noopener noreferrer" href="https://www.facebook.com/riseuplabs?v=feed" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a rel="noopener noreferrer" href="https://twitter.com/riseuplabs" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/riseuplabs" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                {/* <li><a rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/`} target="_blank"><i className="fas fa-meh-blank"></i></a></li> */}
                <li><a rel="noopener noreferrer" href="https://www.youtube.com/user/riseuplabs?sub_confirmation=1" target="_blank"><i className="fab fa-youtube"></i></a></li>
            </ul>
        )
    }
}
export default SocialMedia;