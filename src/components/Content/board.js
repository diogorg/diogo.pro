import React from 'react'

function Board(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return <div style={style}>board</div>
}

export default Board
