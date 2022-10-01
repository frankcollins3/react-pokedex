function MiniScreen(props) {
    let assessItem = (event) => {
        console.log(event)
        console.log(event.target)
        // let hoverimage = event.target.currentSrc // not right this brings back the <img. you can see the element, not as a string.
        let hoverimage = event.target.attributes[1].nodeValue
        console.log('hoverimage')
        console.log(hoverimage)
        // let name = APIcall('specify', hoverimage.regex)
        // change url to localhost:3000/pokemon/name to the 3rd page which will be an info page accessing a few different api endpoints 
        // from pokeapi for this specific pokemon 
    }
    return (
        <div className="Real-Screen Column-Center Quarter-Size">
        {props.miniScreenPokemon ?
        <img 
        onClick={assessItem}
        style={{ height: '100px', width: '100px'}}
        className="Sprite Quadruple" src={props.miniScreenPokemon}/>
        :
        <div className="Invisible"> </div>}
        </div>
    )
}

export default MiniScreen
