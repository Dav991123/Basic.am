import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';
import stepan from './images/instructors/web/stepan.png';

import programming_basics from '../images/courses-icon/programming_basics.svg';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'Տիրապետում են համակարգչային բազային գիտելիքների',
    'ՈՒնեն սովորելու մեծ ձգտում',
    'Կարող են օրական կտրվածքով տրամադրել առնվազն 2 ժամ՝ տնային հանձնարարություններին'
]

const obscenities = [
    'Ունենալ պատկերացում ծրագրավորման լեզուների մասին',
    'Կողմնորոշվել ծրագրավորման լեզվի ընտրության հարցում'
]

const conditions = [
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 2 ժամ տևողությամբ։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ:',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։'
]

const instructors = [
    {
        fullName: 'Ստեփան Նիկողոսյան',
        title: 'Node.js ծրագրավորող',
        img: stepan,
        description: ''
    }
]

const coursesDescription1 = 'Ծանոթացում ծրագրավորման լեզուներին և կիրառման միջավայրերին';

const coursesList1 = [
    'Ծանոթացում ծրագրավորման լեզուներին',
    'Պրիմիտիվ տիպերը, փոփոխականները տարբեր լեզուներում, մեքենայական կոդ',
    'Տրամաբանական և պայմանի օպերատորներ',
    'Ցիկլային օպերատորներ, անվերջ ցիկլ և նրա կիրառությունը',
    'Միաչափ զանգված, կիրառման հնարավորին տարբերակները',
    'Բազմաչափ զանգվածներ, բազմաչափ զանգվածի օրինակներ',
    'Compiler, Interpreter, ծանոթացում Debugger-ին',
    'Վերադարձնող, անվերադարձ, նույնանուն և ռեկուրսիվ ֆունկցիաներ',
    'Ծանոթացում stack և heap հիշողության տիրույթներին',
    'Տարբեր գրադարանների կիրառման հնարավորին տարբերակները',
    'Ծանոթացում օբյեկտային կողմնորոշված ծրագրավորմանը',
    'Փուլի ամփոփում',
    
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'1',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Mar 1, 2019 15:30:00'
}

class ProgrammingBasics extends React.Component {
    componentDidMount() {
        document.title = 'Ծրագրավորման հիմունքների դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'programming_basics'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="course-title">Ծրագրավորման հիմունքներ</h1>
                                <a href="https://goo.gl/forms/l9T8Fgi5ZvBbDLYf2" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={programming_basics} alt="Ծրագրավորման հիմունքներ" />
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
                                        <li><Link to={"/courses/programming-basics"}>Ծրագրավորման հիմունքների դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Դասընթացը իր մեջ ներառում է ծրագրավորման միջավայրերի ընդհանուր գաղափարը և ընձեռում է հնարավորություն հետագայում կողմնորոշվելու ծրագրավորման լեզվի ընտրության հարցում։</p>
                                </article>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Ծրագրավորման հիմունքներ"
                                        forId="checkbox1"
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