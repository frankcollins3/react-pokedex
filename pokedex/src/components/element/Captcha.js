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
import StarterPokemon from '../element/StarterPokemon'
// import DB from '../databasepg.js'
import myCSS from '../utility/CSStool';
import jwt_decode from 'jwt-decode'
import { useInView } from 'react-intersection-observer'










let i = 0;



function Captcha (props) {

    
    const [stateInt, setStateInt] = useState(0); // used to increment until 9 (the length of all grid items) and restart when every grid item activated by hover
    const [hoverImage, setHoverImage] = useState('')
    const [randomInt, setRandomInt] = useState(0); 
    const [hoverType, setHoverType] = useState('');
    const [switchGear, setSwitchGear] = useState('false')

    const [token, setToken] = useState('')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [persistentUser, setPersistentUser] = useState('')
    const [pickPokemon, setPickPokemon] = useState(false)

    // const [lock, setLock] = useState('locked')
    let [clickType, setClickType] = useState('')

    let [startingText, setStartingText] = useState('Find the Electric type and Click on it to see the Pokemon!')

    let typeText = $('#Type-Text')

    let vanillaJSDiv = document.querySelectorAll('div');
    let container = $('.Captcha-Cont')

    useEffect( () => {
        if (token) {
            
             props.setLock('unlocked')
             setSwitchGear('true')
             toggleHideShow($('#secretSignIn'), 'detach')     
             toggleHideShow($('#signInDiv'), 'detach')     
             toggleHideShow($('#Start-List'), 'detach')       
             toggleHideShow($('.Captcha-Text'), 'detach')  
            //  myCSS($('.Captcha-Text'), 'color', 'purple')     
        }

    }, [token])

    const test = (event) => {
        console.log('event')
        console.log(event)
        
        console.log('test')
    
    }

    useEffect( () => {        
        props.google.accounts.id.initialize({
            client_id: '391925163312-b27vd8l3b0ic5lcshtno1reo3rkktqk6.apps.googleusercontent.com',
            callback: (accessToken) => {                
                setToken(accessToken)
                let userObject = jwt_decode(accessToken.credential)

                console.log('userObject')
                console.log(userObject)
                                
                toggleHideShow($('#signInDiv'), 'detach')
                setSwitchGear('true')
                props.setLock('unlocked')                    
            }
        })
        props.google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size: "large"}
        )

    }, [])


    const imageGrab = async (event) => {
        let target = $(event.target)
         
        if (stateInt === 9) {
            setStateInt(0)
            let allDivBox = await GetChildren(container)
            let grandKids = await GetChildren(allDivBox)            
            toggleHideShow(grandKids, 'detach');
        } else {

            const stateSetImageGet = async () => {
                if ($(event.target).children().length < 1) {
                    setStateInt(stateInt + 1)
                }

                let randompokemon = await ReturnRandomPoke(1);   
                let name = randompokemon.name
                
                let containerChildren = await GetChildren(container)
                let childrensChildren = await GetChildren(containerChildren);

                if (name === 'gastly' || name === 'haunter' || name === 'gengar') {
                    toggleHideShow($(event.target).parents().siblings(), 'hide')                    
                    setStateInt(9)
                    await attrTool(childrensChildren, 'src', '')
                    await toggleHideShow(childrensChildren, 'detach');
                    
                    
                    myCSS(containerChildren, 'background-image', `url(${'/img/haunter.png'})`);
                    myCSS(containerChildren, 'background-size', 'cover');
                    myCSS(containerChildren, 'background-repeat', 'no-repeat');    
                    myCSS(childrensChildren, 'opacity', '0.0');
                    
                    // let ghostimage = await GetImage(name, 'back')
                    // setHoverImage(ghostimage);
                }  else {
                    toggleHideShow($(event.target).parents().siblings(), 'show')
                    myCSS(childrensChildren, 'opacity', '1.0');
                    myCSS(containerChildren, 'background-image', `url(${'/img/openPokeBall.png'})`);    
                    myCSS(containerChildren, 'background-size', '1000%')                
                    let randomimage = await GetImage(name, 'front')
                    setHoverImage(randomimage);
                }               

            }
    
            const stateGetImageSet = async () => {                
                let targetSiblings = await GetSiblings(target);
                let imageChild = await GetChildren(target);            
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
    }

    const switchGears = async (event) => {        
        if (pickPokemon === true) {            
            if (props.lock === 'unlocked') {
                toggleHideShow($(event.target), 'detach')
                props.setCatchEmAll('true');
                
            } else {
                setSwitchGear('true')
                let target = $(event.target)            
                await ClassAction('add', $(event.target), 'tailWhip')
            }
        } else {
            return
        }

    }

    const nothing = () => {
        console.info("null")
    }

    const divClick = async (event) => {
       

        let tgt = $(event.target)
        let children = await GetChildren(tgt)    
        let child = children.prevObject[0]
        let imgsrc = child.currentSrc || 'whoa'
         if (imgsrc.length > 5) {
        let cleanid = await CleanUrl(imgsrc)
        let type = await ReturnTypes(cleanid) 
        let textStart = typeText.text() // this was working but when you change the text then this variable gets stored as the new text when the function reruns because its being run from a mosueEvent 
        if (type === 'electric') {
            // declaring this to change text to a new message and to change it back to the first message. have to store first message as a variable.            
            toggleHideShow($('p'), 'detach')
            props.setLock('unlocked')
        } else {
            const setType = async () => await setClickType(type)
            const changeMessage = async () => {
                let newText = `That's not an Electric Pokemon. You found a wild ${type || clickType} pokemon!`  // using state instead of variable makes the type off by 1. itll change text to the last-1 piece of data clicked.
                typeText.html(newText);                
            }
            const changeBack = async () => { typeText.html(startingText)}
            const asyncfunc = async () => {
                await setType()
                await changeMessage()
                setTimeout( changeBack, 3000) 
            }
            asyncfunc()
        }        
         } else {
             console.log(props.google)
             console.log("no length we haven't hovered gear yet!")
             console.log($("#signInDiv"))
            //  console.log($("#signInDiv").text()) // this will not access the text on the "Sign-In-With-Google" btn
             console.log('token')
             console.log(token)

             console.log(jwt_decode)


             // "<div class=\"S9gUrf-YoZ4jf\" style=\"position: relative;\"><div></div><iframe src=\"https://accounts.google.com/gsi/button?theme=outline&amp;size=large&amp;client_id=391925163312-b27vd8l3
              
        }        
        let length = $(tgt).children().length
    }
    
    

    return (
        <div className="Outer-Layer Column-Center">

        <p
            className="Captcha-Text" id="Human-Text"
            style={ {opacity: switchGear === 'true' ? '1.0' : '0.0'}}
        > Welcome! We Just Want To Know If You're Human! </p>
        {/* <DB /> */}
        <div 
            style={ {display: props.catchEmAll === 'true' ? 'none' : 'block'}}
            onMouseEnter={switchGears} id="Gear"> 
        </div>

        <div
         style={ {display: props.lock === 'locked' ? 'grid' : 'none'}}        
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
            style={ {opacity: switchGear === 'true' ? '1.0' : '0.0', display: props.lock === 'locked' ? 'none' : 'block'}}
        > Find the Electric type and Click on it to see the Pokemon!</p>


        <StarterPokemon
        pickPokemon={pickPokemon} setPickPokemon={setPickPokemon}
        fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
        starterPokemon={props.starterPokemon} setStarterPokemon={props.setStarterPokemon}
        />

        </div>
    )
}

export default Captcha
