import React from 'react'
import styles from "../styles/Investigation.module.scss"

export interface Incident {
    id: number;
    question: string
}

export interface Data {
    "accident files_93": Incident[];
    investigation93: Incident[];
}

const Investigation: React.FC<{ data: Data }> = (props) => {
    const { data } = props
    return (
        <div className={styles.investigationContainer}>
            <h2 id={styles.investigation93}>Investigation93</h2>
            <div className={styles.answercommentdiv}>
                <h3 id={styles.answer}>Answer?</h3>
                <h3 id={styles.comment}>Comments</h3>
            </div>
            <div>
                {data?.investigation93?.map((item: Incident) => (
                    <div key={item.id}   className={styles.parentdivmap}>
                        <div className={styles.questions}>
                            <ul className={styles.questionUl} key={item.id}>
                                <li>{item.question}</li>
                            </ul>
                        </div>
                        <div className={styles.investigationDropdown}>
                            <form action="">
                                <select id={styles.dropdownselect} name="cars">
                                    <option value="" disabled selected hidden>
                                        Select Answer </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="partial">Partial</option>
                                    <option value="n/a">N/A</option>
                                </select>
                            </form>
                        </div>
                        <div className={styles.investigationComment}>
                            <form action="">
                                <textarea name="message"></textarea>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Investigation