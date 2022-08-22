import React, { Component } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import PhoneIcon from '@mui/icons-material/Phone';
import TouchAppIcon from '@mui/icons-material/TouchApp';
function Footer () {
  return <div className='footer'>
    <h3 className="lightHeading mainHeading"> אל תדאגו, זה טבעי לגמרי </h3>
    <h2 className="lightHeading ">גם לנו הגיע התאבון</h2>
    <div className='footer-contact-container'>
        <a href='' className="contact-link"> 
        {/* <TouchAppIcon sx={{ color: 'white' }} fontSize="large" className="contact-icon" /> */}
        דברו איתנו</a>
    </div>
    <img src="../../images/logo-without-background.png" alt="logo sharon and liron - easy and healthy lifesyle" />
    <div>
        <a className="footer-link" href="#about">אודות</a>
        <a className="footer-link" href="/services/course">קורסים</a>
        <a className="footer-link" href="/services/workshops">סדנא משלבת הרצאה</a>
        <a className="footer-link" href="/services/boutiqueBooth">דוכני בוטיק</a>
        <a className="footer-link" href="/">סדנאות</a>
        <a className="footer-link" href="/">הרצאות</a>
    </div>
    <hr style={{color:"white"}}/>
    <div className='contact-ways'>
        {/* <PhoneIcon sx={{ color: 'white' }}/> */}
        <p> שרון כהן 054-233-1144</p>
        <p> לירון לוי 054-250-0030</p>
    </div>
    <div className='copyright'>
        <p> {new Date().getFullYear()} copyright sharon&liron</p>
        <CopyrightIcon fontSize='small' />
        <a className='darkHeading' href='/'></a>
    </div>
  </div>
}

export default Footer