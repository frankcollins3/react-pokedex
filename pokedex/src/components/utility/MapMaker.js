import React, {useRef, useState, useEffect } from 'react';
import {Alert, Button, Card}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'
import { $ } from 'react-jquery-plugin'; 


function InputMap (props) {
    let pokeRefs = useRef([]);      

    useEffect( () => {
        console.log("hey from the MapMaker funcComponent!")
        let updatedLength =  props.specifiedLength[0]
        console.log('updatedLength')
        let numbers = 999 
        let friend = 'pal'
        // let newNumber = $.fn.toString(numbers)
        let newNumber = $.fn.toString = function(integer) {
            console.log('integer')
            console.log(`${integer} is my ${friend}`)
            // return numbers
        }
        newNumber(999)
        // console.log(updatedLength.toString())
        // console.log(parseInt(updatedLength))

        // for (let i = 0; i < parseInt(updatedLength);

    }, [props.specifiedLength])

    // $(document).ready( () => {
    //     console.log()
    // })

    // console.log(props || 'hey')
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
        </div>
    )
}
export default InputMap