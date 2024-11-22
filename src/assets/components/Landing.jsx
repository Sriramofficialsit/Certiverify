import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Landingbody from './Landingbody'

const Landing = props => {
  return (
    <div>
        <Nav/>
        <Landingbody/>
    </div>
  )
}

Landing.propTypes = {}

export default Landing