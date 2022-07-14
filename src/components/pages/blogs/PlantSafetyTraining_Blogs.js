import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/blog/automotive.jpg';
import vr from '../../../assets/images/blog/vr.jpg';
import BlogSidebar from './BlogSidebar';


export class PlantSafetyTraining_Blogs extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);

    return (
      <>
        <Helmet>  
            <title>Plant Safety Training needs new training methodology</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="Plant Safety Training" title="Plant Safety Training" />
            </div>

            <div className="content-block">
                <div className="section-area section-sp2 bg-grey">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                    <div className="blog-lg blog-single">
                                        <div className="action-box blog-lg">
                                            <img src={vr} alt=""/>
                                        </div>
                                        <div className="info-bx">
                                            <div className="ttr-post-title">
                                                <h4 className="post-title">Plant Safety Training needs new training methodology</h4>
                                            </div>
                                            <div className="ttr-post-text">
                                                <p>The First Industrial Revolution started at the end of the 18th Century when the first steam engine was created, and the use of hydropower revolutionized the industry. First Power Loom was built in 1784, by Edmund Cartwright. These innovations set the stage rolling for the subsequent industrial revolutions to come. Humans as we know, are quite competitive in this regard and always want to continuously innovate. The last century is a great example of it and the development work seems more like a spectacle in terms of the achievements unlocked in various fields.</p>
                                                <p>Following the trend, the late 19th Century saw the rise of electric engineering and mass production techniques, marking the Second Industrial Revolution, or also known as the Technological Revolution. The first moving belt conveyor was used in one of the slaughterhouses in Ohio, US. In the mid-nineties and seventies of the 20th Century, electronics and Information Technology, along with the first programmable logic controller were introduced to the world, marking the 3rd Industrial Revolution.</p>
                                                <p>Now the 4th Industrial Revolution is dawned upon us, and as per experts’ prediction, it will become a reality in the next 20 years or so. We feel it has already started taking shape, and will soon reach all corners of the world.</p>
                                                <p>4th Industrial Revolution is based on the concept of ‘smart factories’ or ‘smart collaboration between factories’, and that processes and equipment are connected over the Wi-Fi or any other network for that matter, communicating with each other to optimize mass production, and we must note that 5G is currently transforming the way we consume internet and the groundwork for the same has already been accomplished now. It is soon going to be the predominant network of communication across the world soon.</p>
                                                <p>Artificial Intelligence is gaining tremendous traction around the globe as well, and there is a huge skills gap deficit to ensure that we progress rapidly to deploy best manufacturing practices including specialized training in the years to come. Sensors and communications technology will pave the way for the future, and seamless tracking and verification just like we do currently with our mobile applications in banking primarily, will become the way how machines communicate effectively to achieve end-goals pre-determined by us.</p>
                                                <p>The Internet of Things will be the focus area, and each device/product will be having its own IP address so as to be easily located and tracked in the network of things.</p>
                                                <p>4th Industrial Revolution would bring and has now already started to bring changes in the ease of manufacturing tailor-made products for the customers just the way they want, at affordable prices, allowing the needs of the customers to be fulfilled while maintaining cost-effectiveness, thus keeping customers happy and the businesses at the top of their game. Significant cost-benefits are there for the grabs for the companies to help them scale effectively, reach out to new and prospective customers over time and optimize the supply-demand curve effectively.</p>
                                                <p>It will offer companies more flexibility in terms of production lines, and the production can be adapted to meet the changing market scenario, and the product life cycles are anyways decreasing over the years, so it will become that much more important to implement stable and quickly scalable ways of fast-tracking production, something which Industry 4.0 will bring, and something which we would have to take care of, as there will be challenges governing the entire new revolution. While earlier there were enough provisions and systems in place to protect the communication & information structure, now there would be more trust factor to be in play when the companies open to the outer world starting off with the vendors, for instance, and 3rd party collaborations, etc. Security would be of prime concern. Companies hacking into the competitors’ production units by unethical hacking, could pose a significant threat, and may rather pose a dangerous scenario, one where the companies would be at the risk of losing important business advantages, and strategy implementation and execution.</p>
                                                <p>This report suggests, “Vocational and advanced training programmes are vital to support this structural change at all levels. A bridge must be built connecting the parallel worlds of production and IT and a common understanding created, in order that informed decisions can be made. This bridge is needed to boost acceptance for new work environments, train personnel for future tasks and roles and improve the communication in the company and cooperation between different corporate areas in cultural and organisational terms.” There is a real need for improving the current training methodologies being used in the industry setup. This is where AR, VR and MR – in short XR solutions - along with the integration in IoT can come in handy.</p>
                                                <p>The report goes on to say, “Digital transformation, new business models and Industry 4.0 require new ways of thinking, of working, of cooperating and ultimately of training personnel.” Well, certainly there would be a need to train the personnel on security parameters and industry advancements. At the same time there is ample opportunity with how the things are progressing in Industry 4.0 era, wherein the employees would have the chance to stay abreast with the latest regulations, constantly enhancing process know-how, and safety parameters.</p>
                                                <p>Virtual reality, Augmented Reality and Mixed Reality can be that bridge which connects the personnel with the Industry 4.0 advancements while utilizing the IoT developments effectively, and skilling the personnel would become relatively easy, efficient and cost-effective.</p>
                                                <p>So for the sake of simplicity, we would refer to Mixed Reality (MR), and would explore the use of it for complex processes, such as the one in manufacturing industries.</p>

                                                <ul className='list-check'>
                                                    <li>It can be used in the complex assembly where a complex sequence of hundreds and thousands of parts is required in the shortest amount of time. So important assembly information can be shared with the user with the help of head mounting displays for e.g.</li>
                                                    <li>It can be used in maintenance activities, and by simply glancing at the equipment or parts of a process, the personnel can track if everything is going well or not.</li>
                                                    <li>Similarly, it can be deployed in quality assurance and automation processes as well, with the basic idea being that the information can now be accessed at ease and not limited to a control room in the plant.</li>
                                                </ul>
                                                <h4>To give an account of numbers and scope of AR/VR, we present the below three top use cases:</h4>
                                                <ul className='list-check'>
                                                    <li>Retail showcasing, accounting for a total investment of $442 million.</li>
                                                    <li>On-site assembly and safety, worth a total spend of $362 million.</li>
                                                    <li>Process manufacturing training as the number three with $309 million.</li>
                                                </ul>
                                                <p>So in short, AR, VR and MR will play an important role in Industry 4.0 revolution, and will ensure optimization of the resources including productivity levels, working on the fundamentals of increasing speed, quality, and quantity while ensuring flexibility. Additionally, Process Manufacturing Training will form a crucial part of the expansion plans to truly achieve Industry 4.0 status, and innovation would be at the heart of it driving the workforce to enhance their skills and deliver outstanding results.</p>
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

export default PlantSafetyTraining_Blogs