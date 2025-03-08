import React from 'react'
import { motion } from "motion/react"

import {CONTACT} from '../constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-10 mb-2 text-center text-4xl'>Contacts</motion.h2>
        <motion.p 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.3}}
        className='mt-2 my-10 text-center text-medium'>Interested? Reach me out on the following</motion.p>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}} 
        className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact