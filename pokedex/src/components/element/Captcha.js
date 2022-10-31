import { $ } from 'react-jquery-plugin';
import React, { useRef, useEffect, useState } from 'react';
import myCSS from '../utility/CSStool';




let i = 0;



function Captcha (props) {
    let boxRef = useRef()
    let curr = boxRef.current


    
    const mousecheck = () => {
        console.log("hey were entering our mouse");
        myCSS($(boxRef.current), 'border', '5px solid hotpink');
    }
    

    // for (i; i < 9; i++) {
    //     console.log("hey out here!");
    //     let box = document.createElement('div');
    //     $(box)
    //     .css('border', '5px solid green')
    //     .css('height', '100px')
    //     .css('width', '100px')
    //     // $(box).appendTo($('.Captcha-Cont'))
    //     $('.Captcha-Cont').append( $(box) )
    // }


    return (
        <div className="Captcha-Cont Column-Between">
            <div onMouseEnter={mousecheck} ref={boxRef} className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            <div className="Captcha-Box"></div>
            
            
        </div>
    )
}

export default Captcha
