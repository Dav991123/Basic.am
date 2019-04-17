import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';
import lusine from './images/instructors/pm/lusine.png';

import project_management from '../images/courses-icon/project_management.svg';
import PROJECT_MANAGEMENT from './images/page-images/project-management.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'ունեն անգլերենի սկսնակ, կամ միջին մակարդակի իմացություն',
    'ցանկանում են ձեռք բերել նախագծի կառավարման գիտելիքներ և հմտություններ',
    'աշխատում են որպես նախագծի ղեկավար, սակայն ցանկանում են վերապատրաստում անցնել ՏՏ ոլորտում ',
    'ունեն սովորելու մեծ ձգտում',
]

const obscenities = [
    'կիրառել նախագծի կառավարման հմտությունները ՏՏ ոլորտում',
    'տիրապետել նախագծի կառավարման գործիքներին և սկզբունքներին',
    'կատարել նախագծի մոնիթորինգ և ռիսկերի կառավարում',
    'տարբերակել Scrum, XP, Kanban և Lean տեխնոլոգիաները',
    'աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես նախագծի ղեկավար (Project Manager)',
]

const conditions = [
    'Դասընթացները անցկացվում են շաբաթական 3 օր հաճախականությամբ, 2 ժամ տևողությամբ։',
    'Դասընթացների ընթացքում իրականացվում են տեսական և գործնական բնույթի առաջադրանքներ:',
    'Դասընթացների ամբողջական փուլերի ավարտից հետո, շրջանավարտներին տրվում է հավաստագիր։',
]

const instructors = [
    {
        fullName: 'Լուսինե Աբրահամյան',
        title: 'IT Project Manager / Scrum Master Digitain',
        img: lusine,
        description: 'Ավելի քան 10 տարվա մասնագիտական փորձ ՏՏ նախագծերի կառավարման ոլորտում և 5 տարվա դասընթացավարի փորձ։ Ստացել Է մագիստրոսի կոչում բիզնեսի կառավարման ոլորտում Շվեդիայի Բլեքինջի Տեխնոլոգիաների Ինստիտուտում (MBA), ինչպես նաև ունի ITIL սերտիֆիկացում։ '
    }
]

const coursesDescription1 = 'Ծանոթացում նախագծի կառավարման հիմնական սկզբունքներին և Scrum մեթոդոլոգիային';

const coursesList1 = [
'Նախագծի սահմանում, դասակարգում և կառավարում',
'Նախագծի կենսաշրջանառություն, գործընթացներ, գործիքներ և մասնակիցներ',
'Բյուջե, նախագծի ռիսկեր, ռիսկերի կառավորում',
'Նախագծի մոնիթորինգ',
'Ճկուն մեթոդներ (ընդհանուր ինֆորմացիա, մանիֆեստի սկզբունքները, Scrum, XP, Kanban և Lean տեխնոլոգիաների հակիրճ դիտարկում)',
'Ճկուն և Կասկադային մեթոդների համեմատություն',
'Scrum–ի սահմանում, թիմեր ու դերեր',
'Scrum–ի արտիֆակտները',
'Scrum–ի միջոցառումները',
'Scrum–ի արժեքներն ու առավելությունները',
'Jira–ի ներկայացումը որպես ՏՏ նախագծերի կառավարման ամենակիրառվող գործիք',
'Ավարտական թեստ'
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'1',
    language: 'Հայերեն',
    price:'65.000',
    courseTime: 'Mar 1, 2019 20:00:00'
}

class ProjectManagement extends React.Component {
    componentDidMount() {
        document.title = 'Նախագծի կառավարման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'project_management'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Project Management</h5>
                                <h1 id="course-title">Նախագծի կառավարում</h1>
                                <a href="https://goo.gl/forms/kzMCw4gypB3KSRfj1" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={project_management} alt="Նախագծի կառավարում / PMP" />
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
                                        <li><Link to={"/courses/project-management"}>Նախագծի կառավարման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Նախագծի կառավարումը կարևոր նշանակություն ունի աշխատանքային պրոցեսի ճիշտ կազմակերպման գործում, ուստի օրեցօր ավելանում է նախագծի կառավարման դերն ու նշանակությունը աշխատաշուկայում։<br/>Ժամանակակից կազմակերպությունները աստիճանաբար ներդնում են նաև Agile սկզբունքը, որը լայնորեն տարածված է գրեթե բոլոր ոլորտներում:</p>
                                </article>
                                <img src={PROJECT_MANAGEMENT} alt="Project Management"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Agile Project Management"
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

export default ProjectManagement