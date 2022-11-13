import { $ } from 'react-jquery-plugin'
import React, { useEffect, useState } from 'react'
import CleanUrl from '../utility/CleanUrlTool'
import InfoPokeImage from '../element/InfoPokeImage'
import InfoBtnBar from '../element/InfoBtnBar'
import InfoEndpoint from '../element/InfoEndpoint'
import EndpointBar from '../element/InfoEndpointBar'
import Nav from '../element/NavBar'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import myCSS from '../utility/CSStool'
// weird error. having:
// import EndpointBar from element/InfoEndpoint.
// this typo brought out the InfoEndpoint component stored as Endpointbar


// this is a webpage that will import multiple components that have access to the same urlparam state.
function InfoScreen(props) {
    const [paramPoke, setParamPoke] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [endpointState, setEndpointState] = useState('change', 'the', 'state')    // populates with all state

    const [headerText, setHeaderText] = useState('') 
    const [endpoint, setEndpoint] = useState('') // checks populated state and grabs a value. This is the value cont.display based

    const [moveIndex, setMoveIndex] = useState(0)
    const [clickedGloves, setClickedGloves] = useState('false')

    const [stringForSplit, setStringForSplit] = useState('')

    let wrapwidth = $('.Info-Wrap').width() * 2
    let intwidth = parseInt(wrapwidth)
    console.log('wrapwidth')
    console.log(wrapwidth)
    console.log(`wrapwidth type ${typeof wrapwidth}`)
    console.log(`intwidth type ${typeof intwidth}`)

    useEffect( () => {
        
        props.setThirdPage(true)
        
        $('.Info-Wrap').parents().css('background-image', `url(${'/img/blackpokedex.png'})`)  
        $('.Info-Wrap').parents().css('background-size', 'cover')
        
        let jqdoc = $(document)
        let win = window        
        // * we are digging for that urlparam which is our /pokemon/:id  
        // * urlparam will be set when we get it from the secondArg in our pure function tool
        //  second arg: `/pokemon/${cleanurl}`  LocationTool(null || undefined, `/pokemon/${cleanurl}`, imagenavigate)        
        const paramState = async () => {
            let currloc = win.navigation.currentEntry.url            
            let cleanint = await CleanUrl(currloc)
            setParamPoke(cleanint)
        }
        paramState()        
    }, [])

    useEffect( () => {
        console.log("endpoint is changed")
        if (parseInt(wrapwidth) < 450) {
            let newendpoint = []
            let newstr = ''
            let containerchildren = $('.Info-Wrap').children()
            myCSS(containerchildren, 'font-family', '10px')
            

            const loopAndPush = () => {
                let presubstring = endpoint.split(' ')                
                presubstring.forEach( (substr, index) => {                    
                    newendpoint.push(substr)
                    newstr += substr
                    if (index % 2 !== 0) {
                        newendpoint.push('\n')
                        newstr += '\n'                
                    }
                })
            }

            const checkbuckets = async () => {                
                await setEndpoint(newstr)
            }        
            const asyncdouble = async () => {
                await loopAndPush() 
                await checkbuckets()
            }
            asyncdouble()
            // let substring = text1.substring()

        } else if (intwidth > 400) {
            console.log('more than 400!!!!')
        }
    }, [endpoint])
    
    const check = () => {        
        // paramPoke InfoScreen.js:32 1 parampoke now returns 1 because of our export function t
    }
    
    // }, [paramPoke]) wouldn't have this because if the paramPoke changed the whole webpage would change anyways.

    return (
        <>
        <Nav        currentUrl={props.currentUrl} setCurrentUrl={props.setCurrentUrl} thirdPage={props.thirdPage} setThirdPage={props.setThirdPage}
        />
        <div className="Info Info-Wrap Row-Between">
            {/* <button onClick={check} className="navBall" id="Pokeball"></button> */}
            <div className="Info Info-Left Column-Center">
            <InfoPokeImage
             thirdPagePoke={props.thirdPagePoke} setThirdPagePoke={props.setThirdPagePoke}
             paramPoke={paramPoke} setParamPoke={setParamPoke}
             imageUrl={imageUrl} setImageUrl={setImageUrl}
             />
             <InfoBtnBar
            paramPoke={paramPoke} setParamPoke={setParamPoke}
            imageUrl={imageUrl} setImageUrl={setImageUrl}
            // was thinking if this needs paramPoke state & i don't believe so. 
            />
            </div>        

            <div className="Info Info-Right Column-Center">
            <InfoEndpoint
            headerText={headerText} setHeaderText={setHeaderText}
            clickedGloves={clickedGloves} setClickedGloves={setClickedGloves}
            moveIndex={moveIndex} setMoveIndex={setMoveIndex}
            endpoint={endpoint} setEndpoint={setEndpoint}
            endpointState={endpointState} setEndpointState={setEndpointState}
            paramPoke={paramPoke} setParamPoke={setParamPoke}            
            />
            {/*
            1) change state 
            2) and have different maps in useEffect 
            3) call APIpoke()        
        */}
            <EndpointBar
            headerText={headerText} setHeaderText={setHeaderText}
            clickedGloves={clickedGloves} setClickedGloves={setClickedGloves}
            moveIndex={moveIndex} setMoveIndex={setMoveIndex}
            endpoint={endpoint} setEndpoint={setEndpoint}
            endpointState={endpointState} setEndpointState={setEndpointState}
            paramPoke={paramPoke} setParamPoke={setParamPoke}            
            />
            
            </div>

        </div> 
            </>
    )
}

export default InfoScreen
