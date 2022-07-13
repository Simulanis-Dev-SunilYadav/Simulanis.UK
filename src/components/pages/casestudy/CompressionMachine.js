import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import {Accordion} from 'react-bootstrap';
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/case_study/1.jpg';
import case1 from '../../../assets/images/case_study/compressinemachine1.jpg';
import case3 from '../../../assets/images/case_study/compint.jpg';
import case2 from '../../../assets/images/case_study/hsafety.jpg';


export class CompressionMachine extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
        <Helmet>  
            <title>Case Study</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="Compression Machine" title="Compression Machine" />
            </div>
            <div className="section-area section-sp2 bg-grey port-7-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="heading-bx text-left m-b15">
                                    <h3 className="title-head m-b0">Compression Machine</h3>
                                    <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                                </div>
                                <p>A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                <p>The tablet compressional machine is an electromechanical device that used compression force to transform powder in tablets of uniform sizes and thickness. The tablet making process involves using ‘die’ and ‘punches’ to fuse different powder particles to form a solid substance. The force of compression is delivered by high pressure compression rolls which fuse the granulated material together into a hard tablet.</p>
                                <div className="blockquote-wrapper">
                                    <div className="blockquote">
                                        <h1>
                                        Our multi-award winning software applications are aimed at revolutionizing the training discipline within the manufacturing domain of various industries by leveraging Augmented, Mixed and Virtual Reality technologies.
                                        </h1>
                                        <h4>&mdash;Raman Talwar<br /><em style={{marginLeft:'8px'}}>Chief Executive Officer, Simulanis</em></h4>
                                    </div>
                                </div>
                                <h4>Problem Statement</h4>
                                <p>The common problem faced by the compression machine operators lies in the understanding of the several complex tasks performed within the compression room.</p>
                                <p>The current training methods used in the industries lack engagement and thereby effectiveness. Conventionally, employees are given a Standard Operating Procedure (SOP) document to read through —in order to ‘learn’ the steps of operating a complex machinery. Employees are also shown PowerPoint slides or safety posters, from which they’re are expected to retain the knowledge using insufficient visual aids over time. Alternatively, training on the shop floor with the actual machine is conducted in batches. This is however only in done in rare occasions which thereby deminishes its effectiveness.</p>
                                <p>The compression machine operation requires special care and caution in assembling and dismantling of machine parts. One mistake can degrade the product quality and can impact the operator safety by causing life threatening accidents.</p>
                                <h4>Complexities Involved</h4>
                                <p>A tablet compression machine is an assembly of many different parts that coordinate to perform a desired function.. So, assembling all the removable parts before the start of operation can be difficult task to perform.</p>
                                <p>Tableting process involves precise filling and compression of powder in the cavity. The exact depth of the lower punch can be precisely controlled to meter the amount of powder that fills the cavity. This makes the setting up of the punch and die a very critical step.</p>
                                <p>Furthermore, cleaning of the compression machine is also a very critical task to perform. Material gets built up around the parts which becomes a harduous task to perform.</p>
                                <p>Hence, handling of a tablet compression machine requires a skilled and trained operator.</p>
                                <h4>Solution</h4>
                                <p>Having expertise over years in terms of creating exceptional VR solutions in the manufacturing sector, specifically, pharmaceuticals sector. Our technical team work closely with our in-house pharma experts to understand the different nuances of the process to deliver a Virtual Reality hardware based training module on the tablet compression machine to simulate each operating step in-line with the standard SOP.</p>
                                
                                <h4 className="title m-b5">Features</h4>
                                <h5>1. Highly Interactive</h5>
                                <p>Our VR modules are built with the highest levels of interactivity in order to emulate a real life experience and engage the user.</p>
                                <h5 className="title m-b5">2. Multiplayer</h5>
                                <p>Simulanis state of the art multiplayer platform labelled as ‘Simulanis Eagle’ allows multiple trainers and trainees around the world to log in to the same virtual climate simultaneously and interact with each other</p>
                                <h5>3. Built-in analytics & assessments</h5>
                                <p>User activity tracking and in-built assessments at the end of certain tasks allows the ability to measure and asses user performance over a period of time to ensure that learning objectives are met.</p>
                                <h5>4. Visual Instructors</h5>
                                <p>Virtual Instructors to help guide the operators’ learning and understanding of the process as well as provide real time feedback.</p>
                                <h4 className='mb-3'>Advantages Pharma VR</h4>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Faster Learning</Accordion.Header>
                                        <Accordion.Body>
                                            The experiential training of AR/MR solutions gives real time-feedback, improve efficiency of skills transfer, increases knowledge retention and better captures enterprise within an organization.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> Reduce Cost </Accordion.Header>
                                        <Accordion.Body>
                                            As employees are able to learn faster, the time taken to train an individual is significantly reduced, thus reducing cost. The simulation of training also allows for resource efficiency.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>  Enhance Safety </Accordion.Header>
                                        <Accordion.Body>
                                            Practice in a ‘risk free’ environment which can reduce the accidental cases and number of safety violations.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>  Greater Engagemnet </Accordion.Header>
                                        <Accordion.Body>
                                            This form of experiential training follows a learn by doing’ philosophy and requires the user to actively participate at every point of the session, this results in higher retention rates and better acquisition of skills.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>   Increase Motivation </Accordion.Header>
                                        <Accordion.Body>
                                            This novel and fun method of training motivates employees to practice and learn.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>  Performance Assessments</Accordion.Header>
                                        <Accordion.Body>
                                            VR/MR systems easily collects a wide set of data about the trainees’ performance, to check, assess and calibrate the training process. The data is then transmitted to company’s internal records keeping systems for certification or administrative action.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                            <div className="col-lg-5">
                                <div className="row sp4 magnific-image sticky-top">
                                    <div className="action-card col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="portfolio-box style-2">
                                            <div className="portfolio-media">
                                                <img src={case1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action-card col-lg-6 col-md-6 col-sm-6 col-12  industrial">
                                        <div className="portfolio-box style-2">
                                            <div className="portfolio-media">
                                                <img src={case2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action-card col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <div className="portfolio-box style-2">
                                            <div className="portfolio-media">
                                                <img src={case3} alt="" style={{height:'inherit'}} />
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

export default CompressionMachine