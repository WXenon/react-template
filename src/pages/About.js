import React, { useState, useRef, useEffect } from 'react'
import css from '../css/pages/about.css'
import cryptoworks from '../common/images/cryptoworks.png'
import { Link } from 'react-router-dom'
  
class About extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <div className="summary">
            <div className='left'>
              <div>
                <b>BSC Gaming project & NFT Marketplace</b>
                <p>Here at DCXP we offer all your gaming and NFTs needs in one place, we plan to have our own gaming project as well as a gaming marketplace.</p>
                <p>We also aim to have a live auction so you can buy and sell all your NFTs at ease for the best price!</p>
              </div>
            </div>
            <div className='right'>
              <div>
                <img id="cryptoworks" src={cryptoworks} alt="image"/>
                <Link id="serviceBtn" onClick={()=>this.props.setActiveTab('Services')} to="/Services">See Our Services</Link>
              </div>
            </div>
        </div>
      </>
    );
  }
}
  
export default About;
