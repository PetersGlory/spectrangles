import React from 'react'

export const Hero = ()=>{
    return (
        <>
            <div className='bg'>
                <div className='hero'>
                    <h3 style={style.h3}>
                    Turn your product brief into an MVP in a meeting session.
                    <p className='vector'></p>
                    </h3>

                    <button style={style.btn}>
                        <p style={style.p} className="herotext">Tell Us About Your Project Today!</p>
                    </button>
                </div>
                <div className="hero-patern">

                </div>
            </div>
        </>
    )
} 

const style = {
    h3:{
        // position: 'absolute',
        width: '720px',
        height: '249px',
        left: '105px',
        top: '259px',
        marginTop: '250px',
        marginLeft: "105px",
        marginBottom: "58px",

        fontFamily: 'Arial, Helvetica, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '64px',
        lineHeight: '83px',

        color: '#FFFFFF',
    },
    btn:{
        /* Auto layout */

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding:' 10px 20px',
        border: 'none',
        position: 'absolute',
        width: '326px',
        height: '56px',
        left: '105px',
        top: '548px',
        background: '#135896',
        borderRadius: '10px',
        cursor: 'pointer',
    },
    p:{
        position: 'static',
        width: '296px',
        height: '36px',
        top: '10px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '17px',
        lineHeight: '36px',
        color: '#FFFFFF',
        flex: 'none',
        marginLeft: "-2%",
        // order: '0',
        // flexGrow: '0',
        margin:' 0px 10px',
    }
}