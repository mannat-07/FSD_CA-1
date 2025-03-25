import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMemberCard from './components/TeamMemberCard'

function App() {
  const cards= [
    {
      name : 'Mannat',
      jobTitle : 'Software Engineer'
    },
    {
      name : 'Anu',
      jobTitle : 'Software Engineer'
    }
  ]

  return (
    <>

    <div>
      {
        cards.map((card, index) => (
          <TeamMemberCard key={index} card={card} />
        ))
      }
    </div>
      
    </>
  )
}

export default App
