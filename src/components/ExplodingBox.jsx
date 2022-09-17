import { animated, config, useSpring } from 'react-spring';
import React, {useEffect, useRef} from 'react'


export default function AnimatedThing() {
    const boxRef = useRef();

    // wait until DOM has been rendered
    // useEffect --> rerenders, set variables
    // useState --> execute code, soemthing happens, then execute code, then rerender, instead of resetting
    useEffect(() => {
        explosion()
    });

    return <div className="box" ref={boxRef}>
        <p style={{ 
            fontSize: "30pt",
            textAlign: "center" 
        }}>
        Hello
        </p>
    </div>;
}


function explosion() {
    const StyledConfettiDot = styled.svg`
    position: absolute;
    will-change: transform;
    `;
    const Dot = () => (
    <StyledConfettiDot>
        <circle cx="5" cy="5" r="5" fill="blue" />
    </StyledConfettiDot>
    );
}