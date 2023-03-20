import React from 'react'
import css from '../../css/common/components/header.css'
import { Link } from 'react-router-dom'

export default function NavButton({urlName, name, tab, setActive}) {
    const handleChangeTab = ()=>{
        setActive(urlName)
    }
    let linkName = urlName
    if(urlName.includes(" ")){
        linkName = ''
        var array = urlName.split(' ');
        array.forEach(word => {
            linkName += word + "_"
        });
        if(linkName.substr(linkName.length - 1) === "_"){
            linkName = linkName.substring(0, linkName.length-1)
        }
    }

    return (
        <Link className={(window.localStorage.browserVersion==='ff' ? 'nav_btn_ff' : 'nav_btn') + (tab===urlName ? ' active' : '')} onClick={handleChangeTab} to={"/" + linkName}>
            {name}
        </Link>
    )
}
  