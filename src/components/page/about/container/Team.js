import React, { Component } from 'react';

// team member loop
const riseup_team_member_data = [
    {
        member_img: require('../../../../assets/img/team/team-member-1.png'),
        member_alt: "Ershadul Hoque Founder And CEO",
        member_name: "Ershadul Hoque",
        member_designation: "Founder & CEO",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-2.png'),
        member_alt: "Mohammad Zaman",
        member_name: "Mohammad Zaman",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-3.png'),
        member_alt: "Francesco Patarnello",
        member_name: "Francesco Patarnello",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-4.png'),
        member_alt: "Kazi Ahsan Habib",
        member_name: "Kazi Ahsan Habib",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-5.png'),
        member_alt: "Md Zamilur Rahman	",
        member_name: "Md. Zamilur Rahman",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-5.png'),
        member_alt: "Md Zamilur Rahman	",
        member_name: "Md. Zamilur Rahman",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-5.png'),
        member_alt: "Md Zamilur Rahman	",
        member_name: "Md. Zamilur Rahman",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    },
    {
        member_img: require('../../../../assets/img/team/team-member-5.png'),
        member_alt: "Md Zamilur Rahman	",
        member_name: "Md. Zamilur Rahman",
        member_designation: "Advisor",
        social_media: [
            {
                social_link: "/",
                social_icon: "fab fa-facebook-f"
            },
            {
                social_link: "/",
                social_icon: "fab fa-twitter"
            },
            {
                social_link: "/",
                social_icon: "fab fa-linkedin-in"
            }
        ]
    }
]

// get team member data
const get_member_data = riseup_team_member_data.map((single_member, i) => {
    const get_socal_all_data = single_member.social_media.map((single_social, i) => {
        return (
            <li key={i}>
                <a rel="noopener noreferrer" href={single_social.social_link} target="_blank"><i className={single_social.social_icon}></i></a>
            </li>
        )
    });
    return (

        <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
            <div className="team-item">
                <div className="team-member">
                    <figure className="team-member-img">
                            <img src={single_member.member_img} alt={single_member.member_alt} />
                    </figure>
                    <div className="team-member-meta">
                        <ul className="list-unstyled team-social-links">
                            {get_socal_all_data}
                        </ul>
                    </div>
                </div>
                <div className="team-info">
                    <h3>{single_member.member_name}</h3>
                    <p>{single_member.member_designation}</p>
                </div>
            </div>
        </div>
    )
})

class Team extends Component {

    render() {
        return (
            <div className="row">
                {get_member_data}
            </div>
        );
    }
}

export default Team;