import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import jubliant from '../../assets/images/Clients/jubliant.png'
import dalmia from '../../assets/images/Clients/dalmia.png'
import asianpaints from '../../assets/images/Clients/asianpaints.png'
import upl from '../../assets/images/Clients/upl.png'
import faurecia from '../../assets/images/Clients/faurecia.png'
import akzonobel from '../../assets/images/Clients/akzonobel.png'
import axalta from '../../assets/images/Clients/axalta.png'


export class PaintChemicals_CLients extends Component {
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
                   items: 1,
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
                            <h3 className='text-center'>Trusted by <span>Paint and Chemicals</span> Company</h3>
                            <OwlCarousel  className="owl-carousel owl-theme nav-image-center  nav-outer owhomecrosal brand-card " nav {...this.state.options}>
                                <div className='item brand-item'>
                                    <img src={jubliant} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={dalmia} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={asianpaints} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={faurecia} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={upl} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={akzonobel} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={axalta} alt="" className='brand-before' />
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

export default PaintChemicals_CLients