import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import LogoWhite from '../../assets/images/Simulanis-Logo-white.svg'
import IconImg1 from "../../assets/images/icon/contact/icon1.png"
import IconImg2 from "../../assets/images/icon/contact/icon2.png"
import IconImg3 from "../../assets/images/icon/contact/icon3.png"
import { SERVER_IP, PORT } from "../../server";
import swal from "sweetalert";


import member from '../../assets/images/GEP.png'
import Email from './Email';

export class Footer extends Component {

    constructor(){
        super();
        this.state = {
            fname :'',
            lname : '',
            org : '',
            orgEmail :''
        }
    }
     onChange = (e) =>{
        e.preventDefault();
       this.setState({
          [e.target.name] : e.target.value.replace(/\s+/g, " ") // space regex in text
 
        })
         }
     
      onEmailChange = (e) =>{
        e.preventDefault();
       this.setState({
          [e.target.name] : e.target.value.replace(/\s+/g,"")  // space regex in email
        })
         }

    

    validFun(){
       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.orgEmail)){
            return true
       }else{
         return false
       }
    }




    onSubmit = (e) =>{
        e.preventDefault();
        let current = this;
        if(current.validFun()){
            console.log("Email valid")
            console.log("this.state")
            console.log(this.state)
            const data = {
                fname : current.state.fname,
                lname : current.state.lname,
                org : current.state.org,
                orgEmail : current.state.orgEmail
            }
            axios.post(`${SERVER_IP}:${PORT}/api/submit/newsLetter`, data)
            .then(function(res){
                console.log("resp.....")
                console.log(res)
                if(res.status === 200){
                    if(res.data.error === false){
                        swal({
                            title:res.data.message,
                            icon:"success",
                            button:false
                        })
                        setTimeout(() => window.location.reload(), 1500);
                    }
                    else{
                        swal(res.data.message)
                    }
                }
            })
            .catch(function (err){
                console.log(err)
                swal("Somethins went wrong. Please Retry", "", "warning")
            })

           }else{
             console.log("invalid Email valid")
           } 
        
    }



    
  render() {
    return (
      <>
        <div className="membersection text-center">
            <div className="container">
                <h1>Member</h1>
                <div className="row">
                    <div className="col-md-12">
                        <img src={member} style={{width:'320px'}} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer ==== --> */}
        <footer className="footer-style2">
            <div className="footer-top bt0">
                <div className="container">
                    <div className="row footer-info">
                        <div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
                            <div className="feature-container left footer-info-bx">
                                <div className="feature-lg text-white">
                                    <span className="icon-cell"><img src={IconImg3} alt=""/></span> 
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-tilte">Global HQ, UK Office</h5>
                                    <p><a target="_blank" href='https://www.google.com/maps/place/St+Georges+House,+215+Chester+Rd,+Manchester+M15+4JE,+UK/@53.470854,-2.261081,16z/data=!4m5!3m4!1s0x487bb1e236ee851b:0xf2f1aa755aa9beb!8m2!3d53.470854!4d-2.2610809?hl=en'>St. George House 215-219, Chester Road, Manchester M15 4JE</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
                            <div className="feature-container left footer-info-bx">
                                <div className="feature-lg text-white">
                                    <span className="icon-cell"><img src={IconImg3} alt=""/></span> 
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-tilte">India Office</h5>
                                    <p><a target="_blank" href='https://www.google.com/maps/place/Simulanis+Solutions+Pvt.+Ltd/@28.584039,77.326879,16z/data=!4m5!3m4!1s0x0:0x2cdc85fd85fb7043!8m2!3d28.5840963!4d77.3269618?hl=en'>AMCO TOWER, Ground Floor, A-5, 6, 7, Sector 9, Noida, UP, 201301</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 m-sm-b30">
                            <div className="feature-container left footer-info-bx">
                                <div className="feature-lg text-white">
                                    <span className="icon-cell"><img src={IconImg2} alt=""/></span> 
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-tilte">Email Address</h5>
                                    <div className='position-relative' style={{height:'45px'}}>
                                        <Email/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
                            <div className="feature-container left footer-info-bx">
                                <div className="feature-lg text-white">
                                    <span className="icon-cell"><img src={IconImg1} alt=""/></span> 
                                </div>
                                <div className="icon-content">
                                    <h5 className="ttr-tilte">Contact Number</h5>
                                    <p><a href="tel:+91 9990912140">+91 99909 12140</a></p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-4 text-center text-lg-center mt-4">
                            <Link to="/get_in_touch" className="btn btn-long d-sm-inline-block">Get In Touch</Link>
                        </div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-4 ">
                            <div className="widget list-2">
                                <h5 className="footer-title">Industry</h5>
                                <ul>
                                    <li><Link to="/pharmaceutical">Pharmaceutical</Link></li>
                                    <li><Link to="/automotive">Automotive</Link></li>
                                    <li><Link to="/automation">Automation</Link></li>
                                    <li><Link to="/oilandgas">Oil & Gas</Link></li>
                                    <li><Link to="/fmcg">FMCG</Link></li>
                                    <li><Link to="/energy-and-utilities">Energy and Utilities</Link></li>
                                    <li><Link to="/paint-and-chemicals">Paint and Chemicals</Link></li>
                                    <li><Link to="/construction">Construction</Link></li>
                                    <li><Link to="/engineering">Engineering</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4 ">
                            <div className="widget list-2">
                                <h5 className="footer-title">Solutions</h5>
                                <ul>
                                    <li><Link to="/xr-training">XR Training</Link></li>
                                    <li><Link to="/simulator">Simulators</Link></li>
                                    <li><Link to="/reflexis">Reflexis</Link></li>
                                    <li><Link to="/remote-assist">Remote Assist</Link></li>
                                    <li><Link to="/quixbox">Quizbox</Link></li>
                                    <li><Link to="/sanalexa">Sanalexa</Link></li>
                                    <li><Link to="/ehs">Ehs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4 ">
                            <div className="widget list-2">
                                <h5 className="footer-title text-lg-center">Sign Up to Simulanis Newsletter</h5>
                                <form action="#" onSubmit={this.onSubmit} method='post' className='newsletter'>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="fname" onChange={this.onChange} value={this.state.fname} className='form-control' placeholder='First Name' required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name='lname' value={this.state.lname} onChange={this.onChange} className='form-control' placeholder='Last Name' required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name='org' value={this.state.org} onChange={this.onChange} className='form-control' placeholder='Organisation' required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name='orgEmail' value={this.state.orgEmail} onChange={this.onEmailChange} className='form-control' placeholder='Organisation Email' required/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group text-center">
                                                <button type='submit' style={{width:'160px'}} className='btn btn-outline-success'><i className='fa fa-paper-plane me-1'></i> Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p className="m-b0">Copyright © {(new Date().getFullYear())} 
                            <img src={LogoWhite} className="footer-b-logo" style={{width:'68px', margin:'0px 6px'}} alt=""/> 
                            All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                            <ul className="link-inline">
                                <li><a href="https://www.facebook.com/simulanissolutions/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/simulanis-solutions-pvt-ltd/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href='https://twitter.com/simulanis?lang=en' target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href='https://www.instagram.com/simulanis/' target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/c/SimulanisSolutions/videos" target="_blank"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
  }
}

export default Footer