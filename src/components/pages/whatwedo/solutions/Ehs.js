import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../../navbar/Breadcrumb';
import Banner1 from '../../../../assets/images/whatwedo/ehs/ehsbg.jpg'
// Images
import about from "../../../../assets/images/whatwedo/ehs/about.jpg"
import Appointment2 from '../../../appointment/Appointment2';


export class Ehs extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
         <Helmet>  
            <title>Simulanis EHS</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="EHS" title="EHS" />
			</div>
		</div> 
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"} data-aos-delay="150">
                        <div className="heading-bx">
                            <h6 className="title-ext mb-2">About</h6>
                            <h2 className="title-head m-b0">Simulanis EHS System</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Safety training is an integral part of any organisation in order to protect their most precious asset: the workforce. Manufacturing industries in particular pose hazards to workers due to the presence of dangerous machinery or materials.Safety training is an integral part of any organisation in order to protect their most precious asset: the workforce. Manufacturing industries in particular pose hazards to workers due to the presence of dangerous machinery or materials.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos={"fade-up"} data-aos-delay="150">
                        <img src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-grey">
            <Appointment2 pageName="Ehs"/>
        </div>

      </>
    )
  }
}

export default Ehs