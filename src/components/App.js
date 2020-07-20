import React from 'react'
import Accordion from './Accordion'
import Search from './Search'

const items = [
  {
    title: 'What is React?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum totam, blanditiis atque molestiae repellendus, ipsum, harum iste provident quos praesentium expedita aspernatur. Ipsa vitae reiciendis quidem dolor earum sapiente!'
  },
  {
    title: 'Why use React?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum totam, blanditiis atque molestiae repellendus, ipsum, harum iste provident quos praesentium expedita aspernatur. Ipsa vitae reiciendis quidem dolor earum sapiente!'
  },
  {
    title: 'How to use React?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum totam, blanditiis atque molestiae repellendus, ipsum, harum iste provident quos praesentium expedita aspernatur. Ipsa vitae reiciendis quidem dolor earum sapiente!'
  },
]

const App = () => {
  return (
    
      <div>
        {/* <Accordion items={items} /> */}
        <Search />
      </div>
  )
}

export default App
