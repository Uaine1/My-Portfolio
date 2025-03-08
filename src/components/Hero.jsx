import React from 'react'
import { motion } from "motion/react"

import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/kevinRushProfile.png"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 1, delay: delay}}
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}} 
                    //animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Jhon Wuthering
                    </motion.h1>
                    <motion.span
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}} 
                    //animate="visible" 
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Ligma
                    </motion.span>
                    <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}} 
                    //animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}} 
                    src={profilePic} alt="profile pic"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero