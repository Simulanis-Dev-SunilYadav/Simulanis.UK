import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/remote/assist.jpg';
import mydocs from '../../../assets/images/use__cases/remote/mydocs.jpg';
import remoteassist from '../../../assets/images/use__cases/remote/remoteassist.jpg'
import assist from '../../../assets/images/use__cases/remote/assist.jpg'
import AplicationSidebar from './AplicationSidebar';


export class RemoteAssistApplication extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
        <div className="page-content bg-white">
            <Helmet>  
                <title>Simulanis Remote Assistance Application</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Remote Assistance" title="Remote Assistance" />
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
                                    <h3 className="title-head m-b0">Remote Assistance</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>Now enable operators to see through the eyes of the expert, so as to simplify the entire troubleshooting process, or to smartly guide each other to achieve task completion in record time, eventually helping businesses in tackling the daily challenges and maintaining smooth flow of operations at ease.</p>
                                <h4 className="title mt-3">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Fix the downtime rates at your facilities</li>
                                            <li>Tackle the challenge of the ageing workforce</li>
                                            <li>Increase the ROI significantly for your businesses</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Reduce the fix rates during troubleshooting process by enabling remote collaboration</li>
                                            <li>Reduce travel costs via tech enabled remote inspections</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={mydocs} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title">Features</h4>
                                <div className="row">
                                    <div className="col-xl-7 col-lg-12">
                                        <ul className="list-check">
                                            <li>Collaboration platform with AR enabled modules</li>
                                            <li>Increase productivity in the workplace</li>
                                            <li>Access from anywhere with cross-device compatibility</li>
                                            <li>Video recording and sharing options with multiple users</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-5 col-lg-12">
                                    </div>
                                </div>

                                <div className='sneakpeak'>
                                    <h4>Sneak Peak to Simulanis Remote Assist</h4>
                                    <div className='row mt-3'>
                                        <div className='col-md-7'>
                                            <h5>1. My Assist</h5>
                                            <p>Seamlessly video call/message your technical experts who can effectively guide you through the troubleshooting process by placing live markers or annotations on your existing field of view.</p>
                                            <h5>2. My Docs</h5>
                                            <p>Store images, pdf files, videos, 3D drawings, SOP’s and other forms of data essential to your work for quick access while carrying out tasks.</p>
                                            <h5>3. My Recorder</h5>
                                            <p>Record videos on-the-go and store it for future assistance in case instant support isn’t available.</p>
                                            <h5>4. My Workflow</h5>
                                            <p>Transform on-site paper-based procedures with digital instructions that guide you through the process, enhancing productivity and reducing risk of error</p>
                                        </div>
                                        <div className='col-md-5'>
                                             <img src={remoteassist} />
                                             <img className='mt-2' src={assist} />
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

export default RemoteAssistApplication