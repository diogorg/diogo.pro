import React from 'react'
import PropTypes from 'prop-types'

function Contact(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return <div style={style}>contact</div>
}

Contact.propTypes = {
  visible: PropTypes.bool
}

export default Contact
