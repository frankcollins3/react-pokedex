import React, {useEffect, useState} from 'react';
import Nav from '../element/NavBar'
import RealisticScreen from '../element/RealisticScreen'
import MiniScreen from '../element/MiniRealScreen'
import TopBar from '../element/TopBar'
function TypeScreen (props) {
    const [selectedType, setSelectedType] = useState([])
    console.log(setSelectedType)


    return (
        <div>
            <div className="Type-Wrap Column-Center">
                <RealisticScreen 
                fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
                selectedType={selectedType} setSelectedType={setSelectedType}
                />

                <TopBar 
                fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
                selectedType={selectedType} setSelectedType={setSelectedType}
                />
                <div className="Second-Half">
                <MiniScreen
                selectedType={selectedType} setSelectedType={setSelectedType}
                />
                <Nav /> 
                </div>
                {/* {fakeDbState: Array(0), selectedType: Array(0), setFakeDbState: ƒ, setSelectedType: ƒ} */}
                <div className="Type-Wrap-2 Column-Between">
                </div>
            </div>
        </div>
    )
}

export default TypeScreen
