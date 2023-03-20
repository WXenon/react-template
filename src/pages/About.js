import React, { useState, useRef, useEffect } from 'react'
import css from '../css/pages/about.css'
import cryptoworks from '../components/images/cryptoworks.png'
import { Link } from 'react-router-dom'
import InfoCard from '../components/common/containers/InfoCard'
import { Localise } from '../Localise'
  
class About extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <div className="summary">
            <div className='left'>
              <InfoCard title={Localise().about.title} 
                paragraphs={Localise().about.detail}
                expandable={false} expanded={false}
              />
            </div>
            <div className='right'>
              <div>
                <img id="cryptoworks" src={cryptoworks} alt="image"/>
                <Link id="serviceBtn" onClick={()=>this.props.setActiveTab('Services')} to="/Services">{Localise().about.service_btn}</Link>
              </div>
            </div>
        </div>
      </>
    );
  }
}
  
export default About;
