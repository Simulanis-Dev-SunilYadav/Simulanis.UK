import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
// Elements

// Images
import Banner1 from '../../../assets/images/case_study/explorebg.jpg';
import cmacine from '../../../assets/images/case_study/compressinemachine1.jpg'
import sealing from '../../../assets/images/case_study/sealing.jpg'
import apidis from '../../../assets/images/case_study/1.jpg'
import industrialtraining from '../../../assets/images/case_study/oil&gas.jpg'
import vrplant from '../../../assets/images/case_study/automotivesealer.jpg'
import compint from '../../../assets/images/case_study/compint.jpg'

export class CaseStudy extends Component {
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
              <Breadcrumb heading="Case Study" title="Case Study" />
            </div>
            <div className="content-block">
						<div className="section-area wwedo bg-gray section-sp2">
							<div className="container">
                  <div className='row'>
                      <div className='col-md-8 offset-md-2'>
                          <div className="heading-bx text-center">
                            <h3 className="title-head m-b0">Case Study</h3>
                            <span className="hr-secondary"></span>
                            <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-4" data-aos={"fade-up"}>
                        <div className="case-study-box">
                          <div className="case-media">
                            <img src={cmacine} alt=""/>
                          </div>
                          <div className="case-content">
                            <span className="categary">Pharmaceutical</span>
                            <h4 className="title">Compression Machine</h4>
                            <p>A tablet compression machine plays an integral role in today’s world where the majority of the drugs</p>
                            <Link to="/compression_machines" className="btn btn-warning">Read More</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="200">
                          <div className="case-study-box">
                            <div className="case-media">
                              <img src={sealing} alt=""/>
                            </div>
                            <div className="case-content">
                              <span className="categary">Automotive </span>
                              <h4 className="title">Sealing Operation</h4>
                              <p>Sealing process involved the application of sealant through different nozzles at different parts of the chassis.</p>
                              <Link to="/sealing" className="btn btn-warning">Read More</Link>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="400">
                          <div className="case-study-box">
                            <div className="case-media">
                              <img src={apidis} alt=""/>
                            </div>
                            <div className="case-content">
                              <span className="categary">Pharmaceutical</span>
                              <h4 className="title">API Dispensing</h4>
                              <p>Our multi-award winning software applications are aimed at revolutionizing the training discipline within the manufacturing
      </p> 
                              <Link to="/api-dispensing-in-pharma" className="btn btn-warning">Read More</Link>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="600">
                          <div className="case-study-box">
                            <div className="case-media">
                              <img src={industrialtraining} alt=""/>
                            </div>
                            <div className="case-content">
                              <span className="categary">Oil & Gas </span>
                              <h4 className="title">Industrial Training</h4>
                              <p>A Fortune 100 company—a global conglomerate, and an industry leader, approached Simulanis as they</p>
                              <a href="/industrial-training" className="btn btn-warning">Read More</a>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="800">
                          <div className="case-study-box">
                            <div className="case-media">
                              <img src={compint} alt=""/>
                            </div>
                            <div className="case-content">
                              <span className="categary">PHARMACEUTICAL </span>
                              <h4 className="title">Injection Moulding</h4>
                              <p>Injection moulding is a manufacturing process for producing parts by injecting molten material into a mould.</p>
                              <Link to="/injection-moulding" className="btn btn-warning">Read More</Link>
                            </div>
                          </div>
                      </div>
                      <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="1000">
                          <div className="case-study-box">
                            <div className="case-media">
                              <img src={vrplant} alt=""/>
                            </div>
                            <div className="case-content">
                              <span className="categary">Manufacturing</span>
                              <h4 className="title">Virtual Plant</h4>
                              <p>VR plant walkthrough is the 3D simulation of the entire paint manufacturing plant in virtual reality.</p>
                              <Link to="/virtual-plant" className="btn btn-warning">Read More</Link>
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

export default CaseStudy