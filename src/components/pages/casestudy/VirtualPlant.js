import React, { Component } from 'react'
import {Accordion} from 'react-bootstrap';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/case_study/automotivesealer.jpg';
import case1 from '../../../assets/images/case_study/sealing.jpg';
import case2 from '../../../assets/images/case_study/welding.jpg';
import case3 from '../../../assets/images/case_study/Vr.jpg';

export class VirtualPlant extends Component {
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
              <Breadcrumb heading="Virtual Plant" title="Virtual Plant" />
            </div>
            <div className="section-area section-sp2 bg-grey port-7-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="heading-bx text-left m-b15">
                                <h3 className="title-head m-b0">About the Product</h3>
                                <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            </div>
                            <p>Simulanis’ multi-award winning Augmented Reality (AR), Virtual Reality (VR) and 3D simulation software applications cut across a range of industrial and education sectors, whilst addressing some of the most pressing, skilling and learning challenges.</p>
                            <p>VR plant walkthrough is the 3D simulation of the entire paint manufacturing plant in virtual reality. Simulanis re-created the different blocks of the plant in 3D space with respective animations of the machines to provide complete knowledge to the user.</p>
                            <div className="blockquote-wrapper">
                                <div className="blockquote">
                                    <h1>
                                    Our multi-award winning software applications are aimed at revolutionizing the training discipline within the manufacturing domain of various industries by leveraging Augmented, Mixed and Virtual Reality technologies.
                                    </h1>
                                    <h4>&mdash;Raman Talwar<br /><em style={{marginLeft:'8px'}}>Chief Executive Officer, Simulanis</em></h4>
                                </div>
                            </div>
                            <p>Laced with the highest degree of interactivity and backed by Simulanis proprietary assessmentdriven and trademarked 'SCISSOR' methodology, our product enables the customer to repeatedly play and interactively learn some of the most difficult concepts with ease</p>
                            <p>The VR technology provides reallike experience in a virtual world and the user learns by ‘doing it yourself’ approach. This gives trainees and plant operators a realtime experience of practically performing the steps instead of simply reading them in a SOP.</p>
                            

                            <div className='row'>
                                <div className='col-md-12'>
                                    <h4>Problem</h4>
                                    <p>Since the plant is very vast and involves a lot of complex operations, it took time for any new user to understand the complete operations. Also, it was very difficult for the trainer to provide complete information and show him the actual process happening inside the tanks and pipelines as it’s extremely dangerous if not operated with special care and caution.</p>
                                    <p>Hence, the usual process was slow and took almost 2 months for each user to understand. Also, it required a training personnel all the time and involved higher costs. The training usually took place in batches of 20 which was often unsuitable given the varying degrees of learning pace, experience and understanding of the trainees.</p>
                                    <h4>Complexities Involved</h4>
                                    <p>Being new to the field, understanding and capturing the entire process of the plant in such a short amount of time posed the biggest challenge to the team.</p>
                                    <p>Also, to map the entire plant in 3D, high quality rendered shots of all blocks and equipment housed within the plant had to be captured from all angles.</p>
                                    <p>The PID diagrams shared by the client were also not updated, and hence were not very useful in speeding up the development process.</p>
                                    <h4>Simulanis Plant VR</h4>
                                    <p>Simulanis team visited the plant site and gathered the data required to simulate all the shops, equipment and processes involved in paint manufacturing in the form of technical documents, SOPs, technical diagrams, drawings, photos and videos from all angles.</p>
                                    <p>In addition to creating a 3D environment, the team also animated the equipment (like the packing line) to provide the user with complete knowledge of the plant and an experience as close to reality as possible.</p>
                                    <p>The module so developed allowed the operators to play and learn in a more challenging and complex environment. This in turn, helped them in perfecting their knowledge which was not possible earlier. It provided each user with the same information thus, bridging the gap between the knowledge of the different users.</p>
                                    <p>A Virtual Trainer in the form of a robot was added to the plant to guide the user at every step and explain him the complex concepts in a fun and more interactive manner. At any time, the user could freely maneuver between different shops and learn the process of his choice and will.</p>
                                    <p>Apart from the intuitive instructional design and a visually appealing UI/UX, the main highlight of the module was it’s ‘learn by doing approach’.</p>
                                </div>
                                <div className='col-md-12'>
                                    <h4>Client Feedback</h4>
                                    <p>We wanted to have a gamified model of our complete plant site and thus, reached out to Simulanis. Their team members understood our complex requirements very well and were proactive from day one. The idea was well received even before execution as we could see our people engaging to develop the storyline and product from the very beginning.</p>
                                    <p>To our surprise, the training results of the first batch exceeded all expectations. Not only were they much more confident, skilled, compliant to safety regulations and technically sound as compared to those trained through conventional training methods, but they were also quick learners who required very less on the job training and possessed the ability to easily adapt to their surroundings. The time required to train the operators had also drastically reduced.</p>
                                </div>
                            </div>

                            <h4>Simulanis Plant VR Features</h4>
                            <p>The advancements in the field of Virtual Reality (VR) and Mixed Reality (MR) have allowed newer solutions to be built that can make the training process in the manufacturing and related processes much more efficient. Simulanis AR/VR/MR tools are considered reliable solutions to train operators because of the following reasons:</p>
                            <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Effective</Accordion.Header>
                                        <Accordion.Body>
                                        Our product offering creates a completely immersive, interactive and engaging training experience for the end user and thus results in effective learning to take place.

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>  Higher Retention </Accordion.Header>
                                        <Accordion.Body>
                                        The technology is proven to give higher retention since users learn things by doing themselves. According to Dale’s cone, people generally remember 90% of what they do which gives higher retention.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header> Improved Visualization </Accordion.Header>
                                        <Accordion.Body>
                                        Our VR technology encapsulates 3D models of the equipment / structure, and interactivity built around the models helps the users to visualize things better and makes concepts clearer
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>  Costs </Accordion.Header>
                                        <Accordion.Body>
                                        Our innovative VR Training software reduces the role of the trainer and the equipment on which the operator needs to be trained, thus, reducing the overall cost of the training.
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

export default VirtualPlant