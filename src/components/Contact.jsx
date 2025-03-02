import React from 'react'

import {CONTACT} from '../constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-10 mb-2 text-center text-4xl'>Contacts</h2>
        <p className='mt-2 my-10 text-center text-medium'>Interested? Reach me out on the following</p>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact