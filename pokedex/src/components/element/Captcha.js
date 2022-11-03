import { $ } from 'react-jquery-plugin';
import React, { useRef, useEffect, useState } from 'react';
import ReturnRandomPoke from '../utility/RandomPokemon'
import ReturnRandom from '../utility/ReturnRandom'
import GetImage from '../utility/ImageTool'
import GetSiblings from '../utility/JqSiblings'
import GetChildren from '../utility/JqChildren'
import attrTool from '../utility/attrTool' // selector, attr, value in most cases [$(obj), id || img-src, 'New-Value']
import toggleHideShow from '../utility/hideShow'
import ReturnTypes from '../utility/ReturnTypes'

import { useInView } from 'react-intersection-observer'

import myCSS from '../utility/CSStool';




let i = 0;



function Captcha (props) {
    // let boxRef = useRef()
    // let curr = boxRef.current not doing scrolling. 9 by 9 still grid that resets after all grid boxes hovered upon + images generated as bg for captcha

    const [stateInt, setStateInt] = useState(0); // used to increment until 9 (the length of all grid items) and restart when every grid item activated by hover
    const [hoverImage, setHoverImage] = useState('')
    const [randomInt, setRandomInt] = useState(0); 
    const [hoverType, setHoverType] = useState('');

    let vanillaJSDiv = document.querySelectorAll('div');
    let container = $('.Captcha-Cont')


    const imageGrab = async (event) => {
        console.log(event)
        let target = $(event.target)
         
        if (stateInt === 9) {
            setStateInt(0)
            let allDivBox = await GetChildren(container)
            let grandKids = await GetChildren(allDivBox)
            console.log(allDivBox);
            toggleHideShow(grandKids, 'detach');
            // confused why allDivBox deletes the parent container when its the children that is specified.
            // more confusing when you see this code working for the children and not the parent  myCSS(allDivBox[0], 'border', '5px dotted orange');


            // allDivBox[0].removeAttr('src');

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
                let name = randompokemon.name
                // let randompokemon = 'gastly' 
                // let name = 'haunter'

                let containerChildren = await GetChildren(container)
                let childrensChildren = await GetChildren(containerChildren);

                if (name === 'gastly' || name === 'haunter' || name === 'gengar') {
                    // let type = await ReturnTypes(name) I was going to use this code but i set up the ghosts to return psychic to accommodate the second page.
                    // leaving for proof-of-concept that i'd just keep the returned ghost array for (haunter,gastly,gengar) as [psychic, ghost]
                    // you would evaluate and if any type was ghost, make the ghost-based changes like change the background to whose-haunter.png
                    setStateInt(8)
                    await attrTool(childrensChildren, 'src', '')
                    await toggleHideShow(childrensChildren, 'detach');

                    myCSS(containerChildren, 'background-image', `url(${'/img/haunter.png'})`);
                    myCSS(containerChildren, 'background-size', 'cover');
                    myCSS(containerChildren, 'background-repeat', 'no-repeat');    
                    
                    // let ghostimage = await GetImage(name, 'back')
                    // setHoverImage(ghostimage);
                }  else {
                    myCSS(containerChildren, 'background-image', `url(${'/img/openPokeBall.png'})`);    
                    myCSS(containerChildren, 'background-size', '1000%')                
                    let randomimage = await GetImage(name, 'front')
                    setHoverImage(randomimage);
                }               

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
                let names = ['squirtle', 'charmander', 'bulbasaur']
                let value = await ReturnRandom(names)
                console.log(value);

                let image = await GetImage(value, 'front')
                $(event.target).css('background-image', image)
                $(event.target).css('background-size', 'cover')
                $(event.target).css('background-repeat', 'no-repeat')
                
                
                    // const change = async () => {
                    //     let randomimage = ''
                    //     randomimage = await GetImage(value, 'front');
                    //     setHoverImage(randomimage)
                    //     // let randomimage = await GetImage(value, 'front');
                    //     console.log(randomimage);
                    // }
                    // const setImage = async () => {
                    //   await attrTool($(img), 'src', hoverImage);
                    // }

                    // const bothFunctions = async () => {
                    //     await change()
                    //     await setImage()
                    // }
                    // bothFunctions()

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
        // $(event.target).css('background-image', `url('${randomimage}')`
    }

    // const divClick = async () => {
    //     let children = await GetChildren($(container))
    //     children.click()
    // }


    
    

    return (
        <>
        <div onMouseEnter={divClick} id="Gear"> </div>

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
        </>
    )
}

export default Captcha
