import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = props => {
  return (
    <div>
      <div className='flex gap-5 bg-slate-700 py-5 items-center justify-between rounded'>
      <div className='text-white text-2xl font-playwrite ml-3'>
        Certiverify
      </div>
      <div className='hidden md:flex text-white gap-5 mr-3 text-lg font-playwrite'>
        <p><Link to="/" className='hover:underline'>Home</Link></p>
        <p><Link to="/about" className='hover:underline'>About</Link></p>
        {/* <p><Link to="/mycredentials" className='hover:underline'>My Credentials</Link></p> */}
        <p><Link to="/dashboard" className='hover:underline'>Dashboard</Link></p>
        {/* <p><Link to="/account" className='hover:underline'>Account</Link></p> */}
        <p><Link to="/contact" className='hover:underline'>Contact</Link></p>
      </div>
      <div className='flex items-center justify-center gap-4 mr-5'>
        <p><Link to="/login" className='rounded-lg px-4 py-1 border-2 font-sans text-white'>Login</Link></p>
        <p><Link to="/register" className='bg-white rounded-lg px-4 py-1 text-black font-sans'>Sign up</Link></p>
      </div> 
    </div>
    <div className='flex items-center justify-center gap-8 mt-3 bg-slate-700 py-2 rounded text-white md:hidden font-playwrite'>
        <p><Link to="/" className='hover:underline'>Home</Link></p>
        <p><Link to="/about" className='hover:underline'>About</Link></p>
        {/* <p><Link to="/mycredentials" className='hover:underline'>My Credentials</Link></p> */}
        <p><Link to="/dashboard" className='hover:underline'>Dashboard</Link></p>
        {/* <p><Link to="/account" className='hover:underline'>Account</Link></p> */}
        <p><Link to="/contact" className='hover:underline'>Contact</Link></p>
      </div>
      <div className='flex items-center justify-center gap-4 mr-5'>
    </div>
    </div>
  )
}

Nav.propTypes = {}

export default Nav