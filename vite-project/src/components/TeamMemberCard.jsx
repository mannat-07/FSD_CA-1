import React from 'react'
import './team.css'


export default function TeamMemberCard({card}) {
  return (
    <div>
        <div className='team'>
            <p>Hey it's  <strong> {card.name} </strong> 👍</p>
            <p>I'm a  {card.jobTitle}</p>
        </div>
      
    </div>
  )
}
