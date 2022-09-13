import React, {useRef, useState, useEffect, createRef } from 'react';
import {Alert, Button, Card}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'
import { $ } from 'react-jquery-plugin'; 


function burgermap (props) {

    let mapsideInput = props.inputTarget
    $(mapsideInput).css('height', '500px')

    

    



    let pokeRefs = useRef([]);     
    
    const checkRefs = () => {
        console.log('pokeRefs')
        console.log(pokeRefs)
    }

    const resetRef = () => console.log("resetRefs is not working!")
    
    useEffect( () => {
        console.log("useEffect()=> MapMaker <Component/>!!")
        let inputlength = props.specifiedLength[0] 
        
//  */ better to have this within useEffect since this should be updated every time that state is being changed. The state is houed 1 level above in Bootstrap.js
        let i = 0; 
        for (i; i < inputlength; i++) {
            pokeRefs.current[i] = pokeRefs.current[i] || createRef()
        }
        
        
        
        }, [props.specifiedLength])

        // for (let i = 0; i < parseInt(updatedLength);

    const saveToFakeDbState = () => {
        console.log("hey how is you");
    }
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
                    <button type="button" onClick={resetRef} className="navBall" id="Ultraball"> </button>
        </div>
    )
}
export nothing 



// let newNumber = $.fn.toString = function(integer) {
//     console.log('integer')
//     console.log(`${integer} is my ${friend}`)
// 
// }
// return numbers
