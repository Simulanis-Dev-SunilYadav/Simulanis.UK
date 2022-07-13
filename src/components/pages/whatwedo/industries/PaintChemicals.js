import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../../navbar/Breadcrumb';
import Banner1 from '../../../../assets/images/whatwedo/paint/paintbg.jpg';
import paint from '../../../../assets/images/whatwedo/paint/paint.jpg';
import ReactPlayer from 'react-player/youtube'
import Counter6 from '../../../counter/Counter6';
import Appointment2 from '../../../appointment/Appointment2'
import "aos/dist/aos.css";
import PaintChemicals_CLients from '../../../testimonials/PaintChemicals_CLients';

export class PaintChemicals extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
          <Helmet>  
            <title>Simulanis Paint and Chemicals Industry</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="Paint and Chemicals" title="Paint and Chemicals" />
            </div>

            <div className="section-area wwedo aindussolun section-sp2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="100">
                            <div className="heading-bx m-b30">
                                <h6 className="title-ext">About</h6>
                                <h2 className="title-head m-b0">Paint and Chemicals Industry</h2>
                                <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                                <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="400">
                            <img src={paint} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Counter6/>


            <PaintChemicals_CLients/>

            <div className='bg-grey'>
              <Appointment2 pageName="Paint Chemical"
/>
            </div>

        </div> 
      </>
    )
  }
}

export default PaintChemicals