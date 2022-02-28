import React from 'react'
import logo from '../../assets/images/logo.png'

export const Footer = () => {
  return (
    <>
        <div className="footer">
            <footer>
                <div className="sectionOne">
                <img src={logo} className="logo" alt="logo" /><p>Spectrangle</p>
                </div>
                <small>© 2022 TalentQL.</small>

                <div className="col1">
                    <h3>Program</h3>
                    <ul>
                        <li className='l1'>Join Us</li>
                        <li className='l3'><h2>Hire Talents</h2> <small>new</small></li>
                        <li className='l2'>Privacy Policy</li>
                    </ul>
                </div>
                <div className="col2">
                    <h3>Company</h3>
                    <ul>
                        <li className='l1'>About</li>
                        <li className='l2'>Careers</li>
                        <li className='l3'>Blog</li>
                        <li className='l4'>Contact</li>
                    </ul>
                </div>
                <div className="col3">
                    <h3>Hire Talents</h3>
                    <ul>
                        <li className='l1'>For Companies</li>
                        <li className='l2'>Join Us</li>
                        <li className='l3'>Talk to us now</li>
                        {/* <li className='l4'>Contact</li> */}
                    </ul>
                </div>
            </footer>
            <div className="sub-footer">
                <p>© 2022 Spectrangle. All rights reserved.</p>
                <div className="social-links">
                    <div className="sol1"></div>
                    <div className="sol2"></div>
                    <div className="sol3"></div>
                </div>
            </div>
        </div>
    </>
  )
}
