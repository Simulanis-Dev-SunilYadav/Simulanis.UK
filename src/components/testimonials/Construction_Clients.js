import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import godrej from '../../assets/images/Clients/godrej.png'
import emaar from '../../assets/images/Clients/emaar.png'
import jgc from '../../assets/images/Clients/jgc.png'

export class Construction_Clients extends Component {
    state={
        options : {
            margin: 50,
            dots:false,
            responsiveClass: true,
            loop:true,
            nav: false,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 3000,
            autoplaySpeed: 3000,
            autoplayHoverPause: true,
            navText:["<i className='icon-angle-left'></i>","<i className='icon-angle-right'></i>"],
            smartSpeed: 3000,
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
                            <h3 className='text-center'>Trusted by <span>Construction</span> Company</h3>
                            <OwlCarousel  className="owl-carousel owl-theme nav-image-center  nav-outer owhomecrosal brand-card " nav {...this.state.options}>
                                <div className='item brand-item'>
                                    <img src={godrej} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={emaar} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={jgc} alt="" className='brand-before' />
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

export default Construction_Clients