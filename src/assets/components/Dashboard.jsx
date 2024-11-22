import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

const Dashboard = props => {
  return (
    <>
    <Nav/>
    <div className='h-screen flex items-center justify-center gap-8 px-3 lg:px-0'>
        <form action="">
        <div className=' flex items-center justify-center gap-8 flex-col'>
        <h1 className='text-3xl font-playwrite'>Upload The certificate</h1>
        <div className='flex flex-col gap-5 bg-slate-500 px-5 py-5 rounded-lg shadow-2xl shadow-black'>
        <div>
            <label htmlFor="studentid" className='text-white'>Student ID</label>
            <input type="text" id="studentid" name="studentid" className="rounded py-2 px-10 w-full border-2 border-black" placeholder='SIT22IT083' required/>
        </div>
        <div>
            <label htmlFor="certificate" className='text-white'>Certificate Name</label>
            <input type="text" id="certificate" name="certificate" className="rounded py-2 px-10 w-full border-2 border-black" placeholder='IEEE Event' required/>
        </div>
        <div>
            <label htmlFor="organization" className='text-white'>Oraganization</label>
            <input type="text" id="certificate" name="certificate" className="rounded py-2 px-10 w-full border-2 border-black " placeholder='IEEE' required/>
        </div>
        <div className='bg-gray-400 px-5 py-2 rounded'>
                <input type="file" className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
     file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100'/>
            </div>
            <div className='items-center justify-center flex'>
                <button className='bg-red-500 text-white rounded px-3 py-1'>Upload</button>
            </div>
        </div>
          
        </div>
            
        </form>
    </div>
    </>
  )
}

Dashboard.propTypes = {}

export default Dashboard