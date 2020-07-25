import React from "react"

function Contact(props) {
  const { visible } = props;
  const style = visible ? { display: "block" } : { display: "none" };
  return <div style={style}>contact</div>
}

export default Contact;
