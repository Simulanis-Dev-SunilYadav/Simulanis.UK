import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/smart-training/banner.jpg';
import Accordion from 'react-bootstrap/Accordion'
import mubanner from '../../../assets/images/use__cases/multiuser/mubanner.jpg';
import muser from '../../../assets/images/use__cases/multiuser/realtimemultiuser.png';
import designreviews from '../../../assets/images/use__cases/multiuser/designreviews.png';
import tsupport from '../../../assets/images/use__cases/multiuser/training_support.png';
import pa from '../../../assets/images/use__cases/multiuser/pa.png';
import mu from '../../../assets/images/use__cases/multiuser/mu.png';
import increaseproductivity from '../../../assets/images/use__cases/multiuser/increaseproductivity.png';
import speedup from '../../../assets/images/use__cases/multiuser/speedup.png';
import enretenteation from '../../../assets/images/use__cases/multiuser/enretenteation.png';
import getinbuilt from '../../../assets/images/use__cases/multiuser/getinbuilt.png';

import AplicationSidebar from './AplicationSidebar';

export class MultiUserCollaboration extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);
    
    return (
      <>
        <div className="page-content bg-white">
            <Helmet>  
                <title>Multi User Collaboration</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Multi User Collaboration" title="Multi User Collaboration" />
                </div>
            </div>      
            <div className="content-block">
                <div className="section-area section-sp2 bg-fix bg-grey">
                    <div className="container application">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 m-b30">
                                <AplicationSidebar />	
                            </div>
                            <div className="col-lg-8 col-md-7 service-textarea applicationd portfolio-content">
                                <div className="heading-bx text-left m-b20">
                                    <h3 className="title-head m-b0">Multi User Collaboration</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>Businesses can now deploy a Multi-user platform powered by Simulanis, which is a cross-platform toolbox that propels businesses to indulge in a collaborative working environment, to help them achieve an exponential increase in process efficiencies and workforce productivity.</p>
                                <h4 className="title mt-3">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ul className="list-check">
                                            <li>Interactive design and prototyping technologies at your disposal - present your 3D virtual models in a virtual meeting setup and collaborate with team members efficiently.</li>
                                            <li>Subject matter experts can now indulge in smart training sessions by collaborating with multiple stakeholders and delivering an immersive and interactive session.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul className="list-check">
                                            <li>Game-based learning models can help enhance the learning outcomes drastically. Learners can compete with each other while engaging in multi-user game-based training modules.</li>
                                            <li>AR/VR based modules in any use case or particular industry can now be easily integrated with multi-user options. Collaborate with team members, experts and customers.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={mubanner} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title mt-3">A Collaborative Platform for Modern-day Needs</h4>
                                <div className="row mt-4 hsafetypb">
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={muser} />
                                            <p>Real-time Multi User Collaboration</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={designreviews} />
                                            <p>Design <br/> Reviews</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={tsupport} />
                                            <p>Training and <br/> Support</p>
                                        </div>
                                    </div>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Design Reviews</Accordion.Header>
                                        <Accordion.Body>
                                            <h4>Design Reviews</h4>
                                            <p>Present your ideas to the senior management, fast-track the decision making process, create mind-maps and prototypes while collaborating remotely </p>
                                            <ul className='list-check'>
                                                <li>Now take full advantage of AR, VR, MR and XR  technologies to engage in immersive 3D design review options to help your business scale effectively </li>
                                                <li>With remote assist features and multi-user compatibility, multiple teams can now collaborate together more efficiently in lesser time frames to produce quality outputs </li>
                                                <li>With options of 2-way annotations, interactive environment, upload options for 3D assets on-the-fly, screen sharing, teams can now get together and accomplish tasks with ease  </li>
                                                <li>Brainstorm ideas, make notes, do changes, play around with the 3D environment to help your business succeed in fast-paced competitive markets  </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Virtual Walkthroughs </Accordion.Header>
                                        <Accordion.Body>
                                            <h4>Virtual Walkthroughs </h4>
                                            <p>Going for a client meeting? Facing difficulty in trying to explain? With multi-user collaboration and virtual walkthroughs, connect with the stakeholders and offer a fully-immersive and rich 3D virtual experience. Increase productivity!</p>
                                            <ul className='list-check'>
                                                <li>Now communicate your ideas effectively and help establish credibility and  gain trust of your clients. Help them see your vision and give them clarity to your offerings at ease</li>
                                                <li>With remote assist features and multi-user compatibility, multiple teams can now collaborate together more efficiently in lesser time frames to produce quality outputs </li>
                                                <li>With options of 2-way annotations, interactive environment, upload options for 3D assets on-the-fly, screen sharing, teams can now get together and accomplish tasks with ease </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Smart Training </Accordion.Header>
                                        <Accordion.Body>
                                            <h4>Smart Training </h4>
                                            <p> Training  cannot be more fun! Now you get to present your ideas across to multiple stakeholders and keep them abreast with the latest developments - be it R&D, Design ideas, Training Modules. Collaborate at ease, and get the work done faster!</p>
                                            <ul className='list-check'>
                                                <li>Now train your employees in a much more collaborative and efficient manner. Trainees can now interact directly on the virtual platform with the trainers and peers, experiment new ways to learn in-depth and explore the virtual surroundings</li>
                                                <li>With potential applications across wide range of industries, and with multi-user integration in AR-VR training applications, both subject matter experts and learners can engage in live training sessions and interact with the 3D assets conveniently </li>
                                                <li>Multi-user collaboration helps learners to engage collaboratively in a virtual environment and indulge in an interactive role-playing opportunity just like in the real world scenario, helping them retain critical know-how to multi-faceted operations</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <h4 className='mt-4'>Other Areas of Focus</h4>
                                <h5>1. Other Areas of Focus</h5>
                                <p>Engage with internal teams, external stakeholders, and even customers directly with simple multi-user integration in AR-VR applications. Increase productivity!</p>
                                <h5>2. Digital Twin</h5>
                                <p>With the help of experts, create replica of real world objects onto a virtual platform. With AR-VR integrations & multi-user capabilities speed up your decision making process</p>
                                <h5>3. Remote Support</h5>
                                <p>Now operators can directly engage remotely with experts while troubleshooting and during debottlenecking processes with the help of multi-user enabled remote assist technology</p>

                                <h4>Scale your Business to new heights with Multi-User Collaboration Tools</h4>
                                <div className='row hsafetypb'>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={mu} />
                                            <p>Multiple users can login from anywhere and start working together</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={getinbuilt} />
                                            <p>Get in-built analytics & engaging dashboards at your disposal</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={increaseproductivity} />
                                            <p>Increase productivity and profit margins for your business</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={speedup} />
                                            <p>Speed up the decision making process. Reduce the time to go to market</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={pa} />
                                            <p>Potential applications across a wide range of <br/>industries</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6'>
                                        <div class="pbox">
                                            <img src={enretenteation} />
                                            <p>Enhance learning retention rates drastically for <br/> workers</p>
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

export default MultiUserCollaboration