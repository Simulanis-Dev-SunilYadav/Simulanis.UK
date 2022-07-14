import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import hp from '../../assets/images/Clients/hp.png'
import reliance from '../../assets/images/Clients/reliance.png'
import cairn from '../../assets/images/Clients/cairn.png'
import iocl from '../../assets/images/Clients/iocl.png'
import hmel from '../../assets/images/Clients/hmel.png'


export class Oilgas_Clients extends Component {
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
                            <h3 className='text-center'>Trusted by <span>Oil & Gas </span> Company </h3>
                            <OwlCarousel  className="owl-carousel owl-theme nav-image-center  nav-outer owhomecrosal brand-card " nav {...this.state.options}>
                                <div className='item brand-item'>
                                    <img src={hp} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={reliance} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={cairn} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={iocl} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={hmel} alt="" className='brand-before' />
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

export default Oilgas_Clients