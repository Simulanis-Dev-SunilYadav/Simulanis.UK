import React, { Component } from 'react'
import { Helmet } from "react-helmet";  
import TagManager from 'react-gtm-module'; 
import { Modal } from "react-bootstrap";
import Breadcrumb from '../../../navbar/Breadcrumb';
import Counter2 from '../../../counter/Counter2';
import Slider3 from '../../../slider/Slider3'
import Slider4 from '../../../slider/Slider4'
import Slider5 from '../../../slider/Slider5'
// Images
import paintsimuabout from "../../../../assets/images/whatwedo/xrtraining/pic12.jpg"
import fireabout from '../../../../assets/images/whatwedo/xrtraining/pic13.jpg'
import paint from '../../../../assets/images/whatwedo/xrtraining/aboutpaint.jpg'
import firesafety from '../../../../assets/images/whatwedo/xrtraining/firesafety.jpg'
import welding from '../../../../assets/images/whatwedo/xrtraining/welding.jpg'
import paintsimulatorpopup from '../../../../assets/images/whatwedo/xrtraining/paint.png'
import weldingsimulatorpopup from '../../../../assets/images/whatwedo/xrtraining/weldingsimulatorpopup.png'
import firesafetypopup from '../../../../assets/images/whatwedo/xrtraining/firesafetypopup.png'
import paintsimu from '../../../../assets/images/whatwedo/xrtraining/paintsimu.jpg'

import axios from "axios";
import swal from "sweetalert";
import { SERVER_IP, PORT } from "../../../../server";


export class Simulators extends Component {
    constructor (props) {
		super(props)
		this.state = {
            isPaint:false,
            isWelding:false,
            isFire:false,
            isOpen: false,
			name:'',
			email:'',
			phone:'',
			organization:'',
			nameError:'',
			emailError:'',
			phoneError:'',
			organizationError:'',
			pageName:"Simulator",

            paintMandatory:['Industry Standard Paint Gun','HTC Vive Package','VR Ready System','Simulanis Paint Simulator application'],
            paintRecommended:['Smell dispenser','Customized environment','3D models','White labelling'],
            paint:[],

            weldingMandatory:['Industry Standard Paint Gun','HTC Vive Package','VR Ready System','Simulanis Paint Simulator application'],
            weldingRecommended:['Smell dispenser','Customized environment','3D models','White labelling'],
            welding:[],

            fireMandatory:['Industry Standard Paint Gun','HTC Vive Package','VR Ready System','Simulanis Paint Simulator application'],
            fireRecommended:['Smell dispenser','Customized environment','3D models','White labelling'],
            fire:[],
            
         }
              }

    openPaintModal = () => this.setState({ isPaint: true });
    closePaintModal = () => this.setState({ isPaint: false, name:'', email:'', phone:'', organization:'' });

    openWeldingModal = () => this.setState({ isWelding: true });
    closeWeldingModal = () => this.setState({ isWelding: false, name:'', email:'', phone:'', organization:'' });

    openFireModal = () => this.setState({ isFire: true });
    closeFireModal = () => this.setState({ isFire: false, name:'', email:'', phone:'', organization:'' });

    onChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value.replace(/\s+/g," ")})
        }

    onEmailChange = (e) => {
        this.setState({ [e.target.name]: e.target.value.replace(/\s+/g,"").trim()});
        };

    onMobileChange = (e) => {
        const re = /^[0-9+\b]+$/
        if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({ [e.target.name]: e.target.value.replace(/\s+/g,"").trim() });
                }
                    };

    P_F_W=(e,N)=>{
        let current = this;
        console.clear();
        if(N==1){
                if(current.state.paint.includes(e)){
                    var myPaint = current.state.paint;
                    myPaint = myPaint.filter(value => value !== e);
                    current.setState({ paint:myPaint},()=>console.log(current.state.paint))
                }else{
                    current.setState({ paint: [...this.state.paint, e] },()=>console.log(current.state.paint))
                }
        }
        else if(N==2){
            if(current.state.welding.includes(e)){
                var myWelding = current.state.welding;
                myWelding = myWelding.filter(value => value !== e);
                current.setState({ welding:myWelding },()=>console.log(current.state.welding))
            }else{
                current.setState({ welding: [...this.state.welding, e]},()=>console.log(current.state.welding))
            }
        }
        else if(N==3){
            if(current.state.fire.includes(e)){
                var myFire = current.state.fire;
                myFire = myFire.filter(value => value !== e);
                current.setState({ fire:myFire },()=>console.log(current.state.fire))
            }else{
                current.setState({ fire: [...this.state.fire, e]},()=>console.log(current.state.fire))
            }
        }
         }

    onPainSubmit=()=>{
      let current = this;
      var data ={
        name:current.state.name,
        email:current.state.email,
        phone:current.state.phone,
        organization:current.state.organization,
        pageName:"Simulator",
        module:"Paint simulator",
        mandatoryService: current.state.paintMandatory,
        selectService: current.state.paint
          }
   
       axios.post(`${SERVER_IP}:${PORT}/api/submit/submitPaintService`,data)
       .then(function (response){
        if(response.status === 200){
            if(response.data.error === false){ 
                // swal(response.data.message)
                swal({
                    title: response.data.message,
                    icon: "success",
                    buttons: false
                  });
                setTimeout(() => window.location.reload(), 1500);
            }
            else{
                swal(response.data.message)
            }
             }
       }).catch(function(error){
            console.log(error)
            swal("Something Went Wrong. Please Retry.", "", "warning");
       })
    }

    onWeldSubmit=()=>{
      let current = this;
      var data ={
        name: current.state.name,
        email: current.state.email,
        phone: current.state.phone,
        organization: current.state.organization,
        module:"Welding simulator",
        pageName:"Simulator",
        mandatoryService: current.state.weldingMandatory,
        selectService: current.state.welding
          }
   
       axios.post(`${SERVER_IP}:${PORT}/api/submit/submitWeldService`,data)
       .then(function (response){
        if(response.status === 200){
            if(response.data.error === false){ 
                swal({
                    title: response.data.message,
                    icon: "success",
                    buttons: false
                  });
                setTimeout(() => window.location.reload(), 1500);
            }
            else{
                swal(response.data.message)
            }
        }
       }).catch(function(error){
            console.log(error)
            swal("Something Went Wrong. Please Retry.", "", "warning");
       })
    }

    onFireSubmit=()=>{
      let current = this;
      var data ={
        name: current.state.name,
        email: current.state.email,
        phone: current.state.phone,
        organization: current.state.organization,
        module:"Fire simulator",
        pageName:"Simulator",
        mandatoryService: current.state.fireMandatory,
        selectService: current.state.fire
          }

       axios.post(`${SERVER_IP}:${PORT}/api/submit/submitFireService`,data)
       .then(function (response){
        if(response.status === 200){
            if(response.data.error === false){ 
                swal({
                    title: response.data.message,
                    icon: "success",
                    buttons: false
                  });
                setTimeout(() => window.location.reload(), 1500);
            }
            else{
                swal(response.data.message)
            }
             }
       }).catch(function(error){
            console.log(error)
            swal("Something Went Wrong. Please Retry.", "", "warning");
       })
      }

  render() {
    const tagManagerArgs = {
        gtmId: 'GTM-P2QXCFZ'
    }
    TagManager.initialize(tagManagerArgs);
    
    return (
      <>
         <Helmet>  
            <title>Simulanis Simulators</title> 
            <meta name="title" content="" />   
            <meta name="description" content="" />  
            <meta name="keywords" content="" />  
         </Helmet> 
         <div className="page-content">
			<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+paintsimu+")"}}>
				<Breadcrumb heading="Simulator" title="Simulator" />
			</div>
		</div> 
        <div className="section-area wwedo  section-sp2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 m-md-b40"  data-aos={"fade-up"} data-aos-delay="100">
                        <div className="heading-bx">
                            <h6 className="title-ext mb-2">About</h6>
                            <h2 className="title-head m-b0">Simulanis Simulator System</h2>
                            <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                            <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className="head-px2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                        <Counter2/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row sp15">
                            <div className="col-sm-6 col-6 m-t80"  data-aos={"fade-up"} data-aos-delay="600">
                                <img src={paintsimuabout} alt=""/>
                            </div>
                            <div className="col-sm-6 col-6"  data-aos={"fade-up"} data-aos-delay="200">
                                <img src={fireabout} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Paint Simulator */}
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-bx text-center mb-3">
                            <h3 className="title-head m-b0">Simulanis Paint Simulator</h3>
                            <span className="hr-secondary"></span>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className='col-md-5'>
                        <img src={paint} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="heading-bx simulatorapproach">
                            <div data-aos={"fade-up"}>
                                <Slider3 />
                            </div>
                            {/* Mandatory Service Start */}
                            <div className="selectcart" data-aos={"fade-up"}  data-aos-delay="300">
                                <h4>Mandatory Service</h4>
                                <div className="row mt-2">
                                  
                                  { this.state.paintMandatory.map((data,index)=>(
                                        <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id={index} checked disabled="disabled" />
                                                    <label className="form-check-label" htmlFor={index}>
                                                        {data}
                                                    </label>
                                                </div>
                                        </div>
                                    )) }

                                </div>
                            </div>
                            {/* Mandatory Service End */}

                           {/* Select Service start */}
                            <div className="selectcart mt-2" data-aos={"fade-up"} data-aos-delay="500">
                                <h4>Recommended Service</h4>
                                <div className="row mt-2">
                                   
                                    { this.state.paintRecommended.map((data,index)=>(
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id={index}  onClick={()=>this.P_F_W(data,1)}/>
                                                <label className="form-check-label" htmlFor={index} >
                                                    {data}
                                                </label>
                                            </div>
                                        </div>
                                    )) }
                                    
                                </div>
                            </div>
                            {/* Select Service end */}
                            <button className="btn btn-danger mt-3" onClick={this.openPaintModal}>Get a quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Welding Simulator */}
        <div className="section-area wwedo section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="title-head m-b0">Simulanis Welding Simulator</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                    </div>
                </div>
                <div className="row align-items-center mt-4">
                    <div className="col-md-7">
                        <div className="heading-bx simulatorapproach">
                            <div data-aos={"fade-up"}>
                                <Slider4/>
                            </div>
                             {/* Mandatory Service Start */}
                            <div className="selectcart" data-aos={"fade-up"} data-aos-delay="200">
                                <h4>Mandatory Service</h4>
                                <div className="row mt-2">
                                { this.state.weldingMandatory.map((data,index)=>(
                                        <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id={index} checked disabled="disabled" />
                                                    <label className="form-check-label" htmlFor={index}>
                                                        {data}
                                                    </label>
                                                </div>
                                        </div>
                                    )) }
                                    
                                </div>
                            </div>
                            {/* Mandatory Service End */}

                            {/* Select Service start */}
                            <div className="selectcart mt-2" data-aos={"fade-up"} data-aos-delay="500">
                                <h4>Recommended Service</h4>
                                <div className="row mt-2">
                                { this.state.weldingRecommended.map((data,index)=>(
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id={index}  onClick={()=>this.P_F_W(data,2)}/>
                                                <label className="form-check-label" htmlFor={index} >
                                                    {data}
                                                </label>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                            </div>
                            {/* Select Service end */}

                            <button className="btn btn-danger mt-3" onClick={this.openWeldingModal}>Get a quote</button>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <img src={welding} alt="" />
                    </div>
                </div>
            </div>
        </div>

       {/*  Fire Safety Simulator */}
        <div className="section-area wwedo bg-grey section-sp2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="title-head m-b0">Simulanis Fire Safety Simulator</h2>
                        <span className="hr-secondary" style={{marginLeft:'30px'}}></span>
                    </div>
                </div>
                <div className="row mt-4 align-items-center">
                    <div className='col-md-5'>
                        <img src={firesafety} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="heading-bx simulatorapproach">
                            <div data-aos={"fade-up"}>
                                <Slider5/>
                            </div>
                            {/* Mandatory Service start */}
                            <div className="selectcart" data-aos={"fade-up"} data-aos-delay="200">
                                <h4>Mandatory Service</h4>
                                <div className="row mt-2">
                                { this.state.fireMandatory.map((data,index)=>(
                                        <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id={index} checked disabled="disabled" />
                                                    <label className="form-check-label" htmlFor={index}>
                                                        {data}
                                                    </label>
                                                </div>
                                        </div>
                                    )) }
                                </div>
                            </div>
                            {/* Mandatory Service End */}
                            
                             {/* Select Service start */}
                            <div className="selectcart mt-2" data-aos={"fade-up"} data-aos-delay="500">
                                <h4>Recommended Service</h4>
                                <div className="row mt-2">
                                { this.state.fireRecommended.map((data,index)=>(
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id={index}  onClick={()=>this.P_F_W(data,3)}/>
                                                <label className="form-check-label" htmlFor={index} >
                                                    {data}
                                                </label>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                            </div>
                            {/* Select Service end */}

                            <button className="btn btn-danger mt-3" onClick={this.openFireModal}>Get a quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal show={this.state.isPaint} size="lg" onHide={this.closePaintModal}>
            <Modal.Header closeButton>
                <Modal.Title>Simulanis Paint Simulator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <form action="#"> */}
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className='d-none d-md-block' src={paintsimulatorpopup} style={{width:'90%'}} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="name" type="text" value={this.state.name} onChange={this.onChange} placeholder='Name*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="email" type="text" value={this.state.email} onChange={this.onEmailChange}  placeholder='Email*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="phone" type="text" value={this.state.phone} onChange={this.onMobileChange}  placeholder='Phone*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="organization" type="text" value={this.state.organization} onChange={this.onChange} placeholder='Organization*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type='submit' onClick={this.onPainSubmit} className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
            </Modal.Body>
        </Modal>

        <Modal show={this.state.isWelding} size="lg" onHide={this.closeWeldingModal}>
            <Modal.Header closeButton>
                <Modal.Title>Simulanis Welding Simulator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <form action="#"> */}
                    <div className="row">
                        <div className="col-md-6">
                            <img src={weldingsimulatorpopup} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="name" type="text" value={this.state.name} onChange={this.onChange} placeholder='Name*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="email" type="text" value={this.state.email} onChange={this.onEmailChange}  placeholder='Email*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="phone" type="text" value={this.state.phone} onChange={this.onMobileChange}  placeholder='Phone*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="organization" type="text" value={this.state.organization} onChange={this.onChange} placeholder='Organization*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type='submit' onClick={this.onWeldSubmit} className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
            </Modal.Body>
        </Modal>

        <Modal show={this.state.isFire} size="lg" onHide={this.closeFireModal}>
            <Modal.Header closeButton>
                <Modal.Title>Simulanis Fire Safety Simulator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <form> */}
                    <div className="row">
                        <div className="col-md-6">
                            <img src={firesafetypopup} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="name" type="text" value={this.state.name} onChange={this.onChange} placeholder='Name*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="email" type="text" value={this.state.email} onChange={this.onEmailChange}  placeholder='Email*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="phone" type="text" value={this.state.phone} onChange={this.onMobileChange}  placeholder='Phone*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input name="organization" type="text" value={this.state.organization} onChange={this.onChange} placeholder='Organization*' className='form-control' required />
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button type='submit' onClick={this.onFireSubmit} className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
            </Modal.Body>
        </Modal>

      </>
    )
  }
}

export default Simulators