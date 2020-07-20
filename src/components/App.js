import React from 'react'
import Accordion from './Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is the best'
  },
  {
    title: 'How to use React?',
    content: 'By creating templates'
  },
]

const App = () => {
  return (
    
      <div>
        <Accordion items={items} />
      </div>
  )
}

export default App
