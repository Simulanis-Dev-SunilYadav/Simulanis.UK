import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../../navbar/Breadcrumb';
import Counter3 from '../../../counter/Counter3';
import Banner1 from '../../../../assets/images/quizbox/quizboxbg.jpg'
// Images
import Quizboxabout from '../../../../assets/images/quizbox/Quizbox.jpg'
import Idealfor from '../../../../assets/images/quizbox/quizbox-idle.png'
import features from '../../../../assets/images/quizbox/quizbox-benefits.png'
import whyqbox from '../../../../assets/images/quizbox/whyqbox.png'
import Appointment2 from '../../../appointment/Appointment2';

export class Quizbox extends Component {
    constructor () {
		super()
		this.state = {
			isOpen: false
		}
	}
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
         <Helmet>  
            <title>Simulanis Quizbox</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Quizbox" title="Quizbox" />
			</div>
		</div> 
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40">
                        <div className="heading-bx mb-0">
                            <h6 className="title-ext mb-2" data-aos={"fade-up"} data-aos-delay="100">Making employee's</h6>
                            <h2 className="title-head m-b0" data-aos={"fade-up"} data-aos-delay="100"> Training fun, intuitive and productive</h2>
                            <span className="hr-secondary" data-aos={"fade-up"} data-aos-delay="200" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2" data-aos={"fade-up"} data-aos-delay="300">Quizbox is the world's most advanced quizzing and gamification application made for enterprises containing 100+ features specifically made for employee training with support from industry experts themselves. It allows businesses to create quick department/topic specific multiplayer quizzes, Trainees can learn by playing topic specific quizzes and challenging their peers in fun multiplayer quizzes.</p>
                            <div className="ttr-tabs product-description tabs-site-button" data-aos={"fade-up"} data-aos-delay="400">
                                <Tabs>
                                    <TabList className="nav nav-tabs">
                                        <Tab>Train</Tab>
                                        <Tab>Compete</Tab>
                                        <Tab>Analyse</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <p>Train thousands of people at once with ease</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>Boost peer learning and healthy competition among your employee's</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>Get advance analytics about your employee's learning</p>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div data-aos={"fade-up"}>
                            <Counter3/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos={"fade-up"}>
                        <img src={Quizboxabout} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="200">
                        <img src={Idealfor} alt="" />
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="400">
                        <h2 className='title-head m-b0'>Ideal For</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                        <ul className='list-check mt-3'>
                            <li>Sales Team</li>
                            <li>Onboarding New Employees</li>
                            <li>Shop Floor Workers with native language support</li>
                            <li>Students</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="heading-bx text-center">
                          <h2 className="title-head m-b0">Features</h2>
                          <span className="hr-secondary"></span>
                      </div>
                  </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <ul className="service-list-circle">
                            <li data-aos={"fade-up"} data-aos-delay="100"><i className="la la-chalkboard-teacher"></i>
                                <h6>Training</h6>
                                <p>Help employees learn and upgrade their levels in the manner of their favourite game.</p>
                            </li>
                            <li data-aos={"fade-up"} data-aos-delay="200"><i className="flaticon-light-bolt"></i>
                                <h6>Challenges</h6>
                                <p>Create topic specific, time based challenges and allow uesrs to compete against each other.</p>
                            </li>
                            <li data-aos={"fade-up"} data-aos-delay="300"><i className="la la-chart-pie"></i>
                                <h6>Analytics</h6>
                                <p>Get topic level understanding and performance report of each individual user.</p>
                            </li>
                            <li data-aos={"fade-up"} data-aos-delay="400"><i className="la la-clipboard-check"></i>
                                <h6>Leaderboard</h6>
                                <p>Individual and group leaderboards for maximum engagement.</p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="service-list-circle">
                            <li data-aos={"fade-up"} data-aos-delay="150"><i className="la la-comment"></i>
                                <h6>Feed</h6>
                                <p>Keep the users updates with multimedia content in Feed.</p>
                            </li>
                             <li data-aos={"fade-up"} data-aos-delay="250"><i className="la la-shield-alt"></i>
                                <h6>Secured</h6>
                                <p>Host on your own servers. Your data, your control.</p>
                            </li>
                            <li data-aos={"fade-up"} data-aos-delay="350"><i className="la la-user-check"></i>
                                <h6>Admin Panel</h6>
                                <p>An easy to use supercharged admin panel providing solutions to all your quizzing needs.</p>
                            </li>
                            <li data-aos={"fade-up"} data-aos-delay="450"><i className="las la-users"></i>
                                <h6>Teams</h6>
                                <p>Create teams and supports peer learning.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="550">
                        <img src={features} className="radius-sm heightfet m-b30" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="150">
                        <img src={whyqbox} alt="" />
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="450">
                        <h2 className='title-head m-b0'>Why Quizbox?</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                        <h5 className="title mt-4 m-b5"> Continuous Learning</h5>
                        <p className='mb-3'>Create topic specific, time based multiple choice questions across departments which will enable your trainees to think outof the box and expand their knowledge.</p>
                        <h5 className="title m-b5">  Connect & Collabortion</h5>
                        <p className='mb-3'>Encourage peer learning and participations by forming groups and team captains in any locations, and train thousands of trainees at once.</p>
                        <h5 className="title m-b5">  Real-Time Monitoring</h5>
                        <p className='mb-3'>Monitor individuals or group performances and evaluate their behaviour and responses in real-time.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-grey'>
            <Appointment2 pageName="Quiz Box"/>
        </div>
      </>
    )
  }
}

export default Quizbox