import React, {useEffect, useState} from 'react';
import Nav from '../element/NavBar'
// import RealisticScreen from '../element/RealisticScreen'
import RealisticScreen from '../element/NewRealistic'
import MiniScreen from '../element/MiniRealScreen'
import TopBar from '../element/TopBar'
function TypeScreen (props) {
    const [selectedType, setSelectedType] = useState([])
    const [miniScreenPokemon, setMiniScreenPokemon] = useState('')
    // console.log(setSelectedType)


    return (
        <div>
            <div className="Type-Wrap Column-Center">
                <RealisticScreen
                catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
                fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
                selectedType={selectedType} setSelectedType={setSelectedType}
                miniScreenPokemon={miniScreenPokemon} setMiniScreenPokemon={setMiniScreenPokemon}
                />

                <TopBar 
                catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
                fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
                selectedType={selectedType} setSelectedType={setSelectedType}
                miniScreenPokemon={miniScreenPokemon} setMiniScreenPokemon={setMiniScreenPokemon}
                />
                <div className="Second-Half">
                <MiniScreen
                selectedType={selectedType} setSelectedType={setSelectedType}
                miniScreenPokemon={miniScreenPokemon} setMiniScreenPokemon={setMiniScreenPokemon}
                />
                <Nav 
                catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
                /> 
                </div>
                {/* {fakeDbState: Array(0), selectedType: Array(0), setFakeDbState: ƒ, setSelectedType: ƒ} */}
                <div className="Type-Wrap-2 Column-Between">
                </div>
            </div>
        </div>
    )
}

export default TypeScreen
