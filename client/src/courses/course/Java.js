import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';
import ruben from './images/instructors/java/ruben.png';
import vahan from './images/instructors/java/vahan.png';

import java from '../images/courses-icon/java.svg';
import JAVA from './images/page-images/java.gif';

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
    'Ստեղծել Java հիմքով բազմաֆունկցիոնալ և բազմապլատֆորմ հավելվածներ',
    'Օգտագործել օբյեկտ կողմոնորշված ծրագրավորման (OOP) հիմնական կոնցեպտները՝ իրական նախագծում',
    'Ծրագրավորել վեբ կայքերի Server-Side (Back-End) հարթակը',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես java ծրագրավորող'
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
        fullName: 'Ռուբեն Մանուկյան',
        title: 'Java EE ծրագրավորող',
        img: ruben,
        description: ''
    },
    {
        fullName: 'Վահան Եղյան',
        title: 'Java EE ծրագրավորող',
        img: vahan,
        description: ''
    },
];

const coursesDescription1 = 'Ծանոթացում Java ծրագրավորման լեզվին և հիմնական սկզբունքներին ';
const coursesDescription2 = 'Ծանոթացում օբյեկտ կողմնորոշված ծրագրավորմանը՝ տվյալների կառուցվածք, ժառանգականություն և Thread-ներ';
const coursesDescription3 = 'Ծանոթացում տվյալների բազաներին և ժառանգման մեթոդներին';
const coursesDescription4 = 'Ծանոթացում Spring framework-ին, կառուցվածքին և ինտեգրմանը';
const coursesDescription5 = 'Ծանոթացում MVC design pattern-ին և սերվիսների ստեղծմանը';

const coursesList1 = [
    'Ծանոթացում Java-ին, պրիմիտիվ փոփոխականներ, բինար համակարգ',
    'Տրամաբանական և պայմանի օպերատորներ',
    'Ցիկլային օպերատորներ(for, while, do while), անվերջ ցիկլ և նրա կիրառությունը',
    'Միաչափ զանգված, կիրառման հնարավորին տարբերակները:for-each ցիկլ',
    'Երկչափ զանգվածներ (Մատրիցա)',
    'Բազմաչափ զանգվածներ, բազմաչափ զանգվածի օրինակներ',
    'String, ծանոթացում String-ի մեթոդների հետ',
    'StringBuilder,StringBuffer StringTokenizer, StringJoiner, String pool',
    'Compiler, JIT, JVM, JDK, Final հաստատուն փոփոխականներ, ծանոթացում Debugger-ի հետ, Immutable և mutable class-ներ',
    'Վերադարձնող, անվերադարձ մեթոդներ',
    'Ռեկուրսիա։ Varargs',
    'File I/O Stream, New I/O, Garbage Collector',
    'Թեստ',
];

const coursesList2 = [
    'Նախորդ փուլի թեստի քննարկում, ալգորիթմերի տեսություն',
    'Data Structure',
    'Ծանոթացում Class-ների և օբյեկտների հետ, Heap-ը և Stack-ը հիշողության մեջ, կոնստրուկտորի հետ ծանոթացում և դրա դերը օբյեկտի ստեղծման մեջ',
    'Ծանրաբեռնված կոնստրուկտորներ, ծանրաբեռնված մեթոդներ, static բլոկներ, static մեթոդներ, static և վիրտուալ մեթոդների տարբերությունը, օբյեկտների զանգված',
    'Ժառանգականություն, կոնստրուկտորի պահվածքը ժառանգականության ժամանակ',
    'Package-ներ, ինտերֆեյս և ֆունկցիոնալ ինտերֆեյս, բազմաժառանգականությունը interface-ում, աբստրակտ մեթոդներ, ինկապսուլացիա:Լյամբդա գրելաձև',
    'Պոլիմորֆիզմ, պոլիմորֆ մեթոդներ, աբստրակցիա, աբստրակտ կլասներ',
    'Java Reflections API, getclass() մեթոդը reflection-ում',
    'Generics, generics-ը կլասսներում և մեթոդներում',
    'JCF, Տվյալների կառուցվածքը Collection-ում',
    'Enum, Thread-ներ և դրանց նշանակությունը ծրագրավորման մեջ: Thread class, Runnable interface',
    'MultiThreading, synchronized մեթոդներ, volatile, transient փոփոխականներ, Thread class, Runnable interface',
    'Թեստ'
];

const coursesList3 = [
    'Ծանոթացում database-երին. SQL, MySQL, JDBC',
    'DDL and DML հրամաններ, SQL joins',
    'One-to-one, one-to-many relationships, foreign keys',
    'Ավտոմատացման գործիքների կառուցում: Ծանոթացում Maven-ին և Gradle-ին',
    'HTTP protocol. Ծնոթացում servlet-ին. Tomcat',
    'ServletContext, ServletConfig.',
    'HttpServletRequest, HttpServletResponse.',
    'Ժառանգման մեթոդները Class-ի և prototype-ի միջոցով',
    'JSP, JSP lifecycle. JSP and Servlet',
    'JSP actions, form processing',
    'Writing filters',
    'Cookies, session',
    'Թեստ'
];

const coursesList4 = [
    'Նախորդ փուլի թեստի քննարկում, Spring Framework-ի կառուցվածքը',
    'Spring Application-ի ստեղծելու տարբերակները` օգտագործելով (Maven և Gradle) գործիքները',
    'Dependency Injection design pattern և իր տեսակները (մաս 1-ին )',
    'DI կապը Spring Framework-ի հետ (մաս 2-րդ)',
    'Ծանոթացում Bean-ի lifecycle-ին, BeanPostProcessor ինտերֆեյս',
    'Bean Scope, @Profile ,@Contitional annotations',
    'Bean-ի runtime ռեգիստրացիան, runtime տվյալների ինտեգրում',
    'Aspect-Oriented Programming (AOP) (մաս 1-ին)',
    'Aspect-Oriented Programming (AOP) (մաս 2-րդ)',
    'Spring Expression Language (SPEL)',
    'Unit Test-երի ինտեգրումը Spring , Mockito framework',
    'Integration test-երի կազմակերպումը Spring-ում',
    'Թեստ'
];

const coursesList5 = [
    'Նախորդ փուլի թեստի քննարկում, ծանոթացում MVC design pattern-ին',
    'Spring web application-ի ստեղծման տարբերակները, Spring MVC application-ի կառուցվածքի ուսումնասիրում (մաս 1-ին)',
    'Spring MVC application-ի կառուցվածքի ուսումնասիրում (մաս 2-րդ )',
    'REST- ի հիմնական հասկացությունները',
    'REST-ի ինտեգրումը Spring',
    'JSON և XML տվյալների փոխանակում, RequestEntity և ResponseEntity',
    'JDBC-ի ինտեգրումը Spring , JdbcTemplate',
    'Hibernate-ի ինտեգրումը Spring (մաս 1-ին)',
    'Hibernate-ի ինտեգրումը Spring (մաս 2-րդ)',
    'Spring Data JPA (մաս 1-ին)',
    'Spring Data JPA (մաս 2-րդ)',
    'RESTful Web սերվիսի ստեղծումը Spring-ի միջոցով',
    'Թեստ'
];

const courseInformation = {
    status:'Սկսնակ',
    duration:'5',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 17, 2019 17:30:00'
}

class Java extends React.Component {
    componentDidMount() {
        document.title = 'Java ծրագրավորման դասընթաց | Basic IT Center';
        document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);
        document.querySelector('meta[property="og:title"]').setAttribute("content", "Java ծրագրավորման դասընթաց");
        document.querySelector('meta[property="og:image"]').setAttribute("content", "../images/social/java.png");
    }
    render() {
        return (
            <main id={'java'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Բազմապլատֆորմ</h5>
                                <h1 id="course-title">Java ծրագրավորում</h1>
                                <a href="https://goo.gl/forms/N5npFHFL2Y" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={java} alt="Java"/>
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
                                        <li><Link to={"/courses/java"}>Java ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Java ծրագրավորման լեզուն առանձնանում է իր ապահովությամբ, հուսալիությամբ, կիրառվում է տարբեր հարթակներում, ինչպես նաև համարվում է ամենաբարձր վարձատրվող մասնագիտությունը ծրագրավորման ոլորտում։ Հիմնականում կիրառվում է վեբ կայքերի, խաղերի և Android ՕՀ-ի համար հավելվածների ստեղծման ընթացքում։</p>
                                </article>
                                <img src={JAVA} alt="Java Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Java Core"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Java OOP"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="Java Enterprise Edition"
                                        forId="checkbox3"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList4}
                                        Id="checkbox4"
                                        coursesDescription={coursesDescription4}
                                        coursesTitle="Spring Framework / Level 1"
                                        forId="checkbox4"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList5}
                                        Id="checkbox5"
                                        coursesDescription={coursesDescription5}
                                        coursesTitle="Spring Framework / Level 2"
                                        forId="checkbox5"
                                        digitCounterClass="digit counter"
                                    />
                                </ul>
                                <Conditions Condition={conditions}/>
                            </section>
                            <aside>
                                <section id="interconnected-courses">
                                    <p>Փոխկապակցված դասընթացներ</p>
                                    <ul>
                                        <li><Link to={"./android"}>Android ծրագրավորում</Link></li>
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

export default Java