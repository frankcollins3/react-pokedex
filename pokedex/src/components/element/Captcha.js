import { $ } from 'react-jquery-plugin';
import React, { useRef, useEffect, useState } from 'react';
import ReturnRandomPoke from '../utility/RandomPokemon'

import { useInView } from 'react-intersection-observer'

import myCSS from '../utility/CSStool';




let i = 0;



function Captcha (props) {
    // let boxRef = useRef()
    // let curr = boxRef.current not doing scrolling. 9 by 9 still grid that resets after all grid boxes hovered upon + images generated as bg for captcha

    const [stateInt, setStateInt] = useState(0); // used to increment until 9 (the length of all grid items) and restart when every grid item activated by hover

    const { ref, inView, entry } = useInView ({
        threshold: 1.0,
        // rootMargin: '200px',
    })

    // console.log(ref)
    // console.log(inView)
    // console.log(entry)
    console.log("these are the entries");

    const imageGrab = async () => {
        let randompokemon = await ReturnRandomPoke(1);
        console.info(randompokemon);
    }




    
    

    return (
        <div className="Captcha-Cont" id="Nine-By-Nine">
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
        <div onMouseEnter={imageGrab} className="Captcha-Box"></div>
                            
        </div>
    )
}

export default Captcha
