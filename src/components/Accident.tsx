import React from 'react'
import { Incident } from './Investigation'
import { Data } from './Investigation'
import styles from "../styles/Accident.module.scss"
 
const Accident: React.FC<{data: Data}> = (props) => {
    const {data} = props

    return (
        <div className={styles.AccidentContainer}>
            <h1>Accident File_93</h1>
            {data?.["accident files_93"].map((item: Incident) => (
                <ul key={item.id}>
                    <li>{item.question}</li>
                </ul>
            ))}
        </div>
    )
}

export default Accident