import React from 'react';
import {Link} from "react-router-dom";

import './course.css';
import davit2 from './images/instructors/web/react/davit.png';

import reactjs from '../images/courses-icon/react.svg';
import REACTJS from './images/page-images/react.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'Տիրապետում են համակարգչային բազային գիտելիքների',
    'Օժտված են ալգորիթմիկ մտածելակերպով',
    'ՈՒնեն սովորելու մեծ ձգտում',
    'Ցանկանում են տիրապետել ամենաբարձր վարձատրվող մասնագիտություններից մեկին',
    'Կարող են օրական կտրվածքով տրամադրել առնվազն 2 ժամ՝ տնային հանձնարարություններին',
    'Պատրաստ են ապրել ծրագրավորողի կյանքով ☺'
]

const obscenities = [
    'Ստեղծել բազմաֆունկցիոնալ վեբ կայքեր',
    'Մշակել վեբ հավելվածներ նախատեսված տարբեր տեսակի պլատֆորմաների համար',
    'Տարբերակել JavaScript-ի framework-ների առավելությունները',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես React ծրագրավորող'
]

const conditions = [
    'Եթե տիրապետում եք նշված փուլերից որևէ մեկին, ապա կարող եք մասնակցել դասընթացներին՝ շրջանցելով տվյալ փուլը ՝ նախապես հանձնելով համապատսխան փուլի ամփոփիչ թեստը։',
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 2 ժամ տևողությամբ։',
    'Յուրաքանչյուր փուլի ավարտին անցկացվում է ամփոփիչ թեստ, և բարձր առաջադիմություն ցուցաբերելու դեպքում հնարավոր է օգտվել մինչև 20% զեղչից՝ հետագա փուլերի համար։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ:',
    'Դասընթացների ամբողջական փուլերի ավարտից հետո, շրջանավարտներին տրվում է հավաստագիր։',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։'
]

const instructors = [
    {
        fullName: 'Դավիթ Սարգսյան',
        title: 'JavaScript/React JS ծրագրավորող',
        img: davit2,
        description: ''
    },
];

const coursesDescription1 = 'Ծանոթացում ReactJS-ի հիմնական գործիքներին՝ npm / yarn, webpack։ Աշխատանք Redux-ով։'

const coursesList1 = [
    'ES2015 essential basics, Introduction to React',
    'Components-based architecture React elements and Components',
    'Virtual DOM, Communication between Components(Props, Refs)',
    'Components’ state, handling data changes with state',
    'Synthetic events',
    'React Lifecycle methods',
    'Talking to Remote Servers directly from React',
    'Introduction to tools that used with React (npm / yarn, webpack)',
    'Introduction to Redux, Store',
    'Actions and Action Creators',
    'Reducers, (middleware) and Store Manipulations',
    'Talking with remote servers with usage of Redux, global data flow',
     'Նախագիծ'
    ]

const courseInformation = {
    status:'Միջին',
    duration:'1',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 15, 2019 17:30:00'
}

class FrontEnd extends React.Component{
    componentDidMount() {
        document.title = 'React JS ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'react'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Վեբ ծրագրավորում</h5>
                                <h1 id="course-title">React JS ծրագրավորում</h1>
                                <a href="https://goo.gl/forms/BC3ULcqWJe2HQlzs2" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={reactjs} alt="React JS" />
                            </section>
                        </section>
                    </section>
                    <Information  items={courseInformation}/>
                </section>
                <section className="background" id="main-course-background">
                    <section id="main-course">
                        <section>
                            <section id="schema-background">
                                <nav id="schema">
                                    <ul>
                                        <li><Link to={`/`}>Գլխավոր էջ</Link></li>
                                        <li><Link to={`/courses`}>Դասընթացներ</Link></li>
                                        <li><Link to={`/courses/web/front-end`}>Front-End ծրագրավորման դասընթաց</Link></li>
                                        <li><Link to={`/courses/web/react`}>React JS ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Սովորի՜ր մեկ անգամ և կիրառիր ամենուր։ Ահա սա է React-ի նշանաբանը։ Facebook-ի կողմից ստեղծված գրադարանի միջոցով հնարավոր է ստեղծել գերարագ վեբ կայքեր, որը թույլ կտա նույնիսկ մի փոքր փոփոխության պարագայում անմիջապես թարմացնել կայքը՝ առանց որևէ դժվարության և ժամանակ կորցնելու։ <br /><br /> Համոզվելու համար ստուգի՜ր <a href={'https://developers.google.com/speed/pagespeed/insights/?url=basic.am&tab=desktop'} target={'_blank'} rel={'noopener noreferrer'}>մեր կայքի արագագործությունը <span role={'img'} aria-labelledby="Smile">😊</span></a> </p>
                                </article>
                                <img src={REACTJS} alt="Web Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="React JS"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                </ul>
                                <Conditions Condition={conditions}/>
                            </section>
                            <aside>
                                <section id="interconnected-courses">
                                    <p>Փոխկապակցված դասընթացներ</p>
                                    <ul>
                                        <li><Link to={`./front-end`}>Front-End ծրագրավորում</Link></li>
                                        <li><Link to={`./back-end`}>Node.JS ծրագրավորում</Link></li>
                                    </ul>
                                </section>
                                <Instructors Instructor={instructors}/>
                            </aside>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}

export default FrontEnd