import React, { useState, useRef, useEffect } from 'react'
import css from '../css/pages/faq.css'
import { Link } from 'react-router-dom'
import InfoCard from '../components/common/containers/InfoCard'
import { Localise } from '../Localise'
  
class Faq extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      contract_address_expanded: false,
      nft_expanded: false,
      gaming_expanded: false,
      gas_fee_expanded: false,
      tokenomics_expanded: false
    }
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand(faq_id){
    console.log(faq_id)
    if(faq_id.includes("Contract")){
        if(!this.state.contract_address_expanded){
            this.setState({ 
                nft_expanded:false,
                gaming_expanded:false,
                gas_fee_expanded: false,
                tokenomics_expanded:false
            })
        }
        this.setState({ contract_address_expanded:!this.state.contract_address_expanded })
    }
    if(faq_id.includes("NFT")){
        if(!this.state.nft_expanded){
            this.setState({ 
                contract_address_expanded:false,
                gaming_expanded:false,
                gas_fee_expanded: false,
                tokenomics_expanded:false
            })
        }
        this.setState({ nft_expanded:!this.state.nft_expanded })
    }
    if(faq_id.includes("gaming")){
        if(!this.state.gaming_expanded){
            this.setState({ 
                contract_address_expanded:false,
                nft_expanded:false,
                gas_fee_expanded: false,
                tokenomics_expanded:false
            })
        }
        this.setState({ gaming_expanded:!this.state.gaming_expanded })
    }
    if(faq_id.includes("gas")){
        if(!this.state.gas_fee_expanded){
            this.setState({ 
                contract_address_expanded: false,
                nft_expanded:false,
                gaming_expanded:false,
                tokenomics_expanded:false
            })
        }
        this.setState({gas_fee_expanded: !this.state.gas_fee_expanded})
    }
    if(faq_id.includes("tokenomics")){
        if(!this.state.tokenomics_expanded){
            this.setState({ 
                contract_address_expanded:false,
                nft_expanded:false,
                gaming_expanded:false,
                gas_fee_expanded: false
            })
        }
        this.setState({tokenomics_expanded:!this.state.tokenomics_expanded})
    }
  }
  
  render() {
    return (
      <>
        <div className="faq">
            <InfoCard title={Localise().faq.q.contract_address} 
            paragraphs={Localise().faq.a.contract_address}
            expandable={true} expanded={this.state.contract_address_expanded}
            toggleExpand={this.toggleExpand}
            />
            <InfoCard title={Localise().faq.q.nft} 
            paragraphs={Localise().faq.a.nft}
            expandable={true} expanded={this.state.nft_expanded}
            toggleExpand={this.toggleExpand}
            />
            <InfoCard title={Localise().faq.q.gaming} 
            paragraphs={Localise().faq.a.gaming}
            expandable={true} expanded={this.state.gaming_expanded}
            toggleExpand={this.toggleExpand}
            />
            <InfoCard title={Localise().faq.q.gas_fee} 
            paragraphs={Localise().faq.a.gas_fee}
            expandable={true} expanded={this.state.gas_fee_expanded}
            toggleExpand={this.toggleExpand}
            />
            <InfoCard title={Localise().faq.q.tokenomics} 
            paragraphs={Localise().faq.a.tokenomics}
            expandable={true} expanded={this.state.tokenomics_expanded}
            toggleExpand={this.toggleExpand}
            />
        </div>
      </>
    );
  }
}
  
export default Faq;
