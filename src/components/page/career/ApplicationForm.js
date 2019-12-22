import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import Footer from '../../commonTools/Footer';
import Swal from 'sweetalert2';
import $ from 'jquery';
import WOW from 'wowjs';
class ApplicationForm extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        // Activated WoW Js
        new WOW.WOW({
            live: false,
            mobile: false,
        }).init();
        // End Activated WoW Js
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            photoFile: 'null',
            photoPreviewUrl: '',
            photoValue:'',
            cvFile: 'null',
            cvPreviewUrl: '',
            cvValue:'',
            nameError: '',
            emailError: '',
            phoneError: '',
            cvError: '',
            photoError:''
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    }
    handleEmailChange = (event) => {
        this.setState({ 
            email: event.target.value }, () => {
            this.validateEmail();
        });
    }
    handlePhoneChange = (event) => {
        this.setState({ phone: event.target.value }, () => {
            this.validatePhone();
        });
    }
    handlePhotoChange = (event) => {
        this.setState({ 
            photoFile: event.target.files[0],
            photoValue: event.target.value}, () => {
            this.validatePhoto();
        });
        let reader = new FileReader();
     
        reader.onloadend = () => {
          this.setState({
            photoPreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(event.target.files[0])
    }
    handleCvChange = (event) => {
        this.setState({ 
            cvFile: event.target.files[0],
            cvValue: event.target.value}, () => {
            this.validateCv();
        });
        let reader = new FileReader();
     
        reader.onloadend = () => {
          this.setState({
            cvPreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(event.target.files[0])
    }
    validateName = () => {
        const { name } = this.state;
        if (name === '') {
            this.setState({
                nameError: 'Please type your name'
            });
            return false
        }
        else if (name.length < 3) {
            this.setState({
                nameError: 'Name must be longer than 2 characters'
            });
            return false
        }
        else if (name.match(/^\s+$/) !== null) {
            this.setState({
                nameError: 'Please type valid name'
            });
            return false
        }
        else {
            this.setState({
                nameError: ''
            });
            return true
        }
    }
    validateEmail = () => {
        const { email } = this.state;
        if (email === '') {
            this.setState({
                emailError: 'Please Enter your email'
            });
            return false
        }
        else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({
                emailError: 'Please Enter Valid email'

            });
            return false
        }
        else {
            this.setState({
                emailError: ''

            });
            return true
        }
    }
    validatePhone = () => {
        const { phone } = this.state;
        if (phone === '') {
            this.setState({
                phoneError: 'Please type your number'
            });
            return false
        }
        else if (isNaN(phone)) {
            this.setState({
                phoneError: 'Please type only number'
            });
            return false
        }
        else {
            this.setState({
                phoneError: ''
            });
            return true
        }
    }
    validatePhoto = () => {
        const { photoValue } = this.state;
        var allowedExtensions = /(\.pdf|\.jpg|\.png)$/i;
        if (photoValue === '') {
            this.setState({
                photoError: 'Please Upload your Photo'
            });
            return false
        }
        else if (!allowedExtensions.exec(photoValue)) {
            this.setState({
                photoError: 'Please Upload your photo with Valid Extension'
            });
            return false
        }
        else {
            this.setState({
                photoError: ''
            });
            return true
        }
    }
    validateCv = () => {
        const { cvValue } = this.state;
        var allowedExtensions = /(\.pdf|\.doc|\.docx|\.jpg|\.png)$/i;
        if (cvValue === '') {
            this.setState({
                cvError: 'Please Upload your CV'
            });
            return false
        }
        else if (!allowedExtensions.exec(cvValue)) {
            this.setState({
                cvError: 'Please Upload your Cv with Valid Extension'
            });
            return false
        }
        else {
            this.setState({
                cvError: ''
            });
            return true
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.validateName();
        this.validateEmail();
        this.validatePhone();
        this.validatePhoto();
        this.validateCv();
        if (this.validateName() === false) {
            $('html, body').animate({ scrollTop: $('#name').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validateEmail() === false) {
            $('html, body').animate({ scrollTop: $('#email').offset().top - 150 }, 'slow');
            return false;
        }

        else if (this.validatePhone() === false) {
            $('html, body').animate({ scrollTop: $('#phone').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validatePhoto() === false) {
            $('html, body').animate({ scrollTop: $('#photo').offset().top - 150 }, 'slow');
            return false;
        }
        else if (this.validateCv() === false) {
            $('html, body').animate({ scrollTop: $('#cv').offset().top - 150 }, 'slow');
            return false;
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'The form has been successfully submitted',
                showConfirmButton: true
            });
        }
    }
    render() {
        let $cvPreview = '';
        let $photoPreview = '';
        //   Cv preview
        if (this.state.cvPreviewUrl) {
           $cvPreview = (<div className="image-container" ><a href={this.state.cvPreviewUrl}>Click here to view file</a></div>);
          }
          else{
            $cvPreview = '';
          }
        //Image preview
        let allowedExtensionsPhoto = /(\.pdf|\.jpg|\.png)$/i;
          if (this.state.photoPreviewUrl && allowedExtensionsPhoto.exec(this.state.photoValue)) {
            $photoPreview = (<div className="image-container" ><img src={this.state.photoPreviewUrl} alt="Rise Up Labs, iOS and Android Mobile Game Developer" /></div>);
           }
           else{
             $photoPreview = '';
           }
        return (
            <div className="page application-form">
                <Nav className="navbar navbar-expand-lg" />
                {/* Banner */}
                <section id="careerForm" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/career-banner.jpg')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="introText">
                                <h1 className="wow fadeInUp" animation-delay="0.4s" data-wow-delay="0.4s"><span className="text-color">Game </span>Artist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <section className="career-form">
                    <div className="container">
                        <form id="careerForm" onSubmit={this.handleSubmit}>
                            <div className="row wow fadeInUp" animation-delay="0.6s" data-wow-delay="0.6s">
                                <div className="col-lg-3 col-md-5">
                                    <h3>Personal information</h3>
                                    <p>Tell us something about yourself</p>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`} id="name" name="full_name" value={this.state.name} onChange={this.handleNameChange} onBlur={this.validateName} placeholder="|" />
                                                <div className='invalid-feedback'>{this.state.nameError}</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Email address <span className="text-danger">*</span></label>
                                                <input type="email" className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} onBlur={this.validateEmail} placeholder="Your email address" />
                                                <div className='invalid-feedback'>{this.state.emailError}</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone number <span className="text-danger">*</span></label>
                                                <input type="text" className={`form-control ${this.state.phoneError ? 'is-invalid' : ''}`} name="phone" id="phone" value={this.state.phone} onChange={this.handlePhoneChange} onBlur={this.validatePhone} placeholder="Your phone number" />
                                                <div className='invalid-feedback'>{this.state.phoneError}</div>
                                            </div>
                                            <div className="form-group photo-upload">
                                                <h2 className="photo-lebel">Photo</h2>
                                                <label htmlFor="photo" className="photo">Add File </label>
                                                <input type="file" className={`form-control ${this.state.photoError ? 'is-invalid' : ''}`} name="photo" id="photo" value={this.state.photoValue} onChange={this.handlePhotoChange} />
                                                <span>We accept PNG, JPG, and JPEG files</span>
                                                { $photoPreview }
                                                <div className='invalid-feedback'>{this.state.photoError}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s"/>
                            <div className="row wow fadeInUp" animation-delay="0.8s" data-wow-delay="0.8s">
                                <div className="col-lg-3 col-md-5">
                                    <h3>CV / Resume <span className="text-danger">*</span></h3>
                                    <p>Upload your CV or resume file</p>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group file-upload">
                                                <label htmlFor="cv" className="cv">Add File</label>
                                                <input type="file" className={`form-control ${this.state.cvError ? 'is-invalid' : ''}`} name="cv" id="cv" value={this.state.cvValue} onChange={this.handleCvChange} />
                                                <span>We accept PDF, DOC, DOCX, JPG and PNG files</span>
                                                { $cvPreview }
                                                <div className='invalid-feedback'>{this.state.cvError}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="wow fadeInUp" animation-delay="1.0s" data-wow-delay="1.0s"/>
                            <div className="row wow fadeInUp" animation-delay="1.0s" data-wow-delay="1.0s">
                                <div className="col-lg-3 col-md-5">
                                    <h3>Cover letter</h3>
                                    <p>Insert your cover letter here</p>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="wow fadeInUp" animation-delay="1.0s" data-wow-delay="1.0s"/>
                            <div className="row wow fadeInUp" animation-delay="1.0s" data-wow-delay="1.0s">
                                <div className="col-lg-12 d-block text-center">
                                    <button type="submit" className="cus-btn"><span className="text-color">Submit</span> Application</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div >
        )
    }
}
export default ApplicationForm;