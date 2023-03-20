import React from 'react'
import css from '../../../css/common/components/containers/profilecard.css'
import { Link } from 'react-router-dom'

export default function ProfileCard({name, photo, description}) {
    
    return (
        <div>
            <div className='profilecard'>
                <img className='profile_pic' src={photo}/>
                <div className='profile_name'>
                    {name}
                </div>
            </div>
        </div>
    )
}
  