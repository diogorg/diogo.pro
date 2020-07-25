import React from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Content from "./components/Content"

function App() {
  return (
    <>
      <div className="page container">
        <Header />
        <Home />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App
