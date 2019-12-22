import React, { Component } from 'react'
import Nav from '../commonTools/Nav';
import Footer from '../commonTools/Footer';
import WOW from 'wowjs';
class TermsOfService extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        // Activated WoW Js
        new WOW.WOW({
            live: false,
            mobile: false,
        }).init();
        // End Activated WoW Js
    }
    render() {
        return (
            <div className="page terms-condition">
    <Nav className="navbar navbar-expand-lg" />
    <section id="TermsOfServiceBanner" className="banner middle-content" style={{ backgroundImage: `url(${require( '../../assets/img/banner/press-kit-banner.jpg')})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="introText">
                        <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">Terms of Service</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay-with-shadow" style={{"background": "rgba(0,0,0,.53)","boxShadow": "0 44px 99px rgba(152,131,60,.25)"}}></div>
    </section>
    <section className="content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="content-block">
                        <h2>Rise Up Labs End User License Agreement Terms & Conditions</h2>
                        <p>The following terms of service and end user license agreement (“<strong>EULA</strong>”) constitute an agreement between you and Rise Up Labs(“<strong>Rise Up Labs</strong>”). This EULA governs your use of Software and Services (as specified below).</p>
                        <p>For purposes of this EULA "Software" means all software programs made available by Rise Up Labs including, but not limited to apps, games, websites, downloadable/installable apps/games for personal computer, and apps/games accessed by means of a browser or other online communication method. Software also includes updates and upgrades as well as accompanying manual(s), packaging and other written, files, electronic or on-line materials or documentation, and any and all copies of such software and its materials.</p>
                        <p>“<strong>Services</strong>” means all services made available by Rise Up Labs, including but not limited to services accessed through apps, games, products, websites by means of a browser or by other online communication method.</p>
                            <p>Software and Services are collectively referred to as “<strong>Rise Up Labs</strong>’ Services”.</p>
                            <p>The Software is licensed, not sold. Your use of the Software (as specified below) is subject to the Terms & Conditions set forth in this EULA. By installing, using or accessing the Rise Up Labs Services or any materials included in or with the Rise Up Labs Services, you hereby accept the terms of this EULA. If you do not accept the terms of this EULA, do not install, use or access the Rise Up Labs Services</p>
                        
                    </div>
                    <div className="content-block">
                        <h2>1. Licenses</h2>
                        <p><strong>Software License: </strong>Subject to this EULA and its terms and conditions, Rise Up Labs hereby grants you a non-exclusive, non-transferable, non-sub licensable, limited right and license to use one copy of the Software for your personal non-commercial use for gameplay on a single gaming unit, unless otherwise specified in the Software documentation. The rights granted herein are subject to your compliance with this EULA. The Software is being licensed to you and you hereby acknowledge that no title or ownership in the Software is being transferred or assigned and this EULA is not to be construed as a sale of any rights in the Software.</p>

                        <p><strong>Service License: </strong>Subject to this EULA and its terms and conditions, Rise Up Labs hereby grants you a non-exclusive, non-transferable, non-sub licensable, limited right and license to use the Services as provided by Rise Up Labs, for your personal non-commercial use, in the manner permitted by this EULA. The rights granted herein are subject to your compliance with this EULA.</p>

                        <p><strong>License Term: </strong>The term of your licenses under this EULA shall commence on the date that you accept this EULA and install or otherwise use the Software and/or Services and ends on the earlier date of either your disposal of the Software and/or Services or Rise Up Labs’ termination of this EULA. Your license terminates immediately if you attempt to circumvent any technical protection measures used in connection with the Software and/or Services or you otherwise use the Software and/or Services in breach of the terms of this EULA.</p>

                        <p><strong>Ownership</strong> – No Other Licenses: Rise Up Labs retains all right, title and interest in and to the Rise Up Labs Services, including, but not limited to, all copyrights, trademarks, trade secrets, trade names, proprietary rights, patents, titles, computer codes, audiovisual effects, themes, characters, character names, stories, dialog, settings, artwork, sound effects, musical works, and moral rights whether registered or not and all applications thereof. The Rise Up Labs Services are protected by applicable Common Laws and Treaties throughout the world. Unless expressly authorized by mandatory legislation, the Rise Up Labs Services may not be copied, reproduced or distributed in any manner or medium, in whole or in part, without prior written consent from Rise Up Labs. All rights not expressly granted to you herein are reserved by Rise Up Labs.</p>
                    </div>
                    <div className="content-block">
                        <h2>2. General License Conditions</h2>
                        <p>You agree not to: (i) commercially exploit the Rise Up Labs Services; (ii) distribute, lease, license, sell, rent, lend, convey or otherwise transfer or assign the Rise Up Labs Services, any copies thereof, or any passwords or usernames of Rise Up Labs Services, without the express prior written consent of Rise Up Labs or as set forth in this EULA; (iii) make a copy of the Rise Up Labs Services or any part thereof, including but not limited to Software (other than as set forth herein); (iv) make the Rise Up Labs Services publicly available or available on a network for use or download by multiple users; (v) except as otherwise specifically provided by the Rise Up Labs Services or this EULA, use or install the Rise Up Labs Services (or permit others to do same) on a network for on-line use, or on more than one gaming unit at the same time; (vi) reverse engineer, decompile, disassemble, translate, prepare derivative works based on or otherwise modify the Rise Up Labs Services, in whole or in part; (viii) remove, obscure or modify any copyright, trademark or other proprietary rights notices, marks or labels contained on or within the Rise Up Labs Services, falsify or delete any author attributions, legal notices or other labels of the origin or source of the material; (ix) misrepresent the source of ownership of the Rise Up Labs Services; (x) transport, export or re-export (directly or indirectly) into any country forbidden to receive such Rise Up Labs Services by any Bangladeshi or other export laws or accompanying regulations or otherwise violate such laws or regulations, that may be amended from time to time; or (xi) scrape, build databases or otherwise create permanent copies of content returned from the Rise Up Labs Services.</p>

                        <p>The Rise Up Labs Services may include measures to control access to the Rise Up Labs Service, prevent unauthorized copies, or otherwise attempt to prevent anyone from exceeding the limited rights and licenses granted under this EULA. You may not interfere with such access control measures or attempt to disable or circumvent such security features. If you disable or otherwise tamper with the technical protection measures, the Rise Up Labs Services will not function properly.</p>

                        <p>The Rise Up Labs Services may allow you to create content, including but not limited to wallpapers or screenshots. In exchange for use of the Rise Up Labs Services, and to the extent that your contributions through use of the Rise Up Labs Services give rise to any copyright, design right or any other intellectual or industrial property right you hereby grant Rise Up Labs an exclusive, royalty-free, perpetual, irrevocable, fully transferable and sub-licensable worldwide right and license to use your contributions in any way and for any purpose including, but not limited to the rights to reproduce, copy, adapt, modify, perform, display, publish, broadcast, transmit, or otherwise communicate to the public by any means whether now known or unknown and distribute your contributions without any further notice or compensation to you of any kind for the whole duration of protection granted to intellectual and industrial property rights by applicable laws and international conventions. If not expressly prohibited by mandatory legislation, you hereby waive any moral rights of paternity, publication, reputation, or attribution with respect to Rise Up Labs’ and other players' use and enjoyment of such assets in connection with the Rise Up Labs Services and related goods and services under applicable law. This license grant to Rise Up Labs, and the above waiver of any applicable moral rights, survives any termination of this EULA.</p>
                        <p>The Rise Up Labs Services may require an internet connection to access the Rise Up Labs Services or its internet-based features, authenticate the Software, or perform other functions. In order for certain features of the Rise Up Labs Services to operate properly, you may be required to have and maintain an adequate internet connection. By using the Rise Up Labs Services, you acknowledge and agree that third party data transfer fees may apply depending on your data plan. Please consult your carrier for further information. If you do not maintain it then the Rise Up Labs Services or certain features of the Rise Up Labs Services may not operate or may cease to function properly, either in whole or in part.</p>
                    </div>
                    <div className="content-block">
                        <h2>3. Information Collection and Use; Privacy Policy</h2>
                        <p>By installing, accessing or using the Rise Up Labs Services, you consent to these information collection and usage terms, including (where applicable) the transfer of data into a country outside of Bangladesh or Common Law Jurisdictions.</p>

                        <p>Rise Up Labs respects your privacy rights and recognizes the importance of protecting any information collected about you. Rise Up Labs’ privacy policy as amended from time to time is available at <a rel="noopener noreferrer" target="_blank" href={`${process.env.PUBLIC_URL}/privacy-policy`}>http://riseuplabs.com/user/privacy-policy.php</a> ("Privacy Policy") and applicable to this EULA. Rise Up Labs Privacy Policy defines how, why and to which extent Rise Up Labs collects and uses personal and non-personal information in relation to Rise Up Labs products and services. By installing, accessing or using the Rise Up Labs Services you explicitly agree with the terms and conditions of Rise Up Labs Privacy Policy and to any terms and conditions included therein by reference.</p>
                    </div>
                    <div className="content-block">
                        <h2>4. Limitation of Liability</h2>
                        <p>In no event will Rise Up Labs be liable for special, incidental or consequential damages resulting from the possession, access, use or malfunction of the Rise Up Labs Services, including but not limited to, damages to property, loss of goodwill, computer/gaming unit/console failure or malfunction and, to the extent permitted by law, damages for personal injuries, property damage, lost profits or punitive damages from any causes of action arising out of or related to this EULA or the Software, whether arising in Tor (including negligence), contract, strict liability or otherwise and whether or not Rise Up Labs have been advised of the possibility of such damage. This limitation of liability shall be applicable in its fullest extent to any country or jurisdiction where the law states otherwise. In no event shall Rise Up Labs be expected to pay compensation or damages.</p>
                    </div>
                    <div className="content-block">
                        <h2>5. Other Terms & Conditions Termination:</h2>
                        <p>This EULA will terminate automatically if you fail to comply with its terms & conditions. In such event, you must destroy all copies of the Software and all of its component parts and cease and desist from accessing any Rise Up Labs Services.</p>

                        <p><strong>Indemnity: </strong>You agree to indemnify, defend and hold Rise Up Labs, its partners, affiliates, officers, directors, employees and agents harmless from and against any and all damages, losses and expenses arising directly or indirectly from: (i) your acts and omissions to act in using the Rise Up Labs Services pursuant to the terms of the EULA; or (ii) your breach of this EULA.</p>

                        <p><strong>Miscellaneous: </strong>This EULA represents the complete agreement concerning this license between the parties and supersedes all prior agreements and representations between them. It may be amended only by a written document executed by both parties. If any provision of this EULA is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable and the remaining provisions of this EULA shall not be affected.</p>

                        <p><strong>Governing Law and Dispute Resolution: </strong>This EULA will be governed by the laws of Bangladesh without reference to its choice of law rules. Any dispute, controversy or claim arising out of or relating to this EULA or the breach, termination or validity thereof shall be finally settled at Rise Up Labs discretion (i) at your domicile's competent courts; or (ii) by arbitration in accordance with Common Law. The arbitration shall be conducted in Dhaka, Bangladesh in the English language. You agree that you may bring claims against Rise Up Labs only in your individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.</p>

                        <p>If you have any questions concerning this agreement, you may get in touch via <a href="mailto:contact@riseuplabs.com"><strong>contact@riseuplabs.com</strong></a></p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <Footer />
</div>
        )
    }
}
export default TermsOfService;