import React, { Component } from 'react';
import { Helmet } from "react-helmet";  
import { Link } from 'react-router-dom';
import Testimonials1 from '../testimonials/Testimonials1';
import AOS from "aos";
import "aos/dist/aos.css";
import opr from '../../assets/images/use__cases/opr/factory_workshop.jpg'
import maintenance from '../../assets/images/use__cases/con-im/maintensupport.jpg'
import hsafety from '../../assets/images/use__cases/health_safety/hsafety.jpg'
import Image1 from "../../assets/images/about/pic11.jpg"
import Image2 from "../../assets/images/about/pic1.jpg"
import cmacine from '../../assets/images/case_study/compressinemachine1.jpg'
import sealing from '../../assets/images/case_study/sealing.jpg'
import xrTraining from '../../assets/images/xr.png'
import fourd from '../../assets/images/4d.png'
import quiz from '../../assets/images/quiz.png'
import helmet from '../../assets/images/helmet.png'
import vrgloves from '../../assets/images/vrgloves.png'
import analytics from '../../assets/images/analytics.png'
import assist from '../../assets/images/remote-assistance.png'
import whycus from '../../assets/images/whychooseus.png'
import crr from '../../assets/images/1.png'
import dcs from '../../assets/images/2.png'
import industrialtraining from '../../assets/images/case_study/oil&gas.jpg'
import ptm from '../../assets/images/3.png'
import ReactPlayer from 'react-player/youtube'
import Counter from '../counter/Counter';
export class Home1 extends Component {
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
        <section className="videogif">
            <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=-loWCcc6tcw'
                  width='100%'
                  height='600px'
                  playing='true'
                  loop='true'
                  muted='true'
                  previewTabIndex="0"
                />
            </div>
        </section>
        <section className="section-area section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 offset-lg-2 col-md-12" data-aos={"fade-up"}>
                  <div className="heading-bx m-b20 text-center  text-lg-left m-md-b30">
                    <h6 className="title-ext m-b0">Our Solutions </h6>
                    <span className="hr-secondary"></span>
                    <p>Simulanis offers XR solutions across various industries, namely Pharmaceutical, Automotive, Oil & Gas, FMCG, Engineering, Construction, Automation, Paint & Chemicals and Energy & Utilities.</p>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around danger feature__img--dot-shape"><span></span></div> <img src={xrTraining} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">XR Training </h4>
                            <p>Simulanis XR content libraries are standard learning modules, practices, and equipment across industries. It is realistic, interactive, engaging and built to help skill, re-skilling and up-skilling the team members.</p>
                            <Link to="/xr-training" className='btndanger'>Know More </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="400">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around warning feature__img--dot-shape"><span></span></div> <img src={fourd} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">4D Simulators </h4>
                            <p>Simulanis 4D Simulators are highly immersive, providing real experiences to solve real problems. The simulators save time, improve quality, reduce waste are cost-effective and help team to skill better</p>
                            <Link to="/simulator" className='btndanger'>Know More</Link>
                          </div>
                        </div>
                      </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around primary feature__img--dot-shape"><span></span></div> <img src={quiz} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">Quizbox  </h4>
                            <p>Get advanced analytics for employee learning, create time-based challenges, an admin panel to store the progress of the employees. Create leadership boards, empower continuous learning</p>
                            <Link to="/quixbox" className='btndanger'>Know More </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around success feature__img--dot-shape"><span></span></div> <img src={vrgloves} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">Reflexis  </h4>
                            <p>Unlock the human potential in the virtual world with Simulanis VR gloves. Six degrees of freedom, motion tracking, haptic feedback, size adaptability, and rechargeable battery and more. </p>
                            <Link to="/reflexis" className='btndanger'>Know More </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around secondary feature__img--dot-shape"><span></span></div> <img src={helmet} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">EHS Training </h4>
                            <p>The maximum number is frontline workers make sure to train them. EHS training modules work across industries. We have more than 50 VR training modules just to train your team.</p>
                            <Link to="/ehs" className='btndanger'>Know More </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around info feature__img--dot-shape"><span></span></div> <img src={assist} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">Remote Assistance  </h4>
                            <p>Say goodbye to downtime with effective, instant on field support to the frontline workers with Simulanis Remote Assistance. Get rid of those hefty manuals, go digital and reduce human errors and reduce travel. </p>
                            <Link to="/remote-assist" className='btndanger'>Know More </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 offset-lg-3 col-md-6 col-sm-6 mb-4" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="productsbox">
                          <div className="product-media">
                            <div className="service-icon"><div className="roted-around pink feature__img--dot-shape"><span></span></div> <img src={analytics} alt="" /></div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">Sanalexa  </h4>
                            <p>Training assessment is simple with Simulanis Sanalexa. One-stop data analytics suite to scientifically measure and evaluate the performance in Virtual reality. Measure the progress and improve with the Sanalexa assessment suite. </p>
                            <Link to="/sanalexa" className='btndanger'>Know More </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </section>

        <Counter/>

        <section className='application section-sp1'>
           <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <div className="heading-bx text-center">
                          <h6 className="title-ext m-b0">Applications</h6>
                          <span className="hr-secondary"></span>
                          <p>Our solutions are scalable, cost-effective and future ready to help your team improve efficiency, train them for critical operations, EHS, maintenance & repair and more.  </p>
                      </div>
                  </div>
              </div>
             <div className="row mt-4">
               <div className="col-md-4" data-aos={"fade-up"}>
                  <div className="slider-item">
                    <div className="portfolio-box style-1 m-b0">
                      <div className="portfolio-media">
                        <img src={opr} alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4 className="title">
                          <Link to="/operational_eftficiency">Operations and Maintenance</Link>
                        </h4>
                        <Link className="magnific-anchor" to="/operational_eftficiency"><i className="la la-plus"></i></Link>
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
                          <Link to="/maintenance_&_repair">Maintenance & Repair</Link>
                        </h4>
                        <Link className="magnific-anchor" to="/maintenance_&_repair"><i className="la la-plus"></i></Link>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col-md-4" data-aos={"fade-up"} data-aos-delay="400">
                  <div className="slider-item">
                    <div className="portfolio-box style-1 m-b0">
                      <div className="portfolio-media">
                        <img src={hsafety} alt="" />
                      </div>
                      <div className="portfolio-info">
                        <h4 className="title">
                          <Link to="/health-and-safety">Health and Safety</Link>
                        </h4>
                        <Link className="magnific-anchor" to="/health-and-safety"><i className="la la-plus"></i></Link>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </section>

        <section className="section-area wwedo section-sp1 bg-grey">
          <div className="container">
             <div className="row align-items-center">
              <div className="col-md-6" data-aos={"fade-right"}>
                <div className="about-img-box3">
                  <div className="img1">
                    <img src={Image1} alt=""/>
                  </div>
                  <div className="img2">
                    <img src={Image2} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="heading-bx m-b20">
                  <h6 className="title-ext" data-aos={"fade-up"} data-aos-delay="100" >About us</h6>
                  <h2 className="title-head m-b0" data-aos={"fade-up"} data-aos-delay="200">We build a safer and more efficient environment for your workforce </h2>
                  <span className="hr-secondary" data-aos={"fade-up"} data-aos-delay="200" style={{marginLeft:'30px'}}></span>
                  <p className="head-px2" data-aos={"fade-up"} data-aos-delay="300">Simulanis is also proud to be one of the few companies creating a mark in leveraging AR-VR-MR / XR technologies to deliver a meaningful impact to society by improving the workplace safety of frontline workers.</p>
                  <p className="head-px2" data-aos={"fade-up"} data-aos-delay="300">A dynamic group of individuals forms Simulanis Solutions. Innovation and doing things differently are in the inherent nature of our company. </p>
                </div>
                <Link to="about" className="btn" data-aos={"fade-up"} data-aos-delay="350">About Us</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="whychooseus wwedo section-sp1">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="heading-bx">
                            <h6 className="title-ext" data-aos={"fade-up"}>Choose Simulanis, Choose Growth</h6>
                            <h2 className='' data-aos={"fade-up"}>Enabling digital transformation for you.</h2>
                            <p className='mb-3' data-aos={"fade-up"}>Simulanis Extended Reality (XR) products and applications, help frontline workers to be exposed to jobs in a safe environment.</p>
                            <div className="chdata" data-aos={"fade-up"} data-aos-delay="200">
                                <div style={{width:'80px'}}>
                                     <img src={crr} alt="" />
                                </div>
                                <div>
                                    <h6>Experience</h6>
                                    <p>Close to a decade of experience with building AR/VR/MR/XR solutions across multiple industries with more than 200 successful deployments across 9 countries. We are the right team and right fit for you.</p>
                                </div>
                            </div>
                            <div className="chdata" data-aos={"fade-up"} data-aos-delay="400">
                                <div style={{width:'54px'}}>
                                     <img src={dcs} alt="" />
                                </div>
                                <div>
                                    <h6>16,000+ Digital assets and counting </h6>
                                    <p>We have the largest digital assets available, which helps in quick turnaround time. These are building blocks for your metaverse experience.</p>
                                </div>
                            </div>
                            <div className="chdata" data-aos={"fade-up"} data-aos-delay="600">
                                <div style={{width:'80px'}}>
                                     <img src={ptm} alt="" />
                                </div>
                                <div>
                                    <h6>Quick Turnaround Time </h6>
                                    <p>We have off-the-shelf solutions which help industry leaders to plug and play. These simulators help to get started immediately, for example, Fire Safety, Paint, Wielding and driving simulators.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5" data-aos={"fade-up"}>
                         <img src={whycus} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <Testimonials1/>

        <section className="casestudy section-sp1">
            <div className="container">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <div className="heading-bx text-center">
                          <h6 className="title-ext m-b0">Case studies</h6>
                          <span className="hr-secondary"></span>
                          <p>Simulanis has successfully executed over 200 XR projects for more than 150 customers. Resolving the most pressing challenges faced by enterprises across industries.</p>
                      </div>
                  </div>
              </div>
              <div className="row mt-3">
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
              </div>
            </div>
        </section>

        <div className="section-area wwedo bg-grey section-sp1 bloghome blog-area">
          <div className="container">
            <div className="row heading-bx align-items-end">
              <div className="col-lg-7 col-md-9">
                <h6 className="title-ext">Blogs</h6>
                <h2 className="title-head">Know more about solutions just fit your needs </h2>
                <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
              </div>
              <div className="col-lg-5 col-md-3 text-md-end">
                <a href="/blogs" className="btn float-right">View All Post</a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6" data-aos="zoom-in-up">
                <div className="recent-news">
                  <div className="action-box">
                    <img src={hsafety} alt=""/>
                  </div>
                  <div className="info-bx">
                    <h3 className="post-title"><Link to="/5ways-how-VR-is-improving-knowledge-retention-rates-in-education-industry">5 Ways how VR is improving knowledge retention rates in Education Industry</Link></h3>
                    <p>Improving knowledge retention rates in the education industry is a greatly researched and studied area, and with new trends in technology enhancements comes...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="side-post">
                  <div className="blog-post blog-md clearfix" data-aos="fade-up" data-aos-delay="100s">
                    <div className="ttr-post-media"> 
                      <a href="#"><img src={sealing} alt=""/></a> 
                    </div>
                    <div className="ttr-post-info">
                      <h4 className="post-title"><Link to="/augmented-reality-and-the-automotive-industry_a-value-creation-opportunity-not-to-be-missed">AR and the Automotive Industry - A value creation opportunity not to be missed</Link></h4>
                      <p>AR is shaping the way we carry out our daily chores, be it at work, while we are shopping, or while we are relaxing at home...</p>
                    </div>
                  </div>
                  <div className="blog-post blog-md clearfix" data-aos="fade-up" data-aos-delay="300s">
                    <div className="ttr-post-media"> 
                      <Link to="#"><img src={maintenance} alt=""/></Link> 
                    </div>
                    <div className="ttr-post-info">
                      <h4 className="post-title"><Link to="/xr_a-medicine-for-the-pharmaceutical-industry">XR – A medicine for the Pharmaceutical Industry</Link></h4>
                      <p>As per a report by Statista revenue generated by the global pharmaceutical market in 2019 was USD 1250 Billion, and North...</p>
                    </div>
                  </div>
                  <div className="blog-post blog-md clearfix" data-aos="fade-up" data-aos-delay="500s">
                    <div className="ttr-post-media"> 
                      <Link to="#"><img src={opr} alt=""/></Link> 
                    </div>
                    <div className="ttr-post-info">
                      <h4 className="post-title"><Link to="is-remote-assistance-the-perfect-service-tool-for-industries">Is remote assistance the perfect service tool for industries?</Link></h4>
                      <p>In case you are wondering what Remote Assistance is in the purview of an industrial tool, it basically enables...</p>
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

export default Home1