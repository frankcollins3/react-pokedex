    import CleanData from '../utility/CleanData'
    import { useEffect, useState, useRef } from 'react'
    import { $ } from 'react-jquery-plugin'
    import myCSS from '../utility/CSStool'
    import forInTool from '../utility/damageForInLoop'
    import toggleHideShow from '../utility/hideShow'
import { createNoSubstitutionTemplateLiteral } from 'typescript'
    let thisobject = { name: 'myself', body: 'autobody', mph: 100}
    // forInTool(thisobject)
    // let newobj = await forInTool(thisobject)

    // import CreateElem from '../utility/CreateElem'
    function EndpointBar (props) {        
        // console.log(props)
        // console.log(props.endpoint)
        let movesBucket = new Array() || []
        let abilitiesBucket = [] 
        let dmgRelationsBucket = new Array()


        let refHouse = useRef([])
        let bar = $('.Info-Endpoint-Bar')

        const [mouseMoved, setMouseMoved] = useState('false')
        const [fakeDom, setFakeDom] = useState('')
        const [fakeDom2, setFakeDom2] = useState('')

        const [damageRelations, setDamageRelations] = useState([])
        const [damageHeader, setDamageHeader] = useState([])
        const [damageIndex, setDamageIndex] = useState(0) // tried to leave this empty and do -> damageIndex = damageIndex + 1. assignment to const error. Also useState() doesn't seem to be like the doing math upon the state as if it were set as an integer when its blank.

        // * damage relations: 
        const [dblFrom, setDblFrom] = useState('')

        // const [moveIndex, setMoveIndex] = useState(0) WRONG!!!

        useEffect( () => {
            if (fakeDom === 'dom event' || fakeDom === 'dom') {
                // console.log("it equals dom event")    
                // console.log(refHouse)
                            
                myCSS($(refHouse.current)[0], 'border', '8px dotted maroon')   
                setTimeout(async() => {
                    await myCSS($(refHouse.current)[0], 'border', '')                   
                    await $(refHouse.current).slice(0, $(refHouse.current).length)
                }, 3000)            
                // * youll get both console.logs()=> [it equals dom] --- [it equals something else]
            } else {
            }
        }, [fakeDom])

            let urlpokemon = props.paramPoke    
            
            const getMoves = async (event) => {            
                let movebucket = await CleanData(urlpokemon, 'moves')                   
                const newMoves = [...props.endpointState];
                newMoves.push(movebucket);
                props.setEndpointState(newMoves);            
            }
            const fillContainer = async () => {
                let movebucket = await CleanData(urlpokemon, 'moves')
                let abilitybucket = await CleanData(urlpokemon, 'ability')        
                let dmgbucket = await CleanData(urlpokemon, 'damage')                                
                let bucketofbuckets = [...props.endpointState]
                bucketofbuckets.push(abilitybucket, movebucket, dmgbucket)
                await props.setEndpointState(bucketofbuckets)        
            }
                    

            const dmgrelation = async () => {
                let dmgbucket = await CleanData(urlpokemon, 'damage')        
            }

        const addState = async () => {        
                fillContainer()
                await setMouseMoved('true')          
            }

        const checkState = async () => {
            const goHome = () => {
                // console.log(refHouse.current)
                refHouse.current.push('hey')
            }
            const seeWhoseThere = () => {
                // console.log(refHouse.current)                        
            }
            const knocknock = async () => {
                await goHome()
                await seeWhoseThere()
            }
            knocknock()
        }

        const changeBtnState = async (event) => {                  
            let target = $(event.target)
            console.log(event)
            let idvalue = event.target.attributes[1].nodeValue
            console.log('idvalue')
            console.log(idvalue)

            
            if (idvalue === 'moves') {
                console.log(props.endpointState)
                props.setHeaderText('moves:')
                props.setClickedGloves("true")
                myCSS(target.siblings(), 'opacity', '0.1')
                myCSS(target, 'opacity', '1.0')
                await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
            }  else {
                checkState()            
            }

            //*  idvalue === 'moves' ? props.setEndpoint(props.endpointState[1][0].move.name) : checkState()
            //*  idvalue === 'ability' ? props.setEndpoint(props.endpointState[0][0].name) : checkState()

            if (idvalue === 'ability') {
                    let abilities = props.endpointState[0]
                    let abilitylength = abilities.length                                                
                    try {
                        if (abilitylength) {
                            let currentstate = props.endpoint
                            let headerstate = props.headerText
                            props.setHeaderText('abilities:')
                            await props.setClickedGloves('false')
                            myCSS(target.siblings(), 'opacity', '0.1')
                            myCSS(target, 'opacity', '1.0')                        
                            let abilitydata = await CleanData(props.paramPoke, 'ability')                           
                            let ability1 = abilitydata[0]
                            let name1 = ability1.name
                            let text1 = ability1.text
                            let ability2 = abilitydata[1]
                            let name2 = ability2.name
                            let text2 = ability2.text                                                                                             
                            if (headerstate === ability1.name) {                            
                                props.setHeaderText(ability2.name)
                                props.setEndpoint(ability2.text)                        
                            }
                            else {
                                props.setHeaderText(ability1.name)
                                props.setEndpoint(ability1.text)                                                        
                            }
                        }   
                    }
                    catch (err) {
                        console.log(err)
                        // ReferenceError: Cannot access 'ability2' before initialization
                        // at changeBtnState (InfoEndpointBar.js:125:1)
                        // location.href = 'views/404page' 
                    }

            }  else checkState()    
                try {
                    if (typeof idvalue === 'string') {
                        if (idvalue === 'damage') {                             
                            let dmgendpoints = props.endpointState[2]

                            await props.setClickedGloves('false')
                            myCSS(target.siblings(), 'opacity', '0.1')
                            myCSS(target, 'opacity', '1.0')

                            const damageSubmit = async () => {
                                let dblFrom = dmgendpoints.double_damage_from
                                // let dblFrom = {...dmgendpoints.double_damage_from}
                                let dblTo = dmgendpoints.double_damage_to
                                let halfFrom = dmgendpoints.half_damage_from
                                let halfTo = dmgendpoints.half_damage_to
                                let noneFrom = dmgendpoints.no_damage_from
                                let noneTo = dmgendpoints.no_damage_to
                                if (damageRelations.length < 2) {
                                    console.log('there are contents')
                                    console.log("this is who i am now")
                                    props.setHeaderText('damage relations')
                                } else {
                                        const valuebucket = []
                                        const damagebucket = [dblFrom, dblTo, halfFrom, halfTo, noneFrom, noneTo]      

                                    let headerKeys = await Object.keys(dmgendpoints)
                                    

                                    const loopAndPush = async () => {
                                        await damagebucket.forEach(async(damageitem) => {
                                            let loopItemDataGrab = await forInTool(damageitem)
                                            // let loopitemstr = loopItemDataGrab.toString()
                                            let splitstr = loopItemDataGrab.join('\n')
                                            console.log('ssplitstr')
                                            console.log(splitstr)

                                            // let itemmap = damageitem.map( (damageitem) => {
                                            //     console.log('damageitem')
                                            //     console.log(damageitem)
                                            // })

                                            // console.log(loopitemstr)
                                            // loopitemstr.replace(/[\,]/g, '')

                                            // let newlineitem = loopItemDataGrab.toString().replace(/[\,]/g, '')
                                           
                                            if (valuebucket.length < damagebucket.length ) { // prevent duplicate
                                                // console.log("value length is less")
                                                // valuebucket.push(splitstr)
                                                valuebucket.push(splitstr)
                                                // console.log("the next easy part is the worst part.") 
                                                
                                            }
                                        })
                                    }
                                    const change = async () => { 
                                        console.log('damageIndex')
                                        console.log(damageIndex)
                                        console.log('valuebucket')                                       
                                        console.log(valuebucket)                                       
                                        await setDamageRelations(valuebucket)
                                        if (props.headerText !== 'damage relations' && damageIndex < damagebucket.length) {
                                            await setDamageIndex(damageIndex + 1) 
                                        } else { setDamageIndex(0)}

                                    }     
                                    
                                    const morechange = async () => {
                                        console.log('damageRelations')
                                        await console.log(damageRelations)
                                        await props.setHeaderText(headerKeys[damageIndex])
                                        await props.setEndpoint(damageRelations[damageIndex])
                                        if (valuebucket.length === damagebucket.length) {
                                            console.log('the lengths are equal!')

                                            // * regex to replace double_damage_from escape special character
                                            // * remove comma and add \n {newline} for damageRelations
                                        }                                    
                                    }

                                      
                                    const runTheFunctions = async () => {
                                        await loopAndPush()
                                        await change()
                                        await morechange()
                                        // await checkAndChange()
                                    }
                                    runTheFunctions()
                                    
                                                               
                                    console.log("we have added and were here now")
                                    // let dblFromData = await forInTool(dblFrom)
                                    // let dblToData = await forInTool(dblTo)
                                    // let halfFromData = await forInTool(halfFrom)
                                    // let halfToData = await forInTool(halfTo)
                                    // let noneFromData = await forInTool(noneFrom)
                                    // let noneToData = await forInTool(noneTo)
                                    // ['ground', 'rock', 'water'] return data for ninetales #38 fire type accurate
                                  
                                    // just setting this variable invokes this function
                                                                                                             
                                        return damagebucket
                                        // * loop through the endpoints first and push values to an array
                                }
                            }
                            await setDamageRelations(damageSubmit())                                
                            // damageSubmit()
                    

                            
                            // * headerText h1 Object.keys (escapeChar() export tool)
                            
                            

                        }
                } else { return  }
                }
                catch (err) { console.log(err) }             // catch (err)  console.log(err)  kind of surprised you can't 1 line this out

            }
            let checkout = () => {
                console.log('dblFrom')
                console.log(dblFrom)

                console.log('damageRelations')
                console.log(damageRelations)
                
            }
        return (
            // <div onClick={addState} className="Info-Endpoint-Bar Row-Center">
            
            <div onMouseEnter={checkout} className="Info-Endpoint-Bar Row-Center">
            {/* <div onMouseEnter={mouseMoved == 'false' ? addState : checkState} className="Info-Endpoint-Bar Row-Center">  */}
            {mouseMoved === 'true' 
            ?
            <>
            {/* <button onClick={getabilities}> </button> */}
            <button className="Bg-Btn" id="moves" onClick={changeBtnState}></button>
            <button className="Bg-Btn" id="ability" onClick={changeBtnState}></button>
            <button className="Bg-Btn" id="damage" onClick={changeBtnState}></button>
            {/* <button className="Bg-Btn" id="Info-Pokeball" onClick={checkState}></button> */}
            
            </>
            :
            <button className="Bg-Btn" id="Info-Pokeball" onClick={addState}></button>
            }
            </div>
    
        )
    }

    export default EndpointBar
                                        // console.log(typeof idvalue)       // log(...data: any[]): void            // (...data : any[]) can see the TS syntax type for .log()                                        
                                                    // * damagebucket.forEach( (bucketitem, idx) => {                                        
                                        // *     for (const item in bucketitem) {                                            
                                        //         let newitem = bucketitem[item]
                                        //         if (`${item}` == 0) {
                                        // *            if ((idx) == (item)) {
                                        //                 console.groupCollapsed()
                                        //                 console.log(`idx: ${idx} item: ${item}`)
                                        //                 console.log(newitem)
                                        //                 console.groupEnd()
                                        //             }}}
                                        // })
