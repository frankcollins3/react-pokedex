import { $ } from 'react-jquery-plugin';
import React, { useRef, useEffect, useState } from 'react';
import ReturnRandomPoke from '../utility/RandomPokemon'
import GetImage from '../utility/ImageTool'
import GetSiblings from '../utility/JqSiblings'
import GetChildren from '../utility/JqChildren'
import attrTool from '../utility/attrTool' // selector, attr, value in most cases [$(obj), id || img-src, 'New-Value']

import { useInView } from 'react-intersection-observer'

import myCSS from '../utility/CSStool';




let i = 0;



function Captcha (props) {
    // let boxRef = useRef()
    // let curr = boxRef.current not doing scrolling. 9 by 9 still grid that resets after all grid boxes hovered upon + images generated as bg for captcha

    const [stateInt, setStateInt] = useState(0); // used to increment until 9 (the length of all grid items) and restart when every grid item activated by hover
    const [hoverImage, setHoverImage] = useState('')
    const [randomInt, setRandomInt] = useState(0); 

    let vanillaJSDiv = document.querySelectorAll('div');
    let container = $('.Captcha-Cont')


    const imageGrab = async (event) => {
        console.log(event)
        let target = $(event.target)
         
        if (stateInt === 9) {
            setStateInt(0)
            myCSS($(event.target), 'border', '5px solid hotpink')  
            let allDivBox = await GetChildren(container)
            console.log(allDivBox);
            myCSS(allDivBox[0], 'border', '5px dotted orange');
            allDivBox[0].removeAttr('src');

            // await attrTool($('div'), 'src',  '')        
            // await attrTool(allDivBox, 'src',  'img/bag.png')        
            // attrTool($(allDivBox), 'src', '');
            // allDivBox.forEach(async(box) => {
            //     await attrTool($(box), 'src', '');
            // })
        } else {

            const stateSetImageGet = async () => {
                setStateInt(stateInt + 1)
                let randompokemon = await ReturnRandomPoke(1);        
                let randomimage = await GetImage(randompokemon.name, 'front')
                setHoverImage(randomimage);
            }
    
            const stateGetImageSet = async () => {
                console.log('hoverImage');
                console.log(hoverImage);
                let targetSiblings = await GetSiblings(target);
                let imageChild = await GetChildren(target);
                // console.log('src')
                // console.log(imageChild[0].currentSrc);
                // attrTool(imageChild, 'src', hoverImage)

                let img = document.createElement('img');
                $(img)
                .addClass('Sprite')

                if (hoverImage.length < 3) {
                // if (hoverImage === null || hoverImage === undefined) { // thought this would work it doesn't.
                    myCSS(target, 'border', '5px dotted limegreen');
                } else {
                    myCSS($(img), 'background-image', `url('${hoverImage}')`)
                    attrTool($(img), 'src', hoverImage);
                }

                myCSS($(img), 'background-size', 'no-repeat')
                myCSS($(img), 'border', 'transparent')
                $(target).append(img)
            }
    
            const doEmBoth = async () => {
                await stateSetImageGet()
                await stateGetImageSet()
            }
            doEmBoth()

        }
        

        // $(event.target).css('background-image', `url('${randomimage}')`)
     
    }




    
    

    return (
        <div className="Captcha-Cont" id="Nine-By-Nine">
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
        <div onMouseEnter={imageGrab} className="Captcha-Box Column-Center">
            <img className="sprite" src=""/>
        </div>
 
                            
        </div>
    )
}

export default Captcha
