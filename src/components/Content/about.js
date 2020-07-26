import React from 'react'
import PropTypes from 'prop-types'

function About(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return (
    <div className='about' style={style}>
      <h4 className='about-title'>ABOUT</h4>
    </div>
  )
}

About.propTypes = {
  visible: PropTypes.bool
}

export default About
