import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/smart_manufacture/smartm.jpg';
import smanufacturing from '../../../assets/images/use__cases/smart_manufacture/smart_manufacturing.jpg';
import vrbased from '../../../assets/images/use__cases/smart_manufacture/vrbased.jpg';
import smartmanufb from '../../../assets/images/use__cases/smart_manufacture/smartmanufb.jpg';
import rcostmulti from '../../../assets/images/use__cases/health_safety/Reduce-Cost-Multipliers.png';
import AplicationSidebar from './AplicationSidebar';

export class SmartManufacturing extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
         <div className="page-content bg-white">
            <Helmet>  
                <title>Simulanis Smart Manufacturing Application</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Smart Manufacturing" title="Smart Manufacturing" />
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
                                    <h3 className="title-head m-b0">Smart Manufacturing</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>It is quite prominent in industries like automotive and agriculture among other industries, to conduct the prototyping from the perspective of designing and process layouts, and so on. There is a need to improve the interaction between the user interface and the equipment for the processes involved. Simulanis will help you leverage the best in class technologies and provide you a seamless integration and novel approach to prototyping using extended reality with a combination of both augmented reality and virtual reality enabled modules.</p>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={smanufacturing} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Improve operations at your facilities while maintaining profitability</li>
                                            <li>Speed up the time to go to market from lab for your products</li>
                                            <li>Empower workers with novel training methods to boost production</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Identify bottlenecks, collaborate at scale during troubleshooting</li>
                                            <li>Speed up the maintenance work and repair activities</li>
                                            <li>Reduce fatalities, accidents and injuries at workplace</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Now get smart prototyping features with the use of AR, VR and Extended Reality based technologies for your Industrial setup. Stay ahead of the Curve !</p>
                                <h4>Two Approaches to Smart Prototyping</h4>
                                <div className='row'>
                                     <div className='col-md-6'>
                                        <div className='prototypingdf'>
                                            <img src={vrbased} />
                                            <p><strong>VR Based -</strong> Using virtual simulations of the physical prototypes being created to create an immersive experience offering in-depth details</p>
                                        </div>
                                     </div>
                                     <div className='col-md-6'>
                                        <div className='prototypingdf'>
                                            <img src={smartmanufb}/>
                                            <p> <strong>AR Based -</strong> Using augmented reality to augment the prototypes by creating interactive and engaging content modules</p>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Features</h4>
                                <p>Other essential areas where you can leverage our offerings for making your business Industry 4.0 ready or transforming it to Industry 4.1 includes:</p>
                                <div className="row mt-4 hsafetypb">
                                    <div className="col-xl-6 col-6">
                                        <div className='pbox'>
                                            <img src={rcostmulti}/>
                                            <h6>Smart Training</h6>
                                            <p>Boost the productivity of your staff, increase their know-how, reduce error rates</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-6">
                                        <div className='pbox'>
                                            <img src={rcostmulti}/>
                                            <h6>Ensuring Profitability</h6>
                                            <p>Reduce your expenses and control costs involved in the operations and training</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-6">
                                        <div className='pbox'>
                                            <img src={rcostmulti}/>
                                            <h6>Reducing GTM</h6>
                                            <p>Reduce the time to scale and time taken to go to market right from lab stage</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-6">
                                        <div className='pbox'>
                                            <img src={rcostmulti}/>
                                            <h6>Quicker Decision Making</h6>
                                            <p>Observe data with interactive dashboards to allow you to take decisions in record time</p>
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

export default SmartManufacturing