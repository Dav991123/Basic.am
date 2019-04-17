import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';

import python from '../images/courses-icon/python.svg';
import PYTHON from './images/page-images/python.gif';

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
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես Python ծրագրավորող'
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
        fullName: 'Վոլոդյա Գալստյան',
        title: 'Python ծրագրավորող',
        img: 'https://it-center.am/images/tutors/ios/valodya.png',
        description: 'Front-End ծրագրավորողը ապահովում է կայքէջի արտաքին տեսքը, որի մշակման գործընթացում օգտագործվում է HTML և CSS, իսկ JavaScript-ը, որը ներկայումս համարվում է ամենապահանջված ծրագրավորման միջավայրը աշխարհում, ինչպես նաև այն նախատեսված է կոնտենտի դինամիկությունը ապահովելու համար և ոչ միայն։'
    }
]

const coursesDescription1 = 'Ծանոթացում վեբ ծրագրավորման հիմունքներին, WWW-ին, սերվերներին և միջավայրերին որոնք նախատեսված են ծրագրավորման համար։';
const coursesDescription2 = 'Ծանոթացում վեբ ծրագրավորման հիմունքներին, WWW-ին, սերվերներին և միջավայրերին որոնք նախատեսված են ծրագրավորման համար։';
const coursesDescription3 = 'Ծանոթացում վեբ ծրագրավորման հիմունքներին, WWW-ին, սերվերներին և միջավայրերին որոնք նախատեսված են ծրագրավորման համար։';

const coursesList1 = [
    'Why Programming and Setup / Jupyter Notebook, Notepad++, “Hello World!”, Numbers /',
    'Variables, expressions, and statements / Types, Operators, Modulus /',
    'Conditional execution / Boolean, Logical operators, Try and except /',
    'Functions / Function calls, Random, Math, Definitions, Parameters /',
    'Iteration / While loops, Infinite loops, Break, Continue, For loops /',
    'String / Slices, Comparison, Methods, Parsing /',
    'Files / Opening, Files and lines, Writing, Try, except and open /',
    'List / Operations, Slices, Methods /',
    'Dictionary / Dict. as counters, Looping, Text parsing /',
    'Tuples / Comparing, Tuples as dict. keys /',
    'Regular expressions / Matching, Extracting /',
    'Networked programs / HTTP, Simple web browser, Parsing HTML, HTML and Regular expressions /',
    'Test',
]

const coursesList2 = [
    'Classes (Basics) / Methods, Instances, Initializer, Collaborating Classes, Polymorphism /',
    'Packages / Imports from sys.path, Sub-packaging, Relative imports /',
    'Closures and Decorators / Function Factory, Nonlocal and Global, Decorators/',
    'Classes (Advanced) / Inheritance, Dunder methods, Class Attributes, Static Methods, Class Methods /',
    'Exceptions and Errors / Exception Hierarchy, Defining Exceptions, TraceBack, Assertion /',
    'Context Managers / Defining, Importing contextlib /',
    'SQLite (database) / Creating Tables, Accessing and Filtering / /',
    'Iterables and Iteration / Map, Filter, Zip, Functools.reduce, Generators /',
    'Concurrency (parallelism) / Multi-Threading, Multi-Processing, Multi-Processing /',
    'Unit-testing / Assertions, Test driven development /',
    'Virtual Environments / Separation of Packages, Creating requirements /',
    'Version Control (GIT) / Setup, Branching and Fork, Merge, Pull and Push /',
    'Test'
]

const coursesList3 = [
    'Overview of Front-End / HTML, CSS, Bootstrap /',
    'JavaScript / Document Object Model, JQuery /',
    'Creating Django Project / Virtual Environment, Structure of Django files, Creating first App /',
    'Models / Migrating, Model API /',
    'Templates and Static Files / Views, Template Engine, Static Files Setup /',
    'URLs and Forms / URLs API, Reusable Templates, Reusable Forms /',
    'User Authentication / Sign-up, Log-in, Custom template tags, Password rest and change, Filters /',
    'Unit-Testing / Testing views, Testing views, Testing Sign-up /',
    'Protecting Views / Managing Redirects, Login required test, Accessing Authenticated User /',
    'Querysets / Migrations, Account View, Markdown, Humanize /',
    'Advanced Topics / Class Based Views (CBV), Detail and List Views, CRUD views, Pagination /',
    'Deployment / Setting Github, Deploying on Heroku or Python Everywhere /',
    'Test'
];

const courseInformation = {
    status:'Սկսնակ',
    duration:'3',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Jan 30, 2019 1:23:00'
}

class Python extends React.Component {
    componentDidMount() {
        document.title = 'Python ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'python'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="course-title">Python ծրագրավորում</h1>
                                <a href="https://goo.gl/forms/hbjgjxLvLwWO0yr93" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={python} alt="Python"/>
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
                                        <li><Link to={"/"}>Գլխավոր էջ</Link></li>
                                        <li><Link to={"/courses"}>Դասընթացներ</Link></li>
                                        <li><Link to={"/courses/python"}>Python ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Python-ը կայուն և բավականին տարածված լեզու է։ Այն միանգամայն ակտուալ է Back-End ծրագրավորման, տվյալների վերլուծության, արհեստական բանականության, ինչպես նաև համակարգչային գիտության միջավայրերում։ Python-ը նաև օգտագործվում է ապագայում ստեղծվելիք ծրագրերի համար նախատիպեր ստեղծելու համար։</p>
                                </article>
                                <img src={PYTHON} alt="Python Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Python Basics"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Advanced Python (OOP)"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="Django Framework"
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

export default Python