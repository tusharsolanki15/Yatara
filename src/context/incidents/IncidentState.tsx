import React, { ReactNode, useState } from 'react'
import IncidentContext from './incidentContext'

interface IncidentStateProps {
    children: ReactNode;
}

const IncidentState: React.FC<IncidentStateProps> = (props) => {
    const [state, setState] = useState<string>("test")
    setState("new")
  return (
    <div>
        <IncidentContext.Provider value={state} >
            {props.children}
        </IncidentContext.Provider>
    </div>
  )
}

export default IncidentState