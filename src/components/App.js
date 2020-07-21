import React, { useState } from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'

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

const options = [
  {
    label: 'Red Color',
    value: 'red'
  },
  {
    label: 'Green Color',
    value: 'green'
  },
  {
    label: 'Blue Color',
    value: 'blue'
  }
]

const App = () => {
  // const [ selected, setSelected ] = useState(options[0])
  return (
    
      <div>
        {/* <Accordion items={items} /> */}
        {/* <Search /> */}
        {/* <Dropdown 
        selected={selected} 
        onSelectedChange={setSelected}
        options={options} /> */}
        <Translate />
      </div>
  )
}

export default App
