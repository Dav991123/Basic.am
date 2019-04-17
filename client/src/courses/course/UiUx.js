import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';

import ui_ux from '../images/courses-icon/ui_ux.svg';
import UI_UX from './images/page-images/ui-ux.gif';
import jan from './images/instructors/ui-ux/jan.png';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'ցանկանում են իրականություն դարձնել ստեղծագործ մտքի թռիչքը',
    'ունեն ընդհանուր գաղափար վեբ դիզայնի վերաբերյալ',
    'պատրաստ են ընդունել դիզայնի ոլորտի յուրաքանչյուր մարտահրավեր ☺',
    'կարող են օրական կտրվածքով տրամադրել առնվազն 2-3 ժամ՝ տնային հանձնարարություններին'
]

const obscenities = [
    'նախագծել կայքերի և հավելվածների կառուցվածքը',
    'հմտորեն աշխատել Adobe XD ծրագրով',
    'կիրառել Ձեր գիտելիքները իրական նախագծում',
    'աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես UI/UX դիզայներ'
]

const conditions = [
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 90 րոպե տևողությամբ։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ:',
    'Դասընթացների ամբողջական փուլերի ավարտից հետո, շրջանավարտներին տրվում է հավաստագիր։',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։'
]

const instructors = [
    {
        fullName: 'Ժան Արևշատյան',
        title: 'UI/UX Դիզայներ',
        img: jan,
        description: 'UI/UX դիզայնի մասնագետ՝ համապատասխան աշխատանքային փորձով UI/UX, վեբ և գրաֆիկ դիզայնի ոլորտում: Վեբ կայքերի և բջջային հավելվածների դիզայնի կառուցում՝ բոլոր դիզայներական ծրագրերի տիրապետումով։'
    }
]

const coursesDescription1 = 'Ընդհանուր ծանոթացում վեբ, UI/UX, գրաֆիկ դիզայնին և նրանց տարբերություններին';
const coursesDescription2 = 'Ծանոթացում wireframe-ին, աշխատանք Adobe XD-ով';

const coursesList1 = [
    'Ի՞նչ է դիզայնը։ Ծանոթացում դիզայնի սկզբունքներին',
    'Նախագծման իտերատիվ ընթացքի ընդհանուր գաղափարները։ Վիզուալ նախագծում',
    'Ինտերֆեյս, ի՞նչպես ընտրել ճիշտ գործիքներ։',
    'Աշխատանք գրաֆիկական մոդելներով։ Ծանոթացում ֆայլերի տիպերին։',
    'Գունային մոդելների սկզբունքները դիզայնում։ Ինչպե՞ս ընտրել համարժեք գույներ։',
    'Վիզուալ դիզայնի հիմունքեր։ Աշխատանք համապատսախան գործիքներով ',
    'Ծանոթացում Adobe Photoshop/Illustrator գործիքներում առկա դաշտերին։',
    'Պատկերացում Layer-ների(շերտեր) դասավորվածության մասին։',
    'Դիզայնի ճշգրիտ պլանավորում՝ գրիդների միջոցով։',
    'Տիպոգրաֆիայի հիմնական գաղափարները։ Icon-ի ստեղծումը և օգտագործումը համապատասխան միջավայրում:',
    'Ֆոնտերի ընտրություն և տեքստային մասի ներկայացում:',
    'Ամփոփում',
]

const coursesList2 = [
    'Ի՞նչ է user-centred դիզայնը։ UX-ի հիմնական հասկացությունները։',
    'Երկրաչափական մարմինների կառուցում։',
    'Վեբ կայքի պլանավորում և նախագծում։',
    'Ինտերակտիվ վեբ դիզայն։',
    'UX mockup-ի նախատիպավորում (Header,Section,Sidebar,Footer)',
    'Պատկերացում ճիշտ wireframe-ի կառուցման վերաբերյալ։ ',
    'User Experience-ի գնահատում և թեստավորում։',
    'Ծանոթացում Adоbe XD-ին և աշխատանք տվյալ գործիքով:',
    'Գործնական առաջադրանք՝ wireframe-ի ստեղծում:',
    'Ընդհանուր ծանոթացում թեստավորման գործիքներին և մեթոդներին, invision:',
    'Վերջնական նախագծի նախատիպավորում և պլանավորում:',
    'Ավարտական նախագծի քննարկում, bug-երի ֆիքսում:',
    'Ավարտական նախագիծ',
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'2',
    language: 'Հայերեն',
    price:'45.000',
    courseTime: 'Feb 6, 2019 19:30:00'
}

class ProgrammingBasics extends React.Component {
    componentDidMount() {
        document.title = 'UI/UX դիզայնի դասընթացներ | Basic IT Center';
    }
    render() {
        return (
            <main id={'ui_ux'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="main-course-title">Բազմապլատֆորմ</h1>
                                <h1 id="course-title">UI/UX դիզայն</h1>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScGMDiSuO6CtnuBdJyAZD3dTIZpIVgKTziqiXDhNDQEB69d6A/viewform?embedded=true" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={ui_ux} alt="UI/UX դիզայն" />
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
                                        <li><Link to={"/"}>Գլխավոր էջ</Link></li>
                                        <li><Link to={"/courses"}>Դասընթացներ</Link></li>
                                        <li><Link to={"/courses/ui-ux"}>UI/UX դիզայնի դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Դիզայնի կիրառման հարթակները բազմազան են՝ սկսած արդյունաբերությունից, մինչև տեխնոլոգիական ոլորտ։ UI/UX-ի շնորհիվ կարողանում ենք իրականություն դարձնել կայքի արտաքին տեսքի հետ առնչվող մեր անհավանական գաղափարները՝ ավելի դյուրին դարձնելով կայքի օգտագործման ընթացքը, ինչպես նաև ապահովելով երկխոսություն` ծրագրավորողի և դիզայների միջև։</p>
                                </article>
                                <img src={UI_UX} alt="UI/UX"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Դիզայնի ներածություն"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="UI/UX / Adobe XD"
                                        forId="checkbox2"
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