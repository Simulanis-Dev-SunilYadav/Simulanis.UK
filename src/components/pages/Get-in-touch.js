import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner1 from '../../assets/images/contactbg.jpg';
import { SERVER_IP, PORT } from "../../server";
import axios from "axios";
import swal from "sweetalert";


export class Getintouch extends Component {
    constructor (props) {
		super(props)
		this.state = {
			name:'',
			email:'',
			phone:'',
			organization:'',
			subject:'',
			message:'',
			nameError:'',
			emailError:'',
			phoneError:'',
			organizationError:'',
			subjectError:'',
			messageError:'',
			pageName:"Get in touch"
		}
	}


    onChange = (e) => { 
		this.setState({ [e.target.name]: e.target.value.replace(/\s+/g," ")})
	       }

	onEmailChange = (e) => {
		this.setState({ [e.target.name]: e.target.value.replace(/\s+/g,"").trim()});
		  };

	onMobileChange = (e) => {
		const re = /^[0-9+\b]+$/
		if (e.target.value === '' || re.test(e.target.value)) {
		this.setState({ [e.target.name]: e.target.value.replace(/\s+/g,"").trim() });
			     }
             };

    valid=()=>{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.name.trim().length < 1) {
        this.setState({ nameError: "Please fill this required field" });
        return false;
        } else {
        this.setState({ nameError: "" });
        }

    if(this.state.email.match(mailFormat)){
        this.setState({
            emailError:"",
        })
            }
    else{ 
        this.setState({
            emailError:"Please enter valid email address",
        })
        return false
        }

        if (this.state.phone.trim().length < 1) {
        this.setState({ phoneError: "Please fill this required field" });
        return false;
        } else {
        this.setState({ phoneError: "" });
        }

        if (this.state.organization.trim().length < 1) {
        this.setState({ organizationError: "Please fill this required field" });
        return false;
        } else {
        this.setState({ organizationError: "" });
        }

        if (this.state.message.trim().length < 1) {
        this.setState({ messageError: "Please fill this required field" });
        return false;
        } else {
        this.setState({ messageError: "" });
        }

        return true;
    }

    onSubmit=(e)=>{
		e.preventDefault();
		let current = this;
		const isValid = this.valid();
		if (isValid) {
			let data = {
				name:current.state.name,
				email:current.state.email,
				phone:current.state.phone,
				organization:current.state.organization,
				message:current.state.message,
				subject:current.state.subject,
				pageName:current.state.pageName
				} 
		    
				axios.post(`${SERVER_IP}:${PORT}/api/submit/submitForm`,data)
				.then( function (response) {  
					if(response.status === 200){
						   if(response.data.error === false){ 
							   swal({
								   title: response.data.message,
								   icon: "success",
								   buttons: false
								 });
							   setTimeout(() => window.location.reload(), 1500);
						   }
						   else{
							   swal(response.data.message)
						   }
							}
								})
							.catch( function (err){
								console.log(err)
                                swal({
                                    // title: response.data.message,
                                    title: "Something Went Wrong. Please Retry.",
                                    icon: "warning",
                                    buttons: false
                                  });
								// swal("Something Went Wrong. Please Retry.", "", "warning");
							})
							}
	}


  render() {
    return (
      <>
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <div className="container">
                        <div className="page-banner-entry">
                            <h1 className="text-white">Contact us</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-area wwedo py-5 bg-gray">
                    <div className="container">		
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12 py-5 contact-bx-area2 ">
                                <form className="form-area-box ajax-form p-lr30 p-sm-lr5" action="#">
                                    <div className="heading-bx">
                                        <h6 className="title-ext">Get In Touch</h6>
                                        <h2 className="title-head m-b0">Get in touch for transformational XR Solutions.</h2>
                                    </div>
                                    <div className="row placeani">
                                        <div className="col-lg-6 ">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="name" type="text" value={this.state.name} onChange={this.onChange} placeholder=' Name*' required className="form-control valid-character"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group"> 
                                                    <input name="email" placeholder='Email*' value={this.state.email} onChange={this.onEmailChange} type="email" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="phone" type="text" placeholder='Phone*' value={this.state.phone} onChange={this.onMobileChange} required className="form-control int-value"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="organization" type="text" placeholder='Organization*' value={this.state.organization} onChange={this.onChange} required className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input name="subject" type="text" placeholder='Product*' value={this.state.subject} onChange={this.onChange} required className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <textarea name="message" value={this.state.message} onChange={this.onChange} rows="3" placeholder='Type Message*' className="form-control" required ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button name="submit" type="submit" value="Submit" onClick={this.onSubmit} className="btn button-md"> Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>		

                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.8658713607524!2d-2.263269584609593!3d53.470857173079324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1e236ee851b%3A0xf2f1aa755aa9beb!2sSt%20Georges%20House%2C%20215%20Chester%20Rd%2C%20Manchester%20M15%204JE%2C%20UK!5e0!3m2!1sen!2sin!4v1655791783208!5m2!1sen!2sin" width="100%" height="400" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.524300900837!2d77.32469021455853!3d28.584043993025745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d69f0d413b%3A0x2cdc85fd85fb7043!2sSimulanis%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1657009883323!5m2!1sen!2sin" width="100%" height="400" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
      </>
    )
  }
}

export default Getintouch