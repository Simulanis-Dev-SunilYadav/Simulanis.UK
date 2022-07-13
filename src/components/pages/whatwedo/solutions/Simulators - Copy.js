import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../navbar/Breadcrumb';
import Counter2 from '../../../counter/Counter2';
import Testimonials1 from '../../../testimonials/Testimonials1';
import Accordion from 'react-bootstrap/Accordion'
import Banner1 from '../../../../assets/images/banner/banner1.jpg'
// Images
import AboutPic12 from "../../../../assets/images/whatwedo/xrtraining/pic12.jpg"
import AboutPic13 from "../../../../assets/images/whatwedo/xrtraining/pic13.jpg"
import paint from '../../../../assets/images/whatwedo/xrtraining/aboutpaint.jpg'
import firesafety from '../../../../assets/images/whatwedo/xrtraining/firesafety.jpg'
import welding from '../../../../assets/images/whatwedo/xrtraining/welding.jpg'
import Appointment from '../../../appointment/Appointment';


export class Simulators extends Component {
  render() {
    return (
      <>
         <Helmet>  
            <title>Simulanis Simulators</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Simulator" title="Simulator" />
			</div>
		</div> 
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40">
                        <div className="heading-bx">
                            <h6 className="title-ext mb-2">What is</h6>
                            <h2 className="title-head m-b0">Simulanis Simulator System</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                        <Counter2/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row sp15">
                            <div className="col-sm-6 col-6 m-t80">
                                <img src={AboutPic12} alt=""/>
                            </div>
                            <div className="col-sm-6 col-6">
                                <img src={AboutPic13} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-area wwedo bg-white section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-bx mb-3">
                            <h3 className="title-head m-b0">Simulanis Paint Simulator</h3>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p>Simulanis’ Paint Virtual Reality Simulator is an impactful alternative training method to traditional coating and spray-painting techniques It allows trainees to work in a safer work environment without worrying about illness due to the exposure of toxic materials.</p>
                        </div>
                    </div>
                </div>
                <div className="trpchallanges">
                    <h4>Traditional Paint Training Challenges</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="number-box" data-name="01">
                                <div className="number-icon">01</div>
                                <h5 className="title">High Cost</h5>
                                <p>Creating a safe and an effective industrial paint booth for training workers can be expensive, and time consuming process.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="number-box" data-name="02">
                                <div className="number-icon">02</div>
                                <h5 className="title">Inhalation Hazards</h5>
                                <p>Gears like protective garments, shoes and headpiece undergo wear and tear over the period of time, which can result in possible health and safety threats.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="number-box" data-name="03">
                                <div className="number-icon">03</div>
                                <h5 className="title">Industrial Waste</h5>
                                <p>During the coating process, most of the paint ends up on the floor, leading to resource wastage and environmental degradation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className='col-md-5'>
                        <img src={paint} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="heading-bx simulatorapproach">
                            <h4>Hands on Training Approach</h4>
                            <p>Learn how to apply uniform and proper thickness coating and evaluate your performance</p>
                            <ul className='list-check'>
                                <li>Real Paint Gun</li>
                                <li>Critical Parameters Capturing</li>
                                <li>4D Effect</li>
                                <li>Real-time Analytics</li>
                            </ul>
                            {/* <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
									<Accordion.Header>Real-time Analytics</Accordion.Header>
									<Accordion.Body>
									In the end, user would be able to see overall performance as part of the report. As a part of analytics, the application also captures behavioral and psychological data.
									</Accordion.Body>
								</Accordion.Item>
                                <Accordion.Item eventKey="1">
									<Accordion.Header>4D Effect</Accordion.Header>
									<Accordion.Body>
									To get a real feel of painting, 4D effect is added to the application. On performing the painting, user can smell the paint coming out through the smell simulator.
									</Accordion.Body>
								</Accordion.Item>

								<Accordion.Item eventKey="2">
									<Accordion.Header>Real Paint Gun</Accordion.Header>
									<Accordion.Body>
                                        While practicing the painting, it is important to get the dexterity with the gun.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>Critical Parameters Capturing</Accordion.Header>
									<Accordion.Body>
                                    The application can capture and monitor critical data like: Speed, Distance, and Angle.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion> */}

                            <h5 className='mt-4'>Features and Benefits</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='list-check'>
                                        <li>Increased Muscle Memory</li>
                                        <li>Reduced Learning Costs</li>
                                        <li>Increased Productivity</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='list-check'>
                                        <li>Detailed reports for analysis</li>
                                        <li>Reduced Learning Time</li>
                                        <li>Repeatable and Scalable</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="btn btn-danger">Get a quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="title-head m-b0">Simulanis Welding Simulator</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                        <p className="head-px2 mt-2 mb-1">Simulanis Welding Simulator is a safe, reliable and an effective training method to train workers on using VR tools for welding operations practice in a simulated and a realistic environment.</p>
                        <p className="head-px2">Welding VR allows novices to become competent and efficient.</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="heading-bx simulatorapproach ">
                            <h4>Hands On Simulator Approach</h4>
                            <p>Leverage the true potential of Simulanis Welding Simulator to enhance and enrich industrial Welding Simulator with higher efficiency and accuracy.</p>
                            <ul className='list-check'>
                                <li>Real Welding Gun</li>
                                <li>Real-time Analytics</li>
                                <li>4D Effects</li>
                            </ul>

                            <h5 className='mt-4'>Features and Benefits</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className='list-check'>
                                        <li>Increased Muscle Memory</li>
                                        <li>Reduced Learning Costs</li>
                                        <li>Increased Productivity</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className='list-check'>
                                        <li>Detailed reports for analysis</li>
                                        <li>Reduced Learning Time</li>
                                        <li>Repeatable and Scalable</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="btn btn-danger">Get a quote</button>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <img src={welding} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area wwedo bg-white section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className='col-md-5'>
                        <img src={firesafety} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="heading-bx">
                            <h2 className="title-head m-b0">Simulanis Firesafety Simulator</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Fire Extinguisher app along with HTC Vive’s VR headset, allows trainees to grasp and learn how to use a fire extinguisher through the PASS techniques. With this method, trainees can get hands-on approach experience by being in a realistic fire like situation, and learn how to: pull the safety pin on the extinguisher, aiming the nozzle at the base, squeezing the leaver slowly to release the material and sweeping it on the fire to extinguish it.</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className='mt-4'>Features and Benefits</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className='list-check'>
                                                <li>Increased Muscle Memory</li>
                                                <li>Reduced Learning Costs</li>
                                                <li>Increased Productivity</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className='list-check'>
                                                <li>Detailed reports for analysis</li>
                                                <li>Reduced Learning Time</li>
                                                <li>Repeatable and Scalable</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger">Get a quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <Appointment /> */}

      </>
    )
  }
}

export default Simulators