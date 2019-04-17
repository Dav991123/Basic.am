import React from 'react';

const Conditions = (props) => {
    const { Condition } = props
    return (
       <section id={'detailed-information'} className={'block'}>
            <ul>
                {
                    Condition.map((value,item)=>{
                        return <li key={item}>{value}</li>
                    })
                }
            </ul>
       </section>     
    )
}
export default Conditions