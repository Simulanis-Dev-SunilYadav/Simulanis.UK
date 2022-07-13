import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../../navbar/Breadcrumb';
import Banner1 from '../../../../assets/images/whatwedo/reflexis/banner.jpg'
// Images
import about from "../../../../assets/images/whatwedo/reflexis/vr-bg.jpg"
import vrglover from "../../../../assets/images/whatwedo/reflexis/vr-gloves-0.jpg"
import fft from "../../../../assets/images/whatwedo/reflexis/Full-Finger-Tracking.png"
import sixdegree from "../../../../assets/images/whatwedo/reflexis/Six-Degress-of-Freedom.png"
import ts from "../../../../assets/images/whatwedo/reflexis/Tactile-Stimulation.png"
import hfeedback from '../../../../assets/images/whatwedo/reflexis/Haptic-Feedback.svg'
import mt from '../../../../assets/images/whatwedo/reflexis/Motion-Tracking.svg'
import rb from '../../../../assets/images/whatwedo/reflexis/Rechargeable-Battery.svg'
import sa from '../../../../assets/images/whatwedo/reflexis/Size-Adaptability.svg'
import ReactPlayer from 'react-player/youtube'
import videobg from '../../../../assets/images/whatwedo/reflexis/vid-bg1.jpg'
import revideo from '../../../../assets/videos/vr-gloves.mp4'
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Appointment2 from '../../../appointment/Appointment2';

export class Refelexes extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          mute:1,
          loop:1
        },
      };
    return (
      <>
         <Helmet>  
            <title>Simulanis Reflexis</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")", backgroundPosition:'top'}}>
				<Breadcrumb heading="Reflexis" title="Reflexis" />
			</div>
		</div> 
        <div className="section-area wwedo  section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="heading-bx">
                            <h6 className="title-ext mb-2">Feeling</h6>
                            <h2 className="title-head m-b0"> The Dynamics of Virtual Objects</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Simulanis “REFLEXIS” is a high-tech exoskeleton glove enabling precision hand-tracking and haptic feedback to seamlessly allow interaction with virtual objects.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="400">
						{/* <video poster={videobg} playsinline="" autoplay="true" muted="true" loop="true">
							<source src={revideo} type="video/mp4" />
						</video> */}
                         <div className='player-wrapper'>
                            <ReactPlayer
                              className='react-player'
                              url='https://www.youtube.com/watch?v=4NRHVwZkD8c'
                              width='100%'
                              height='328px'
                              playing='true'
                              loop='true'
                              muted='true'
                              previewTabIndex="0"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="section-area section-sp2 bg-grey bg-fix">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-5 d-none d-md-block" data-aos={"fade-up"} data-aos-delay="200">
						<img src={vrglover} alt="" />
					</div>
					<div className="col-md-7" data-aos={"fade-up"} data-aos-delay="400">
						<Tabs>
							<div className="">
								<TabList className="nav misson-tabs">
									<Tab>
										 <div className="reflexis">
											<img src={fft} alt="" />
											<p>Full Finger Tracking</p>
										 </div>
									</Tab>
									<Tab>
										 <div className="reflexis">
											<img src={ts} alt="" />
											<p>Tactile Stimulation</p>
										 </div>
									</Tab>
									<Tab>
										<div className="reflexis">
											<img src={sixdegree} alt="" />
											<p>Six Degress of  Freedom</p>
										 </div>
									</Tab>
								</TabList>
							</div>
							<div className="">
								<TabPanel>
									<div className="mission-tab-bx text-black">
										<p className="sub-title">Instead of relying on triggers or buttons to interact with your virtual environment, full finger tracking enables to touch digital objects.</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="mission-tab-bx text-black">
										<p className="sub-title">Interactive, intuitive, and engaging actions of picking, dropping and maneuvering virtual objects while experiencing a sense of force feedback.</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="mission-tab-bx text-black">
										<p className="sub-title">The degrees of freedom of abduction, adduction, and rotation are provided for all fingers in a three-dimensional space.</p>
									</div>
								</TabPanel>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</div>

		<div className="section-area wwedo rwfwfeatures section-sp2">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="heading-bx text-center">
                          <h2 className="title-head m-b0">Features and Technology</h2>
                          <span className="hr-secondary"></span>
                      </div>
                  </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="200">
                        <ul className="service-list-circle">
                            <li><i><img src={mt} alt="" /></i>
                                <h6>Motion Tracking</h6>
                                <p>Full hands and fingers tracking mode supported.</p>
                            </li>
							<li><i><img src={rb} alt="" /></i>
                                <h6>Rechargeable Battery</h6>
                                <p>Powered by rechargeable lithium-ion battery for continuous play upto 3 hours.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="400">
                        <ul className="service-list-circle">
                            <li><i><img src={hfeedback} alt="" /></i>
                                <h6>Haptic Feedback</h6>
                                <p>Intuitive feedback for realistic and enhanced VR experience.</p>
                            </li>
                            <li><i><img src={sa} alt="" /></i>
                                <h6>Size Adaptability</h6>
                                <p>Adjust size of the gloves across fingers for comfortable fitting.</p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="600">
						<img src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>

		<div className="bg-grey">
			<Appointment2 pageName="Reflexes"/>
		</div>

      </>
    )
  }
}

export default Refelexes