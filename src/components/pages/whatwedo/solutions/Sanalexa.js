import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../navbar/Breadcrumb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner1 from '../../../../assets/images/whatwedo/sanalexa/web2.jpg'
// Images
import sanalexaAbout from "../../../../assets/images/whatwedo/sanalexa/analytics-suite-vr.png"
import Appointment2 from '../../../appointment/Appointment2';
import analyticssuite from "../../../../assets/images/whatwedo/sanalexa/analytics-suite.jpg"
import dashboard from "../../../../assets/images/whatwedo/sanalexa/dashboard.png"

import game from "../../../../assets/images/whatwedo/sanalexa/game.png"
import Psychological from "../../../../assets/images/whatwedo/sanalexa/brain.png"
import Physiological from "../../../../assets/images/whatwedo/sanalexa/woman.png"

import Accordion from 'react-bootstrap/Accordion'
export class Sanalexa extends Component {
  render() {
	const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
          <Helmet>  
            <title>Simulanis Sanalexa</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Sanalexa" title="Sanalexa" />
			</div>
		</div> 
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="heading-bx">
                            <h6 className="title-ext mb-2">Introducing</h6>
                            <h2 className="title-head m-b0">SANALEXA VR-Analytics</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">SANALEXA is a one-stop Data Analytics Suite to scientifically measure and adequately evaluate the performance of industrious workers as they get adequately trained on VR, AR. MR technologies. The incorporation of analytics into the module helps in steadfastly keeping the record of worker's Cognitive, Behavioural and Personality traits which results in enhancing workers efficiency and overall learning.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="400">
                        <img src={analyticssuite} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="section-area section-sp2 bg-fix">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-5" data-aos={"fade-up"} data-aos-delay="200">
						<img src={dashboard} alt="" />
					</div>
					<div className="col-md-7" data-aos={"fade-up"} data-aos-delay="400">
						<Tabs>
							<div className="">
								<TabList className="nav misson-tabs">
									<Tab>
										 <div className="reflexis sanalexa">
											<img src={game} alt="" />
											<p>IN GAME ANALYTICS</p>
										 </div>
									</Tab>
									<Tab>
										 <div className="reflexis sanalexa">
											<img src={Psychological} alt="" />
											<p>PSYCHOLOGICAL DATA</p>
										 </div>
									</Tab>
									<Tab>
										<div className="reflexis sanalexa">
											<img src={Physiological} alt="" />
											<p>PHYSIOLOGICAL DATA</p>
										 </div>
									</Tab>
								</TabList>
							</div>
							<div className="">
								<TabPanel>
									<div className="mission-tab-bx text-black">
										<p className="sub-title">Determining the performance of the user while training by capturing key data points such as time taken, errors, improvement shown, user field of view etc.</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="mission-tab-bx text-black">
										<p className="sub-title">Capturing the psychology/behavior/ attitude and overall personality of the user by subjecting him/her to pre, mid and post game questionnaires.</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="mission-tab-bx text-black">
										<p className="sub-title">Capturing data such as heart rate, nerve impulses , BP etc. to determine the physio - logical changes occurring in the human body while playing the module.</p>
									</div>
								</TabPanel>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</div>

        <div className="section-area wwedo  bg-grey">
				<div className="container">
					<div className="row">
						<div className="col-md-6 section-sp1 p-r30 p-xs-r15" data-aos={"fade-up"} data-aos-delay="200">
							<div className="heading-bx">
								<h2 className="title-head m-b0">Benefits</h2>
								<span className="hr-secondary" style={{marginLeft: '30px'}}></span>
								<p className="head-px2">VR-analytics Dashboard comprising of meaningful KPI's of the employee VR performance eventually assisting in talent management processes.</p>
							</div>
							<Accordion defaultActiveKey="0" flush>
								<Accordion.Item eventKey="0">
									<Accordion.Header>End to End Trainee Assessment</Accordion.Header>
									<Accordion.Body>
                                        Evaluation of employee’s psychology, physiology, personality, skillset, knowledge, and aptitude data.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Creating Cohorts</Accordion.Header>
									<Accordion.Body>
                                        Effective segregation of workforce ultimately leading to intelligent designed workforce.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Cost Optimization</Accordion.Header>
									<Accordion.Body>
                                        Our Analytics Suite (SDK) can help you make informed decisions based on training sessions, making it easier for employers to allocate and manage resources in dedicated spheres matching worker abilities.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
							
						</div>
						<div className="col-md-6 p-lr0" data-aos={"fade-up"} data-aos-delay="400">
							<img src={sanalexaAbout} className="mvimg" alt=""/>
						</div>
					</div>
				</div>
			</div>

        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row">
					<div className="col-md-10 offset-md-1">
						<div className="heading-bx text-center">
							<h2 className="title-head m-b0">Powerful Analytics For Everyone</h2>
							<span className="hr-secondary"></span>
							<p>Our three-fold approach to build the analytics suite: pass live in VR datafrom the VR Modules to the back-end portal, analyse the same throughproprietary algorithms, and present results on the front-end dashboard</p>
						</div>
					</div>
                </div>
                <div className="row mt-3">
					<div className="col-md-4" data-aos={"fade-up"} data-aos-delay="200">
						<div className="number-box" data-name="01">
							<div className="number-icon">01</div>
							<h5 className="title">Employee Performance Dashboard</h5>
							<p>Visualizations to provide customized VR performance reviews for each employee/trainee.</p>
						</div>
					</div>
					<div className="col-md-4" data-aos={"fade-up"} data-aos-delay="400">
						<div className="number-box" data-name="02">
							<div className="number-icon">02</div>
							<h5 className="title">Project Performance Dashboard</h5>
							<p>Visualizations to assess performance across different VR Projects and Employees.</p>
						</div>
					</div>
					<div className="col-md-4" data-aos={"fade-up"} data-aos-delay="600">
						<div className="number-box" data-name="03">
							<div className="number-icon">03</div>
							<h5 className="title">Organization Performance Dashboard</h5>
							<p>Visualizations to assess performance of employees, difficulty and usage of various VR Training Modules.</p>
						</div>
					</div>
				</div>
            </div>
        </div>
        <div className="bg-grey">
            <Appointment2 pageName="Sanalexa"/>
        </div>
      </>
    )
  }
}

export default Sanalexa