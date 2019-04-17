import React from 'react';

const Possibility = (props) => {
    const { Obscenities } = props
    return (
        <article id={'what-will-learn'} className={'block'}>
            <h3>Դասընթացի ավարտից հետո Դուք կկարողանաք՝</h3>
            <ul>
                {
                    Obscenities.map((value, item)=> {
                        return <li key={item}>{value}</li>
                    })
                }
            </ul>
        </article>
    )
}
export default Possibility