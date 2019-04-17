import React from 'react';

const Syllabus = (props) => {
    const { coursesTitle, coursesDescription, coursesList, Id, forId, digitCounterClass } = props
    return (
        <li className={'block'}>
            <h3><span className={digitCounterClass}></span>{coursesTitle}</h3>
            <p>{coursesDescription}</p>
            <input type={'checkbox'} id={Id}/>
            <ul>
                {
                    coursesList.map((value, item) => {
                        return <li key={item}><p>{value}</p></li>
                    })
                }
            </ul>
            <label htmlFor={forId}><span className={'show'}>Դիտել</span><span className={'hide'}>Թաքցնել</span> փուլի պարունակությունը</label>
        </li>
    )
}
export default Syllabus