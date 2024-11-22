import React from 'react'
import PropTypes from 'prop-types'
import illu from '../images/Landing.jpg'

const Landingbody = props => {
  return (
    <div className='lg:flex items-center justify-center px-8 lg:px-5 h-screen gap-36 '>
        <div className=''><img src={illu} alt="" /></div>
        <div className='font-playwrite leading-tight lg:w-1/2 flex items-center justify-center'><p className='lg:w-[70vh] sm:text-xl md:text-2xl lg:text-4xl justify-center items-center'>certificate verification for a fraud-free future.</p></div> 
    </div>
  )
}

Landingbody.propTypes = {}

export default Landingbody