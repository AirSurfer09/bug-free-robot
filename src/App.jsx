import { useEffect } from 'react'
import './App.css'
import { ps_link } from './constants/link'

function App() {

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        console.log('Microphone access granted.');
      })
      .catch(function(err) {
        console.error('Microphone access denied.', err);
      });
  }, [])

  return (
    <>
      <iframe style={{ height: window.innerHeight, width: window.innerWidth }} id="Mantis" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; pointer-lock; microphone" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered width="970" height="700" src={`${ps_link}?playbar=0&control=0&titlebar=1&bg_transparent=1&pan=1&zoom=1&rotate=1`}></iframe>
    </>
  )
}

export default App
