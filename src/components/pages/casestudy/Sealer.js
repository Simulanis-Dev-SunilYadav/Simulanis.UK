import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/case_study/automotivesealer.jpg';
import case1 from '../../../assets/images/case_study/sealing.jpg';
import case2 from '../../../assets/images/case_study/automotive.jpg';
import case3 from '../../../assets/images/case_study/sealer.jpg';

export class Sealer extends Component {
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
              <Breadcrumb heading="Sealing Operation" title="Sealing Operation" />
            </div>
            <div className="section-area section-sp2 bg-grey port-7-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="heading-bx text-left m-b15">
                                    <h3 className="title-head m-b0">Introduction</h3>
                                    <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                                </div>
                                <p>Performing Sealing operation on a car is one of the most difficult and complex operations in an automotive manufacturing plant. Different nozzles are used for applying the sealant at different parts of the chassis. A close coordination between the mind and hand movement is required for the successful application of Sealant. Thus, a very high level of skill is required to perform this operation.</p>
                                <h4>Complexities Involved</h4>
                                <p>Sealing process involved the application of sealant through different nozzles at different parts of the chassis. On selecting a wrong one, the whole operation failed and the job line stopped. This reduced the efficiency and output of the plant.</p>
                                <p>There were more than six types of defects that occurred while performing the operation. Some of these included sealer gaps, lumps and sealer Traces. A very precise amount of sealant was required and applied at an area to avoid any of the above defects from occurring. If any lapse or error occurred, then, it led to a leakage in various compartments of the car. Hence, performing a sealing operation required a skilled and trained operator.</p>
                                <h4>Problem Statement</h4>
                                <p>To enable more workers to acquire the skill and competency in successfully performing the sealing operation on a car, a new training method was needed to be implemented at the Sealing workshop which unlike the conventional method was more</p>
                                <ul className='list-check'>
                                    <li>Interactive</li>
                                    <li>Engaging</li>
                                    <li>Effective</li>
                                    <li>Less Time consuming</li>
                                    <li>Less costly</li>
                                </ul>
                                <p>This new method was required to increase the skill level of the trainees and to significantly reduce/eliminate the human errors occurring in the process. The client also wanted a higher ROI in the long run against the investment.</p>
                                <h4>Simulanis Solution</h4>
                                <p>A fully immersive, power pack Virtual Reality (VR) training module of the whole sealing operation simulated as per the Standard Operating Procedures (SOP) of the plant was developed by Simulanis. It not only provided an unparalleled level of understanding of the Sealing Operation but also honed and refined the skills of the user.</p>
                                <p>It allowed the operators to practice the sealing operation in a more challenging and complex environment. This in turn, helped them in perfecting their hand movement which was not possible earlier. It also prevented them from applying any excess sealant and thus, reduced the number of errors during the operation.</p>
                                <p>Apart from the in-game analytics, intuitive instructional design and a visually appealing UI/UX, the main highlight of the module was it’s ‘learn by doing approach’.</p>

                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h4>Auto-VR Advantages</h4>
                                        <p>Simulating industry operations in Virtual Reality have been proven to be a much more efficient and effective training experience. They help in:-</p>
                                        <ul className='list-check'>
                                            <li>Reducing the training cost of operators</li>
                                            <li>Improved and Faster learning</li>
                                            <li>Reducing the need for on the job training</li>
                                            <li>Increasing the skill of operator</li>
                                            <li>Bridging the gap between the skilled and semi-skilled</li>
                                            <li>Making them more compliant to safety regulations and technically sound.</li>
                                            <li>Easy adaptation to the real workshop</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-12'>
                                        <h4>VR Module Features</h4>
                                        <ul className='list-check'>
                                            <li>Fully Immersive and Highly Interactive</li>
                                            <li>Step by Step Guidance via text and audio.</li>
                                            <li>Multi-Language Voice Guidance</li>
                                            <li>Built-in game analytics to assess the user’s performance</li>
                                            <li>Backed by Learn-by-doing/ Do it yourself approach.</li>
                                            <li>Instructionally designed content</li>
                                        </ul>
                                    </div>
                                </div>

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

export default Sealer