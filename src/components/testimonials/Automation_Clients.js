import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import bses from '../../assets/images/Clients/bses.png'
import npcl from '../../assets/images/Clients/npcl.png'
import pssc from '../../assets/images/Clients/pssc.png'
import sterlitepower from '../../assets/images/Clients/sterlitepower.png'
import susten from '../../assets/images/Clients/susten.png'

export class Automation_Clients extends Component {
  state={
    options : {
        margin: 50,
        dots:false,
        responsiveClass: true,
        loop:true,
        nav: false,
        autoplay: true,
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
               items: 3,
           },
           700: {
               items: 3,
           },
           1000: {
               items: 5,
           },
           1200: {
               items: 5,
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
                            <h3 className='text-center'>Trusted by <span>Automation</span> Company</h3>
                            <OwlCarousel  className="owl-carousel owl-theme nav-image-center  nav-outer owhomecrosal brand-card " nav {...this.state.options}>
                                <div className='item brand-item'>
                                    <img src={bses} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={npcl} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={pssc} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={sterlitepower} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={susten} alt="" className='brand-before' />
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

export default Automation_Clients