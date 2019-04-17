import React from 'react';
import {Link} from "react-router-dom";

import AboutProgramming from './includes/AboutProgramming.js';
import BasicCourses from './includes/BasicCourses';
import SecondaryCourses from './includes/SecondaryCourses.js';

import './courses.css';

const Texts = [
    'ամենապահանջված մասնագիտությունը',
    'ամենաբարձր վարձատրվող մասնագիտությունը',
    'ամենաառաջատար մասնագիտությունը',
    'ամենաարագ զարգացող մասնագիտությունը',
    'ամենաինտերակտիվ մասնագիտությունը',
    'ամենասիրված մասնագիտությունը',
    'ամենաստեղծարար մասնագիտությունը',
    'դարի մասնագիտությունը'
];

class Courses extends React.Component{
    componentDidMount() {
        document.title = 'Դասընթացներ | Basic IT Center';
    }
    render() {
        return (
            <main id={'courses'}>
                <AboutProgramming items={Texts} />
                <section className={'background'} id={'courses-background'}>
                    <section id={'main-courses'}>
                        {
                            BasicCourses.map((value, index) => {
                                return (
                                    <Link to={`${this.props.match.url}/${value.href}`} id={value.Id} key={index}>
                                        {value.href === 'python' || value.href === 'ml' ? <p>Մեկնարկը շուտով</p>: false}
                                        <img src={value.img} alt={value.alt}/>
                                        <h1>{value.projectTitle}</h1>
                                    </Link>
                                )
                            })
                        }
                    </section>
                    <section id={'secondary-courses'}>
                        {
                            SecondaryCourses.map((value, index) => {
                                return (
                                    <Link to={`${this.props.match.url}/${value.href}`} id={value.Id} key={index}>
                                        {value.href === 'it-english' || value.href === 'algorithms' ? <p>Մեկնարկը շուտով</p>: false}
                                        <img src={value.img} alt={value.alt}/>
                                        <h1>{value.projectTitle}</h1>
                                    </Link>
                                )
                            })
                        }
                    </section>
                </section>
            </main>
        )
    }
}

export default Courses;