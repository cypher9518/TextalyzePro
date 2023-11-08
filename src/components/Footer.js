import React from 'react'
import PropTypes from 'prop-types'


export default function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <div className="container"style = {{color : props.mode==="dark"?"white":"black"}}>
            <p className='footerText'>Designed and Devloped With ❤️ By Himanshu</p>
            <a className="copyright" href="/">© {props.year} All rights reserved </a>

        </div>
        
    </footer>
    </div>
  )
}

Footer.propTypes = {
    year: PropTypes.string
  };