import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/use_cases.jpg';
import { Link } from 'react-router-dom';
import factory_workshop from '../../../assets/images/use__cases/opr/factory_workshop.jpg';
import remote from '../../../assets/images/use__cases/remote/recorder.jpg';
import hsafety from '../../../assets/images/use__cases/health_safety/health-&-safety.jpg';
import smanufacturing from '../../../assets/images/use__cases/smart_manufacture/smart_manufacturing.jpg';
import smarttraining from '../../../assets/images/use__cases/smart-training/ty-banner.jpg';
import vr from '../../../assets/images/use__cases/maintenanceRepair/vr.jpg';
import mubanner from '../../../assets/images/use__cases/multiuser/mubanner.jpg';
 
export class Application extends Component {
  render() {
	const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);
	
    return (
      <>
          <Helmet>  
            <title>Simulanis Applications</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content bg-white">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Application" title="Application" />
			</div>
        </div>   
        <div className="content-block">
				<div className="section-area bg-grey">
					<div className="container">
						<div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={factory_workshop} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Operational Efficiency</h3>
									</div>	
										<p>Achieve operational efficiency with immersive technologies at your disposal. Prepare your employees well for any exigencies at work.</p>
									<Link to="/operational_eftficiency" className="btn radius-xl">Know More</Link>
								</div>
							</div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={remote} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Remote Assistance</h3>
									</div>	
									<p>Now share progress and interact with team members, clients and customers directly. Speed up the troubleshooting process.</p>
									<Link to="/remote-assist_application" className="btn radius-xl">Know More</Link>
								</div>
							</div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={hsafety} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Health & Safety</h3>
									</div>	
									<p>Transform your health and safety at workplace by deploying top of the line technologies for various on-boarding processes and SOPs.</p>
									<Link to="/health-and-safety" className="btn radius-xl">Know More</Link>
								</div>
							</div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={smanufacturing} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Smart Manufacturing</h3>
									</div>	
									<p>Transform your businesses digitally with meaningful KPIs & trackers in place. Reduce the time to go to market and scale effectively.</p>
									<Link to="/smart-manufacturing" className="btn radius-xl">Know More</Link>
								</div>
							</div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={vr} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Maintenance & Repair</h3>
									</div>	
									<p>Simplify your maintenance and repair jobs with digital assets. Reduce error rates and time to fix with the help of engaging visualization tools</p>
									<Link to="/maintenance_&_repair" className="btn radius-xl">Know More</Link>
								</div>
							</div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={smarttraining} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Smart Training</h3>
									</div>	
									<p>Increase retention rates, reduce costs, and deliver effective content modules for learning and development purposes, even remotely now.</p>
									<Link to="/smart-training" className="btn radius-xl">Know More</Link>
								</div>
							</div>
							<div className="service-img-bx">
								<div className="service-media">
									<div className="video-media-bx">
										<div>
											<img src={mubanner} alt=""/>
										</div>
									</div>
								</div>
								<div className="service-info">
									<div className="title">
										<h3>Multi-user Collaboration</h3>
									</div>	
									<p>Significantly boost the productivity at the workplace with multi-user collaboration. Teams can now tackle difficult challenges at ease.</p>
									<Link to="/multi-user-collaboration" className="btn radius-xl">Know More</Link>
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

export default Application