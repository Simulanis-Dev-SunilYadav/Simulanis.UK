import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AboutPic4 from '../../assets/images/contact.jpg'
import { SERVER_IP, PORT } from "../../server";
// React Modal Video
import { Routes } from 'react-router-dom'
import axios from "axios";
import swal from "sweetalert";

export class Appointment2 extends Component {
    constructor (props) {
		super(props)
		this.state = {
			isOpen: false,
			name:'',
			email:'',
			phone:'',
			organization:'',
			message:'',
			nameError:'',
			emailError:'',
			phoneError:'',
			organizationError:'',
			messageError:'',
			pageName:props.pageName
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
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
				pageName:current.state.pageName,
				subject:""
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
								swal("Something Went Wrong. Please Retry.", "", "warning");
							})
							}
	}

  render() {
    return (
      <>
               <div className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12 m-md-b30">
								<div className="video-bx appoint-video">
									<img src={AboutPic4} alt=""/>
									{/* <div className="video-media-bx">
										<Link to="#" onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<form className='formappt' action="#">
									<div className="heading-bx">
										<h6 className="title-ext m-b0">Quote form</h6>
										<h2 className="title-head m-b0">Get A Free quote</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        {/* <span className="hr-secondary" style={{marginLeft:'30px'}}></span> */}
									</div>
									<div className="row placeani">
										<div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="name" type="text" value={this.state.name} required className="form-control valid-character" onChange={this.onChange} placeholder="Name*"/>
												</div>
												    <p style={{color:'red', fontSize:'14px'}}> {this.state.nameError}</p>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx"> 
													<input name="email" type="text" value={this.state.email} className="form-control" required onChange={this.onEmailChange} placeholder="Email*"/>
												</div>
												    <p style={{color:'red', fontSize:'14px'}}> {this.state.emailError}</p>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="phone" type="text" value={this.state.phone} required className="form-control int-value" onChange={this.onMobileChange} placeholder="Phone*"/>
												</div>
												    <p style={{color:'red', fontSize:'14px'}}> {this.state.phoneError}</p>
											</div>
										</div>
                                        <div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="organization" type="text" value={this.state.organization} required className="form-control int-value" onChange={this.onChange} placeholder="Organization*"/>
												</div>
												    <p style={{color:'red', fontSize:'14px'}}> {this.state.organizationError}</p>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<div className="input-group input-bx">
													<textarea name="message" rows="4" value={this.state.message} className="form-control" onChange={this.onChange} placeholder="Type Message" required ></textarea>
												</div>
												    <p style={{color:'red', fontSize:'14px'}}> {this.state.messageError}</p>
											</div>
										</div>
										<div className="col-lg-12">
											<button name="submit" type="submit" value="Submit" onClick={this.onSubmit} className="btn-secondry button-md"> Send Message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
      </>
    )
  }
}

export default Appointment2