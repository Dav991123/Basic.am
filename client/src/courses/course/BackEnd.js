import React from 'react';
import {Link} from "react-router-dom";

import './course.css';
import stepan from './images/instructors/web/stepan.png';

import nodejs from '../images/courses-icon/nodejs.svg';
import NODEJS from './images/page-images/nodejs.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'Տիրապետում են JavaScript ծրագրավորման լեզվին',
    'Օժտված են ալգորիթմիկ մտածելակերպով',
    'Ցանկանում են տիրապետել ամենաբարձր վարձատրվող մասնագիտություններից մեկին',
    'Կարող են օրական կտրվածքով տրամադրել առնվազն 3 ժամ՝ տնային հանձնարարություններին',
    'Պատրաստ են ապրել ծրագրավորողի կյանքով ☺'
]

const obscenities = [
    'Ծրագրավորել վեբ կայքերի և մոբայլ հավելվածների client-side հարթակը',
    'Ստեղծել real-time հավելվածներ',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես back-end ծրագրավորող'
]

const conditions = [
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 2 ժամ տևողությամբ։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ:',
    'Դասընթացների ամբողջական փուլերի ավարտից հետո, շրջանավարտներին տրվում է հավաստագիր։',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։'
]

const instructors = [
    {
        fullName: 'Ստեփան Նիկողոսյան',
        title: 'Node.JS ծրագրավորող',
        img: stepan,
        description: ''
    }
];

const coursesDescription1 = 'Ծանոթացում back-end ծրագրավորման ընդհանուր հասկացություններին՝ client-client, Protocol, ինչպես նաև աշխատանք Express framework-ով'
const coursesDescription2 = 'Ծանոթացում Passport.js-ին, Role Based Authorization և զրուցարանի ստեղծում'

const coursesList1 = [
    'Ընդհանուր հասկացություններ՝ client-client, Protoco-ներ, ինչ է Node.js-ը, նրա կառուցվածքը, աշխատանքը, մոդուլային համակարգ',
    'Global Object, Մոդուլների ստեղծում, Module Wrapper ֆունկցիա, Path, OS, File System և Events մոդուլներ, NPM և Package.json',
    'Express framework 1 - վեբ սերվերի ստեղծում, GET, POST, PUT և DELETE մեթոդներ, Input Validation, RESTfull API (սկիզբ)',
    'Express framework 2 - Middleware, Configuration, շաբլոնիզատորներ, Express application-ի կազմակերպում',
    'Async javascript - Callback-եր, Promise-ներ և Async/Await',
    'Դատաբազաներ - MongoDB, սխեմաներ, CRUD հիմնական ֆունկցիաների իրականացում',
    'Mongoose - Data Validation',
    'Mongoose - Relationship between connected data, Object ID-ներ',
    'Authentication և Authorization',
    'Error handling և logging, RESTfull API (ավարտ)',
    'Deployment',
    'Application Security Basics'
]

const coursesList2 = [
    ' Ծանոթացում Passport.js-ին',
    'Օգտատերի գրանցման համակարգով application-ի ստեղծում /մաս 1/',
    'Օգտատերի գրանցման համակարգով application-ի ստեղծում /մաս 2/',
    'Օգտատերի գրանցման համակարգով application-ի ստեղծում /մաս 3/',
    'Role Based Authorization',
    'WebSockets, ws մոդուլ, Socket.io',
    'Հոսքեր(Streams), ReadStream/WriteStream',
    'Streaming to the browser, range requests',
    'Զրուցարանի ստեղծում - մաս 1',
    'Զրուցարանի ստեղծում - մաս 2',
    'Eventloop-ը Node.js-ում',
    'Scaling Node.js Applications',
    'Ավարտական նախագիծ'
]

const courseInformation = {
    status:'Միջին',
    duration:'2',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 24, 2019 19:30:00'
}

class BackEnd extends React.Component{
    componentDidMount() {
        document.title = 'Back-End ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'back-end'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Վեբ ծրագրավորում</h5>
                                <h1 id="course-title">Back-End ծրագրավորում</h1>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_kAclgA7lb4VrqbBYZegijiajTISYvmCG4_Bw2o32CZCX2Q/viewform?c=0&w=1" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={nodejs} alt="Node.js" />
                            </section>
                        </section>
                    </section>
                    <Information items={courseInformation}/>
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
                                        <li><Link to={`/courses/web/back-end`}>Back-End ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Back-End-ը ապահովում է կայքի անխափան աշխատանքը։ Իհարկե տվյալ մասը օգտատիրոջը տեսանելի չէ, քանի որ այն կապված է տվյալների բազայի և սերվերների հետ։ Back-End ծրագրավորողները ստեղծում են դինամիկ կայքեր, որոնք մշտապես փոփոխվում և թարմացվում են իրական ժամանակում։ Կոդը, որը գրում են վեբ ծրագրավորողները, հաղորդակցվում է սերվերի հետ, հետո՝ հուշում է բրաուզերին, թե ինչ օգտագործել տվյալների բազայից։</p>
                                </article>
                                <img src={NODEJS} alt="Node.js"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Node.js Core"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Express, MySQL"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                </ul>
                                <Conditions Condition={conditions}/>
                            </section>
                            <aside>
                                <section id="interconnected-courses">
                                    <p>Փոխկապակցված դասընթացներ</p>
                                    <ul>
                                        <li><Link to={'./front-End'}>Front-End ծրագրավորում</Link></li>
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

export default BackEnd