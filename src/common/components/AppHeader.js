import React from 'react'
import css from '../../css/common/components/header.css'
import logo from '../images/DCXP_Transparent.svg'
import NavButton from './NavButton'

export default function AppHeader({tab, setActiveTab}) {
    return (
        <div className='app_header'>
            <img className="teamIcon" src={logo} alt="DCXPIcon"/>
            <div id="smallHeader" className="nav_btns">
                <NavButton name={"About"} tab={tab} setActive={setActiveTab}
                // href="./index.html"
                />
                <NavButton name={"Services"} tab={tab} setActive={setActiveTab}
                // href="#services"
                />
                <NavButton name={"The Team"} tab={tab} setActive={setActiveTab}
                //  href="#team"
                />
                <NavButton name={"FAQ"} tab={tab} setActive={setActiveTab}
                //  href="#faq"
                />
                <NavButton name={"Contact"} tab={tab} setActive={setActiveTab}
                // href="#contactUs"
                />
                <NavButton name={"Socials"} tab={tab} setActive={setActiveTab}
                // href="#socials
                />
                <NavButton name={"Info"} tab={tab} setActive={setActiveTab}
                // href="./whitepaper-roadmap.html"
                />
            </div>
        </div>
    )
}
