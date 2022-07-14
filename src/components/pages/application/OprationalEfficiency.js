import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/opr/factory_workshop.jpg';
import ServicesPic2 from '../../../assets/images/use__cases/opr/industrial-operation-HU.jpg';
import ServicesPic1 from '../../../assets/images/use__cases/opr/XR-content-image.png';
import Manpower from '../../../assets/images/use__cases/opr/Manpower.png';
import Machines from '../../../assets/images/use__cases/opr/Machines.png';
import Materials from '../../../assets/images/use__cases/opr/Materials.png';
import Metrics from '../../../assets/images/use__cases/opr/Metrics.png';
import Missions from '../../../assets/images/use__cases/opr/Missions.png';
import AplicationSidebar from './AplicationSidebar';

export class OprationalEfficiency extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
        <div className="page-content bg-white">
            <Helmet>  
                <title>Operational Efficiency</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Operational Efficiency" title="Operational Efficiency" />
                </div>
            </div>   
            
            <div className="content-block">
                <div className="section-area section-sp2 bg-fix bg-grey">
                    <div className="container about-video">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 m-b30">
                                <AplicationSidebar />	
                            </div>
                            <div className="col-lg-8 col-md-7 service-textarea applicationd portfolio-content">
                                <div className="heading-bx text-left m-b20">
                                    <h3 className="title-head m-b0">Operational Efficiency</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>Businesses today are moving at a great pace. Even in times of distress, like the one created amidst the current Covid-19 scenario, there is a great need to propel businesses to produce and match the demands of the customers at all times. There is an increased pressure on businesses to sustain themselves both financially and operationally.</p>
                                <p>It has become very important for businesses to scale effectively while ensuring that their employees are always equipped to handle the tasks at work with ease. The element of Learning, Improvement and Adaptation is very critical for businesses to transform their processes and flows to eventually achieve success.</p>
                                <p>That is where AR, VR, MR and XR come in handy for businesses to deploy large-scale technological developments to improve their operational efficiencies.</p>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={ServicesPic1} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title m-b5">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Opportunity to optimizeprocesses.</li>
                                            <li>Enable faster decision making process.</li>
                                            <li>Ensure speed of scaling up from lab to mass production.</li>
                                            <li>Increase accuracy while conducting operations.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Help maintain cost-effectiveness.</li>
                                            <li>Experience reduced assembly time.</li>
                                            <li>Reduced downtime of equipment.</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title mb-4">The 5 M model for use of AR, VR, MR  and XR ready modules</h4>
                                <div className="row">
                                    <div className="col-xl-7 col-lg-12">
                                        <ul className="service-list-circle">
                                            <li><i><img src={Manpower}/></i>
                                                <h6>Manpower</h6>
                                                <p>You can now enhance the learning of your "Manpower"</p>
                                            </li>
                                            <li><i><img src={Machines}/></i>
                                                <h6>Machines</h6>
                                                <p>Transform the way your employees interact with the "Machines"</p>
                                            </li>
                                            <li><i><img src={Materials}/></i>
                                                <h6>Materials</h6>
                                                <p>Now track the "Materials"and aid your design stage processes</p>
                                            </li>
                                            <li><i><img src={Metrics}/></i>
                                                <h6>Metrics</h6>
                                                <p>Get in-depth analysis and track all the "Metrics"at ease to increase</p>
                                            </li>
                                            <li><i><img src={Missions}/></i>
                                                <h6>Missions</h6>
                                                <p>Now it becomes relatively easier for the businesses to align their "Missions"</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-5 col-lg-12">
                                        <img src={ServicesPic2} className="radius-sm m-b30" alt=""/>
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

export default OprationalEfficiency