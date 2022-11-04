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
import ClassAction from '../utility/ClassAction'
import CleanUrl from '../utility/CleanUrlTool'

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
    const [switchGear, setSwitchGear] = useState('false')
    const [lock, setLock] = useState('locked')
    let [clickType, setClickType] = useState('')

    let typeText = $('#Type-Text')

    let vanillaJSDiv = document.querySelectorAll('div');
    let container = $('.Captcha-Cont')


    const imageGrab = async (event) => {
        // console.log(event)
        let target = $(event.target)
         
        if (stateInt === 9) {
            setStateInt(0)
            let allDivBox = await GetChildren(container)
            let grandKids = await GetChildren(allDivBox)
            // console.log(allDivBox);
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
                if ($(event.target).children().length < 1) {
                    setStateInt(stateInt + 1)
                }


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
                // console.log('hoverImage');
                // console.log(hoverImage);
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
                // console.log(value);

                let image = await GetImage(value, 'front')

                // myCSS($(img), 'background-image', `url('${image}')`)
                attrTool($(img), 'src', `${image}`)
                myCSS($(img), 'background-size', 'no-repeat')
                myCSS($(img), 'border', 'transparent')
                if ($(target).children().length < 1) {
                    $(target).append(img)
                }

                // $(event.target).css('background-image', image)
                // $(event.target).css('background-size', 'cover')
                // $(event.target).css('background-repeat', 'no-repeat')

                
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
                if ($(target).children().length < 1) {
                    $(target).append(img)
                }

            }
    
            const doEmBoth = async () => {
                await stateSetImageGet()
                await stateGetImageSet()
            }
            doEmBoth()

        }
        // $(event.target).css('background-image', `url('${randomimage}')`
    }

    const switchGears = async (event) => {
        setSwitchGear('true')
        // console.log('switching gears!');
        let target = $(event.target)
        
        await ClassAction('add', $(event.target), 'tailWhip')
    }

    const nothing = () => console.info("null")

    const divClick = async (event) => {
        let tgt = $(event.target)
        let children = await GetChildren(tgt)
        console.log('children')
        console.log(children)

        let child = children.prevObject[0]
        let imgsrc = child.currentSrc || 'whoa'
         if (imgsrc.length > 5) {
            console.log('length is there so URL is there')
        let cleanid = await CleanUrl(imgsrc)
        let type = await ReturnTypes(cleanid)
        let textStart = typeText.text()
        if (type === 'electric') {
            // declaring this to change text to a new message and to change it back to the first message. have to store first message as a variable.
            console.log('textStart')
            console.log(textStart)
            setLock('unlocked')
        } else {
            await setClickType(type)
        }
        

         } else { console.log("no length we haven't hovered gear yet!")}
        // can return id with CleanUrlTool(imgsrc.replace(/[/\/a-z]/g, '')) escape alphaCharacters and slashes

        


        let length = $(tgt).children().length
        console.log('length');
        console.log(length);


    }
    
    

    return (
        <>
        <div onMouseEnter={switchGears} id="Gear"> </div>
        <p
            className="Captcha-Text" id="Human-Text"
            style={ {opacity: switchGear === 'true' ? '1.0' : '0.0'}}
        > Welcome! We Just Want To Know If You're Human! </p>

        <div
         style={ {display: lock === 'locked' ? 'grid' : 'none'}}
         className="Captcha-Cont" id="Nine-By-Nine">

             <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing } onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>
            <div onMouseEnter={switchGear === 'true' ? imageGrab : nothing} onClick={divClick} className="Captcha-Box Column-Center">
            </div>      

            </div> 
        <p 
            className="Captcha-Text" id="Type-Text"
            style={ {opacity: switchGear === 'true' ? '1.0' : '0.0'}}
        > Find the Electric type and Click on it to see the Pokemon!</p>
        </>
    )
}

export default Captcha
