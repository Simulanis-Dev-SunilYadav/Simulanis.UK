import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import  Breadcrumb  from '../navbar/Breadcrumb';
import Banner1 from '../../assets/images/team/team.jpg';
import Image1 from "../../assets/images/about/raman_talwar.png";
import rohit from '../../assets/images/team/Rohit_Sharma.png';
import punit from '../../assets/images/team/Punit_Kumar.png';
import neerajch from '../../assets/images/team/Neeraj_Chouhan.png';
import ritesh from '../../assets/images/team/Ritesh_Kumar.png';
import arjun from '../../assets/images/team/Arjun_Sharma.png';
import yatin from '../../assets/images/team/Yatin_Chopra.png';
import nmishra from '../../assets/images/team/Niraj_Mishra.png';
import sunil from '../../assets/images/team/Sunil_Tiwari.png';
import aditya from '../../assets/images/team/Aditya_Raj.png';

export class Team extends Component {
  render() {
    const tagManagerArgs = {
		gtmId: 'GTM-P2QXCFZ'
	}
	TagManager.initialize(tagManagerArgs);
    
    return (
      <>
         <Helmet>  
            <title>Simulanis Team</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content bg-white">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
				<Breadcrumb heading="Team" title="Team" />
			</div>
		</div> 
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-bx" data-aos={"fade-up"}>
                            <h6 className="title-ext m-b0">Fueled by Passion</h6>
                            {/* <h3 className="title-head m-b0">Fueled by Passion</h3> */}
                            <h4 className="titleheading2 m-b0">Responsibility | Achievement | Teamwork | Interpreneurship | Ownership</h4>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src={Image1} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h3 className="name">Raman Talwar</h3>
					    <h5>Founder, Director and CEO</h5>
                        <p>Raman Talwar is a well decorated, top-rank holder and a multi-award winning Masters in Chemical Engineering with Honours in Research (MEng. Hons.) from the University of Manchester (UK). His core interests lie in the development and application of process simulation and optimization models to solve real world problems. He also takes a keen interest in the field of computer-aided design and development of process safety solutions applicable across a range of industries including oil & gas, pharmaceutical and chemicals.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-area bg-grey section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-bx" data-aos={"fade-up"}>
                            <h3 className="title-head m-b0">An eclectic mix of super-passionate go-getters</h3>
                            <h4 className='titleheading2'>who don’t take <span> “NO”</span> for an answer</h4>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="50">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={rohit} alt=""/>
                                            <ul className="team-social">
                                                <li><a href="mailto:rohitsharma@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/rohit-sharma-337842123/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Rohit Sharma</h3>
                                    <h5>Chief Technology Officer</h5>
                                    <p>Rohit Sharma, our Chief Technology Officer, is an Electronics Engineer possesses a natural flair, and a prodigious talent for computer programming and software development. He is instrumental in scaling-up our tech-stack over the years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="100">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={punit} alt=""/>
                                            <ul className="team-social">
                                                <li><a href="mailto:punitkumar@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/punit-kumar-058142171/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Punit Kumar</h3>
                                    <h5>Chief Operations Office</h5>
                                    <p>Punit Kumar, is our Chief Operations Officer and oversees ongoing operations and procedures. He ensures our operations are efficient, effective and smooth through proper management of resources, distribution of goods and services to customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="150">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={neerajch} alt=""/>
                                            <ul className="team-social">
                                                <li><a href="mailto:neerajchouhan@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/neeraj-chouhan-86345278/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Neeraj Chouhan</h3>
                                    <h5>Chief Product Manager</h5>
                                    <p>Neeraj Chouhan, working as the Chief Product Manager, joined Simulanis in 2015. He earned a Bachelors of Engineering from Michigan Technological University, USA in 2013. He is currently a key member of the Products team and plays an instrumental role.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="200">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={ritesh} alt=""/>
                                            <ul className="team-social">
                                                <li><a href="mailto:riteshkumar@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/ritesh-kumar-916aa554/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Ritesh Kumar</h3>
                                    <h5>Chief Metaverse Designer</h5>
                                    <p>Ritesh Kumar, our Chief Metaverse Designer , and the architect of the 3D XR worlds created at Simulanis, leads from the front, and is responsible for scaling our modelling, animation and design teams to build virtual worlds in rapid timeframes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="250">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={arjun} alt=""/>
                                            <ul className="team-social">
                                            <li><a href="mailto:arjunsharma@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/arjun-sharma-63579957/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Arjun Sharma</h3>
                                    <h5>Chief Business Officer</h5>
                                    <p>Arjun Sharma, a passionate chemical engineer and as a Chief Business Officer, is responsible for the technical supervision of the development, production, and operations of the training modules. His expertise lies in process engineering.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="300">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={yatin} alt=""/>
                                            <ul className="team-social">
                                            <li><a href="mailto:yatinchopra@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/yatin-chopra-481845175/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Yatin Chopra</h3>
                                    <h5>Chief Creative Officer</h5>
                                    <p>Yatin Chopra, is our Chief Creative Officer, and true to his job title, is masterful at being creative, and delivering stunning visuals and motion graphics for all our media collaterals and client communications. A multi-talented genius and an invaluable asset !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="350">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={nmishra} alt=""/>
                                            <ul className="team-social">
                                            <li><a href="mailto:nirajmishra@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/niraj-mishra-7644a662/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Niraj Mishra</h3>
                                    <h5>Chief Information Officer</h5>
                                    <p>Niraj Mishra, our Chief Information Officer, he is responsible for various product-related activities at Simulanis. This includes product innovation, conception and development and product management. He also oversees design and product quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="400">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={sunil} alt=""/>
                                            <ul className="team-social">
                                            <li><a href="mailto:suniltiwari@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/sunil-tiwari-45448053/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Sunil Tiwari</h3>
                                    <h5>Chief Project Officer</h5>
                                    <p>Sunil Tiwari, a passionate Chemical Process Engineer is our Chief Project Officer and heads all projects. He looks into project planning, tracking, execution, team management, identifying risks / issues, project delivery and reviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos={"fade-up"} data-aos-delay="450">
                        <div className="teambox">
                            <div className="row team-member">
                                <div className="col-md-3">
                                    <div className="m-b20 style-1">
                                        <div className="team-media">
                                            <img src={aditya} alt=""/>
                                            <ul className="team-social">
                                                <li><a href="mailto:adityaraj@simulanis.com" className="mail"><i className="fa fa-envelope-o"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/aditya-raj-sharma-027212b9/" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="name">Aditya Raj</h3>
                                    <h5>Chief Administrative Officer</h5>
                                    <p>Aditya Raj Sharma, is a MBA in Finance and Marketing from NMIMS (Mumbai), with an extensive experience in handling Administrative affairs. He is currently working as our Chief Administrative Officer and takes care of admin tasks.</p>
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

export default Team