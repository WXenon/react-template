import React from 'react'
import css from '../../../css/common/components/containers/infocard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function InfoCard({title, paragraphs, expandable, expanded, toggleExpand}) {
    
    const handleToggleExpand = ()=>{
        toggleExpand(title)
    }
    var details = paragraphs.split('<p>')
    var text = ''
    details.forEach(paragraph => {
        text += paragraph + '\n\n'
    });

    var container = <div className='unexpandable expanded'>
                        <div className='infocard'>
                            <div className='infocard_title'>
                                {title}
                            </div>
                            <div className='infocard_detail'>
                                {text}
                            </div>
                        </div>
                    </div>
    if(expandable){
        container = <div className='expandable unexpanded'>
                        <div className='infocard'>
                            <div className='infocard_title' onClick={handleToggleExpand}>
                                {title}
                                <FontAwesomeIcon className={'expandIcon_right'} icon={solid('chevron-down')}/>
                            </div>
                            <div className='infocard_detail hidden'>
                                {text}
                            </div>
                        </div>
                    </div>
        if(expanded){
            container = <div className='expandable expanded'>
                            <div className='infocard'>
                                <div className='infocard_title' onClick={handleToggleExpand}>
                                    {title}
                                    <FontAwesomeIcon className={'expandIcon_down'} icon={solid('chevron-down')}/>
                                </div>
                                <div className='infocard_detail'>
                                    {text}
                                </div>
                            </div>
                        </div>
        }
    }
    return (
        <div>
            {container}
        </div>
    )
}
  