import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CountProjects = () => {
    const [count, setCount] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
            {count && <CountUp start={0} end={500} duration={2} delay={0} />}
        </ScrollTrigger>
    )
}

export default CountProjects