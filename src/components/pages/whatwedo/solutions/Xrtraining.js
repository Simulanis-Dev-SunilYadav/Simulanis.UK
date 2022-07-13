import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../navbar/Breadcrumb';
import Counter2 from '../../../counter/Counter2';
import Testimonials1 from '../../../testimonials/Testimonials1';
import Banner1 from '../../../../assets/images/whatwedo/xrtraining/banner.jpg'
// Images
import AboutPic12 from "../../../../assets/images/whatwedo/xrtraining/pic12.jpg"
import AboutPic13 from "../../../../assets/images/whatwedo/xrtraining/pic13.jpg"
import PortImg1 from "../../../../assets/images/portfolio/agriculture/image_1.jpg"
import PortImg2 from "../../../../assets/images/portfolio/agriculture/image_2.jpg"
import PortImg3 from "../../../../assets/images/portfolio/agriculture/image_3.jpg"
import pharma from '../../../../assets/images/whatwedo/xrtraining/pharma.jpg'
import autmotive from '../../../../assets/images/whatwedo/xrtraining/autmotive.jpg'
import oilandgas from '../../../../assets/images/whatwedo/xrtraining/oilandgas.jpg'
import touch from "../../../../assets/images/whatwedo/xr-content/touch.svg"
import database from "../../../../assets/images/whatwedo/xr-content/database.svg"
import password from "../../../../assets/images/whatwedo/xr-content/password.svg"
import dashboard from "../../../../assets/images/whatwedo/xr-content/dashboard.svg"
import copyright from "../../../../assets/images/whatwedo/xr-content/copyright.svg"
import distributed from "../../../../assets/images/whatwedo/xr-content/distributed.svg"
import Appointment2 from '../../../appointment/Appointment2';

export class Xrtraining extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
         <Helmet>  
            <title>Simulanis XR Training</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="XR Training" title="XR Training" />
			</div>
		</div> 
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40" data-aos={"fade-up"}>
                        <div className="heading-bx">
                            <h6 className="title-ext mb-2">About</h6>
                            <h2 className="title-head m-b0">Simulanis XR content library?</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Simulanis XR Content Libraries are generic learning modules of equipment and practices across industries like Pharmaceutical, Oil and Gas, Automotive, and Automation. It consists of realistic, interactive, and engaging Virtual Reality, Augmented Reality, Mixed Reality, and Desktop Simulations. Our XR content libraries plays a pivotal role in skilling, re-skilling, and up-skilling employees and fostering industrial value chain, including training, maintenance, and operations.</p>
                        </div>
                        <Counter2/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row sp15">
                            <div className="col-sm-6 col-6 m-t80" data-aos={"fade-up"} data-aos-delay="300">
                                <img src={AboutPic12} alt=""/>
                            </div>
                            <div className="col-sm-6 col-6" data-aos={"fade-up"} data-aos-delay="600">
                                <img src={AboutPic13} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-area wwedo  bg-grey section-sp2">
            <div className="container">
                 <div className="row">
                     <div className="col-md-6 offset-md-3">
                        <div className="heading-bx text-center">
                            <h6 className="title-ext m-b0">XR Library</h6>
                            <h2 className="title-head my-2">works across industries</h2>
                            <span className="hr-secondary"></span>
                        </div>
                     </div>
                 </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"}>
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="la la-capsules"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Pharmaceutical</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/pharmaceutical" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+pharma+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="100">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="la la-car"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Automotive</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/automotive" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+autmotive+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="200">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="flaticon-fuel"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Oil & Gas</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/oilandgas" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+oilandgas+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="300">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="la la-cogs"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Automation</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/automation" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+PortImg3+")"}}></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="400">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="flaticon-derrick"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Energy & Utilities</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/energy-and-utilities" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+PortImg3+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="500">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="flaticon-flask"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Paint & Chemicals</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/paint-and-chemicals" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+PortImg3+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="600">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="fa fa-building-o"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">FMCG</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/fmcg" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+PortImg3+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="700">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="flaticon-trolley"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Construction</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/construction" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+PortImg3+")"}}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos={"fade-up"} data-aos-delay="800">
                        <div className="feature-container feature-bx1">
                            <div className="feature-lg text-white m-b20">
                                <Link to="#" className="icon-cell"><i className="la la-users-cog"></i></Link> 
                            </div>
                            <div className="icon-content">
                                <h4 className="ttr-tilte">Engineering</h4>
                                <p>There are many variations of passages of Lorem Ipsum available.</p>
                                <Link to="/engineering" className="btn-link">Read More</Link>
                            </div>
                            <div className="bg-img" style={{backgroundImage:"url("+PortImg3+")"}}></div>
                        </div>
                    </div>
                    {/* <div className="col-lg-12 text-center m-t20 m-sm-t0">
                        <Link to="all-industries" className="btn">View All Industries</Link>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="heading-bx m-b20  text-lg-left m-md-b30">
                            <h6 className="title-ext">Shaping the enterprise</h6>
                            <h2 className="title-head m-b0"> with Digital Realities</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">AR/VR/MR training modules to introduce actual scenarios to the users, so that they are better equipped to face real world problems.</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="100">
                                <div className="service-box text-center m-xs-b30">
                                    <div className="service-media">
                                        <img src={touch}/>
                                    </div>
                                    <div className="service-info">
                                        <h4 className="title">Interactive Simulated Module</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="300">
                                <div className="service-box text-center">
                                    <div className="service-media">
                                        <img src={database}/>
                                    </div>
                                    <div className="service-info">
                                        <h4 className="title">Data integration with server</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="200">
                                <div className="service-box text-center">
                                    <div className="service-media">
                                        <img src= {password}/>
                                    </div>
                                    <div className="service-info">
                                        <h4 className="title">Access control and rights authorization</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="150">
                                <div className="service-box text-center">
                                    <div className="service-media">
                                        <img src= {dashboard}/>
                                    </div>
                                    <div className="service-info">
                                        <h4 className="title">Administration Dashboards</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="350" >
                                <div className="service-box text-center">
                                    <div className="service-media">
                                        <img src= {copyright}/>
                                    </div>
                                    <div className="service-info">
                                        <h4 className="title">License based subscription</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="200">
                                <div className="service-box text-center">
                                    <div className="service-media">
                                        <img src= {distributed}/>
                                    </div>
                                    <div className="service-info">
                                        <h4 className="title">Integration with SANALEXA</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-grey'>
            <Appointment2 pageName="Xr Training"/>
        </div>

      </>
    )
  }
}

export default Xrtraining