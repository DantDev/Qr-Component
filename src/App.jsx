import React from "react"
import qrCode from "./assets/image-qr-code.png"

function App() {

  return (
    <div className='container'>
      <div className='card'>
        <img src={qrCode} />
        <h2 className='card--title' >Improve your front-end skills by building projects</h2>
        <p className='card--text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
