import React from 'react'
import PropTypes from 'prop-types'

function Board(props) {
  const { visible } = props
  const style = visible ? { display: 'block' } : { display: 'none' }
  return <div style={style}>board</div>
}

Board.propTypes = {
  visible: PropTypes.bool
}

export default Board
