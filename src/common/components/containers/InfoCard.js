import React from 'react'
import css from '../../../css/common/components/containers/infocard.css'
import { Link } from 'react-router-dom'

export default function InfoCard({title, paragraphs, expandable, expanded}) {
    var details = paragraphs.split('<p>')
    var text = ''
    details.forEach(paragraph => {
        text += paragraph + '\n\n'
    });

    var container = <div className='unexpandable expanded'></div>
    if(expandable){
        container = <div className='expandable unexpanded'></div>
    }
    return (
        <div>
            <div className='infocard'>
                <div className='infocard_title'>
                    {title}
                </div>
                <div className='infocard_detail'>
                    {text}
                </div>
            </div>
        </div>
    )
}
  