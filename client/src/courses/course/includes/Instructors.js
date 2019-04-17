import React from 'react';

const Instructors = (props) => {
    const { Instructor } = props
    let instructor;
    Instructor.length > 1 ? instructor = 'Դասընթացավարներ': instructor = 'Դասընթացավար';

    return (
        <section id={'instructors'}>
                <h3>{instructor}</h3>
            {
                Instructor.map((value, item) => {
                    return (
                        <section key={item} className={'instructor'}>
                            <img src={value.img} alt={value.fullName}/>
                            <section>
                                <h4>{value.fullName}</h4>
                                <span className={'title'}>{value.title}</span>
                                <p>{value.description}</p>
                            </section>
                        </section>
                    )
                })
            }
        </section>     
    )
}
export default Instructors