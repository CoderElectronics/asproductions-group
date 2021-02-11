import WAVES from './vanta.waves.min.js';
import React from 'react'

class VantaDIV extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8088,
        shininess: 96.00,
        waveHeight: 40.00,
        waveSpeed: 0.35
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div id="vantajs" ref={this.vantaRef}>Foreground content goes here</div>
  }
}

export default VantaDIV
