import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CountLocations = () => {
    const [count, setCount] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
            {count && <CountUp start={0} end={40} duration={2} delay={0} />}
    </ScrollTrigger>
    )
}

export default CountLocations