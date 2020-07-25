import React from "react"

function About(props) {
  const { visible } = props;
  const style = visible ? { display: "block" } : { display: "none" };
  return (<div className="about" style={style}>
      <h4 className="about-title">ABOUT</h4>
    </div>)
}

export default About;
