import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../../navbar/Breadcrumb';
import autmotive from '../../../../assets/images/whatwedo/xrtraining/autmotive.jpg'
import ReactPlayer from 'react-player/youtube'
import Counter5 from '../../../counter/Counter5';
import Appointment2 from '../../../appointment/Appointment2'
import "aos/dist/aos.css";
import Automotive_Clients from '../../../testimonials/Automotive_Clients';

export class Automotive extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    
    return (
      <>
         <Helmet>  
            <title>Simulanis Automotive Industry</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+autmotive+")"}}>
              <Breadcrumb heading="Automotive" title="Automotive" />
            </div>

            <div className="section-area wwedo aindussolun section-sp2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="100">
                            <div className="heading-bx m-b30">
                                <h6 className="title-ext">About</h6>
                                <h2 className="title-head m-b0">Automotive industry</h2>
                                <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                                <p className="head-px2">XR is shaping the way we carry out our day-to-day operations in the automotive industry; be it how we drive, or how the automotive industry deals with the technological shifts to provide better experiences for its customers, employees and other stakeholders as well. Being one of the earliest adopters of the technology the automotive industry has made great strides in the XR industry. Simulanis’ range of products are helping revolutionize the training and productivity in the automotive sector.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="400">
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url='https://www.youtube.com/watch?v=tiobh5eH8Dw'
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

            <Counter5/>
            <div data-aos={"fade-up"} data-aos-delay="300">
                <Automotive_Clients/>
            </div>

            <div className='bg-grey'>
              <Appointment2 pageName="Automotive"/>
            </div>

        </div> 
      </>
    )
  }
}

export default Automotive