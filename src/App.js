import React, { useState, useRef, useEffect } from 'react'
import ToDoList from './ToDoList';
import AppHeader from './components/common/AppHeader'
import css from './css/app.css'
import About from './pages/About.js'
import Services from './pages/Services.js'
import TheTeam from './pages/TheTeam';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
  
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      tab: 'About'
    }
    this.setTab = this.setTab.bind(this);
  }
  
  setTab(tab) {
    this.setState({ tab:tab })
  }

  // renderContent(){
  //   if(this.state.tab === 'About'){
  //     return (
  //       <>
  //         <About setActiveTab={this.setTab}/>
  //       </>
  //     )
  //   }
  //   if(this.state.tab === 'Services'){
  //     return (
  //       <>
  //         Services
  //       </>
  //     )
  //   }
  //   if(this.state.tab === 'The Team'){
  //     return (
  //       <>
  //         Team
  //       </>
  //     )
  //   }
  //   if(this.state.tab === 'FAQ'){
  //     return (
  //       <>
  //         FAQ
  //       </>
  //     )
  //   }
  //   if(this.state.tab === 'Contact'){
  //     return (
  //       <>
  //         Contact
  //       </>
  //     )
  //   }
  //   if(this.state.tab === 'Socials'){
  //     return (
  //       <>
  //         Socials
  //       </>
  //     )
  //   }
  //   if(this.state.tab === 'Info'){
  //     return (
  //       <>
  //         Info
  //       </>
  //     )
  //   }
  // }
  
  render() {
    var browserlang = navigator.language || navigator.userLanguage;
    window.localStorage.setItem('siteLang', browserlang);
    // Opera 8.0+
    var isOpera = false
    if(window.opr !== undefined || navigator.userAgent.indexOf(' OPR/') >= 0 ){
      isOpera = true
    }
    // const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    
    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';
    
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var isSafari = false
    // if(safari !== undefined){
    //   isSafari = true
    // }
    
    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    
    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;
    
    // Chrome 1 - 71
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    
    // Blink engine detection
    const isBlink = (isChrome || isOpera) && !!window.CSS;

    if(isOpera){
      window.localStorage.setItem('browserVersion', 'opera');
    }
    if(isFirefox){
      window.localStorage.setItem('browserVersion', 'ff');
    }
    if(isSafari){
      window.localStorage.setItem('browserVersion', 'safari');
    }
    if(isIE){
      window.localStorage.setItem('browserVersion', 'ie');
    }
    if(isEdge){
      window.localStorage.setItem('browserVersion', 'edge');
    }
    if(isChrome){
      window.localStorage.setItem('browserVersion', 'chrome');
    }
    if(isBlink){
      window.localStorage.setItem('browserVersion', 'blink');
    }
    return (
      <Router>
        <div className='app'>
          <div className='body'>
            <AppHeader tab={this.state.tab} setActiveTab={this.setTab}/>
            {/* {this.renderContent()} */}
            <Routes>
               <Route path="/" element={<About setActiveTab={this.setTab}/>}/>
               <Route path="/about" element={<About setActiveTab={this.setTab}/>}/>
               <Route path="/services" element={<Services/>}/>
               <Route path="/the_team" element={<TheTeam/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
  
export default App;
