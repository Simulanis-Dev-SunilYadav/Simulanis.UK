import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../../navbar/Breadcrumb';
import oilandgas from '../../../../assets/images/whatwedo/xrtraining/oilandgas.jpg'
import about from '../../../../assets/images/whatwedo/oilgas/about.jpg'
import Counter7 from '../../../counter/Counter7';
import Appointment2 from '../../../appointment/Appointment2'
import "aos/dist/aos.css";
import Oilgas_Clients from '../../../testimonials/Oilgas_Clients';

export class OilandGas extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
        <Helmet>  
            <title>Simulanis Oil & Gas Industry</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+oilandgas+")"}}>
              <Breadcrumb heading="Oil & Gas" title="Oil & Gas" />
            </div>

            <div className="section-area wwedo aindussolun section-sp2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="100">
                            <div className="heading-bx m-b30">
                                <h6 className="title-ext">About</h6>
                                <h2 className="title-head m-b0">Oil & Gas industry</h2>
                                <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                                <p className="head-px2">Human Machine Interface technology plays a pivotal role in connecting people with devices. Simulanis
                                Analytics Suite encompasses various important metrics eye tracking, session time, psychometric &
                                biofeedback data which helps in analysing the overall performance of a worker. Additionally, Simulanis
                                physical simulators like Welding VR, Paint VR deliver proper learning techniques in an economic manner
                                that eases complex engineering processes.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="400">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Counter7/>

            <div data-aos={"fade-up"} data-aos-delay="300">
                <Oilgas_Clients/>
            </div>
            <div className='bg-grey'>
              <Appointment2 pageName="Oil & Gas"/>
            </div>

        </div> 
      </>
    )
  }
}

export default OilandGas