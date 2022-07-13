import React, { Component } from 'react'
// import Slider from "react-slick"; 
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

// Automotive
import maruti from '../../assets/images/Clients/maruti.png'
import mahindra from '../../assets/images/Clients/mahindra.png'
import hyundai from '../../assets/images/Clients/hyundai.png'
import mercedes from '../../assets/images/Clients/mercedes.png'
import atlascopco from '../../assets/images/Clients/atlascopco.png'
import nbc from '../../assets/images/Clients/nbc.png'
// Automation
import hcl from '../../assets/images/Clients/hcl.png'
import smc from '../../assets/images/Clients/smc.png'
import voith from '../../assets/images/Clients/voith.png'
import carrier from '../../assets/images/Clients/carrier.png'
import honeywell from '../../assets/images/Clients/honeywell.png'

//Oil and gas
import hp from '../../assets/images/Clients/hp.png'
import reliance from '../../assets/images/Clients/reliance.png'
import cairn from '../../assets/images/Clients/cairn.png'
import iocl from '../../assets/images/Clients/iocl.png'
import hmel from '../../assets/images/Clients/hmel.png'

//Energy and Utilities
import bses from '../../assets/images/Clients/bses.png'
import npcl from '../../assets/images/Clients/npcl.png'
import pssc from '../../assets/images/Clients/pssc.png' 
import sterlitepower from '../../assets/images/Clients/sterlitepower.png'
import susten from '../../assets/images/Clients/susten.png'

// Paint and chemicals
import jubliant from '../../assets/images/Clients/jubliant.png'
import dalmia from '../../assets/images/Clients/dalmia.png'
import asianpaints from '../../assets/images/Clients/asianpaints.png'
import upl from '../../assets/images/Clients/upl.png'
import faurecia from '../../assets/images/Clients/faurecia.png'
import akzonobel from '../../assets/images/Clients/akzonobel.png'
import axalta from '../../assets/images/Clients/axalta.png'

// Construction
import godrej from '../../assets/images/Clients/godrej.png'
import emaar from '../../assets/images/Clients/emaar.png'
import jgc from '../../assets/images/Clients/jgc.png'

//Engineering
import jacobs from '../../assets/images/Clients/jacobs.png'
import haldor_topsoso from '../../assets/images/Clients/haldor_topsoso.png'
import fluor from '../../assets/images/Clients/fluor.png'

export class Testimonials1 extends Component {
    state={
         options : {
             margin: 20,
             dots:false,
             responsiveClass: true,
             loop:true,
             nav: false,
             autoplay: true,
             slidetransition: 'linear',
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
          <section className="testmonial section-sp1 bg-grey">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <div className="testimonialssec">
                            <div className='row'>
                                <div className='col-md-8 offset-md-2'>
                                    <h3 className='text-center'>Trusted by <span>140+</span> of The World's Best Organization.</h3>
                                </div>
                            </div>
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
                                
                                {/* Automotive */}
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
                                {/* Automation */}
                                <div className='item brand-item'>
                                    <img src={hcl} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={smc} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={voith} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={carrier} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={honeywell} alt="" className='brand-before' />
                                </div>

                                {/* Oil and  gas */}
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

                                {/* Energy and Utilities */}
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

                                {/* Paint and chemicals */}
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

                                {/* Construction */}
                                <div className='item brand-item'>
                                    <img src={godrej} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={emaar} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={jgc} alt="" className='brand-before' />
                                </div>

                                {/* Engineering Clients */}
                                <div className='item brand-item'>
                                    <img src={jacobs} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={haldor_topsoso} alt="" className='brand-before' />
                                </div>
                                <div className='item brand-item'>
                                    <img src={fluor} alt="" className='brand-before' />
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

export default Testimonials1