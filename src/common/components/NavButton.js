import React from 'react'
import css from '../../css/common/components/header.css'

export default function NavButton({name, tab, setActive}) {
    const handleChangeTab = ()=>{
        console.log(setActive)
        setActive(name)
    }

    return (
        <div className={(window.localStorage.browserVersion==='ff' ? 'nav_btn_ff' : 'nav_btn') + (tab===name ? ' active' : '')} onClick={handleChangeTab}>
            {name}
        </div>
    )
}
  