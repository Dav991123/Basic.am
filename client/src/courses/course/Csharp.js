import React from 'react';
import {Link} from "react-router-dom";

import './course.css';
import lilit from './images/instructors/csharp/lilit.png';

import csharp from '../images/courses-icon/csharp.svg';
import CSHARP from './images/page-images/csharp.gif';

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
    'Ծրագրավորել վեբ կայքերի և մոբայլ հավելվածների client-side հարթակը',
    'Մշակել վեբ հավելվածներ նախատեսված տարբեր տեսակի պլատֆորմաների համար',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես C# ծրագրավորող',

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
        fullName: 'Լիլիթ Խաչատրյան',
        title: 'C# / .NET Core ծրագրավորող',
        img: lilit,
        description: ''
    }
]

const coursesDescription1 = 'Ծանոթացում C# ծրագրավորման լեզվին և գործիքներին';
const coursesDescription2 = 'Ծանոթացում օբյեկտ կողմնորոշված ծրագրավորմանը, մեթոդներին, բացառություններին և միջավայրերին';
const coursesDescription3 = 'Ծանոթացում SQL-ին և Entity Framework-ին';
const coursesDescription4 = 'Ծանոթացում .NET Core-ին և GitHub-ի կարգավորումներին';

const coursesList1 = [
    'C# ծրագրի ստեղծումը .NET միջավայրում՝ Visual Studio-ի միջոցով',
    'Պրիմիտիվ տիպեր',
    'Օպերատորներ և օպերատորների կիրառում',
    'Թվարկումներ և հաստատուններ',
    'Միաչափ զանգված և նրա խորը կիրառումը',
    'Երկչափ և աստիճանաձև զանգվածներ',
    'Ղեկավարող կառուցվածքներ և ցիկլեր',
    'Մեթոդներ, մեթոդների գերբեռնում',
    'String տիպի փոփոխական',
    'Ծանոթացում Class-ների և նրանց կառուցվածքի հետ',
    'Կոնստրուկտորներ և new բանալի բառ',
    'this բանալի բառ և նրա կիրառումը',
    'Թեստ',
]

const coursesList2 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում Struct-ների հետ',
    'Static Class-ներ և մեթոդներ',
    'Ժառանգականություն, Ինկապսուլացիա',
    'Պոլիմորֆիզմ, Վիրտուալ մեթոդներ',
    'Ինտերֆեյսներ և աբստրակտ class-ներ',
    'Ընդհանրացումներ (Generics)',
    'Հոսքեր և ֆայլեր',
    'Բացառություններ (բացառիկ իրադարձություններ) և նրանց մշակումը',
    'Օպերատորների գերբեռնում, օբյեկտների պահպանումը ղեկավարվող կույտում',
    'Ատրիբուտներ, լյամբդա արտահայտություններ',
    'Դելեգատներ և event-ներ',
    'Բազմահոսք ծրագրավորում',
    'Թեստ'
]

const coursesList3 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում տվյալների բազայի հետ',
    'Ծանոթացում SQL լեզվին',
    'Ծանոթացում SQL Server-ի հետ',
    'Աղյուսակների ստեղծում և պրակտիկ կիրառում',
    'SQL-ով տվյալների գրանցում և ստացում',
    'Stored procedure-ների ստեղծում և կիրառում',
    'Տվյալների բազայի ստեղծում և կարգավորում',
    'Աղյուսակների միավորում և View-երի ստեղծում',
    'Ծանոթացում Entity Framework-ի հետ',
    'Entity Framework ։ Code First',
    'Entity Framework ։ Database First',
    'Entity Framework ։ Model First',
    'Թեստ'
]

const coursesList4 = [
    'Ծանոթացում .Net Core-ին, GitHub-ի կարգավորումներ',
    'MVC Design Pattern',
    'Controller-ի ստեղծում և կիրառում, գործողություններ',
    'View-ի ստեղծում և կիրառում Controller-ում,Layouts, HTML Helpers և Data Validation',
    'Կարգավորումներ /Configuration/',
    'Dependency Injection',
    'Exception handling and logging',
    'Web API',
    'Middleware',
    'Աշխատանք EF Core-ի հետ',
    'Application publish',
    'NET Standart and popular libraries (NuGet)',
    'Թեստ'
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'4',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 25, 2019 19:30:00'
}

class Csharp extends React.Component{
    componentDidMount() {
        document.title = 'C# (Sharp) ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'csharp'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h1 id="main-course-title">Բազմապլատֆորմ</h1>
                                <h1 id="course-title">C# (Sharp) ծրագրավորում</h1>
                                <a href="https://goo.gl/forms/IwzWbbv9oo" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={csharp} alt="C# (Sharp)"/>
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
                                        <li><Link to={"/courses/csharp"}>C# (Sharp) ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Windows ՕՀ-ի համար հավելվածներ ստեղծելու անփոխարինելի ծրագրավորման լեզու, չնայած նրան, որ այն հայտնի է իր բազմահարթակ կիրառելիությամբ և օժտված է հնարավորությամբ` ստեղծելու ծրագրային ապահովումներ Mac և Linux ՕՀ-ների համար, իսկ .NET-ը լայն տարածում ունի վեբ կայքերի մշակման գործընթացում։ C#-ի օգնությամբ կարող եք ստեղծել XML Web ծառայություններ, հաջախորդների համար նախատեսված ծառայություններ, տվյալների բազաների հավելվածներ և շատ ավելին։</p>
                                </article>
                                <img src={CSHARP} alt="C# Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="C#-ը սկսնակների համար"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="C# / OOP"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="SQL / Entity Framework"
                                        forId="checkbox3"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList4}
                                        Id="checkbox4"
                                        coursesDescription={coursesDescription4}
                                        coursesTitle=".NET Core"
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

export default Csharp