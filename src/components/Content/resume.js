import React from 'react'
import PropTypes from 'prop-types'

function Resume(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return <div style={style}>resume</div>
}

Resume.propTypes = {
  visible: PropTypes.bool
}

export default Resume
