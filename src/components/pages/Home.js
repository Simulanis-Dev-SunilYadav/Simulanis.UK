import React, { Component } from 'react';
import { Helmet } from "react-helmet";  
import { Link } from 'react-router-dom';
import Testimonials1 from '../testimonials/Testimonials1';
import AnchorLink from 'react-anchor-link-smooth-scroll'


import AOS from "aos";
import "aos/dist/aos.css";

import { Slider1 } from '../slider/Slider';
import videogif from '../../assets/images/Render-2.gif'
import video from '../../assets/images/Homepage-Video.mp4'

import ServicesPic1 from "../../assets/images/our-services/pic1.jpg"
import ServicesPic2 from "../../assets/images/our-services/pic2.jpg"
import BlogGridPic1 from "../../assets/images/blog/grid/pic1.jpg"
import BlogGridPic2 from "../../assets/images/blog/grid/pic2.jpg"
import BlogGridPic3 from "../../assets/images/blog/grid/pic3.jpg"
import BlogGridPic4 from "../../assets/images/blog/grid/pic4.jpg"


import rotate from '../../assets/images/feature-dot-shape.png'
import shape from '../../assets/images/histroy-shape-right.png'
import opr from '../../assets/images/use_cases/opr/factory_workshop.jpg'
import maintenance from '../../assets/images/use_cases/con-im/maintensupport.jpg'
import hsafety from '../../assets/images/use_cases/health-safety/hsafety.jpg'

import Image1 from "../../assets/images/about/pic11.jpg"
import Image2 from "../../assets/images/about/pic1.jpg"

import cmacine from '../../assets/images/case_study/compint.jpg'
import sealing from '../../assets/images/case_study/sealing.jpg'
import apidis from '../../assets/images/case_study/paint.jpg'

import Counter from '../counter/Counter';

export class Home extends Component {

  componentDidMount() {
    AOS.init({
      duration : 1000
    });
  }

  render() {
    return (
      <>
        <Helmet>  
            <title>Home Page</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet>  
         {/* <Slider1/> */}
        <section className="videogif">
            {/* <img src={videogif} style={{width:'100%', height:'100vh', objectFit:'cover'}} alt="" /> */}
            <video style={{width:'100%', display:'block' }} autoPlay muted loop >
              <source src={video} type="video/mp4"/>
            </video>
            {/* <div className="smoothscroll">
                <AnchorLink href='#emore'>Explore More</AnchorLink>
            </div> */}
        </section>

        <section className="section-area section-sp2">
            <div className='feature__img--dot-shape' data-aos={"fade-down-right"}>
              <img src={rotate} alt="" />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                  <div className="heading-bx m-b20 text-center  text-lg-left m-md-b30">
                    <h6 className="title-ext m-b0">What We Offer</h6>
                    <h2 className="title-head m-b0">Lorem Ipsum is simply dummy</h2>
                    <div className="ttr-separator sepimg"></div>
                    <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Link to="get-in-touch" className="btn">Get in touch</Link>
                  </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6" data-aos={"fade-up"}>
                        <div className="service-box text-center m-xs-b30">
                          <div className="service-media">
                            <img src={ServicesPic1} alt=""/>
                            <div className="service-inner">
                              <Link to="#" className="btn white">View Detail</Link>
                            </div>
                          </div>
                          <div className="service-info">
                            <h4 className="title">Learn</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6" data-aos={"fade-left"}>
                        <div className="service-box text-center">
                          <div className="service-media">
                            <img src={ServicesPic2} alt=""/>
                            <div className="service-inner">
                              <Link to="#" className="btn white">View Detail</Link>
                            </div>
                          </div>
                          <div className="service-info">
                            <h4 className="title">Assist</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <img className="history__shape" src={shape} alt="" />
            </div>
        </section>

        <Counter/>

        <section className='application section-sp1'>
           <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="heading-bx text-center">
                          <h6 className="title-ext m-b0">Applications</h6>
                          <h2 className="title-head m-b0">Lorem Ipsum is simply dummy text of the printing</h2>
                          <div className="ttr-separator sepimg"></div>
                      </div>
                  </div>
              </div>
             <div className="row">
               <div className="col-md-4" data-aos={"fade-right"}>
                  <div className="slider-item">
                    <div className="portfolio-box style-1 m-b0">
                      <div className="portfolio-media">
                        <img src={opr} alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4 className="title">
                          <Link to="projects-single-1">Operations and Maintenance</Link>
                        </h4>
                        <a className="magnific-anchor" href="/react/projects-grid-3"><i className="la la-plus"></i></a>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-4" data-aos={"fade-up"}>
                  <div className="slider-item">
                    <div className="portfolio-box style-1 m-b0">
                      <div className="portfolio-media">
                        <img src={maintenance} alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4 className="title">
                          <Link to="projects-single-1">Repair and Troubleshooting</Link>
                        </h4>
                        <a className="magnific-anchor" href="/react/projects-grid-3"><i className="la la-plus"></i></a>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-4" data-aos={"fade-left"}>
                  <div className="slider-item">
                    <div className="portfolio-box style-1 m-b0">
                      <div className="portfolio-media">
                        <img src={hsafety} alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4 className="title">
                          <Link to="projects-single-1">Health and Safety</Link>
                        </h4>
                        <a className="magnific-anchor" href="/react/projects-grid-3"><i className="la la-plus"></i></a>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </section>

        <section className="section-area section-sp1 bg-grey">
          <div className="container">
             <div className="row align-items-center">
              <div className="col-md-6" data-aos={"zoom-in-right"}>
                <div className="about-img-box3">
                  <div className="img1">
                    <img src={Image1} alt=""/>
                  </div>
                  <div className="img2">
                    <img src={Image2} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos={"fade-left"}>
                <div className="heading-bx m-b20">
                  <h6 className="title-ext m-b0">About us</h6>
                  <h2 className="title-head m-b0">Excellent Service Provide For Business</h2>
                  <div className="ttr-separator sepimg"></div>
                  <h5 className="title-text fw4 m-t5 m-b0">We build a safer and efficient environment for your workforce</h5>
                  <p className="head-px2">We at Simulanis are a national-award-winning AR-VR-MR / XR technology company. Over the years, we have carved a niche for ourselves and impacted more than 10,000 operators across more than 200 sites for more than 100 enterprises across multiple industrial domains.</p>
                </div>
                <Link to="about-1" className="btn">About Us</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="whychooseus section-sp1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="heading-bx text-center">
                            <h6 className="title-ext m-b0">Why You Choose Us</h6>
                            <h2 className="title-head m-b0">Lorem Ipsum is simply dummy text of the printing</h2>
                            <div className="ttr-separator sepimg"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6" data-aos={"fade-right"}>
                        <div className="serviceBox blue">
                            <div className="service-icon">
                                <span><i className="fa fa-lightbulb-o"></i></span>
                            </div>
                            <h3 className="title">Innovative Solution</h3>
                            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6" data-aos={"fade-up"}>
                        <div className="serviceBox blue">
                            <div className="service-icon">
                                <span><i className="la la-brain"></i></span>
                            </div>
                            <h3 className="title">Strategy Thinking</h3>
                            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6" data-aos={"fade-up"}>
                        <div className="serviceBox blue">
                            <div className="service-icon">
                                <span><i className="la la-users"></i></span>
                            </div>
                            <h3 className="title">Experienced Team</h3>
                            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6" data-aos={"fade-left"}>
                        <div className="serviceBox blue">
                            <div className="service-icon">
                                <span><i className="la la-user-tie"></i></span>
                            </div>
                            <h3 className="title">Creative Team</h3>
                            <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="casestudy section-sp1 bg-grey">
            <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="heading-bx text-center">
                          <h6 className="title-ext m-b0">Case studies</h6>
                          <h2 className="title-head m-b0">Lorem Ipsum is simply dummy text of the printing</h2>
                          <div className="ttr-separator sepimg"></div>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-4" data-aos={"fade-right"}>
                    <div className="case-study-box">
                      <div className="case-media">
                        <img src={cmacine} alt=""/>
                      </div>
                      <div className="case-content">
                        <span className="categary">Pharmaceutical</span>
                        <h4 className="title">Compression Machine</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <Link to="case-details" className="btn btn-success">Read More</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos={"fade-up"}>
                    <div className="case-study-box">
                      <div className="case-media">
                        <img src={sealing} alt=""/>
                      </div>
                      <div className="case-content">
                        <span className="categary">Automotive </span>
                        <h4 className="title">Sealing Operation</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <Link to="case-details" className="btn">Read More</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos={"fade-left"}>
                    <div className="case-study-box">
                      <div className="case-media">
                        <img src={apidis} alt=""/>
                      </div>
                      <div className="case-content">
                        <span className="categary">Virtual Plant</span>
                        <h4 className="title">API Dispensing</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <Link to="case-details" className="btn">Read More</Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </section>

        <div className="section-area bg-white section-sp1 blog-area">
          <div className="container">
            <div className="row heading-bx align-items-end">
              <div className="col-lg-8 col-md-9">
                <h6 className="title-ext m-b0">BLOGS</h6>
                <h2 className="title-head m-b0">Lorem Ipsum is simply dummy text of the printing</h2>
                <div className="ttr-separator sepimg"></div>
              </div>
              <div className="col-lg-4 col-md-3 text-md-end">
                <Link to="get-in-touch" className="btn float-right">View All Post</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6" data-aos="zoom-in-up">
                <div className="recent-news">
                  <div className="action-box">
                    <img src={BlogGridPic4} alt=""/>
                  </div>
                  <div className="info-bx">
                    <ul className="media-post">
                      <li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
                    </ul>
                    <h3 className="post-title"><Link to="blog-details">Lorem Ipsum is simply dummy text of the printing</Link></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="side-post">
                  <div className="blog-post blog-md clearfix">
                    <div className="ttr-post-media"> 
                      <Link to="#"><img src={BlogGridPic1} alt=""/></Link> 
                    </div>
                    <div className="ttr-post-info">
                      <ul className="media-post">
                        <li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
                      </ul>
                      <h4 className="post-title"><Link to="blog-details">Lorem Ipsum is simply dummy text of the printing</Link></h4>
                    </div>
                  </div>
                  <div className="blog-post blog-md clearfix">
                    <div className="ttr-post-media"> 
                      <Link to="#"><img src={BlogGridPic2} alt=""/></Link> 
                    </div>
                    <div className="ttr-post-info">
                      <ul className="media-post">
                        <li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
                      </ul>
                      <h4 className="post-title"><Link to="blog-details">Lorem Ipsum is simply dummy text of the printing</Link></h4>
                    </div>
                  </div>
                  <div className="blog-post blog-md clearfix">
                    <div className="ttr-post-media"> 
                      <Link to="#"><img src={BlogGridPic3} alt=""/></Link> 
                    </div>
                    <div className="ttr-post-info">
                      <ul className="media-post">
                        <li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
                      </ul>
                      <h4 className="post-title"><Link to="blog-details">Lorem Ipsum is simply dummy text of the printing</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section-area bg-primary section-sp2 client-appoint-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="heading-bx text-white">
                  <h6 className="title-ext m-b0">testimonial</h6>
                  <h2 className="title-head m-b0">Clients say about us</h2>
                  <div className="ttr-separator sepimg2"></div>
                </div>
                <div className="swiper-container client-area-box">		
                  <Testimonials1 />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <form className="ajax-form" action="script/contact.php">
                  <div className="apoint-btn-box">Book An Appointment</div>
                  <div className="ajax-message"></div>
                  <div className="heading-bx text-white">
                    <h6 className="title-ext m-b0">Appointment</h6>
                    <h2 className="title-head m-b0">Book An Appointment</h2>
                    <div className="ttr-separator sepimg2"></div>
                  </div>
                  <div className="row placeani appoint-bx1">
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group">
                        <div className="input-group input-bx">
                          <input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group">
                        <div className="input-group input-bx"> 
                          <input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group">
                        <div className="input-group input-bx">
                          <input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <div className="input-group input-bx">
                          <textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        
      </>
    )
  }
}

export default Home