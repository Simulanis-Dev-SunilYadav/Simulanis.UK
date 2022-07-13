import React, { Component } from 'react';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../../navbar/Breadcrumb';
import ReactPlayer from 'react-player/youtube'
import Counter4 from '../../../counter/Counter4';
import Appointment2 from '../../../appointment/Appointment2'
import "aos/dist/aos.css";
import Pharma_Clients from '../../../testimonials/Pharma_Clients';
import pharma from '../../../../assets/images/whatwedo/xrtraining/pharma.jpg'


export class Pharmaceutical extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
         <Helmet>  
            <title>Simulanis Pharmaceutical Industry</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+pharma+")"}}>
              <Breadcrumb heading="Pharmaceutical" title="Pharmaceutical" />
            </div>
            <div className="section-area wwedo aindussolun section-sp2">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="100">
										<div className="heading-bx m-b30">
                        <h6 className="title-ext">What is</h6>
                        <h2 className="title-head m-b0">Pharmaceutical Industry</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                        <p className="head-px2">The ongoing shift towards digitalization in the pharmaceutical industry has helped to simplify operations and make services more effective. But now pharmaceutical manufacturers are taking it one step further – transforming operations and injecting new ways of interacting with reality into daily work by leveraging cutting edge technologies like XR. The pharmaceutical sector is the first sector where we started our work and have created one of the largest XR pharmaceutical content libraries in the world.</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="400">
                        <div className='player-wrapper'>
                            <ReactPlayer
                              className='react-player'
                              url='https://www.youtube.com/watch?v=-loWCcc6tcw'
                              width='100%'
                              height='328px'
                              playing='true'
                              loop='true'
                              muted='true'
                              previewTabIndex="0"
                            />
                        </div>
									</div>
								</div>
							</div>
						</div>

            <Counter4/>

            {/* <section className='application bg-grey section-sp1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="heading-bx text-center">
                                <h6 className="title-ext m-b0">Applications</h6>
                                <span className="hr-secondary"></span>
                            </div>
                        </div>
                    </div>
                  <div className="row mt-4">
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="400">
                        <div className="slider-item">
                          <div className="portfolio-box style-1 m-b0">
                            <div className="portfolio-media">
                              <img src={hsafety} alt="" />
                            </div>
                            <div className="portfolio-info">
                              <h4 className="title">
                                <a href="javascript:;">Health and Safety</a>
                              </h4>
                              <a className="magnific-anchor" href="javascript:;"><i className="la la-plus"></i></a>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"}>
                        <div className="slider-item">
                          <div className="portfolio-box style-1 m-b0">
                            <div className="portfolio-media">
                              <img src={opr} alt="" />
                            </div>
                            <div className="portfolio-info">
                              <h4 className="title">
                                <a href="javascript:;">Operations and Maintenance</a>
                              </h4>
                              <a className="magnific-anchor" href="/react/projects-grid-3"><i className="la la-plus"></i></a>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="slider-item">
                          <div className="portfolio-box style-1 m-b0">
                            <div className="portfolio-media">
                              <img src={maintenance} alt="" />
                            </div>
                            <div className="portfolio-info">
                              <h4 className="title">
                                <a href="javascript:;">Repair and Troubleshooting</a>
                              </h4>
                              <a className="magnific-anchor" href="javascript:;"><i className="la la-plus"></i></a>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </section> */}

            <div data-aos={"fade-up"} data-aos-delay="200">
                <Pharma_Clients/>
            </div>

            <div className='bg-grey'>
              <Appointment2 pageName="Pharmaceutical"/>
            </div>

        </div> 
      </>
    )
  }
}

export default Pharmaceutical