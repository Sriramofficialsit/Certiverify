import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Method from './Method'
import mern from '../images/mern.png'
import smart from '../images/smart.png'
import blockchain from '../images/blockchain.png'
import two from '../images/2.png'
const About = props => {
  return (
    <>
    <Nav/>
    <div className='h-screen items-center justify-center flex flex-col gap-5 lg:gap-20'>
        <div> <h1 className='text-xl lg:text-4xl font-playwrite underline mt-16 lg:mt-0'>Core Objectives Of The Project</h1></div>
        <div className='text-sm font-playwrite'>Our Main Aim</div>
        <div className='flex flex-col lg:flex  lg:flex-row gap-8 lg:gap-20 px-8'>
            <div className='bg-gray-00 rounded-xl px-2 py-3 shadow-lg shadow-black lg:animate-bounce'>
                <h1 className='font-bold font-playwrite text-md'>Block-Chain-Technology</h1>
                <p className='mt-5'>Utilize blockchain technology to ensure the immutability and authenticity of certificates issued by colleges and institutions, eliminating the possibility of duplicate certificates.</p>
            </div>
            <div className='bg-gray-00 rounded-xl px-2 py-3 shadow-lg shadow-black lg:animate-bounce'>
                <h1 className='font-bold font-playwrite text-md'>Equal Opportunites</h1>
                <p className='mt-5'>Enhance trust and transparency in the educational credential verification process, fostering fairer hiring practices and promoting equal access to educational opportunities.</p>
            </div>
            <div className='bg-gray-00 rounded-xl px-2 py-3 shadow-lg shadow-black lg:animate-bounce '>
                <h1 className='font-bold font-playwrite text-md'>Eductional Platform</h1>
                <p className='mt-5'>Incentivize colleges and institutions to participate in the platform, strengthening the overall education system by promoting high issuance standards and verifiable credentials.</p>
            </div>
        </div>
    </div>
    <div className='h-screen flex flex-col items-center'>
        <div>
            <h1 className='text-xl lg:text-4xl font-playwrite underline mt-20 lg:mt-0'>Technologies We Used</h1>
        </div>
        <div className='flex flex-col lg:flex lg:flex-row gap-16 mt-20'>
            <div><img src={mern} alt=""  className='w-80 rounded-lg shadow-xl shadow-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000'/></div>
            <div><img src={blockchain} alt=""  className='w-80 rounded-lg shadow-xl shadow-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000'/></div>
            <div><img src={smart} alt=""  className='w-80 rounded-lg shadow-xl shadow-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000'/></div>
        </div>
    </div>
    <div className='hidden lg:flex flex-col items-center justify-center mt-52'>
        <div>
            <h2 className='font-playwrite text-xl lg:text-4xl mb-5 underline'>Our Verification Method</h2>
        </div>
        <div className='border-black border rounded-xl shadow-black shadow mb-10'>
            <img src={two} alt="" className="rounded-xl"/>
        </div>
    </div>
    </>
        
    
  )
}

About.propTypes = {}

export default About