import React from 'react';
import {Link} from "react-router-dom";
import './course.css';

import cplusplus from '../images/courses-icon/cplusplus.svg';
import CPLUSPLUS from './images/page-images/cplusplus.gif';


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
    'Կարող են օրական կտրվածքով տրամադրել առնվազն 3 ժամ՝ տնային հանձնարարություններին',
    'Պատրաստ են ապրել ծրագրավորողի կյանքով ☺'
]

const obscenities = [
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես C++ ծրագրավորող'
    
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
        fullName: 'Հայկ Մանուկյան',
        title: 'C++ ծրագրավորող',
        img: 'https://it-center.am/images/tutors/cplusplus/hayk.png',
        description: ''
    }
]

const coursesDescription1 = 'Ծանոթացում C++ ծրագրավորման լեվին և հիմնական հասկացություններին';
const coursesDescription2 = 'Ծանոթացում C++ OOP-ին՝ կլասսներ, զանգվածներ, ֆունկցիաներ';
const coursesDescription3 = 'Ծանոթացում STL գրադարանին՝ կոնտեյներներ, ալգորիթմեր, մեթոդներ';
const coursesDescription4 = 'Ծանոթացում QT գրադարանին՝ գրաֆիկական ծրագրեր, layout-ներ, collection-ներ';

const coursesList1 = [
    'Ծանոթացում C++–ին, պրիմիտիվ փոփոխականներ, բինար համակարգ',
    'Տրամաբանական և պայմանի օպերատորներ',
    'Ցիկլային օպերատորներ, անվերջ ցիկլ և նրա կիրառությունը',
    'Միաչափ զանգված, կիրառման հնարավորին տարբերակները',
    'Երկչափ զանգվածներ (Մատրիցա)',
    'Բազմաչափ զանգվածներ, բազմաչափ զանգվածի օրինակներ',
    'Ցուցիչ, հղում և կիրառման տարբերակները',
    'Հաստատուն փոփոխականներ և նրանց կիրառությունը',
    'Վերադարձնող, անվերադարձ և նույնանուն ֆունկցիաներ, ռեկուրսիա, ռեկուրսիվ ֆունկցիաներ',
    'Ծանոթացում complier-ի և debugger-ի հետ։ Ֆունկցիաների գործածումը տարբեր գրադարանների կիրառմամբ',
    '.cpp և .h տիպի ֆայլեր, նրանց կիրառությունը',
    'Ծանոթացում տվյալների կառուցվածքի հետ, Heap-ը և Stack-ը հիշողության մեջ, փուլի ամփոփում',
    'Թեստ',
]

const coursesList2 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում class–ների և օբյեկտների հետ',
    'Ծանոթացում կոնստրուկտորի և դեկստրուկտորի հետ և նրանց դերը օբյեկտի ստեղծման և ոչնչացման մեջ',
    'Ծանրաբեռնված կոնստրուկտորներ (copy, assignment, move), ծանրաբեռնված մեթոդներ',
    'Ժառանգականություն, կոնստրուկտորի պահվածքը ժառանգականության ժամանակ',
    'Բազմաժառանգականություն, friend մեթոդներ',
    'Պոլիմորֆիզմ և ինկապսուլացիա, պոլիմորֆ և աբստրակտ մեթոդներ',
    'Վիրտուալ մեթոդներ, մեթոդների պահվածքը վիրտուալ մեթոդների հիշողության մեջ',
    'Օպերատորների ծանրաբեռնում և նրանց կիրառությունը',
    'Բացառությունների մշակում (try/throw/catch), static մեթոդներ',
    'volatile փոփոխականներ, reinterpret, const, dynamic և static cast-եր',
    'Generics (template), generics-ը կլասսներում և մեթոդներում',
    'Design patterns - Singleton, Builder, Prototype, Inner, Nested և Anonymous Class-ներ, փուլի ամփոփում',
    'Թեստ'
]

const coursesList3 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում STL գրադարանի հետ',
    'Ծանոթացում vector և list կոնտեյներների հետ',
    'Iterator-ներ, նրանց օգտագործումը կոնտեյներների հետ',
    'Map, set կոնտեյներներ, նրանց մեթոդներ և կիրառությունը',
    'stack և queue տիպի ադապտերներ',
    'Ծանոթացում ալգորիթմների հետ։ Իրականացման և կոմպիլյացիայի փուլերի տարբերությունը',
    'Բինար և գծային փնտրում, նրանց իրականացումը ռեկուրսիվ և իտերատիվ մեթոդներով',
    'Սորտավորում, նրանց տարբերությունը կախված մուտքային պարամետրերից',
    'bubble sort, quick sort, insertion sort, mergesort իրականացումը',
    'Բինար ծառ, ծանոթացում և կազմակերպումը',
    'Բինար ծառի մեթոդներ, նրանց կիրառությունը',
    'C++ 11-րդ և 14-րդ ստանդարտները և նրանց օգտագործումը, փուլի ամփոփում',
    'Թեստ'
]

const coursesList4 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում Qt գրադարանի հետ',
    'XML, նրա կիրառությունը Qt-ում',
    'Գրաֆիկական ծրագրի ստեղծում',
    'Signals և slots, Edit menu-ի ստեղծում',
    'Layout-ը Qt-ում, (horizontal, vertical, grid form)',
    'Qt designer, ինտենսիվ պրոցեսներ, responsive դիզայն',
    'QlineEdit կիրառությունը',
    'Ծանոթացում Qfile-ի և Qdir-ի հետ',
    'Spacer, Spliter, Buddy, Tabs, Ասոցիատիվ և հաջորդական կոնտեյներներ',
    'Resurse collection ֆայլերի (.qrc) կիառությունը',
    'QlistWidget, նկարում Qpainter-ի միջոցով',
    'Qt stylesheet ստեղծումը HTML-ի օգնությամբ, փուլի ամփոփում',
    'Թեստ'
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'4',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 20, 2019 17:30:00'
}

class Cplusplus extends React.Component{
    componentDidMount() {
        document.title = 'C++ ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'cplusplus'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="main-course-title">Բազմապլատֆորմ</h1>
                                <h1 id="course-title">C++ ծրագրավորում</h1>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLvYIUQHSoV6S6Xgty20j20BDA7PY9B2h--ineEyDzCUXhTA/viewform?c=0&w=1" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={cplusplus} alt="C++"/>
                            </section>
                        </section>
                    </section>
                    <Information items={courseInformation} />
                </section>
                <section className="background" id="main-course-background">
                    <section id="main-course">
                        <section>
                            <section id="schema-background">
                                <nav id="schema">
                                    <ul>
                                        <li><Link to={`/`}>Գլխավոր էջ</Link></li>
                                        <li><Link to={`../courses`}>Դասընթացներ</Link></li>
                                        <li><Link to={`../courses/cplusplus`}>C++ ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>C++ -ը հայտնի է որպես հզոր ծրագրավորման լեզու, որի օգնությամբ հնարավոր է կառավարել համակարգչային ռեսուրսները և ավելի հեշտությամբ հաղթահարել հաջորդ ծրագրավորման լեզու սովորելու դժվարությունները։ C++ -ը հաճախ օգտագործվում է ստեղծելու և զարգացնելու խաղեր, ինչպես նաև desktop հավելվածներ։ Բազմաթիվ AAA խորագրով վիդեոխաղեր ստեղծվել են C++-ի օգնությամբ։</p>
                                </article>
                                <img src={CPLUSPLUS} alt="C++ Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="C++ -ը սկսնակների համար"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="OOP"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="STL"
                                        forId="checkbox3"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList4}
                                        Id="checkbox4"
                                        coursesDescription={coursesDescription4}
                                        coursesTitle="Qt"
                                        forId="checkbox4"
                                        digitCounterClass="digit counter"
                                    />
                                </ul>
                                <Conditions Condition={conditions}/>
                            </section>
                            <aside>
                                <Instructors Instructor={instructors}/>
                            </aside>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}

export default Cplusplus