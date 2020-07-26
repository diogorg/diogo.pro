import React from 'react'
import PropTypes from 'prop-types'

function Works(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return <div style={style}>works</div>
}

Works.propTypes = {
  visible: PropTypes.bool
}

export default Works
