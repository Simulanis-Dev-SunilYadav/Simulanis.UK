import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet"; 
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/blog/automotive.jpg';
import arwithautomotive from '../../../assets/images/blog/arwithautomotive.jpg';
import BlogSidebar from './BlogSidebar';

export class ARAutomotive_Blog extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    return (
      <>
          <Helmet>  
            <title>Augmented Reality and the Automotive Industry – A value creation opportunity not to be missed</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="AR and Automotive Industry" title="AR and Automotive Industry" />
            </div>

            <div className="content-block">
                <div className="section-area section-sp2 bg-grey">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                    <div className="blog-lg blog-single">
                                        <div className="action-box blog-lg">
                                            <img src={arwithautomotive} alt=""/>
                                        </div>
                                        <div className="info-bx">
                                            <div className="ttr-post-title">
                                                <h4 className="post-title">Augmented Reality and the Automotive Industry – A value creation opportunity not to be missed</h4>
                                            </div>
                                            <div className="ttr-post-text">
                                                <p>AR is shaping the way we carry out our daily chores, be it at work, while we are shopping, or while we are relaxing at home. And now even extends to how we drive, and how the automotive industry deals with the technological shifts to provide better experiences for its customers, employees and other stakeholders as well.</p>
                                                <p>Let’s face it, the automotive sector is facing a huge turmoil amidst this Covid-19 scenario. The sector which was already in slump has been facing great difficulties to tackle the current global crisis. The steady decrease in demand leading to job cuts, budget cuts along with the Covid-19 recipe for disaster which has caused production halts globally, has rendered the automotive industry in a flux. The good news is that now at least the production has started at many locations globally, and slowly the sector is getting back on its track.</p>
                                                <blockquote className="wp-block-quote">
                                                    <p>This current situation is an opportune time for companies in this sector to take cues and deploy cost effective and efficient technology-driven concepts to help them make their financial reports look all the better for the current FY and for many years to come thereafter. And one such revolutionary technology is the entire gamut of Augmented Reality driven approach, and the use cases are plenty: </p>
                                                </blockquote>
                                                

                                                <h4 className="title m-b5">AR offerings help bridge the skills gap and enhance the training potential</h4>
                                                <p>Big organizations pay a huge emphasis along with earmarking a separate budget for all the training expenses of their employees. AR helps in reducing those costs significantly while assuring that the training experience is much more enhanced with tremendous retention rates when it comes to learning. The learn-by-doing methodology comes in handy and at the same time the training outcomes are realised more comfortably while ensuring the safety at the workplace is met, as you don’t have to commit an error in the real world (which can cause potential hazards) when you have the option to do it virtually. The Training manuals, maintenance work, and Standard Operating Procedures (SOPs) can have the AR element to their modules to ensure tremendous productivity gains and a better financial outlook for the organizations.</p>
                                                
                                                <h4>AR offerings can lead to better driving experience</h4>
                                                <p>AR enabled helmets for two-wheelers, and windshield navigational systems for 4-wheelers which allow for information to be shared right in the field of view of the driver, along with additional options such GPS navigation ability, play music, check the surroundings and climatic conditions, all help to provide a seamless and more connected driving experience.</p>
                                                <h4>Better opportunities for new product development</h4>
                                                <p>AR can be a significant tool to guide the research and design teams to test new products with the already loaded content libraries [Link to Content Libraries Page] on the AR platform. Now, they don’t need to virtually design the new elements again and again, when they can easily check if the new automotive parts will be fitting in with the old ones at disposal. This reduces the overall development costs and also reduces the time to go to market, and helps scale the production effectively.</p>
                                                <h4>Enhancing Customer Experiences</h4>
                                                <p>The concept of ‘virtual windshields’ is already gaining traction, and research is being done to make it better. With the integration opportunities of AR led technologies with other digital devices such as smartphones, and in-car display and entertainment systems, the AR driven approach can lead to better customer experience. For instance, the customer can interact with a hand gesture to directly call someone while driving, or get instant repair and installation guides while interacting live with a representative online if he’s stuck with a broken car in the middle of nowhere. This will greatly impact the after-sales experience, and the customer will always have someone to support him remotely and efficiently. Check out this blog to learn more about remote assistance.</p>
                                                <h4>AR can also help in marketing efforts</h4>
                                                <p>Now the customers can virtually and remotely realize the options he/she is exploring to buy a new car. With a QR code marker he can now digitally explore the various options to closely compare the designs, check the performance of the cars, see which colour would suit them the most, right through his smartphone. VR glasses or HMDs (head mounted displays) can be paired (and there are cardboard based solutions which offer cost effective yet working solutions) to give a virtual test drive to the prospective customers. This will reduce the customer acquisition costs considerably and increase the actual conversions as well at the same time. Overall, this helps in reduced marketing costs and offers an entirely new way to connect with the audience.</p>
                                                <h4>What’s more?</h4>
                                                <p>Now you get real-time metrics and analysis for any outcome related to AR deployments, as per what has already been shared in the use cases above. Be it training related outcomes for employees or customer experience, now you get the chance to track live data and analyse your employee engagements and customer engagements through an engaging dashboard. Check out this article to learn more about how analytic tools can be deployed and how they are beneficial</p>
                                                <p>So we have discussed the use cases and potential applications of AR in the automotive industry. Now would like to summarize by sharing the market outlook. As per the ABI Research report, it has predicted that the AR Automotive market will be steadily growing at a 177% annual rate and will be reaching $5.5 billion by 2022. Now, that just shows what tremendous opportunity AR brings to the table, and the automotive industry must take cues and get ready to take action which will certainly help them in the long run and help sustain their businesses.</p>
                                                <p>See how we at Simulanis are leading the charge to tackle the challenges faced by the Automotive Industry</p>
                                                <p>Also, check out this innovation map - which offers a quick summary to what we have shared in this article - to see how AR holds the potential to revolutionize the Automotive Industry (credits - StartUs Insights).</p>
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

export default ARAutomotive_Blog