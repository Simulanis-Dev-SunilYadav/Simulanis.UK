import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/use__cases/smart-training/banner.jpg';
import vr from '../../../assets/images/use__cases/smart-training/Enhanced-Training.jpg';
import industries from '../../../assets/images/use__cases/smart-training/industries.png';
import gbased from '../../../assets/images/use__cases/smart-training/gamification-based.png';
import ienabled from '../../../assets/images/use__cases/smart-training/Interactivity-enabled.png';
import hsmart from '../../../assets/images/use__cases/smart-training/HMDs-&-Smart.png';
import flremote from '../../../assets/images/use__cases/smart-training/Features-like-Remote.png';

import AplicationSidebar from './AplicationSidebar';

export class SmartTraining extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);

    return (
      <>
         <div className="page-content bg-white">
            <Helmet>  
                <title>Simulanis Smart Training Application</title> 
                <meta name="title" content="" />   
                <meta name="description" content="" />  
                <meta name="keywords" content="" />  
            </Helmet> 
            <div className="page-content bg-white">
                <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
                    <Breadcrumb heading="Smart Training" title="Smart Training" />
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
                                    <h3 className="title-head m-b0">Smart Training</h3>
                                    <span className="hr-secondary" style={{marginLeft: '30px'}}></span>
                                </div>
                                <p>Many businesses have already jumped the ship and have started using AR, VR and XR based tech solutions to help them in their training needs. These technologies help in better recall of the subject matter delivered through immersive and interactive content. By using advanced and Smart Training tools companies now need not to worry about the potential hazards which can occur during real-life trainings. Now they can create a fully virtual environment through VR, and use real-life interactivity features available on various equipment, plant floors and other objects through AR to create an engaging and immersive training solution. XR - or extended reality - helps provide the right mix of AR, VR tools and techniques to provide the right solutions based on your needs.</p>
                                <div className="row py-4">
                                    <div className="col-md-12">
                                        <img src={vr} className="radius-sm imghight" alt=""/>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Typical Use Cases</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>With AR, VR and XR now get a fully immersive, engaging and interactive content delivery.</li>
                                            <li>Redefine conventional training methodologies with the help of digital transformation tools and techniques.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-check">
                                            <li>Now design your own courses on these platforms and deliver trainings to suit your needs anytime.</li>
                                            <li>Now companies spread across various industries can meet their worker training requirements at significantly reduced costs.</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title mt-3">Multiple Industries, One Solution</h4>
                                <div className="row mt-4 hsafetypb">
                                    <div className="col-xl-7">
                                        <h4>70-20-10 Model</h4>
                                        <p className='text-start'>More than 70% learning takes place while learning on the job through experiential learning. With the right offerings in AR, VR and now XR domain, redefine the way you train your employees while at the same time ensuring cost-effective solutions. Ensure enhanced retention rates, lesser error rates, increased productivity, greater employee satisfaction and increased profits.</p>
                                    </div>
                                    <div className="col-xl-5">
                                        <img src={industries} style={{width:'100%', height:'255px'}}/>
                                    </div>
                                    <div className="col-xl-12">
                                        <h4>Suitable for any Industrial sector</h4>
                                        <p className='text-start'>Be it Manufacturing industry with sectors ranging from textiles, metals, petroleum, chemicals, electronics, transportation, automobile, FMCG, along with the Education Industry, Oil and Gas Industry as a whole, the solutions can be tailor made and customized for any given industry to transform the way learners consumer knowledge.</p>
                                    </div>
                                </div>

                                <h4 className='mt-3'>Simulanis Smart Training Procedure</h4>
                                <div className='row mt-3'>
                                    <div className="col-xl-3 px-md-2">
                                        <div className='pbox smtrbox'>
                                            <img src={gbased}/>
                                            <p>Gamification based Learning Models available to be deplayed at Scale</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-md-2">
                                        <div className='pbox smtrbox'>
                                            <img src={ienabled}/>
                                            <p>Interactivity enabled AR-VR Content Modules to Speed up the Training</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-md-2" >
                                        <div className='pbox smtrbox'>
                                            <img src={hsmart}/>
                                            <p>HMDs & Smart Gadgets available to Collaborate with Multiple Stakeholders</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 px-md-2s">
                                        <div className='pbox smtrbox'>
                                            <img src={flremote}/>
                                            <p>Features like Remote Assist with integration of Live tools like 2-Way Annotations</p>
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

export default SmartTraining