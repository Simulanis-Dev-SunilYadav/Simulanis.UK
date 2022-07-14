import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/health_safety/banner.jpg';
import hsafety from '../../../assets/images/use__cases/health_safety/health-&-safety.jpg';
import CollaborateResolve from '../../../assets/images/use__cases/health_safety/Collaborate-and-Resolve.png';
import rcostmulti from '../../../assets/images/use__cases/health_safety/Reduce-Cost-Multipliers.png';
import errors from '../../../assets/images/use__cases/health_safety/errors.png';
import u3dsimulators from '../../../assets/images/use__cases/health_safety/Use-3D-Simulators.png';
import thredeg from '../../../assets/images/use__cases/health_safety/360-View-of-surroundings.png';
import viewkeyinsights from '../../../assets/images/use__cases/health_safety/View-key-insights.png';
import AplicationSidebar from './AplicationSidebar';

export class HealthSafety extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
          <div className="page-content bg-white">
            <Helmet>  
                <title>Simulanis Health & Safety Application</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Health & Safety" title="Health & Safety" />
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
                                    <h3 className="title-head m-b0">Health & Safety</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>Occupational health and safety legislative policies have been drafted across the globe in almost all the countries. It is really critical from a regulatory point of view that health and safety at the workplace is promoted and acted upon quite diligently.</p>
                                <p>It is necessary for businesses to establish a healthy and safe environment for their staff. At Simulanis, we take pride in successfully helping companies overhaul their processes to ensure that they meet the health and safety guidelines and using cost-effective solutions.</p>
                                <p>With the help of augmented reality, virtual reality and extended reality, businesses can now effectively help maintain the standards as per government guidelines and revamp their processes at scale with easily deployable solutions.</p>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={hsafety} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Revolutionize the way health and safety training is conducted</li>
                                            <li>Using AR you can now boost the Hazard Identification process</li>
                                            <li>Get compliance and risk management related solutions at scale</li>
                                            <li>Use immersive tech to level up your health and safety training</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>With XR tech, workers can now be trained in a safer environment</li>
                                            <li>Reduce accident rates and continuously track worker performance</li>
                                            <li>Get compliance and risk management related solutions at scale</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title">Potential Benefits of AR, VR and XR for Health and Safety</h4>
                                <div className="row mt-4 hsafetypb">
                                    <div className="col-xl-4 col-6">
                                        <div className='pbox'>
                                            <img src={CollaborateResolve}/>
                                            <p>Collaborate and <br/> Resolve</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6">
                                        <div className='pbox'>
                                            <img src={rcostmulti}/>
                                            <p>Reduce Cost <br/> Multipliers</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6">
                                        <div className='pbox'>
                                            <img src={errors}/>
                                            <p>Reduce Error <br/> Rates</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6">
                                        <div className='pbox'>
                                            <img src={thredeg}/>
                                            <p>360° View of <br/> surroundings</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6">
                                        <div className='pbox'>
                                            <img src={u3dsimulators}/>
                                            <p>Use 3D Simulators to  Visualize better</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-6">
                                        <div className='pbox'>
                                            <img src={viewkeyinsights}/>
                                            <p>View key insights and take informed decisions</p>
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

export default HealthSafety