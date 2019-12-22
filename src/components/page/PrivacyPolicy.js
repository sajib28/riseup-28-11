import React, { Component } from 'react'
import Nav from '../commonTools/Nav';
import Footer from '../commonTools/Footer';
import WOW from 'wowjs';
class PrivacyPolicy extends Component {
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
            <div className="page privacy-policy">
            <Nav className="navbar navbar-expand-lg" />
            <section id="PrivacyPolicyBanner" className="banner middle-content" style={{ backgroundImage: `url(${require( '../../assets/img/banner/press-kit-banner.jpg')})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="introText">
                                <h1 className="wow fadeInUp" animation-delay="0.2s" data-wow-delay="0.2s">Privacy Policy</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay-with-shadow" style={{ "background": "rgba(0,0,0,.53)", "boxShadow": "0 44px 99px rgba(152,131,60,.25)"}}></div>
            </section>
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
        
                                <h2>Rise Up Labs Privacy Policy</h2>
                                <p>Rise Up Labs (“<strong><a href={`${process.env.PUBLIC_URL}/`}>Rise Up Labs</a></strong>”) has adopted this privacy policy (“<strong>Privacy Policy</strong>”) to explain how Rise Up Labs collects, stores, and uses the information collected in connection with Rise Up Labs’ apps, games, products, websites and services (together “<strong>Services”</strong>).</p>
                                <p>Should you have any questions relating to this Privacy Policy, please contact us at <a href="mailto:contact@riseuplabs.com"><strong>contact@riseuplabs.com</strong></a> or alternatively at Rise Up Labs, Tropical Alauddin Tower, Flat - 12/E, Plot - 32/C, Road - 02, Sector - 03, Uttara, Dhaka - 1230, Bangladesh.</p>
                                <p>By installing, using, registering to or otherwise accessing the services, you agree to this Privacy Policy and give an explicit and informed consent to the process, use and disclosure of your personal data in accordance with this Privacy Policy. If you do not agree to this Privacy Policy, please do not install, use, register to or otherwise access the services. Rise Up Labs reserves the right to modify this Privacy Policy at reasonable times, so please review it frequently. Your continued use of services will signify your acceptance of the changes to this Privacy Policy.</p>
                            </div>
                            <div className="content-block">
        
                                <h2>1. Non-personal data</h2>
                                <p>For purposes of this Privacy Policy, “non-personal data” means information that does not directly identify you. Additionally, non-personal data means “aggregate” and “de-personalized” information, which Rise Up Labs collects to use in Rise Up Labs Services, from which any personally identifiable data has been removed.</p>
        
                                <p>Rise Up Labs may use tools or third party analytical software to automatically collect and use certain non-personal data that does not directly enable Rise Up Labs to identify you. The types of non-personal data Rise Up Labs may collect and use include, but are not limited to: (i) device properties, including, but not limited to IP address, Media Access Control (“MAC”) address and unique device identifier or other persistent or non-persistent device identifier ("Device ID"); (ii) device software platform and firmware; (iii) mobile phone carrier; (iv) geographical data such as zip code, area code and coarse location; (v) game progress, time used playing, score and achievements; (vi) other non-personal data as reasonably required by Rise Up Labs to enhance the Services and other Rise Up Labs’ products and services.</p>
        
                                <p>Rise Up Labs may use and disclose to Rise Up Labs’ partners and contractors the collected non-personal data for purposes of analyzing usage of the Services, advertisement serving, managing and providing the Services and to further develop the Services and other Rise Up Labs’ services and products.</p>
        
                                <p>You recognize and agree that the analytics companies utilized by Rise Up Labs may combine the information collected with other information they have independently collected from other services or products relating to your activities. These companies collect and use information under their own privacy policies.</p>
                                <p>Rise Up Labs may supplement your personal and non-personal data with data received from third parties in connection with demographic, advertisement, market and other analytics surveys or services.</p>
                                <p>If you require a complete list of third-party analytics tools then get in touch with us at <a href="mailto:contact@riseuplabs.com"><strong>contact@riseuplabs.com</strong></a></p>
                            </div>
                            <div className="content-block">
                                <h2>2. Ad Serving Technology</h2>
                                <p>Rise Up Labs reserves the right to use and disclose the collected non-personal data for purposes of advertisement by Rise Up Labs or Rise Up Labs’ partners. Rise Up Labs may employ third party ad serving technologies that use certain methods to collect information as a result of ad serving through Services. Rise Up Labs or third parties operating the ad serving technology may use demographic and location information as well as information logged from your hardware or device to ensure that appropriate advertising is presented within the Service. Rise Up Labs or third parties may collect and use data for this purpose including, but not limited to IP address (including but not limited to for purposes of determining your coarse location), Device ID, MAC, software, applications, hardware, browser information, internet and on-line usage information and in-game information. The foregoing data may be used and disclosed in accordance with this Privacy Policy and the privacy policy of the company providing the ad serving technology.</p>
        
                                <p>You recognize and agree that the advertising companies who deliver ads for Rise Up Labs may combine the information collected with other information they have independently collected from other services or products. These companies collect and use information under their own privacy policies. These ad serving technologies are integrated into Services; if you do not want to be subject to this technology, do not use or access Services. Although Rise Up Labs takes commercially reasonable steps to instruct such advertising companies to comply with the terms and conditions of this Privacy Policy, Rise Up Labs does not have access to or control of third party technologies.</p>
        
                            </div>
                            <div className="content-block">
                                <h2>3. Personal Data</h2>
                                <p>For purposes of this Privacy Policy, “personal data” means personally identifiable information that specifically identifies you as an individual.</p>
        
                                <p>Likely situations when you make personal data available to Rise Up Labs include, but are not limited to: (i) registration for Services, contests and special events; (ii) accessing Services using a third party ID, such as social networking sites or gaming services; (iii) subscribing to newsletters; (iv) using “email this app or game," or other similar features; (v) requesting technical support; and (vi) otherwise through use of Rise Up Labs’ Services where personal data is required for use and/or participation.</p>
        
                                <p>The types of personal data may vary depending on the type of activity you are engaged in. The personal data Rise Up Labs may collect, process and use may include, but are not limited to your name, screen/nick name, Rise Up Labs Services’ or third party service ID, e-mail address, phone number, photo or other image, birthdate, sex, address, friend connections, avatar image, credit card information, shipping information; and location (only if directly identifiable to you, otherwise Rise Up Labs treats location as non-personal data).</p>
        
                                <p>Rise Up Labs may use personal and non-personal data, both individually and combined together, for purposes of analyzing usage of the Services, providing customer and technical support, managing and providing Services (including managing advertisement serving), customizing Rise Up Labs’ communications and to further develop the Services and other Rise Up Labs’ services and products. Rise Up Labs may combine non-personal data with personal data.</p>
        
                                <p>Rise Up Labs may use your personal data to send messages to you with informative and/or commercial content about Rise Up Labs’ services or third party products and services Rise Up Labs thinks may be of interest to you, such as new features and services, special offers and updated information.</p>
        
                                <p>Please note that certain features of the Services may be able to connect to your social networking sites to obtain additional information about you such as in the ‘Free Gifts’. In such cases, Rise Up Labs may be able to collect certain information from your social networking profile when your social networking site permits it, and when you consent to allow your social networking site to make that information available to Rise Up Labs. This information may include, but is not limited to, your name, profile picture, gender, user ID, email address, your country, your language, your time zone, the organizations and links on your profile page, the names and profile pictures of your social networking site “friends” and other information you have included in your social networking site profile. Rise Up Labs may associate and/or combine as well as use information collected by Rise Up Labs and/or obtained through such social networking sites in accordance with this Privacy Policy.</p>
                            </div>
                            <div className="content-block">
                                <h2>4. Disclosure and Transfer of Personal Data</h2>
                                <p>Personal data may be disclosed in accordance with applicable legislation and this Privacy Policy.</p>
        
                                <p>Rise Up Labs may hire agents to collect and process personal data on Rise Up Labs’ behalf and in such cases such agents will be instructed to comply with our Privacy Policy and to use personal data only for the purposes for which the third party has been engaged by Rise Up Labs. These agents may not use your personal data for their own marketing purposes. Rise Up Labs has the right to share your personal data as necessary for the aforementioned third parties to provide their services for Rise Up Labs. Rise Up Labs is not liable for the acts and omissions of these third parties, except as provided by mandatory law.</p>
        
                                <p>Rise Up Labs may disclose your personal data to third parties as required by law enforcement or other government officials in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose you or Rise Up Labs to legal liability. Rise Up Labs may also disclose your personal data to third parties when Rise Up Labs has a reason to believe that a disclosure is necessary to address potential or actual injury or interference with Rise Up Labs’ rights, property, operations, users or others who may be harmed or may suffer loss or damage, or Rise Up Labs believes that such disclosure is necessary to protect Rise Up Labs’ rights, combat fraud and/or comply with a judicial proceeding, court order, or legal process served on Rise Up Labs. To the extent permitted by applicable law, Rise Up Labs will make reasonable efforts to notify you of such disclosure through Rise Up Labs’ website, blog, forums, social networking pages or in another reasonable manner.</p>
                            </div>
                            <div className="content-block">
                                <h2>5. Data Retention and Correctness</h2>
                                <p>Rise Up Labs retains the data collected pursuant to this Privacy Policy for the period necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. Thereafter if the collected data is no longer needed for purposes specified in this Privacy Policy, Rise Up Labs deletes all aforementioned data in its possession within a reasonable timeframe. Rise Up Labs does not verify the correctness of personal data.</p>
        
                                <p>Irrespective of the above, Rise Up Labs may still retain some of the data to the extent such retention is necessary to resolve disputes, enforce Rise Up Labs user agreements, and comply with technical and legal requirements and constraints related to the security, integrity and operation of Services.</p>
                            </div>
                            <div className="content-block">
                                <h2>6. Cookies, beacons and tracking</h2>
                                <p>The Services may use “cookies” and other technologies such as pixel tags, locally shared objects, clear GIFs and web beacons. Rise Up Labs treats information collected by cookies and similar technologies as non-personal data.</p>
        
                                <p><strong>Cookies: </strong>A “cookie” is a small bit of record-keeping information that websites often store on a user's computer. Rise Up Labs’ cookies do not include personal data and are typically used to quickly identify your device and to “remember” you. You can disable cookies or set your browser to alert you when cookies are being sent to your device; however, disabling cookies may affect your ability to use the Services.</p>
        
                                <p><strong>Flash cookies & HTML5: </strong>Rise Up Labs may also use Flash cookies (locally shared objects) and HTML5 storage (locally stored objects). Locally shared objects are small files similar to browser cookies and are used to remember your settings to personalize the look and feel of the Services. Locally shared objects only collect data in the aggregate. You may prevent locally shared objects from being placed by disabling locally stored objects in your browser or visit www.adobe.com. Locally stored objects, such as HTML5 Web Storage, are used for similar purposes as cookies but typically may contain a greater amount and different types of data than browser cookies.</p>
        
                                <p><strong>Web Beacons and pixel tags: </strong>A “web beacon” or a “pixel tag” is an electronic image that allows Rise Up Labs to count users who have visited certain pages or viewed certain advertisements. Web beacons, like cookies, do not include personal data. E-mails and other electronic communications Rise Up Labs sends to you may contain pixel tags that enable Rise Up Labs to track your usage of the communication, including whether the communication was opened and/or what links were followed, if any.</p>
                            </div>
                            <div className="content-block">
                                <h2>7. Third Party Terms and Conditions</h2>
                                <p>Please note that your access to and use of the Services may be subject to certain third party terms and conditions and privacy policies, including but not limited to application stores (such as Apple iTunes or Google Play), map data providers, mobile software platforms, on-line gaming platforms, social networking services ( such as Facebook and Google+) and payment providers. You recognize and agree that Rise Up Labs is not liable for any such third party terms and conditions and their use of your personal data.</p>
        
                                <p>Rise Up Labs may in its discretion make available links through advertisements or otherwise enable you to access third party products or services. Please note that, while using such products or services, you are using products or services developed and administered by people or companies not affiliated with or controlled by Rise Up Labs. Rise Up Labs is not responsible for the actions of those people or companies, the content of their products or services, the use of information you provide to them, or any products or services they may offer. The fact that Rise Up Labs is linking to those products or services does not constitute our sponsorship of, or affiliation with, those people or companies.</p>
        
                                <p>Please note that certain Services that Rise Up Labs may offer, such as social networking games and gaming console services, may use third party services to provide authentication for the Services with a gaming console ID, social networking ID or gaming network account. When you register to join or use the Services from a third-party gaming or social networking system, certain personally identifiable user and/or membership data may be transferred automatically to and from Rise Up Labs and you hereby consent to the processing, using, combining, disclosing and retaining of such data in accordance with this Privacy Policy by Rise Up Labs.</p>
                            </div>
                            <div className="content-block">
                                <h2>8. Safeguards</h2>
                                <p>Rise Up Labs follows generally accepted industry standards and maintains reasonable safeguards to attempt to ensure the security, integrity and privacy of the information in Rise Up Labs’ possession as enabled by Common Law. Only those persons with a need to process your personal data in connection with the fulfillment of their tasks in accordance with the purposes of this Privacy Policy and for the purposes of performing technical maintenance, have access to your personal data in Rise Up Labs’ possession. Personal data collected by Rise Up Labs is stored in secure operating environments that are not available to the public. To prevent unauthorized on-line access to personal data, Rise Up Labs maintains personal data behind a firewall-protected server. However, no system can be 100% secure and there is the possibility that despite Rise Up Labs’ reasonable efforts, there could be unauthorized access to your personal data. By using the Services, you assume this risk.</p>
                            </div>
                            <div className="content-block">
                                <h2>9. Other</h2>
                                <p>Please be aware of the open nature of certain social networking features of the Services Rise Up Labs may make available to you. You may choose to disclose data about yourself in the course of contributing user generated content to the Services. Any data that you disclose in any of these forums, blogs, chats or the like is public information, and there is no expectation of privacy or confidentiality. Rise Up Labs is not responsible for any personal data you choose to make public in any of these forums.</p>
        
                                <p>If you are under 13 years of age or a minor in your country of residence, please ask your legal guardian’s permission to use or access the Services. Rise Up Labs encourages parents and/or guardians to play an active role in their children's online experience at all times. Rise Up Labs does not knowingly collect any personal information from children under 13 years of age and if Rise Up Labs learns that Rise Up Labs has inadvertently gathered personal data from children under 13 years of age, Rise Up Labs will take reasonable measures to promptly erase such personal data from Rise Up Labs’ records.</p>
                            </div>
                            <div className="content-block">
                                <h2>10. Further information</h2>
                                <p>Any and all use of your personal data by Rise Up Labs is governed by Bangladeshi law and not the laws where you may be located.</p>
        
                                <p>Should you wish opt-out from receiving communications (such as newsletters or offers) from Rise Up Labs, please get in touch with us via <a href="mailto:contact@riseuplabs.com" title="contact@riseuplabs.com"><strong>contact@riseuplabs.com</strong></a></p>
        
                                <p>Rise Up Labs regularly reviews its compliance with this Privacy Policy. If Rise Up Labs receives a formal written complaint from you regarding any and all data stored about you, Rise Up Labs will attempt to contact you directly to address any of your concerns. Rise Up Labs will cooperate with the appropriate governmental authorities, including data protection authorities, to resolve any complaints regarding the collection, use, transfer or disclosure of personal data that cannot be amicably resolved between you and Rise Up Labs. Any dispute, controversy or claim arising out of or relating to this Privacy Policy or the breach, termination or validity thereof shall be finally settled at Rise Up Labs’ discretion (i) at your domicile's competent courts; or (ii) by arbitration in accordance with Common Law. The arbitration shall be conducted in Dhaka, Bangladesh in the English language. You agree that you may bring claims against Rise Up Labs only in your individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.</p>
        
                                <p>If you have any questions concerning this document, you may get in touch via <a href="mailto:contact@riseuplabs.com" title="contact@riseuplabs.com"><strong>contact@riseuplabs.com</strong></a></p>
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
export default PrivacyPolicy;