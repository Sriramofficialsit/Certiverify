import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

const Contact = props => {
  return (
    <div>
        <Nav/>
        <div style={{ display: 'flex', justifyContent: 'left', margin: '20px' }}>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1750647706576!2d80.05065757507627!3d12.960647087353733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1732275209810!5m2!1sen!2sin" 
        width="100%"
        height="600" 
        style={{ border: 0 }}
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Sri Sairam Institute of Technology Map"></iframe>
    </div>
    <div className='lg:flex items-center justify-evenly'>
    <div className='flex flex-col gap-7 items-center lg:items-start justify-center mb-8 lg:mb-0'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-9 mb-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>

            <h1 className=' font-playwrite text-lg lg:text-2xl'>Sri Sairam Institute Of Technoogy</h1>
            <p>Tambaram,Chennai</p>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  strokeWidth={1.5} stroke="currentColor" className="size-9 mb-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

            <h1 className=' font-playwrite text-lg lg:text-2xl'> Ph: 8248402704</h1>
            <p>Monday to Saturday, 10AM to 6PM</p>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-9 mb-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>

            <h1 className=' font-playwrite text-lg lg:text-2xl'>sriramofficial.sit@gmail.com</h1>
            <p>Email us
</p>
        </div>
    </div>
    <div className='border-2 px-20 py-10 rounded-lg border-gray-300'>
        <h1 className='text-2xl font-playwrite mb-5 underline'>Feedback</h1>
        <form action="">
            <div className='flex flex-col gap-5'>
            <div>
                <input type="text" placeholder='Enter your name'  className='border-2 border-black px-4 py-1 rounded'/>
            </div>
            <div>
                <input type="email" placeholder='Enter your email'  className='border-2 border-black px-4 py-1 rounded'/>
            </div>
            <div>
                <input type="text" placeholder='Enter your subject'  className='border-2 border-black px-4 py-1 rounded'/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" className='border-black border-2' placeholder='Enter your subject...'></textarea>
            </div>
            <div>
                <button className='bg-red-600 px-3 py-1 rounded-md text-white'>
                    Submit
                </button>
            </div>
            </div>
           
        </form>
    </div>
    </div>
       
    
    </div>
  )
}

Contact.propTypes = {}

export default Contact