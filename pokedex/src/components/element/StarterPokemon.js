import React, { useEffect, useState} from 'react'


function StarterPokemon () {
    const [ulHover, setUlHover] = useState(false)

    const listHover = () => {
        console.log(listHover)
        setUlHover(true)
    }

    return (
        <ul onMouseEnter={listHover} id="Start-List">
            <li style={{ 
                height: '55px',
                width: '55px',
                backgroundImage: `url(${'/img/bag.png'})`,
                display: ulHover === true ? 'none' : 'block'
            }}
            />
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
                }} ></li>
            
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
                }} ></li>            
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
                }} ></li>
            
            
            
            
        </ul>
    )
}

export default StarterPokemon