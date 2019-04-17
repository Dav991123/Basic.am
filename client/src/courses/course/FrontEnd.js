import React from 'react';
import {Link} from "react-router-dom";

import './course.css';
import davit1 from './images/instructors/web/davit.png';
import davit2 from './images/instructors/web/react/davit.png';

import html from '../images/courses-icon/html.svg';
import css from '../images/courses-icon/css.svg';
import js from '../images/courses-icon/js.svg';
import FRONT_END from './images/page-images/front-end.gif';

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
    'Ստեղծել բազմաֆունկցիոնալ վեբ կայքեր',
    'Մշակել վեբ հավելվածներ նախատեսված տարբեր տեսակի պլատֆորմաների համար',
    'Տարբերակել JavaScript-ի framework-ների առավելությունները',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես front-end ծրագրավորող'
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
        title: 'Front-End ծրագրավորող',
        img: davit1,
        description: ''
    },
    {
        fullName: 'Դավիթ Սարգսյան',
        title: 'JavaScript/React JS ծրագրավորող',
        img: davit2,
        description: ''
    },
];

const coursesDescription1 = 'Ծանոթացում վեբ ծրագրավորման հիմունքներին, WWW-ին, սերվերներին և միջավայրերին որոնք նախատեսված են ծրագրավորման համար։'
const coursesDescription2 = 'Ծանոթացում JavaScript ծրագրավորման լեզվին՝ համապատասխան EcmaScript 9 ստանդարտի '
const coursesDescription3 = 'Ծանոթացում օբյեկտ կողմնորոշված ծրագրավորմանը՝ ֆունկցիաներ, կլասսներ, ժառանգականություն'

const coursesList1 = [
    'Ի՞նչ է ծրագրավորումը, ծանոթացում համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքները HTML ֆունդամենտալ թեգեր, սիմվոլներ, ցուցակներ',
    'Աղյուսակներ, iframe թեգ, մուլտիմեդիա',
    'head թեգում գործածվող թեգեր, վեբ էջի հիմնական կառուցվածք',
    'HTML5 թեգեր և ատրիբուտներ, ինֆորմացիայի մուտքագրման համակարգ',
    'Ծանոթացում CSS-ի հետ, selector-ներ և կոմբինատորներ, տառերի և տեքստերի հետ աշխատանք',
    'Background հատկանիշ, չափսերի հատկանիշներ',
    'Box մոդել, Border, Outline, Padding, Margin, Display հատկանիշ',
    'Pseudo էլեմենտներ, Էջում էլեմենտների դասավորվածության հետ աշխատանք',
    'CSS3 ստանդարտներ, User Agent, Filter հատկանիշ, Responsive դիզայն, անիմացիաներ',
    'Փոփոխականները CSS-ում, Flexbox, Grid',
    'Ծանոթացում CSS-ի preprocessor-ներին՝ Sass, Less',
    'Փուլի ամփոփում',
    'Թեստ',
]

const coursesList2 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում JavaScript-ի հետ, փոփոխականներ, օպերատորներ',
    'Տրամաբանական և պայմանի օպերատորներ',
    'Ցիկլային օպերատորներ, ալգորիթմների մշակում',
    'Ֆունկցիաներ',
    'String, Number և Boolean տվյալների տիպեր, դրանց մեթոդները և հատկանիշները',
    'Array, Object տիպի տվյալներ, դրանց մեթոդները և հատկանիշները, Undefined տիպի տվյալներ, Null տիպի օբյեկտներ',
    'Object-ների կիրառումը գործնականում',
    'Math և Date օբյեկտներ, Try/Catch, ռեգուլյար արտահայտություններ',
    'Document Object Model, HTML5 event-ներ',
    'Browser Object Model, ռեկուրսիվ ֆունկցիաներ',
    'Ծանոթացում ReactJS-ի և Angular 5-ի հետ',
    'Փուլի ամփոփում',
    'Թեստ'
]

const coursesList3 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում JavaScript OOP-ին',
    'Ներքին և արտաքին ինտերֆեյս',
    'Getter և Setter հատուկ ֆունկցիաներ',
    'Ֆունկցիոնալ ժառանգականություն',
    'Ծանոթացում JavaScript-ում օբյեկտի prototype-ին',
    'Օբյեկտների ստեղծումը Function կոնստրուկտորի միջոցով',
    'Class-ների յուրահատկությունը JavaScript-ում',
    'Ժառանգման մեթոդները Class-ի և prototype-ի միջոցով',
    'Class-ների ժառանգականություն և ծնողական կոնստրուկտորներ',
    'Ժառանգման ստուգման մեթոդիկա. instanceOf',
    'Սխալները և բացառությունները JavaScript-ում, ժառանգականություն Error օբյեկտից',
    'Փուլի ամփոփում',
    'Թեստ'
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'3',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 15, 2019 15:00:00'
}

class FrontEnd extends React.Component{
    componentDidMount() {
        document.title = 'Front-End ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'front-end'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Վեբ ծրագրավորում</h5>
                                <h1 id="course-title">Front-End ծրագրավորում</h1>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1enB8V3SeEQ5T5GIwtMXTfCbHOwmFe6ychengWX_cIa80nw/viewform?c=0&w=1" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={html} alt="HTML5" />
                                <img src={css} alt="CSS3"/>
                                <img src={js} alt="JavaScript"/>
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
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Front-End ծրագրավորողը ապահովում է կայքէջի արտաքին տեսքը, որի մշակման գործընթացում օգտագործվում է HTML և CSS, իսկ JavaScript-ը, որը ներկայումս համարվում է ամենապահանջված ծրագրավորման միջավայրը աշխարհում, ապահովում է կոնտենտի ֆունկցիոնալությունը և  դինամիկությունը ապահովելու համար և ոչ միայն։</p>
                                </article>
                                <img src={FRONT_END} alt="Web Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="HTML5/CSS3"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="JavaScript/ES9"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="JavaScript OOP"
                                        forId="checkbox3"
                                        digitCounterClass="digit counter"
                                    />
                                </ul>
                                <Conditions Condition={conditions}/>
                            </section>
                            <aside>
                                <section id="interconnected-courses">
                                    <p>Փոխկապակցված դասընթացներ</p>
                                    <ul>
                                        <li><Link to={`./react`}>ReactJS ծրագրավորում</Link></li>
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