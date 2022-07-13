import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/banner/banner1.jpg';
import remotework from '../../../assets/images/blog/remote-work.jpg';
import arwithautomotive from '../../../assets/images/blog/arwithautomotive.jpg';
import arvrwithmanufacturing from '../../../assets/images/blog/arvrwithmanufacturing.jpg';
import xrwithpharma from '../../../assets/images/blog/xrwithpharma.jpg';
import knowledgegap from '../../../assets/images/blog/knowledgegap.jpg';
import threedsimulators from '../../../assets/images/blog/3dsimulators.jpg';
import plantsafety from '../../../assets/images/blog/plantsafety.jpg';
import education from '../../../assets/images/blog/education.jpg';
import vr from '../../../assets/images/blog/vr.jpg';
import vrfuture from '../../../assets/images/blog/vrfuture.jpg';
import eduvrimporving from '../../../assets/images/blog/eduvrimporving.jpg';
import industrialtraining from '../../../assets/images/blog/industrialtraining.jpg';
import xrcont from '../../../assets/images/blog/xrcont.JPG';
import BlogSidebar from './BlogSidebar';
import ReactPaginate from 'react-paginate';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


const Blogs = () => {
    const [posts, setPosts] = useState([
        {
            
        }
    ])
  return (
    <>
        <Helmet>  
            <title>Simulanis XR Blogs</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="Simulanis XR Blogs" title="Simulanis XR Blogs" />
            </div>

            <div className="content-block">
                <div className="section-area section-sp2 bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={remotework} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="/is-remote-assistance-the-perfect-service-tool-for-industries">Is remote assistance the perfect service tool for industries?</Link></h4>
                                        <p>In case you are wondering what Remote Assistance is in the purview of an industrial tool, it basically enables the representatives, teams, employees...</p>
                                        <div className="post-extra">
                                            <Link to="/is-remote-assistance-the-perfect-service-tool-for-industries" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={arwithautomotive} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Augmented Reality and the Automotive Industry – A value creation opportunity not to be missed</Link></h4>
                                        <p>AR is shaping the way we carry out our daily chores, be it at work, while we are shopping, or while we are relaxing at home. And now even extends...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={arvrwithmanufacturing} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Augmented Reality and Virtual Reality (AR-VR) in Manufacturing Industry</Link></h4>
                                        <p>We are pretty sure that if you have made it so far, you must be acquainted with the AR VR jargons quite well by now. In any case, we would take a moment...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={xrwithpharma} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">XR – A medicine for the Pharmaceutical Industry</Link></h4>
                                        <p>As per a report by Statista revenue generated by the global pharmaceutical market in 2019 was USD 1250 Billion, and North America is the largest driver... </p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" ></div>
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={knowledgegap} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">AR & VR for Field Service Solutions to Bridge the Knowledge Gap</Link></h4>
                                        <p>If we look at the number 1 challenge at an industrial level as far as the field service is concerned, it is majorly to do with the considerable...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={threedsimulators} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">How 3D Simulations in Training are helping organizations</Link></h4>
                                        <p>Training is an integral part of any organization when it comes to optimal management and productivity improvement of human capital...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={vrfuture} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Virtual Reality - is it the Future of Training?</Link></h4>
                                        <p>Virtual reality, augmented reality and cloud systems, all offer countless new ways to conduct effective trainings for businesses...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix">
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={vr} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Virtual Reality - the next big thing to rejuvenate the training force</Link></h4>
                                        <p>In this age of innovation when every technological update brings faster speeds while cutting time, and with Moore’s law in full flow, we are...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" >
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={plantsafety} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Plant Safety Training needs new training methodology</Link></h4>
                                        <p>The First Industrial Revolution started at the end of the 18th Century when the first steam engine was created, and the use of hydropower...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" ></div>
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={threedsimulators} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Multiplayer VR - great boost for meetings, reviews and training</Link></h4>
                                        <p>First of all, we would like to put emphasis on that to really appreciate Virtual Reality and its scope in so many diverse areas, you first have...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" >
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={education} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Top 4 areas which need immediate attention in the education sector</Link></h4>
                                        <p>Education is at the heart of any learning experience, and as a society we have laid out pathways for the learners at various stages of one’s life...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" >
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={eduvrimporving} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">5 Ways how VR is improving knowledge retention rates in Education Industry</Link></h4>
                                        <p>Improving knowledge retention rates in the education industry is a greatly researched and studied area, and with new trends in technology enhancements...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" >
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={industrialtraining} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">Industrial training using VR and AR - a big impact opportunity</Link></h4>
                                        <p>Virtual Reality (AR) and Augmented Reality (AR) have been around for more than 25 years now, but it still feels that they are in their nascent stages...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-post blog-md clearfix" >
                                    <div className="ttr-post-media"> 
                                        <Link to="#"><img src={xrcont} alt=""/></Link> 
                                    </div>
                                    <div className="ttr-post-info">
                                        <ul className="media-post">
                                            <li className="date"><Link to="#"><i className="fa fa-user-o"></i>By Admin</Link></li>
                                        </ul>
                                        <h4 className="post-title"><Link to="blog-details-sidebar">What is Extended Reality (XR) and how is it helping businesses</Link></h4>
                                        <p>Extended reality is basically an umbrella term given to the immersive experiences generated in Augmented Reality, Mixed Reality and Virtual Reality...</p>
                                        <div className="post-extra">
                                            <Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-bx gray clearfix">
                                    <ul className="pagination">
                                        <li className="previous"><Link to="#"><i className="ti-arrow-left"></i> Prev</Link></li>
                                        <li className="active"><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li className="next"><Link to="#">Next <i className="ti-arrow-right"></i></Link></li>
                                    </ul>
                                </div>



                            </div>
                            <div className="col-md-12 col-lg-4 col-xl-4 sticky-top" >
                                <BlogSidebar/>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Blogs