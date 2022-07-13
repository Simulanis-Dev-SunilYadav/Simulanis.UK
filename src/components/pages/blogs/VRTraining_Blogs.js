import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import Breadcrumb from '../../navbar/Breadcrumb';
import Banner1 from '../../../assets/images/blog/industrialtraining.jpg';
import plantsafety from '../../../assets/images/blog/plantsafety.jpg';
import BlogSidebar from './BlogSidebar';


export class VRTraining_Blogs extends Component {
  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    return (
      <>
        <Helmet>  
            <title>Virtual Reality - is it the Future of Training?</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
            <div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
              <Breadcrumb heading="VR Future of Training" title="VR Future of Training" />
            </div>

            <div className="content-block">
                <div className="section-area section-sp2 bg-grey">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
                                    <div className="blog-lg blog-single">
                                        <div className="action-box blog-lg">
                                            <img src={plantsafety} alt=""/>
                                        </div>
                                        <div className="info-bx">
                                            <div className="ttr-post-title">
                                                <h4 className="post-title">Virtual Reality - is it the Future of Training?</h4>
                                            </div>
                                            <div className="ttr-post-text">
                                                <h4>A Brief History</h4>
                                                <p>Virtual reality, augmented reality and cloud systems, all offer countless new ways to conduct effective trainings for businesses and significantly boosts the skill-building process for the staff.</p>
                                                <p>Businesses are quite familiar today that, for them to grow at a fast pace while ensuring efficiency, there is an immediate need to empower their employees, making them proficient with regards to the skills required on the job. There is an inherent need to provide the employees a dedicated support system when it comes to various training initiatives, allowing them to work in various environments, in various processes with systems in place while using advanced tools more efficiently.</p>
                                                <p>It is now evident that face-to-face teaching is becoming less relevant, and the impact provided as far as the overall effectiveness of the teaching methodology is concerned, it lags substantially in comparison to the latest tech-enabled methodology with the deployment of the VR and AR systems primarily, and with effective use of cloud-based systems which can be integrated into the VR and AR systems itself – making it a purely SaaS play.</p>
                                                <p>The new technology features offer various benefits, such as customizing the training modules as per the requirements of the various trainees based on different skill sets and age, along with the scalability to mimic various process environments, be it automobile industry, or pharmaceutical industry, or even Oil & Gas industry for that matter. The retention rates have improved significantly with the implementation of VR, AR based trainings, and this is well researched and documented as well.</p>
                                                <p>Shafi Ahmed, a cancer surgeon at the Royal London Hospital, who broadcasted a live surgery in VR, says, "I believe that virtual reality and augmented reality can revolutionise surgical education and training, particularly for developing countries that don't have the resources and facilities of NHS (National Health Services) hospitals,".</p>
                                                <p>"VR is a great, economical way to provide hands-on training that is almost impossible to replicate in the real world," says another professional from Deutsche Bahn AG, which is a German railway company.</p>
                                                <p>Even we at Simulanis have been working closely with some of the top companies in the world, including Fortune 500 and FTSE 100 companies. And here is a snippet to revalidate the claims regarding the feedback for AR-VR implemented trainings, and how impactful they really are, with companies such as GSK, Johnson and Johnson (J&J), and NecLife in our clientele acknowledging and promoting the AR-VR training methodologies.</p>
                                                <h4>According to the India Skills Report 2018 by UNDP,</h4>
                                                <ul className='list-check'>
                                                    <li>1.5 million Engineers pass out every year but only 52% are employable, highest employable population across domains.</li>
                                                    <li>ITI has highest skill gap followed by Polytechnic, even though both are skill oriented courses and this skill gap reveals the level of education in both the course.</li>
                                                    <li>Annually about 3,60,000 MBA students pass out from 4000 B-schools in India and 61% are unemployable due to skill gaps and lesser work experience.</li>
                                                </ul>
                                                <p>This is rather a grim picture, and if at all we have to offset these figures, significant efforts need to be made in order to improve the education industry, and ensuring that the skill gaps are reduced, and technologies such as AR and VR will have a crucial role to play in this regard.</p>
                                                <p>With initiatives such as Skills India and Startup India, the Government of India is promoting individuals, companies and government councils to address the problem.</p>
                                                <p>At Simulanis we take pride in being the most awarded AR-VR Company in India. To give a brief account of the same:</p>
                                                <ul className='list-check'>
                                                    <li>In October 2017 we won “Start-up Programmes for entrepreneurs in Oil and Gas Sector” award launched by Ministry of Petroleum & Natural Gas, Government of India.</li>
                                                    <li>In November 2017, the National Entrepreneurship Award 2017 (NEA) granted to us by the Hon’ble Finance Minister Shri Arun Jaitley and awarded to us by the Ministry of Skill Development and Entrepreneurship.</li>
                                                    <li>In Feb 2018, our First VR lab got deployed at SWARNA BHARAT TRUST, Hyderabad which was inaugurated by Hon’ble Vice President of India.</li>
                                                    <li>In Feb 2018, we were announced as the winner at Aegis Graham Bell Award 2017 in “Innovation in VR” category for our innovation “VR for Industrial Training”, honouring the best innovation in the ICT domain in India.</li>
                                                </ul>
                                                <p>We have mentioned this so as to give a picture as to how the VR industry is getting a push from the government sectors, while being given equal importance by the private sector. It also shows that AR and VR are here to stay, and would impact the education sector tremendously, and has already starting to impact it to a considerable extent.</p>
                                                <p>The schools for the future generations hold tremendous promise, and adapting to technological advancements will only become necessary to stay ahead in the game and offer the best learning solutions at the lowest costs. The launching of Aakash tablets is a testament to that. With further realisation by the industry and change in consumer behaviour, which is changing and adapting to AR/VR at a good rate, the penetration will only enhance.</p>
                                                <p>According to a survey, by 2022, the number of mobile users using augmented reality applications could reach 2 billion. By 2021 augmented reality devices may be a business worth nearly $50 billion, whereas virtual reality would be worth nearly $20 billion.</p>
                                                <p>The growth is tremendous, as can also be seen in various other surveys and the most promising application lies in the Education Sector itself. According to a survey, 69% of the Americans interviewed, understand that the benefits of Augmented Reality and IoT devices can improve their lives in the education area. According to another survey in the US, 41% respondents felt that Virtual Reality Headsets are likely to be used in the Education sector, whereas 72% respondents felt that VR headsets are likely to be used for Video Games. This looks promising for Simulanis particularly, as we have been one of the first movers to implement Game-Based Learning and Gamification models in the skilling sector to enhance the learning, and we could see clearly that the engagement levels had improved drastically with their implementation.</p>
                                                <p>So, to wrap it up, a lot of references and statistics have been provided in the piece, so as to give a holistic picture on the standings of AR and VR technology as of now and how it would be progressing in the future. One thing is certain, no matter what the market fluctuations will be in the future, it is really helping and shaping the world towards a reinvigorating and immersive learning experience, and also addressing some of the greatest challenges the world is facing, such as the increasing skills gap and increased worker safety concerns.</p>
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

export default VRTraining_Blogs