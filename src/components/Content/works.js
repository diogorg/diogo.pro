import React from 'react'

function Works(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return <div style={style}>works</div>
}

export default Works
