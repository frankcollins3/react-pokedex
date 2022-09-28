import { useEffect, useState } from 'react';

function TypeBar() {
    
    const [selectedType, setSelectedType] = useState('') // one type at a time that changes when you click one of the circles.
    const [screenPokemon, setScreenPokemon] = useState('') // id or imgSrc or name 
    
    // there will be an event.target type of object.endpoint/key validation so we may be setting the id to the /psychic.img (example) type.
    // mouse behavior upon the circle will apply a class 
    return (
        <div className="TypeBar"> 
        <div className="Circle"></div>      
        <div className="Circle"></div>
        <div className="Circle"></div>
        <div className="Circle"></div>
        <div className="Circle"></div>
        <div className="Circle"></div>
        <div className="Circle"></div>
        </div>
    )
    {/* was going to use a loop for this but want to preset the values because there aren't too many of them. */}
    {/* id rather do this outside of a loop. */}
}
export default TypeBar