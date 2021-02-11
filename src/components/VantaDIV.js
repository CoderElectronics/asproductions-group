import vanta from './vanta.waves.min.js';
import {useRef, useLayoutEffect} from 'react'

export default VantaDIV (props) => {
    const element = useRef<HTMLDivElement>()
    useLayoutEffect(() => {
        vanta({
            el: element.current,
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
    })
    return (
        <>
            <script src="/three.min.js"></script>
            <div id="vantajs" ref={element}></div>
        </>
    )
}