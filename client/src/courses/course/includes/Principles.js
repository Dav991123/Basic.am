import React from 'react';

const Principles = (props) => {
    const { Principle } = props
    return (
        <article id={'who-can-attend'} className={'block'}>
            <h3>Դասընթացին կարող են մասնակցել այն անձինք, ովքեր՝</h3>
            <ul>
                {
                    Principle.map((value, item) => {
                        return <li key={item}>{value}</li>
                    })
                }
            </ul>
        </article>
    )
}
export default Principles