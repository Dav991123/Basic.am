import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';
import narine from './images/instructors/qa/narine.png';

import qa from '../images/courses-icon/qa.svg';
import QA from './images/page-images/qa.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'տարբերվում են վերլուծական մտածողությամբ',
    'տիրապետում են համակարգչային բազային գիտելիքների',
    'ունեն սովորելու մեծ ձգտում'
]

const obscenities = [
    'իրականացնել վեբ կայքերի և հավելվածների թեստավորում',
    'օգտագործել թեստավորման հիմնական կոնցեպտները իրական նախագծերում',
    'աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես Junior QA մասնագետ'
]

const conditions = [
    'Եթե տիրապետում եք նշված փուլերից որևէ մեկին, ապա կարող եք մասնակցել դասընթացներին՝ շրջանցելով տվյալ փուլը ՝ նախապես հանձնելով համապատսխան փուլի ամփոփիչ թեստը։',
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 90 րոպե տևողությամբ։',
    'Յուրաքանչյուր փուլի ավարտին անցկացվում է ամփոփիչ թեստ, և բարձր առաջադիմություն ցուցաբերելու դեպքում հնարավոր է օգտվել մինչև 20% զեղչից՝ հետագա փուլերի համար։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ։',
    'Դասընթացների ամբողջական փուլերի ավարտից հետո, շրջանավարտներին տրվում է հավաստագիր։',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։',
]

const instructors = [
    {
        fullName: 'Նարինե Միրզախանյան',
        title: 'Senior QA մասնագետ',
        img: narine,
        description: 'Ծրագրային որակի ապահովման փորձառու մասնագետ՝ համապատասխան աշխատանքային փորձով ՏՏ ոլորտում։ Պրոֆեսիոնալ մասնագիտական հմտություններ՝ թեստերի պլանավորման, մեխանիկական, ինչպես նաև բջջային թեստավորման, Selenium WebDriver-ի և Java-ի ոլորտներում։'
    }
]

const coursesDescription1 = 'Ծանոթացում թեստավորման գոյություն ունեցող կոնցեպտներին, հիմնական թեստավորման գործընթացին, մոտեցումներին և նպատակներին:';
const coursesDescription2 = 'Ծանոթացում ավտոմատացված թեստավորման հիմնական կոնցեպտներին, Java լեզվի ուսումնասիրություն թեստավորողների համար:';
const coursesDescription3 = 'Ծանոթացում Selenium WebDriver-ի և ավտոմատացված թեստավորման այլ գործիքների հետ, դրանց պրակտիկ կիրառումը:';

const coursesList1 = [
    'Quality Assurance - Ներածություն',
    'Ծրագրային ապահովման զարգացման ցիկլը: Ծրագրային փորձարկման կյանքի ցիկլը',
    'Թեստավորման տերմինաբանություն',
    'Ինչպես ստեղծել Test case-եր , Test Scenaio-ներ և Test Plan',
    'Ինչ է Bug Report-ը',
    'Թեստավորման տեսակները ՝ Functional Testing',
    'Թեստավորման տեսակները ՝ Non-Functional Testing',
    'Ծանոթացում բրաուզերի գործիքների հետ',
    'Cross-Browser Testing',
    'Մոբայլ հավելվածների թեստավորում',
    'Առավել շատ օգտագործվող Testing tool-եր',
    'Փուլի ամփոփում',
    'Թեստ',
]

const coursesList2 = [
    'Ավտոմատացված թեստավորում - Ներածություն',
    'HTML, CSS - Ներածություն',
    'Ծանոթացում element locator-ների հետ և պրակտիկ կիրառում',
    'Xpath - Advanced Locators',
    'Java-ն թեստավորողների համար - Ներածություն',
    'Java-ն թեստավորողների համար - Data Types',
    'Java-ն թեստավորողների համար - Classes and Methods',
    'Java-ն թեստավորողների համար - Conditional Statements and Loops',
    'Java-ն թեստավորողների համար - Static Keyword',
    'Java-ն թեստավորողների համար - Object Oriented Programming Concepts',
    'Պարտադիր գործիքների եւ պլագինների տեղադրում',
    'Փուլի ամփոփում',
    'Թեստ',
]

const coursesList3 = [
    'Selenium WebDriver - Ներածություն',
    'Selenium WebDriver - Working with Web Elements',
    'Selenium WebDriver - Useful Methods and Properties',
    'Selenium WebDriver - Advanced',
    'Selenium WebDriver - Wait Types - Handling Synchronization Issues',
    'Selenium WebDriver - Data Driven Testing',
    'Automation Framework',
    'Ծանոթացում Junit-ի և TestNG-ի հետ',
    'TestNG - Advanced Features',
    'TestNG - Reporter Logs and HTML Reports',
    'Փուլի ամփոփում',
    'Ավարտական նախագիծ',
    
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'3',
    language: 'Հայերեն',
    price:'43.000',
    courseTime: 'Jan 24, 2019 1:23:00'
}

class ProgrammingBasics extends React.Component {
    componentDidMount() {
        document.title = 'QA / Որակի ապահովման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'qa'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="course-title">QA / Որակի ապահովում</h1>
                                <a href="https://goo.gl/forms/rVkQQFxBPiKFk4wG3" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={qa} alt="QA" />
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
                                        <li><Link to="/">Գլխավոր էջ</Link></li>
                                        <li><Link to="/courses">Դասընթացներ</Link></li>
                                        <li><Link to="/courses/qa">QA / Որակի ապահովման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Որակի ապահովման գործընթացի շնորհիվ ընկերությունները բարելավում են իրենց ծառայությունների կամ ապրանքի որակային մակարդակը։ Այն օգնում է բարձրացնելու վստահությունը տվյալ կազմակերպության նկատմամբ, ինչպես նաև ապահովելու աշխատանքի արդյունավետ և սահուն ընթացքը։</p>
                                </article>
                                <img src={QA} alt="QA"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Manual Testing"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Automated Testing"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="Automated Testing Advanced"
                                        forId="checkbox3"
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

export default ProgrammingBasics