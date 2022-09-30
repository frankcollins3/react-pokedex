function MiniScreen(props) {
    console.log("hello from minirealscreen!")
    console.log(props)
    return (
        <div className="Real-Screen Column-Center Quarter-Size">
        {props.miniScreenPokemon ?
        <img 
        style={{ height: '100px', width: '100px'}}
        className="Sprite Quadruple" src={props.miniScreenPokemon}/>
        :
        <div className="Invisible"> </div>}
        </div>
    )
}

export default MiniScreen
