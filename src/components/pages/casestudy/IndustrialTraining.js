import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import {Accordion} from 'react-bootstrap';
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/case_study/Vr.jpg';
import case1 from '../../../assets/images/case_study/industrail.jpg';
import case2 from '../../../assets/images/case_study/oil&gas.jpg';
import case3 from '../../../assets/images/case_study/automotive.jpg';
import case4 from '../../../assets/images/case_study/sealing.jpg';
import case5 from '../../../assets/images/case_study/1.jpg';



export class IndustrialTraining extends Component {
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
              <Breadcrumb heading="Industrial Training" title="Industrial Training" />
            </div>
            <div className="section-area section-sp2 bg-grey port-7-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="heading-bx text-left m-b15">
                                <h3 className="title-head m-b0">Introduction</h3>
                                <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            </div>
                            <p>A Fortune 100 company—a global conglomerate, and an industry leader, approached Simulanis as they wanted a VR solution for a training issue they were having in one of their gas plants. The project would be a ‘POC’ for the client’s investors and stakeholders and a start of a long, lucrative relationship if successful.</p>
                            <p>The client wanted a more efficient way to train their employees on the transducer replacement operation of an Ultrasonic Flow Meter installed on the pressurized line of hydrocarbon gas. The retraction tool used for the replacement was extremely delicate and costly, and therefore must be handled with utmost care. The procedure was furthermore extremely complex due to the extensive number of steps involved (approx. 60) and dangerous if not handled with special care and caution.</p>
                            <p>One small mistake can release highly flammable gas into the environment and expose the individuals to the hydrocarbons which can be extremely hazardous to human health.</p>
                            <p>The current training method i.e. classroom training was ineffective as it lacked engagement, practicality and required training personal to be present to all the time which would also implicate higher costs.</p>

                            <h4>Simulanis Oil And Gas VR Solution</h4>
                            <p>Having expertise in creating exceptional VR solutions for the manufacturing sector and working with such reputable client our team approached this project with great zeal and enthusiasm. Within days after receiving the brief and finalizing the scope, our technical team flew out abroad to visit the plant and gather the data required to kick-start the project. We worked very closely with client’s team to understand the complex range of steps to the procedure, convert them in to Virtual Reality and Mixed Reality, and ensure that they are in-line with the maintenance module and standard operating procedures on-site as well as provides the user a realistic and effective training experience. Following a pedagogical approach we also embedded the module with advanced analytics to capture the user behaviour and measure performance. A report for each user-play was generated and stored on server for further analysis. To ensure a timely delivery, the team used a lean-management approach to the project and worked exceptionally hard to deliver the final output within the proposed deadlines.</p>
                            
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Results and Feedback</Accordion.Header>
                                    <Accordion.Body>
                                        The final output on both platforms were delivered within the proposed timelines and presented personally to the client by the CEO. The delivery had been a success which exceeded the client’s expectations in terms of the quality and level of interactions involved. The client appreciated the team’s hardwork, proactive attitude and were particularly impressed at how we managed to deliver such a quality output in ‘record time’. The work was then selected to be presented to the client’s President, Investors and Stakeholders. Following are some of the quotations from the client’s feedback:
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>  Improved Safety   </Accordion.Header>
                                    <Accordion.Body>
                                        Incidents such as accidental cases and near misses reduced enormously. The usage of Simulanis’ VR training solution also brought down the number of safety violations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>   Faster Learning and resource efficient</Accordion.Header>
                                    <Accordion.Body>
                                    The virtual reality simulation allowed trainees to fasten up processes that would otherwise take hours, hence there was significant reduction in training time. Furthermore, lesser resources were employed since many of the processes were simply simulated in the virtual environment leading to resource efficiency and lesser cost spent on overall training.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>  Self - led training program </Accordion.Header>
                                    <Accordion.Body>
                                    On the Job Trainings in the Industries requires trainer to train the employees. PharmaVR is a self-led training program which works on ‘Do It Yourself’ approach and it enabled site trainees to learn new things by themselves.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>  Personalized </Accordion.Header>
                                    <Accordion.Body>
                                    Trainees can often miss out on a lot of concepts when being trained in bulk. Courtesy Pharma VR, people with different skill set can experience and utilize the training product in their own way. The ease of use of the product allows one training product to be used by multiple users on-site.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>   Increased engagement </Accordion.Header>
                                    <Accordion.Body>
                                    The Trainees started showing engagement and excitement from the first day when it was installed on-site. Learning was self-initiated by the trainees who engaged with the training product even in their free time.
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
                                <div className="action-card col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="portfolio-box style-2">
                                        <div className="portfolio-media">
                                            <img src={case4} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="action-card col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="portfolio-box style-2">
                                        <div className="portfolio-media">
                                            <img src={case5} alt=""/>
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

export default IndustrialTraining