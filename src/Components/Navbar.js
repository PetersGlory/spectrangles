import React from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div>
                <Link to="/" className="navbar-brand" style={styles.pp}>
                    <img src={logo} style={styles.logo} alt='logo/>    <p style={styles.p}>Spectrangle</p>
                </Link>
                
                <div id="navbarCollapse">
                    <div style={styles.ul} className="navbar-nav ms-auto">
                        <Link to="/" style={styles.li1}>Home</Link>
                        <Link to="/" style={styles.li2}>Our Culture</Link>
                        <Link to="/joinus" style={styles.li3}>Join Network</Link>
                        <Link to="/" style={styles.li4} className="navbtn"><p style={styles.lip}>Work with us</p></Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

const styles = {
    p:{
        position: "static",
        width: "141px",
        height: "31px",
        left: "78px",
        top: "23.5px",
        textDecoration: "none",
        fontFamily: "arial",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "31px",
        textAlign: "center",
        
        /* Color/Brand/Primary */
        
        color: "#135896",   
    },
    pp:{
        display:"flex",
        width:"30%",
        textDecoration: "none",
    },
    logo:{
        width: "78px",
        height: "78px",
    },
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",

        position: "absolute",
        width: "70%",
        height: "78px",
        left: "49px",
        top: "31px",
        textDecoration: "none",
    },
    ul:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: "none",
        position: 'static',
        width: 'auto',
        height: '51px',
        left: '853px',
        top: '13.5px',
        flex: 'none',
        order: '1',
        flexGrow: '1',
        padding: '0px 134px', 
    },
    li1:{
        position: 'static',
        height: '21px',
        left: '13.9%',
        right: '11.9%',
        top: 'calc(50% - 21px/2)',
        textDecoration: "none",
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '21px',
        textAlign: 'center',
        letterSpacing: '0.3px',
        color: "#1976C8",
        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 20px',
    },
    li2:{
        position: 'static',
        height: '21px',
        left: '7.41%',
        right: '7.41%',
        top: 'calc(50% - 21px/2)',
        textDecoration: "none",
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '21px',
        textAlign: 'center',
        letterSpacing: '0.3px',
        color: "#1976C8",
        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 10px',
    },

    li3:{
        position: 'static',
        height: '21px',
        left: '6.78%',
        right: '6.78%',
        top: 'calc(50% - 21px/2)',

        textDecoration: "none",
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '21px',
        /* identical to box height */

        textAlign: 'center',
        letterSpacing: '0.3px',

        /* Color/Brand/Primary-80 */

        color: "#1976C8",


        /* Inside auto layout */

        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 10px',
    },

    li4:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px 20px',
        marginLeft:"50px",
        position: 'static',
        textDecoration: "none",
        width: '138px',
        height: '51px',
        top: '0px',
        background: '#135896',
        borderRadius: '10px',
        flex: 'none',
        order: '1',
        flexGrow: '0',
    },

    lip:{
        position: 'static',
        // width: '98px',
        height: '21px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '21px',
        textDecoration:"none",
        textAlign: 'center',
        color: '#FFFFFF',
        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 10px',
    }
}