import React, {useEffect, useState} from 'react';
import Nav from '../element/NavBar'
import RealisticScreen from '../element/RealisticScreen'
import MiniScreen from '../element/MiniRealScreen'
import TopBar from '../element/TopBar'
function TypeScreen (props) {
    const [selectedType, setSelectedType] = useState('')
        


    return (
        <div>
            <div className="Type-Wrap Column-Center">
                <RealisticScreen 
                fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
                selectedType={props.selectedType} setSelectedType={props.setSelectedType}
                />

                <TopBar 
                fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
                selectedType={props.selectedType} setSelectedType={props.setSelectedType}
                />
                <div className="Second-Half">
                <MiniScreen
                selectedType={props.selectedType} setSelectedType={props.setSelectedType}
                />
                <Nav /> 
                </div>

                <div className="Type-Wrap-2 Column-Between">
                </div>
            </div>
        </div>
    )
}

export default TypeScreen