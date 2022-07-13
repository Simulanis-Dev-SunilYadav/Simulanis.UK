import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AOS from "aos";
import TagManager from 'react-gtm-module';
// Images
import Banner1 from '../../assets/images/about/about_banner.jpg';
import gloves from '../../assets/images/about/gloves.jpg';
import paint from '../../assets/images/about/paint_simulator.jpg';
import welding from '../../assets/images/about/welding_simulator.jpg';
import analytics from '../../assets/images/about/analytics-suite.jpg';
import vranalytics from '../../assets/images/about/analytics-suite-vr.png';
import sanadashboard from '../../assets/images/about/sana_dashboard.png';
import pioneering from '../../assets/images/about/pioneering_technology1.jpg';
import pioneering1 from '../../assets/images/about/pioneering_technology2.jpg';
import startvrworld from '../../assets/images/about/2016.png';
import gamification from '../../assets/images/about/gamification.png';
import classroom from '../../assets/images/about/classroom.jpg';
import classroom1 from '../../assets/images/about/classroom1.png';
import startingup from '../../assets/images/about/startingup.jpg';
import AboutPic8 from '../../assets/images/about/pic8.jpg';
import AboutPic9 from '../../assets/images/about/pic9.jpg';
import AboutPic10 from '../../assets/images/about/pic10.jpg';
import Image1 from "../../assets/images/about/raman_talwar.png";
import AboutPic7 from "../../assets/images/about/pic1.jpg";
import Accordion from 'react-bootstrap/Accordion'

import  Breadcrumb  from '../navbar/Breadcrumb';
import { Helmet } from "react-helmet";  

export class About extends Component {
	componentDidMount() {
		AOS.init({
			duration : 1000
		});
	}
  render() {
	const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
	     <Helmet>  
            <title>About us - Simulanis Story</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet>  
		<div className="page-content bg-white">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="About us" title="About us" />
			</div>
			<div className="section-area section-sp2 bg-white">
				<div className="container">
					<div className="about-head-bx row">
						<div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
							<div className="about-counter">
								<h5><span className="counter">8</span> + YEAR IN INDUSTRY</h5>
								<h2 className="title">Leading Provider of Metaverse Solutions</h2>
							</div>
						</div>
						<div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
							<div className="about-testimonial">
								<div className="testimonial-content">
									<p>Raman Talwar is a well decorated, top-rank holder and a multi-award winning Masters in Chemical Engineering with Honours in Research (MEng. Hons.) from the University of Manchester (UK). His core interests lie in the development and application of process simulation and optimization models to solve real world problems.</p>
								</div>
								<div className="client-info">
									<div className="testimonial-thumb">
										<img src={Image1} alt=""/>
									</div>
									<div className="testimonial-info">
										<h6 className="name">Raman Talwar</h6>
										<p>Founder, Director and CEO</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-area wwedo section-sp2 bg-grey">
				<div className="container">
					<div className="heading-bx text-center mb-5">
						<h6 className="title-ext"> Work Process</h6>
						<h2 className="title-head m-b0">Who We Are</h2>
						<span className="hr-secondary"></span>
					</div>
					<div className="row">
						<div className="col-md-4 m-sm-b40">
							<div className="feature-container workinprocess center feature-bx3 right-img">
								<div className="feature-box-xl text-black bg-white m-b20 radius ">
									<Link to="#" className="icon-cell"><i className="flaticon-1-helmet"></i></Link>
									<span className="icon-no">01</span>	
								</div>
								<div className="icon-content">
									<h4 className="ttr-tilte">Who We Are</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
								</div>
								<i className="ti-panel bg-icon"></i>
							</div>
						</div>
						<div className="col-md-4 m-sm-b40">
							<div className="feature-container workinprocess center feature-bx3 right-img2">
								<div className="feature-box-xl text-black bg-white m-b20 radius ">
									<Link to="#" className="icon-cell"><i className="flaticon-1-engineer"></i></Link>
									<span className="icon-no">02</span>	
								</div>
								<div className="icon-content">
									<h4 className="ttr-tilte">Our Security</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
								</div>
								<i className="ti-panel bg-icon"></i>
							</div>
						</div>
						<div className="col-md-4">
							<div className="feature-container workinprocess center feature-bx3">
								<div className="feature-box-xl text-black bg-white m-b20 radius ">
									<Link to="#" className="icon-cell"><i className="flaticon-1-factory-1"></i></Link>
									<span className="icon-no">03</span>	
								</div>
								<div className="icon-content">
									<h4 className="ttr-tilte">Our Process</h4>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
								</div>
								<i className="ti-panel bg-icon"></i>
							</div>
						</div>
					</div>													
				</div>
			</div>

			{/* <div className="section-area section-sp1 bg-grey">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 m-md-b30" data-aos="fade-up" data-aos-delay="100">
							<div className="feature-container feature-bx2 mb-0">
								<div className="feature-lg text-white m-b20">
									<span className="icon-cell"><i className="ti-world"></i></span> 
								</div>
								<div className="icon-content">
									<h4 className="ttr-tilte">Who We Are</h4>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<i className="ti-world bg-icon"></i>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 m-md-b30" data-aos="fade-up" data-aos-delay="200">
							<div className="feature-container feature-bx2 mb-0">
								<div className="feature-lg text-white m-b20">
									<span className="icon-cell"><i className="ti-shield"></i></span> 
								</div>
								<div className="icon-content">
									<h4 className="ttr-tilte">Our Security</h4>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<i className="ti-shield bg-icon"></i>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 m-md-b30" data-aos="fade-up" data-aos-delay="300">
							<div className="feature-container feature-bx2 mb-0">
								<div className="feature-lg text-white m-b20">
									<span className="icon-cell"><i className="ti-panel"></i></span> 
								</div>
								<div className="icon-content">
									<h4 className="ttr-tilte">Our Process</h4>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<i className="ti-panel bg-icon"></i>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className="section-area wwedo section-sp2 bg-white">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6 section-sp1 p-r30 p-xs-r15">
							<div className="heading-bx">
								<h6 className="title-ext">Mission Vision</h6>
								<h2 className="title-head m-b0">Our Strategic Purpose</h2>
								<span className="hr-secondary" style={{marginLeft: '30px'}}></span>
								<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
							</div>
							<Accordion defaultActiveKey="0" flush>
								<Accordion.Item eventKey="0" data-aos="fade-up">
									<Accordion.Header>Our Mission</Accordion.Header>
									<Accordion.Body>
										<p>Empowering individuals to safely enhance their skills and driving organizations to increase operational efficiency by leveraging cutting-edge XR technologies across hazardous manufacturing-based industries.</p>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1" data-aos="fade-up" data-aos-delay="50">
									<Accordion.Header>Our Vision</Accordion.Header>
									<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2" data-aos="fade-up" data-aos-delay="100">
									<Accordion.Header>Our Values</Accordion.Header>
									<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
							
						</div>
						<div className="col-md-6 p-lr0" data-aos="fade-up" data-aos-delay="300">
							<img src={AboutPic7} alt=""/>
						</div>
					</div>
				</div>
			</div>

			<div className="content-block wwedo section-sp1 bg-grey" id="content-area">
				<div className="section-area">
					<div className="container">	
						<div className="row mb-5">
							<div className="col-lg-12 col-md-9">
								<h6 className="title-ext">Company History</h6>
								<h2 className="title-head m-b0">Lorem Ipsum is simply dummy text of the printing</h2>
								<span className="hr-secondary" style={{marginLeft:'30px'}}></span>
							</div>
						</div>
						<div className="timeline-view">
							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2021</div>
										<h6>Starting New Products</h6>
										<h4>Iterative approaches</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
									<div className="row">
										<div className="col-md-4 m-b30">
											<img src={AboutPic8} alt="" data-aos="fade-up"/>
										</div>
										<div className="col-md-4 m-b30">
											<img src={AboutPic9} alt="" data-aos="fade-up" data-aos-delay="100"/>
										</div>
										<div className="col-md-4 m-b30">
											<img src={AboutPic10} alt="" data-aos="fade-up" data-aos-delay="200"/>
										</div>
									</div>
								</div>
							</div>
							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2020</div>
										<h6>Rise of XR hardware</h6>
										<h4>Customer service</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<h4>Rise of XR hardware</h4>
									<p>In 2020, we launched REFLEXIS - India’s first haptic VR gloves and its SDK that are completely compatible with our XR software thus providing a whole new level of immersive training experience. We also launched our driving simulator and scaffold simulator in the same year come</p>
									<div className="row imgheight">
										<div className="col-md-6 m-b30" data-aos="fade-up" data-aos-delay="100">
											<img src={gloves} alt=""/>
										</div>
										<div className="col-md-6 m-b30">
											<img src={paint} alt="" data-aos="fade-up" data-aos-delay="200"/>
										</div>
									</div>
								</div>
							</div>
							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2019</div>
										<h6>Year of Simulators</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<h4>Year of Simulators</h4>
									<p>The year 2019 or as we like to call it the “Year of Simulators”. With pioneering in the XR software space we made a leap into the simulator market where we built XR software integrated with real industry equipment (paint gun and welding gun) and accompanied with 4D effects.</p>
									<div className="row">
										<div className="col-md-12 m-b30">
											<img src={welding} alt="" data-aos="fade-up" data-aos-delay="200"/>
										</div>
									</div>
								</div>
							</div>
							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2018</div>
										<h6>The birth of Sanalexa</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<div className="row">
										<div className="col-md-12">
											<h4>The birth of Sanalexa</h4>
											<p>The year 2018 was a step further towards innovation into the field of XR for us as we built our comprehensive data analytics suite SANALEXA, a one-stop Data Analytics Suite to scientifically measure and adequately evaluate the performance of industrious workers as they get adequately trained on XR technologies along with the psychological and physiological assessments of the employees</p>
										</div>
										<div className="row">
											<div className="col-md-8">
													<img src={analytics} alt="" data-aos="fade-up" />
											</div>
											<div className="col-md-4">
													<img src={vranalytics} alt="" data-aos="fade-up" data-aos-delay="400" />
												<div>
													<img src={sanadashboard} alt="" data-aos="fade-up" data-aos-delay="600" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2017</div>
										<h6>Pioneering the technology</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<div className="row">
										<div className="col-md-12">
											<h4>Pioneering the technology</h4>
											<p>Since 2017 onwards, we have pioneered deployments of AR, VR, MR, 3D Gamification on Desktop, Web and Mobile applications across a plethora of industrial sectors, and built a suite of generic products leveraging a proprietary 4-layer framework honing years of experience and deep domain expertise of deploying applications for over 120 Fortune-500 enterprises.</p>
										</div>
										<div className="row">
											<div className="col-md-6">
												<img src={pioneering} alt="" data-aos="fade-up" data-aos-delay="100" />
											</div>
											<div className="col-md-6">
												<img src={pioneering1} alt="" data-aos="fade-up" data-aos-delay="300" />
											</div>
										</div>
									</div>
								</div>
							</div>
							 <div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2016</div>
										<h6>The start of VR worlds</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<div className="row align-items-center">
										<div className="col-md-6">
											<h4>The start of VR worlds</h4>
											<p>Even at this juncture, consumer and enterprise grade VR-AR technologies were nascent worldwide and only matured towards the start of 2016. Coincidentally, at the same time towards the end of 2015, post our failure to achieve product-market fit with AR and 3D Gamification technologies in the higher (engineering) education space, we pivoted our focus to leverage AR, 3D Gamification and VR technologies for industrial training use-cases, and deployed applications as we headed deeper into 2016 within the pharmaceutical and FMCG sector to start with becoming one of the firsts to do so in India.</p>
										</div>
										<div className="col-md-6">
											<img src={startvrworld} alt="" data-aos="fade-up" data-aos-delay="300" />
										</div>
									</div>
								</div>
							</div>
							 <div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2015</div>
										<h6>The shift to gamification</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<div className="row">
										<div className="col-md-12">
											<h4>The shift to gamification</h4>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										</div>
										<div className="col-md-12">
											<img src={gamification} alt="" data-aos="fade-up" data-aos-delay="200" />
										</div>
									</div>
								</div>
							</div>
							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2014</div>
										<h6>Classroom based training</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<div className="row">
										<div className="col-md-12">
											<h4>Classroom based training</h4>
											<p>In 2014, we expanded the list of courses to incorporate common engineering topics encapsulating operations, repair, maintenance and troubleshooting across industries, and shifted the mode of delivery from presenter-led to online video-based.</p>
										</div>
										<div className="row imgheight">
											<div className="col-md-6">
												<img src={classroom} alt="" data-aos="fade-up" data-aos-delay="100" />
											</div>
											<div className="col-md-6">
												<img src={classroom1} alt="" data-aos="fade-up" data-aos-delay="300" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="timeline-area">
								<div className="timeline-date">
									<div className="sticky-top">
										<div className="date-bx">2013</div>
										<h6>Starting up!</h6>
										<h4>Visualize quality</h4>
										<p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
									</div>
								</div>
								<div className="timeline-content">
									<div className="row">
										<div className="col-md-12">
											<h4>Starting up!</h4>
											<p>It all started in a wintery November of 2013 on the 23rd when we commenced our business as a training services business.</p>
											<p>Started our business in November 2013 as an engineering and corporate training services company delivering trainer-led computer-aided-engineering (CAE) courses (viz. process modelling and simulation, VBA / C / Java coding for engineers, mathematical optimization and stochastic programming). We formed a band of trainers and delivered lectures in colleges and in our own office.</p>
										</div>
										<div className="col-md-12">
											<img src={startingup} alt="" data-aos="fade-up" data-aos-delay="300" />
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
}

export default About