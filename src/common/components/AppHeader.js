import React from 'react'
import css from '../../css/common/components/header.css'
import logo from '../images/DCXP_Transparent.svg'
import logo_ff from '../images/ff_dcxp_transparent.jpg'
import NavButton from './NavButton'
import { Localise } from '../../Localise'

export default function AppHeader({tab, setActiveTab}) {
    var displayLogo = logo
    if(window.localStorage.browserVersion === 'ff'){
        displayLogo = logo_ff
    }

    return (
        <div className='app_header'>
            <img className="teamIcon" src={displayLogo} alt="DCXPIcon"/>
            <div id="smallHeader" className={(window.localStorage.browserVersion==='ff' ? 'nav_btns_ff' : 'nav_btns')}>
                <NavButton urlName={Localise("en").nav.about} name={Localise().nav.about} tab={tab} setActive={setActiveTab}
                // href="./index.html"
                />
                <NavButton urlName={Localise("en").nav.services} name={Localise().nav.services} tab={tab} setActive={setActiveTab}
                // href="#services"
                />
                <NavButton urlName={Localise("en").nav.the_team} name={Localise().nav.the_team} tab={tab} setActive={setActiveTab}
                //  href="#team"
                />
                <NavButton urlName={Localise("en").nav.faq} name={Localise().nav.faq} tab={tab} setActive={setActiveTab}
                //  href="#faq"
                />
                <NavButton urlName={Localise("en").nav.contact} name={Localise().nav.contact} tab={tab} setActive={setActiveTab}
                // href="#contactUs"
                />
                <NavButton urlName={Localise("en").nav.socials} name={Localise().nav.socials} tab={tab} setActive={setActiveTab}
                // href="#socials
                />
                <NavButton urlName={Localise("en").nav.info} name={Localise().nav.info} tab={tab} setActive={setActiveTab}
                // href="./whitepaper-roadmap.html"
                />
            </div>
        </div>
    )
}
