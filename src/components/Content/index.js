import React from 'react'
import { useSelector } from 'react-redux'
import About from './about'
import Resume from './resume'
import Works from './works'
import Board from './board'
import Contact from './contact'

function Content() {
  const actived = useSelector((state) => state.actived)
  return (
    <div className='content'>
      <div className='opened' style={{ color: '#000' }}>
        <About visible={actived === 'ABOUT'} />
        <Resume visible={actived === 'RESUME'} />
        <Works visible={actived === 'WORKS'} />
        <Board visible={actived === 'BOARD'} />
        <Contact visible={actived === 'CONTACT'} />
      </div>
    </div>
  )
}

export default Content
