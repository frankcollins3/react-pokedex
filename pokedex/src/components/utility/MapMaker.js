import React, {useRef, useState, useEffect, createRef } from 'react';
import {Alert, Button, Card}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'
import { $ } from 'react-jquery-plugin'; 


function InputMap (props) {

    let mapsideInput = props.inputTarget
    $(mapsideInput).css('height', '500px')
    // tried to send over a reference to jqObject as props. 

    

    



    let pokeRefs = useRef([]);     
    
    const checkRefs = () => {
        console.log(pokeRefs)
    }
    
    useEffect( () => {
        console.log("useEffect()=> MapMaker <Component/>!!")
        let inputlength = props.specifiedLength[0] 
        console.log('inputlength')
        console.log(inputlength)
//  */ better to have this within useEffect since this should be updated every time that state is being changed. The state is houed 1 level above in Bootstrap.js
        let i = 0; 
        for (i; i < inputlength; i++) {
            pokeRefs.current[i] = pokeRefs.current[i] || createRef()
        }
        }, [props.specifiedLength])

 
    return (
        <div>
            <ul>
               {pokeRefs.current.map((el, i) =>
                    <div key={`key${i}`} className="Map-Parent Column-Center">
                        <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        />
                        <Button onClick={saveToFakeDbState}  className="Bootstrap-Screen-Btn" variant={"primary"}> </Button>   {/* [] square bootstrap button */}
                    </div>
                    )}
                    </ul>   
                    <button type="button" onClick={checkRefs} className="navBall" id="Ultraball"> </button>
        </div>
    )
}
export default InputMap



// let newNumber = $.fn.toString = function(integer) {
//     console.log('integer')
//     console.log(`${integer} is my ${friend}`)
// 
// }
// return numbers
