import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module';
import  Breadcrumb  from '../navbar/Breadcrumb';
import Banner1 from '../../assets/images/awards/team.jpg';
import AwardsPic1 from '../../assets/images/awards/new.png';
import AwardsPic2 from '../../assets/images/awards/2017.png';
import AwardsPic3 from '../../assets/images/awards/dec-18.png';
import AwardsPic4 from '../../assets/images/awards/make-in-india.png';
import AwardsPic5 from '../../assets/images/awards/supply-chain-award.png';
import AwardsPic6 from '../../assets/images/awards/aegis-graham-bell-award.png';
import AwardsPic7 from '../../assets/images/awards/lssdc.png';
import AwardsPic8 from '../../assets/images/awards/frostandsullivanawards.jpg';
import AwardsPic9 from '../../assets/images/awards/nasscom.png';
import AwardsPic10 from '../../assets/images/awards/gesa.jpg';
import AwardsPic11 from '../../assets/images/awards/petronaturalgasawards.jpg';
import Icon1 from '../../assets/images/icon/contact/icon1.png';
import Icon2 from '../../assets/images/icon/contact/icon2.png';
import Icon3 from '../../assets/images/icon/contact/icon3.png';

export class Awards extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);
    
    return (
      <>
        <Helmet>  
            <title>Simulanis Awards</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content bg-white">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Awards" title="Awards" />
			</div>
		</div> 
        <div className="section-area wwedo bg-gray section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="heading-bx" data-aos={"fade-up"}>
                            <h6 className="title-ext m-b0">Awards</h6>
                            <h3 className="title-head m-b0">India’s Most Awarded AR-VR-MR / XR Company</h3>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="20">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic8} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Prestigious Frost & Sullivan Award</h5>
                                        <h6>Dec 2020</h6>
                                        <p>We are pleased to announce that we have won the prestigious Frost & Sullivan 2020 Indian Automotive Extended Reality New Product Innovation Award. We reflected strong overall performance and have been chosen for the 2020 Indian Automotive Extended Reality New Product Innovation Award. This is a great achievement and is a result of many stakeholders (employees, customers, and investors) believing in the organization and contributing to its future in a meaningful way.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="30">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic4} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Startup Autobahn</h5>
                                        <h6>March 2019</h6>
                                        <p>We won acclaim from Daimler-Mercedes Benz and secured a place in the Startup Autobahn competition – an initiative which allowed us to work with Mercedes and pilot our multi-award winning suite of AR field tools and technologies, with an aim of being ready for a successful production-ready implementation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="40">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic5} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Supply Chain Award</h5>
                                        <h6>May 2019</h6>
                                        <p>We won the award for being the best startup for developing VR for the Supply Chain industries by NASSCOM CoE – DSAI& IoT.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="50">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic9} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Best Startup Award by NASSCOM CoE</h5>
                                        <h6>May 2019</h6>
                                        <p>We won the award for being the best startup for developing VR for the Supply Chain industries by NASSCOM CoE – DSAI& IoT.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="60">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic3} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Sankalp Award</h5>
                                        <h6>Dec 2018</h6>
                                        <p>We won India’s most prestigious social impact award – the Sankalp Award –initiated in India by Intellecap, part of the Aavishkaar - Intellecap Group, to create a thriving ecosystem for business-led inclusive development, applicants were vetted through a rigorous 3-month process by a panel of global investors in which more than 200 companies applied, with an aim to bring recognition to the most sustainable and scalable social enterprises that are doing business across India. We were glad to be a part of this illustrious list and winning recognition from an eminent jury panel comprising of some of the most prolific investors across the country, thereby underlining our status as an impact-focussed deep-tech entity</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="70">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic6} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Aegis Graham Bell Award</h5>
                                        <h6>Feb 2018</h6>
                                        <p>We were announced as the winner at Aegis Graham Bell Award 2017 in “Innovation in VR” category for our innovation “VR for Industrial Training”, honouring the best innovation in the ICT domain in India.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="80">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic7} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Inaugrated by Hon’ble Vice President of India</h5>
                                        <h6>Mar 2018</h6>
                                        <p>Our first VR lab has been deployed at SWARNA BHARAT TRUST, Hyderabad which was inaugurated by Hon’ble Vice President of India.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="90">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic1} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">National Entrepreneurship Award</h5>
                                        <h6>Nov 2017</h6>
                                        <p>The National Entrepreneurship Award 2017 (NEA) granted to us by the Hon’ble Finance Minister Shri Arun Jaitley and awarded to us by the Ministry of Skill Development and Entrepreneurship</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="100">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic2} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Fifth Pan IIM Award</h5>
                                        <h6>Dec 2017</h6>
                                        <p>We won the award at Fifth Pan IIM World Management Conference for “The Making of Digital India: Management Perspectives”</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="110">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic11} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Ministry of Petroleum & Natural Gas Award</h5>
                                        <h6>Oct 2017</h6>
                                        <p>We won the award for being the best startup for developing VR for the Supply Chain industries by NASSCOM CoE – DSAI& IoT.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 m-b30" data-aos={"fade-up"} data-aos-delay="120">
                                <div className="award-bx left">
                                    <div className="award-media"><img src={AwardsPic10} alt=""/></div>
                                    <div className="award-info">
                                        <h5 className="title">Global Ed-Tech Startup Award</h5>
                                        <h6>Dec 2016</h6>
                                        <p>We were named as the Asia Region winner of the Global Ed-Tech Startup Awards (GESA) 2016 competition.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <aside className="sticky-top left-border-1">
                            <div className="widget">
                                <h6 className="widget-title">Contact Us</h6>
                                <ul className="contact-infolist">
                                    <li>
                                        <img src={Icon1} alt="" className="mCS_img_loaded"/>
                                        <h6 className="contact-title">Contact Number</h6>
                                        <a href="tel:+919990912140">+91 99909 12140</a>
                                    </li>
                                    <li>
                                        <img src={Icon2} alt="" className="mCS_img_loaded"/>
                                        <h6 className="contact-title">Email Address</h6>
                                        <a href="mailto:connect@simulanis.com">connect@simulanis.com</a><br/>
                                        <a href="mailto:customer.support@simulanis.com">customer.support@simulanis.com</a>
                                    </li>
                                    <li>
                                        <img src={Icon3} alt="" className="mCS_img_loaded"/>
                                        <h6 className="contact-title">Global HQ, UK Office</h6>
                                        <p>St. George House 215-219, Chester Road, Manchester M15 4JE</p>
                                    </li>
                                    <li>
                                        <img src={Icon3} alt="" className="mCS_img_loaded"/>
                                        <h6 className="contact-title">India Office</h6>
                                        <p>AMCO TOWER, Ground Floor, A-5, 6, 7, Sector 9, Noida, UP, 201301</p>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Awards