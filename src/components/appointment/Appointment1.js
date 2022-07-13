import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AboutPic4 from '../../assets/images/contact.jpg'
// React Modal Video
import 'react-modal-video/css/modal-video.min.css';
import { Routes } from 'react-router-dom'


export class Appointment1 extends Component {
    constructor () {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
  render() {
    return (
      <>
          		<div className="section-area section-sp1 bg-primary">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12 m-md-b30">
								<div className="video-bx appoint-video">
									<img src={AboutPic4} alt=""/>
									<div className="video-media-bx">
										<Link to="#" onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<form className='formappt' action="#">
									<div className="heading-bx text-white">
										<h6 className="title-ext m-b0">Quote form</h6>
										<h2 className="title-head m-b0">Get A Free quote</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        {/* <span className="hr-secondary" style={{marginLeft:'30px'}}></span> */}
									</div>
									<div className="row placeani appoint-bx1">
										<div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="name" type="text" required className="form-control valid-character" placeholder="Name*"/>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx"> 
													<input name="email" type="email" className="form-control" required  placeholder="Email*"/>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="phone" type="text" required className="form-control int-value" placeholder="Phone*"/>
												</div>
											</div>
										</div>
                                        <div className="col-lg-6">
											<div className="form-group">
												<div className="input-group input-bx">
													<input name="text" type="text" required className="form-control int-value" placeholder="Organization*"/>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<div className="input-group input-bx">
													<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<button name="submit" type="submit" value="Submit" className="btn-secondry button-md"> Send Message</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='2vdfZgHayyw' onClose={() => this.setState({isOpen: false})} />
      </>
    )
  }
}

export default Appointment1