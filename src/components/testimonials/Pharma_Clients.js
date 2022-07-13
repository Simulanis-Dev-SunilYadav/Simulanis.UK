import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import lupin from '../../assets/images/Clients/lupin.png'
import zyduscadila from '../../assets/images/Clients/zyduscadila.png'
import gsk from '../../assets/images/Clients/gsk.png'
import rb from '../../assets/images/Clients/rb.png'
import mpect from '../../assets/images/Clients/mpect.png'
import drreddy from '../../assets/images/Clients/drreddy.png'
import itc from '../../assets/images/Clients/itc.png'
import sunpharma from '../../assets/images/Clients/sunpharma.png'
import hul from '../../assets/images/Clients/hul.png'
import piramal from '../../assets/images/Clients/piramal.png'
import granules from '../../assets/images/Clients/granules.png'
import gog from '../../assets/images/Clients/gog.png'
import macleods from '../../assets/images/Clients/macleods.png'
import lsssdc from '../../assets/images/Clients/lsssdc.png'
import neclife from '../../assets/images/Clients/neclife.png'
import mankind from '../../assets/images/Clients/mankind.png'
import alcon from '../../assets/images/Clients/alcon.png'
import sanofy from '../../assets/images/Clients/sanofy.png'
import marksans from '../../assets/images/Clients/marksans.png'




export class Pharma_Clients extends Component {
    state={
         options : {
             margin: 20,
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
                            <h3 className='text-center'>Trusted by <span>Pharmaceutical</span> Company
</h3>
                            <OwlCarousel  className="owl-carousel owl-theme nav-image-center  nav-outer owhomecrosal brand-card " nav {...this.state.options}>
                                <div className='item brand-item'>
                                    <img src={lupin} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={zyduscadila} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={gsk} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={rb} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={mpect} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={drreddy} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={itc} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={sunpharma} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={hul} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={piramal} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={granules} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={gog} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={macleods} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={lsssdc} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={neclife} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={mankind} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={alcon} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={sanofy} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={marksans} alt="" className='brand-before' />
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

export default Pharma_Clients