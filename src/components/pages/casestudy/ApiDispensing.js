import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import {Accordion} from 'react-bootstrap';
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/case_study/compressinemachine1.jpg';
import case1 from '../../../assets/images/case_study/compressinemachine1.jpg';
import case3 from '../../../assets/images/case_study/compint.jpg';
import case2 from '../../../assets/images/case_study/hsafety.jpg';


export class ApiDispensing extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    
    return (
      <>
        <Helmet>  
            <title>API Dispensing</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="API Dispensing" title="API Dispensing" />
            </div>
            <div className="section-area section-sp2 bg-grey port-7-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="heading-bx text-left m-b15">
                                    <h3 className="title-head m-b0">About the Product</h3>
                                    <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                                </div>
                                    <p>Our multi-award winning software applications are aimed at revolutionizing the training discipline within the manufacturing domain by leveraging Virtual Reality technology.</p>
                                    <p>Our current products are typically targeted at operators and engineers, working in the different manufacturing areas, to help them get effectively trained on handling dangerous equipment and processes through our cuttingedge Virtual Reality applications.</p>
                                <div className="blockquote-wrapper">
                                    <div className="blockquote">
                                        <h1>
                                        “Human error and unsafe behavior may account for as high as 30–40% of industrial accidents, including those caused by inexperienced and unskilled workers.”
                                        </h1>
                                        <h4>Organization for Economic Cooperation <br/> <span style={{marginLeft:'-10px'}}> and Development</span> </h4>
                                    </div>
                                </div>
                                <h4>In Simple Terms</h4>
                                <p>To convert any existing manufacturing plant to a fully maneuverable 3D environment and gamify the steps typically enlisted in a SOP document, to give trainees and plant operators a real-time experience of practically performing the steps instead of plainly reading them in a word document. The VR technology provides the real-like experience in a virtual world and the user learns by doing it approach. The in-built analytics assesses the user and provide their detailed report, which otherwise is not possible.</p>
                                <h4>Cost-effective, safer, engaging and faster training</h4>
                                <p>The virtual reality game built on top of simulation developed by Simulanis has helped the site to train its employees in a noticeably more efficient manner.</p>

                                <h4>Problem</h4>
                                <p>Client was finding it difficult to train the employees on the operation of Isolator as it’s extremely dangerous if not operated with special care and caution. One small mistake can expose the trainee and the trainer to the API (OHC-5) which is extremely hazardous to human health.</p>
                                <p>The usual process was slow, required a training personnel all the time, was not very engaging and involved higher costs. The training usually took place in batches of 20 which was often unsuitable given the varying degrees of learning pace, experience and understanding of the trainees.</p>
                                
                                <h4 className="title m-b5">Root cause</h4>
                                
                                <p>Training received by the operators was not effective and engaging, for them to perform the task. The steps enlisted in the SOP were too complex for them to retain and confidently perform the task. Furthermore, the SOP (Standard Operating Process) was presented in a textbook-ish manner to the trainees which saw considerable low engagement rates.</p>
                               
                               <h4>What We Did</h4>
                               <p>Having expertise over years in terms of creating exceptional VR solutions in the manufacturing sector, specifically, pharmaceuticals sector. Our pharma experts went to the site and closely worked with the site team to understand the different nuances of the process to deliver a PC based VR training module to gamilfy each operating steps in-line with standard SOP.</p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Improved Safety</Accordion.Header>
                                        <Accordion.Body>
                                            Incidents such as accidental cases and near misses reduced enormously. The usage of Simulanis’ VR training solution also brought down the number of safety violations.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> Faster Learning and resource efficient  </Accordion.Header>
                                        <Accordion.Body>
                                        The virtual reality simulation allowed trainees to fasten up processes that would otherwise take hours, hence there was significant reduction in training time. Furthermore, lesser resources were employed since many of the processes were simply simulated in the virtual environment leading to resource efficiency and lesser cost spent on overall training.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>  Self - led training program</Accordion.Header>
                                        <Accordion.Body>
                                        On the Job Trainings in the Industries requires trainer to train the employees. PharmaVR is a self-led training program which works on ‘Do It Yourself’ approach and it enabled site trainees to learn new things by themselves.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>  Personalized </Accordion.Header>
                                        <Accordion.Body>
                                            Trainees can often miss out on a lot of concepts when being trained in bulk. Courtesy Pharma VR, people with different skill set can experience and utilize the training product in their own way. The ease of use of the product allows one training product to be used by multiple users on-site.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>   Increased engagement </Accordion.Header>
                                        <Accordion.Body>
                                        The Trainees started showing engagement and excitement from the first day when it was installed on-site. Learning was self-initiated by the trainees who engaged with the training product even in their free time.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <h4 className='mt-3'>Feedback </h4>
                                <p>We wanted to have a gamified model of our complete shop floor and reached out to Simulanis. The Simulanis team was proactive from day one and understood our complex requirements very well. The idea was well received even before execution as we could see our people engaging to develop the storyline and product from the very beginning. In fact, our H.R. head was surprised too, after witnessing how we have changed the dimensions of training at our site learning zone. We have been able to enroll 100% of the targeted audience for the module that have been created.</p>

                                <h4>The Virtual Reality Advantage</h4>
                                <p>The advancements in the field of Virtual Reality (VR) and Mixed Reality (MR) have allowed newer solutions to be built that can make the training process in the manufacturing and related processes much more efficient. VR/MR tools are considered reliable solutions to train operators of various machinery, at least, for three main reasons</p>
                                <ul className='list-check'>
                                    <li>First, after the initial investment to acquire the systems, and the maintenance costs, VR/MR tools reduce the overall training costs.</li>
                                    <li>Second, in line with the learning by doing approach, VR/MR systems allow people to visualize and interact, during a training, with simulated real artefacts. This interactive experience increases the quality of the trainees’ acquisition of the skills. Moreover, these systems offer a good adaptability to the people’s needs and learning style – i.e., personalization – by generally increasing the trainees’ motivation during the training.</li>
                                    <li>Third, practitioners and trainers by VR/MR systems can easily collect a wide set of data about the trainees’ performances, to check, assess and calibrate the training process. In line with that, training with VR/MR tools is considered more powerful and effective than a typical training programme.</li>
                                </ul>

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

export default ApiDispensing