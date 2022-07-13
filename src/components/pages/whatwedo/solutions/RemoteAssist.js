import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../navbar/Breadcrumb';
import Banner1 from '../../../../assets/images/whatwedo/assist/b-2.jpg'
// Images
import AboutPic12 from "../../../../assets/images/whatwedo/assist/aboutassist1.jpg"
import AboutPic13 from "../../../../assets/images/whatwedo/assist/aboutassist.jpg"
import fieldsupport from "../../../../assets/images/whatwedo/assist/banner_onfiled.jpg"
import myassist from '../../../../assets/images/whatwedo/assist/My-Assist.png'
import myrecorder from '../../../../assets/images/whatwedo/assist/My-Recorder.png'
import myviewer from '../../../../assets/images/whatwedo/assist/My-Viewer.png'
import myworkflow from '../../../../assets/images/whatwedo/assist/My-Workflow.png'
import lrc from '../../../../assets/images/whatwedo/assist/features/Live-Remote.png'
import ar from '../../../../assets/images/whatwedo/assist/features/Augmented-Reality.png'
import Evidence from '../../../../assets/images/whatwedo/assist/features/Evidence.png'
import Checklists from '../../../../assets/images/whatwedo/assist/features/Checklists.png'
import rg from '../../../../assets/images/whatwedo/assist/features/Report-Generation.png'
import Productivity from '../../../../assets/images/whatwedo/assist/features/Productivity.png'
import qda from '../../../../assets/images/whatwedo/assist/features/Document.png'
import Workflows from '../../../../assets/images/whatwedo/assist/features/Workflows.png'
import whyra from '../../../../assets/images/whatwedo/assist/r_ban2.png'
import Inspection from '../../../../assets/images/whatwedo/assist/useacrossectors/inspection.png';
import audits from '../../../../assets/images/whatwedo/assist/useacrossectors/audits.png';
import trainings from '../../../../assets/images/whatwedo/assist/useacrossectors/trainings.png';
import operations from '../../../../assets/images/whatwedo/assist/useacrossectors/operations.png';
import maintenance from '../../../../assets/images/whatwedo/assist/useacrossectors/maintenance.png';
import database from '../../../../assets/images/whatwedo/assist/useacrossectors/database.png';
import Appointment2 from '../../../appointment/Appointment2';


export class RemoteAssist extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
         <Helmet>  
            <title>Simulanis Remote Assist</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Remote Assistance" title="Remote Assistance" />
			</div>
		</div> 
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40">
                        <div className="heading-bx" data-aos={"fade-up"} data-aos-delay="150">
                            <h6 className="title-ext mb-2">What is</h6>
                            <h2 className="title-head m-b0">Simulanis Remote Assistance</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Simulanis Remote Assist is a cross-platform industry 4.0 productivity application, equipped with a plethora of digital features that provide quick and effective assistance for on-site workers to efficiently perform their tasks. </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="200">
                                <div className="assistbox">
                                    <img src={myassist} alt="" />
                                    <h5>My Assist</h5>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="250">
                                <div className="assistbox">
                                    <img src={myworkflow} alt="" />
                                    <h5>My Workflow</h5>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="300">
                                <div className="assistbox">
                                    <img src={myviewer} alt="" />
                                    <h5>My Docs</h5>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="350">
                                <div className="assistbox">
                                    <img src={myrecorder} alt="" />
                                    <h5>My Recorder</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row sp15">
                            <div className="col-sm-6 col-6 m-t80" data-aos={"fade-up"} data-aos-delay="200">
                                <img src={AboutPic12} alt=""/>
                            </div>
                            <div className="col-sm-6 col-6" data-aos={"fade-up"} data-aos-delay="300">
                                <img src={AboutPic13} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="200">
                        <img src={fieldsupport} alt="" />
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="300">
                        <h6 className="title-ext mb-2">Reduce Downtime with</h6>
                        <h2 className='title-head m-b0'> Instant and Effective On-Field Support</h2>
                        <span className="hr-secondary my-2" style={{marginLeft:'30px'}}></span>
                        <p>‘My Assist’ enables you to video call your technical experts who can effectively guide you through the troubleshooting process by placing live markers or annotations on your existing field of view.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-area wwedo section-sp2">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="heading-bx text-center">
                          <h2 className="title-head m-b0">Features</h2>
                          <span className="hr-secondary"></span>
                      </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="150">
                        <ul className="service-list-circle">
                            <li><i><img src={lrc} alt="" /></i>
                                <h6>Live Remote Collaboration</h6>
                                <p>Enable on-site workers to stay connected with technical experts via real-time audio/video conferencing for faster resolution of critical issues.</p>
                            </li>
                            <li><i><img src={ar} alt="" /></i>
                                <h6>Powered by Augmented Reality</h6>
                                <p>Draw AR annotations that “stick” to real-world objects during a live video call for better communication and understanding.</p>
                            </li>
                            <li><i><img src={Evidence} alt="" /></i>
                                <h6>Capture Operator Inputs & Evidence</h6>
                                <p>Checks, values, answers to MCQ’s or evidence in the form of images and videos can be easily logged on within the executed workflow</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="250">
                        <ul className="service-list-circle">
                            <li><i><img src={Checklists} alt="" /></i>
                                <h6>Digital Workflows & Checklists</h6>
                                <p>Replace paper-based SOPs with step-by-step digital instructions to reduce errors and enhance standard of work across the shop-floor.</p>
                            </li>
                            <li><i><img src={rg} alt="" /></i>
                                <h6>Report Generation</h6>
                                <p>Workflow details are automatically captured and presented in individual worker reports for swift assessment and evaluation.</p>
                            </li>
                            <li><i><img src={Productivity} alt="" /></i>
                                <h6>Hands-Free Productivity</h6>
                                <p>Integration on voice-command enabled Smart Glasses makes operations effortless and with fewer errors.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="350">
                    <ul className="service-list-circle">
                            <li><i><img src={qda} alt="" /> </i>
                                <h6>Quick Document Access</h6>
                                <p>All essential guidance data such as process manuals, videos and drawings can be instantly accessed when most needed.</p>
                            </li>
                            <li><i><img src={Workflows} alt="" /></i>
                                <h6>Author & Assign Complex Workflows</h6>
                                <p>Create robust hierarchical workflows and prescribe to different workers, without any coding.</p>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="col-md-4">
                        <img src={features} className="radius-sm heightfet m-b30" alt=""/>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="200">
                        <h2 className='title-head m-b0'>Why Remote Assist?</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                        <h5 className="title mt-3 m-b4"> Get Rid of Paper Minimise Human Error Go Digital</h5>
                        <p className='mb-3'>Transforming on-site paper-based procedures with digital instructions that guide you through the process, enhancing productivity and reducing risk of error.</p>
                        <h5 className="title m-b4">  Immediate hassle-free access to all your documents</h5>
                        <p className='mb-3'>Store images, pdf files, videos, 3D drawings, SOP’s and other forms of data essential to your work using the “My Docs” feature.</p>
                        <h5 className="title m-b4"> Record. Store. Review.</h5>
                        <p className='mb-3'>The my recorder feature allows you to record videos and store it for future assistance in case instant support isn’t available. You can then share it with your colleagues or SME’s for review.</p>
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="350">
                        <img src={whyra} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="section-area section-sp2">
            <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="heading-bx text-center">
                          <h2 className="title-head m-b0">Use Cases Across Sectors</h2>
                          <span className="hr-secondary"></span>
                      </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-4 m-b30" data-aos={"fade-up"} data-aos-delay="100">
                        <div className="client-logo border-1 text-center p-a20 bg-white">
                            <Link to="#">
                                <img src={Inspection} alt=""/>
                                <h4 className="mt-4">Inspection</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 m-b30" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="client-logo border-1 text-center p-a20 bg-white">
                            <Link to="#">
                                <img src={maintenance} alt=""/>
                                <h4 className="mt-4">Maintenance</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 m-b30" data-aos={"fade-up"} data-aos-delay="300">
                        <div className="client-logo border-1 text-center p-a20 bg-white">
                            <Link to="#">
                                <img src={operations} alt=""/>
                                <h4 className="mt-4">Operations</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 m-b30" data-aos={"fade-up"} data-aos-delay="400">
                        <div className="client-logo border-1 text-center p-a20 bg-white">
                            <Link to="#">
                                <img src={trainings} alt=""/>
                                <h4 className="mt-4">Trainings</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 m-b30" data-aos={"fade-up"} data-aos-delay="500">
                        <div className="client-logo border-1 text-center p-a20 bg-white">
                            <Link to="#">
                                <img src={audits} alt=""/>
                                <h4 className="mt-4">Audits</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 m-b30" data-aos={"fade-up"} data-aos-delay="600">
                        <div className="client-logo border-1 text-center p-a20 bg-white">
                            <Link to="#">
                                <img src={database} alt=""/>
                                <h4 className="mt-4">Database</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-grey">
            <Appointment2 pageName="Remote Assist"/>
        </div>
      </>
    )
  }
}

export default RemoteAssist