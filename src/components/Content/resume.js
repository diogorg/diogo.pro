import React from "react"

function Resume(props) {
  const { visible } = props
  const style = visible ? { display: "block" } : { display: "none" }
  return <div style={style}>resume</div>
}

export default Resume
