import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/blog/xrwithpharma.jpg';
import arvrwithmanufacturing from '../../../assets/images/blog/arvrwithmanufacturing.jpg';
import BlogSidebar from './BlogSidebar';

export class ArVrManufacturingInduxtry_Blogs extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    return (
      <>
         <Helmet>  
            <title>Augmented Reality and Virtual Reality (AR-VR) in Manufacturing Industry</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="Manufacturing Industry" title="AR and VR in Manufacturing Industry" />
            </div>

            <div className="content-block">
                <div className="section-area section-sp2 bg-grey">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                    <div className="blog-lg blog-single">
                                        <div className="action-box blog-lg">
                                            <img src={arvrwithmanufacturing} alt=""/>
                                        </div>
                                        <div className="info-bx">
                                            <div className="ttr-post-title">
                                                <h4 className="post-title">Augmented Reality and Virtual Reality (AR-VR) in Manufacturing Industry</h4>
                                            </div>
                                            <div className="ttr-post-text">
                                                <p>We are pretty sure that if you have made it so far, you must be acquainted with the AR VR jargons quite well by now. In any case, we would take a moment to run you through it if not. AR is basically 25% Virtual and 75% real environment. While Virtual Reality is 75% virtual and 25% real environment. We tried to take Pareto's Law quite seriously and rejigged a bit as per industry accepted norms for these two technologies. They have many potential applications in a plethora of industries, and Manufacturing industry is no exception.</p>
                                                <p>With AR you can basically superimpose a computer generated digital asset like an image or a video which brings the real environment to life in the virtually generated environment through engaging content pieces with which you can interact. On the other hand, with VR, you can now totally immerse yourself in the virtual environment with the help of smart glasses or head mounted displays for instance, and engage just like you would in the real world, which can be further propelled with the use of smart gesture technologies and with haptic devices at play.</p>
                                                <blockquote className="wp-block-quote">
                                                    <p>Well, this is the future, and it has potential applications in almost all the industries, be it oil and gas, healthcare, pharmaceuticals, education, automotive industry, and so on. </p>
                                                </blockquote>
                                              
                                                <h4 className="title m-b5">Potential application of AR and VR in Manufacturing Industry</h4>
                                                <p>Currently these technologies are deployed by some major manufacturing companies. These include those which are into the food sector along with other sectors such as: textiles, petroleum, chemicals, rubber, electrical and electronic sectors.</p>
                                                
                                                <h4>Improving safety at workplace</h4>
                                                <p>As per one report, and research by ISSA, it is suggested that approximately 4% of the world’s GDP each year alone is equivalent to the potential costs associated with non-fatal accidents taking place at the workplace alone. And if we account for the informal sector as well, this figure could turn out to be even more than 10% world GDP figure. Let that sink in! This is significant and that is where AR and VR technologies have a potential role to play when it comes to improving safety at the workplace.</p>
                                                <ul className='list-check'>
                                                   <li>You can now deploy engaging training modules to help workers retain the information in the best way possible while making sure that they exercise the learn-by-doing methodology in the virtual environment and not the real one. This further helps in reducing the error rates and also helps in potentially stopping the hazards at the workplace which have the potential to be fatal.</li>
                                                   <li>AR and VR allow the workers to visualize and get real-time data of the production processes along with assembly line configurations. This helps in tracking and reporting any potential hazards at work. At the same it provides better understanding of such complex flows at plants.</li>
                                                   <li>As per one case study, FORD managed to reduce its employee injury rate by 70% which utilized immersive virtual reality systems to make it possible. It created more than 900 virtual assembly task assessments for each new vehicle launch.</li>
                                                </ul>
                                                <h4>Better Training Methodology for Workers</h4>
                                                <p>There is a vicious cycle at play. There is a lack of proper training mechanisms for employees at the workplace, which results in lower productivity, which eventually leads to lower revenue gains for the companies, eventually even further lowering down the training budget. With AR and VR, you can now reduce significant costs while improving cash flows, in part due to better learning methodology, higher retention rates for the learners, improved productivity resulting in lower error rates and higher ROI opportunity due to cost effective training solutions.</p>
                                                <ul className='list-check'>
                                                    <li>You can now design content with the help of technical AR VR experts and use the content libraries as assets to create your own course.</li>
                                                    <li>You can create standard operating procedures (SOPs) as protocols and train your workers effectively, be it for the new joiners or in case you have commissioned a new plant equipment, or upgraded the production systems or process models to any extent.</li>
                                                    <li>What’s better, now you can track daily, weekly or monthly progress reports of your employees with a simple product such as Sanalexa – which is an analytics suite offered by Simulanis. You can now create and view progress metrics with lively dashboards in store and see the results for yourself, on how AR and VR training are helping your employees in enhancing their productivity with the help of engaging training modules.</li>
                                                    <li>As per the annual report (2016-17) of the Ministry of Skill Development & Entrepreneurship (Govt. of India), the construction sector has the highest training need. So, definitely a lot of scope for AR VR deployments is existent to bridge the skills gap.</li>
                                                </ul>
                                                <h4>Better design related development processes</h4>
                                                <p>With easy prototyping options, car manufacturers for instance are using AR and VR led technologies to cut costs while at the same time helping them take informed decisions in record time. Same can be applied to other sectors to help them aid in their design stages. Now, they don’t need to physically make the prototypes while they can test out the new product developments in VR and AR aided systems. These technologies help in optimally designing the products as per the roadmap of the companies. The smallest of errors in the prototyping stage can cause delays in the time taken to go to market eventually.</p>
                                                <ul className='list-check'>
                                                    <li>With VR for instance, you can easily lay out the entire process and can check the feasibility status at ease. You get to identify the potential bottlenecks or problems before the unit is actually built.</li>
                                                    <li>You get to interact with the designs, get more insights on performance metrics, you even get to collaborate effectively with multiple stakeholders well in time, which eventually leads to avoiding any delays and faster lead times.</li>
                                                </ul>
                                                <h4>Reduces Costs and Increased ROIs</h4>
                                                <p>All of it boils down to expense management and returns on investments at play when it comes to dealing in a business environment. There are tremendous opportunities for manufacturing companies to deploy AR and VR based solutions to help them improve their returns of investment significantly. At the same time, it leads to increase in operational efficiency, better subject matter retention rates, increased productivity, reduced error rates, increase and better fix rates, etc.</p>
                                                <p>You don’t need to now deal in real-time every time you need to conduct an iteration to your existing designs. Or you don’t need to create lengthy, complex and inefficient training programs each time. You can even let workers and representatives collaborate effectively using Remote Assistance technologies for troubleshooting.</p>
                                                <p>To sum it up, these are reliable and proven technologies which when exploited to the full potential can unearth great potential use cases for the manufacturing sector especially now when the economy has taken a hit and companies are needed to cut costs while increasing gains and production in the forthcoming days.</p>
                                            </div>


                                            <div className="ttr-divider bg-gray"><i className="icon-dot c-square"></i></div>
                                            <div className="ttr-post-meta d-flex">
                                                <div className="share-post ml-auto">
                                                    <ul className="social">
                                                        <li>Share:</li>
                                                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link to="#"><i className="fa fa-whatsapp "></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-md-12 col-lg-4 col-xl-4 sticky-top">
                                <BlogSidebar/>
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

export default ArVrManufacturingInduxtry_Blogs