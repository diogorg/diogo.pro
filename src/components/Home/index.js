import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGitlab } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

function Home() {
  return (
    <div className="home">
      <div className="profile">
        <div className="social-links">
          <a href="https://github.com/diogorg"><FaGithub /></a>
          <a href="https://gitlab.com/diogorg"><FaGitlab /></a>
          <a href="http://www.linkedin.com/in/diogo-ramos-gutierre"><FaLinkedin /></a>
          <a href="http://instagram.com/diogorg"><FaInstagram /></a>
        </div>
        <div className="profile-img"></div>
      </div>
    </div>
  );
}

export default Home
