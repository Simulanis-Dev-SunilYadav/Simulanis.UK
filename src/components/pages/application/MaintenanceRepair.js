import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/maintenanceRepair/Maintainance.jpg';
import humanErrors from '../../../assets/images/use__cases/maintenanceRepair/humanErrors.png';
import rdowntime from '../../../assets/images/use__cases/maintenanceRepair/rdowntime.png';
import ifisrates from '../../../assets/images/use__cases/maintenanceRepair/ifisrates.png';
import increasedCompilance from '../../../assets/images/use__cases/maintenanceRepair/increasedCompilance.png';
import enhancedoperations from '../../../assets/images/use__cases/maintenanceRepair/enhancedoperations.png';
import iprofit from '../../../assets/images/use__cases/maintenanceRepair/iprofit.png';
import ioverallproductivity from '../../../assets/images/use__cases/maintenanceRepair/ioverallproductivity.png';
import smarttraining from '../../../assets/images/use__cases/maintenanceRepair/smarttraining.png';
import vr from '../../../assets/images/use__cases/maintenanceRepair/vr.jpg';
import AplicationSidebar from './AplicationSidebar';

export class MaintenanceRepair extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
         <div className="page-content bg-white">
            <Helmet>  
                <title>Simulanis Maintenance & Repair Application</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Maintenance & Repair" title="Maintenance & Repair" />
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
                                    <h3 className="title-head m-b0">Maintenance & Repair</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>With AR, VR, MR and XR technologies now redefine your strategies to equip your business and make it Industry 4.0 ready. For instance, AR technology helps to provide an interface between the real and virtual world with the help of computer generated superimposed virtual images by projecting in the real world environment through smart gadgets. With VR you get a fully immersive experience while using smart wearables such as HMDs, Smart Glasses, etc. These have potential applications in the Maintenance and Repair jobs while trying to overhaul the entire plant setup or various equipment thereunder.</p>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={vr} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Maintain your assets with the help of AR and VR based technologies helping you digitally transform your business.</li>
                                            <li>Streamline maintenance procedures with the help of AR helping you view virtual & real-time information.</li>
                                            <li>XR solutions, simplify the way you conduct inspections.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>With the help of remote assist now complete the tasks at hand during maintenance and repair in record time.</li>
                                            <li>Help your employees transition towards becoming experts while ensuring reduction in the training costs.</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Benefits of deploying AR, VR, MR and XR technologies to help you during the maintenance and repair jobs</h4>
                                <div className="row mt-4 hsafetypb">
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={humanErrors}/>
                                            <p>Reduced Human Errors</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={rdowntime}/>
                                            <p>Reduced Downtime in Plants</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={ifisrates}/>
                                            <p>Reduced Human Errors</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={increasedCompilance}/>
                                            <p>Increased Fix Rates Significantly</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={enhancedoperations}/>
                                            <p>Enhanced Operations</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={iprofit}/>
                                            <p>Increased Profit Margins</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={ioverallproductivity}/>
                                            <p>Increased Overall Productivity</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className='pbox'>
                                            <img src={smarttraining}/>
                                            <p>Smart Training Solutions</p>
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

export default MaintenanceRepair