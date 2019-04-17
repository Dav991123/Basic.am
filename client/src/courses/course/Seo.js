import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';
import tatev from './images/instructors/seo/tatev.png';

import seo from '../images/courses-icon/seo.svg';
import SearchEngineOptimization from './images/page-images/seo.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'Տիրապետում են համակարգչային բազային գիտելիքների',
    'Ունեն վերլուծական մտածողություն',
    'Ունեն պատկերացում HTML / CSS- ի մասին'
]

const obscenities = [
    'Իրականացնել վեբ-կայքի աուդիտ',
    'ՈՒնենալ ամբողջական պատկերացում Google-ի ուղեցույցների համաձայն կառուցված կայքի մասին',
    'Ճիշտ կազմակերպել և իրականացնել SEO գործընթացը',
    'Կատարել վերլուծություն Google-ի գործիքների միջոցով'
]

const conditions = [
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 90 րոպե տևողությամբ։',
    'Դասընթացների ընթացքում անընդմեջ իրականացվում են պրակտիկ բնույթի առաջադրանքներ:',
    'Գործում են նաև անհատական հիմունքներով դասընթացներ, որի արժեքին և այլ մանրամասներին կարող եք ծանոթանալ կապվելով մեզ հետ։'
]

const instructors = [
    {
        fullName: 'Տաթև Հակոբյան',
        title: 'SEO մասնագետ \n / TeamViewer /',
        img: tatev,
        description: ''
    }
]

const coursesDescription1 = 'Ծանոթացում SEO-ին, Google Analytics-ին և կոնտենտին';
const coursesDescription2 = 'Ծանոթացում Google Adwords-ին, արդյունքների մոնիտորինգին և շուկայի վերլուծությանը';

const coursesList1 = [
    'Ի՞նչ է SEO-ն',
    'Բանալի բառերի ընտրություն',
    'Կայքի աուդիտ',
    'On-page օպտիմալացում - HTML տարրեր',
    'On-page օպտիմալացում - այլ բաղադրիչներ',
    'Կոնտենտ / սոցիալական մեդիան /բլոգ',
    'Off page SEO',
    'Google Analytics',
    'Search Console',
    'Որակի ուղեցույցներ, սպամի կանխարգելում',
    'Google-ի ալգորիթմի փոփոխության պատմություն',
    'Նկարների և վիդեոների օպտիմալացում',
    'Փուլի ամփոփում',
]

const coursesList2 = [
    'Լոկալ SEO',
    'Mobile SEO',
    'E-commerce կայքերի օպտիմալացում',
    'Link Building (լավագույն փորձը)',
    'Google Adwords / Search Network',
    'Display Search / Remarketing',
    'Կոնվերսիայի օպտիմալացում (CRO)',
    'Արդյունքների մոնիտորինգ / KPI',
    'Google Tag Manager',
    'Միջազգային և բազմալեզու SEO',
    'Google knowledge graph',
    'Շուկայի վերլուծություն/Ավտոմատացում',
    'Փուլի ամփոփում',
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'2',
    language: 'Հայերեն',
    price:'45.000',
    courseTime: 'Mar 24, 2019 20:00:00'
}

class SEO extends React.Component {
    componentDidMount() {
        document.title = 'SEO դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'seo'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="course-title">SEO / Որոնողական համակարգերի օպտիմալացում</h1>
                                <a href="https://goo.gl/forms/UYjiIpFS6GnIcM6o1" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={seo} alt="SEO / Որոնողական համակարգերի օպտիմալացում" />
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
                                        <li><Link to={"/courses/seo"}>SEO / Որոնողական համակարգերի օպտիմալացման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>SEO-ն (որոնողական համակարգերի օպտիմալացումը) ուղղված է բարձրացնելու կայքի տեսանելիությունը որոնողական համակարգերում՝ ստեղծելով ճիշտ կառուցվածք և բովանդակություն: Այն հանդիսանում է հզոր մարքեթինգային գործիք այցելություններն ավելացնելու համար և իր արդյունավետության շնորհիվ հանդիսանում է կայքի առաջխացման անբաժանելի մասը:</p>
                                </article>
                                <img src={SearchEngineOptimization} alt="SEO"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Basic"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Advanced"
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

export default SEO