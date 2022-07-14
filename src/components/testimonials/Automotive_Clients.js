import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import maruti from '../../assets/images/Clients/maruti.png'
import mahindra from '../../assets/images/Clients/mahindra.png'
import hyundai from '../../assets/images/Clients/hyundai.png'
import mercedes from '../../assets/images/Clients/mercedes.png'
import atlascopco from '../../assets/images/Clients/atlascopco.png'
import nbc from '../../assets/images/Clients/nbc.png'


export class Automotive_Clients extends Component {
    state={
        options : {
            margin: 50,
            dots:false,
            responsiveClass: true,
            loop:true,
            nav: false,
            autoplay: false,
            slideTransition: 'linear',
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            navText:["<i className='icon-angle-left'></i>","<i className='icon-angle-right'></i>"],
            smartSpeed: 1000,
            responsive: {
               0: {
                   items: 2,
               },
               360: {
                   items: 2,
               },
               600: {
                   items: 2,
               },
               700: {
                   items: 3,
               },
               1000: {
                   items: 5,
               },
               1200: {
                   items: 6,
               },
            },
         },
   }
  render() {
    return (
      <>
            <section className="testmonial section-sp1">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <div className="testimonialssec">
                            <h3 className='text-center'>Trusted by <span>Automotive</span> Company</h3>
                            <OwlCarousel  className="owl-carousel owl-theme nav-image-center  nav-outer owhomecrosal brand-card " nav {...this.state.options}>
                                <div className='item brand-item'>
                                    <img src={maruti} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={mahindra} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={hyundai} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={mercedes} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={atlascopco} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={nbc} alt="" className='brand-before' />
                                </div>
                            </OwlCarousel>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
}

export default Automotive_Clients