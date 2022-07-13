import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/blog/b-2.jpg';
import xrcont from '../../../assets/images/blog/xrcont.JPG'; 
import BlogSidebar from './BlogSidebar';

export class XRhelpingbusinesses_Blogs extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    return (
      <>
         <Helmet>  
            <title>What is Extended Reality (XR) and how is it helping businesses</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="Extended Reality (XR)" title="Extended Reality (XR)" />
            </div>

            <div className="content-block">
                <div className="section-area section-sp2 bg-grey">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                    <div className="blog-lg blog-single">
                                        <div className="action-box blog-lg">
                                            <img src={xrcont} alt=""/>
                                        </div>
                                        <div className="info-bx">
                                            <div className="ttr-post-title">
                                                <h4 className="post-title">What is Extended Reality (XR) and how is it helping businesses</h4>
                                            </div>
                                            <div className="ttr-post-text">
                                                <p>Extended reality is basically an umbrella term given to the immersive experiences generated in Augmented Reality, Mixed Reality and Virtual Reality.</p>
                                                <p>To explain Extended Reality, we will first understand each of the three terms underlying the XR technology.</p>                                                
                                                <h4>VIRTUAL REALITY</h4>
                                                <p>Virtual Reality comprises head mounted displays, smart glasses, etc. so as to fully immerse the user in a computer-generated virtual environment with a 360-degree view of the surroundings. It has potential applications across a wide range of industries including Automotive, Automobile, Pharmaceuticals, Oil & Gas, Power & Utilities, along with industries such as Gaming, Entertainment, E-commerce, Tourism, Retail, etc. While Gaming and Entertainment industries were early adopters of VR, now the focus is shifting towards Industrial organizations leveraging VR technologies to increase productivity at work, improve bottom line, improve production rates and reduce error rates arising due to inadequate training and development.</p>
                                                <p>As a rough estimator, we have for the ease of understanding defined Virtual Reality as 75% virtual environment and 25% real-world environment as there are always some real-world interactions involved at some level.</p>
                                                <h4>AUGMENTED REALITY</h4>
                                                <p>Remember the Pokémon GO game? Well, yes that’s AR for you! Augmented Reality is basically the superimposition of computer-generated images, videos, and 3D assets, with the real-world environment which brings virtually generated content to life in the real-world with the help of gadgets like the smartphones and AR Glasses. It helps users to go through engaging content pieces and interact with them enabling them to fully understand the complex nature of workings around them in a fun and effective manner.</p>
                                                <p>Just like VR this has potential applications in various industries/sectors be it for Marketing, Entertainment, Gaming, or for specific industrial applications like in Oil and Gas sector, Automotive sector, Healthcare sector, and various other industries.</p>
                                                <h4>MIXED REALITY</h4>
                                                <p>AR offers real world experiences by overlaying parts of virtually generated information. Whereas, VR offers more of a fully immersive experience mimicking the real-world environment. Mixed Reality is the convergence of both AR and VR to offer a more mesmerizing experience by mimicking the real-world in a virtual environment while also retaining the real-world interactions. In short, if AR is 25% virtual and 75% real, and VR is 75% virtual and 25% real, then MR basically is a 50-50 real and virtual world mix offering both immersive experience and real-world interactions.</p>
                                                <p>In a Process Plant for example, if an operator wants to go through the Safety training, he can use MR technologies, wherein he will have the option to use the HMDs or Smart Glasses where virtual information can be overlaid, and he can use real-world interactions which objects to go through the standard operating procedures (SOPs) in a step-by-step manner.</p>

                                                <h4>EXTENDED REALITY</h4>
                                                <p>Going a step further, XR is basically the umbrella term for AR, VR and MR experiences which is enabling businesses to deploy an integrated solution for various learning & development and operational requirements. Businesses can now leverage an optimal mix of all these technologies to become Industry 4.0 ready.</p>
                                                <blockquote className="wp-block-quote">
                                                    <p>Standard businesses requirements can be listed down below as an example: </p>
                                                </blockquote>

                                                <ul className='list-check'>
                                                    <li>Need for a tech-enabled onboarding process for new operators – Smart Training Solution</li>
                                                    <li>Need for better tools for managing maintenance and repair overhaul – Maintenance & Repair Solution</li>
                                                    <li>Need for better technologies in manufacturing to optimize operational efficiencies – Smart Manufacturing Solution</li>
                                                    <li>Need to use remote assistance to cut travel costs, tackle the challenge of aging workforce, reduce the fix rates and enable better troubleshooting processes</li>
                                                    <li>Need for better tools to enable quick design review process for faster decision making and reduced time scales for go-to-market</li>
                                                </ul>
                                                <h4>BENEFITS OF XR</h4>
                                                <p>Well there are loads of other applications of XR. We will below list some potential applications and benefits of XR</p>
                                                <ul className='list-check'>
                                                    <li>Almost 50% of the XR tech focus is majorly in the education space. This includes learning and development initiatives at industry level. Classroom learning experience can now be transformed into virtual meeting rooms which makes the learning fun, intuitive and effective. Plus, it offers huge cost benefits.</li>
                                                    <li>In Healthcare, there are potential applications of XR for doctors and surgeons as well. Training programs can be effectively executed with XR tech. It offers more detailed insights into many areas which are otherwise difficult to explore.</li>
                                                    <li>XR has applications in design, engineering and architecture as well. Models can be tested well in advance and any rejigging which needs to be made can now be made cost-effective and within lesser time frames. Design reviews can take place which will further speed track the decision-making process.</li>
                                                    <li>In various industries like pharmaceuticals, oil and gas, automotive, power and utilities, renewables, smart training concepts can be deployed with the help of XR tech. At the same time, operators can now take part in 4D simulation trainings which will further help them in performing their tasks more effectively.</li>
                                                    <li>Remote assistance offers a paradigm shift in terms of ensuring faster resolutions to any bottlenecks arising in the field. Subject matter experts can be roped in within no time through remote assistance technology and help the field service agents in tackling critical operations. This again has tremendous cost benefits for the organization, as plant shutdowns or bottlenecks can be costly affairs to tackle.</li>
                                                </ul>
                                                <p>XR has tremendous applications across industries and sub-sectors. It is playing a vital role towards gearing companies to digitally transform and lead the Industry 4.0 revolution. And with XR now being able to be backed up by analytics it is offering a direct data given approach to help organizations assess its usefulness and at the same time make decisions which could not have been possible otherwise.</p>
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

export default XRhelpingbusinesses_Blogs