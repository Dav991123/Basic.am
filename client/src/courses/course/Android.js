import React from 'react';
import {Link} from "react-router-dom";

import './course.css';
import vilhelm from './images/instructors/android/vilhelm.png';
import tatevik from './images/instructors/android/tatevik.png';
import suren from './images/instructors/android/suren.png';

import android from '../images/courses-icon/android.svg';
import ANDROID from './images/page-images/android.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'Տիրապետում են Java Core-ին',
    'Օժտված են ալգորիթմիկ մտածելակերպով',
    'Ցանկանում են տիրապետել ամենաբարձր վարձատրվող մասնագիտություններից մեկին',
    'Կարող են օրական կտրվածքով տրամադրել առնվազն 2 ժամ՝ տնային հանձնարարություններին',
    'Պատրաստ են ապրել ծրագրավորողի կյանքով ☺'
]

const obscenities = [
    'Ստեղծել բազմաֆունկցիոնալ հավելվածներ Android ՕՀ-ի համար',
    'Օգտագործել օբյեկտ կողմոնորշված ծրագրավորման (OOP) հիմնական կոնցեպտները՝ իրական նախագծում',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես Android ծրագրավորող',
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
        fullName: 'Վիլհելմ Մուրադյան',
        title: 'Android ծրագրավորող',
        img: vilhelm,
        description: ' '
    },
    {
        fullName: 'Տաթևիկ Հովսեփյան',
        title: 'Android ծրագրավորող',
        img: tatevik,
        description: ' '
    },
    {
        fullName: 'Սուրեն Սարդարյան',
        title: 'Android ծրագրավորող',
        img: suren,
        description: ' '
    },
];

const coursesDescription1 = 'Ծանոթացում Անդրոիդ ՕՀ-ին և տարբերակներին ';
const coursesDescription2 = 'Ծանոթացում տվյալների բազաներին, GIT-ին և սերվիսի կենդանի ցիկլին ';
const coursesDescription3 = 'Ծանոթացում Retrofit 2-ին, Realm-ին և  RxJava-ին ';

const coursesList1 = [
    'Ծանոթացում Android օպերացիոն համակարգին, Android versions',
    'XML–ի նշումներից անցում View օբյեկտներին, նույնականացման ռեսուրսը:OnClickListeners',
    'Ծանոթացում առկա Layout-ների հետ, Անիմացիաներ',
    'Ծանոթացում Toast-ի հետ: Logs: ListView',
    'Ծանոթացում Android Activity-ի ների հետ, Activity-ի կենդանի ցիկլը: Direct intents',
    'Indirect intents',
    'Put and get extras from an intent',
    'StartActivity For Result:RadioButton,CheckBox',
    'Dialogs',
    'Fragment-ը Android-ում և դրա կարևորությունը',
    'Fragment-ի կենդանի ցիկլը',
    'Menu-ի ստեղծում',
    'Փուլի ամփոփում / Նախագծի հանձնում',
];

const coursesList2 = [
    'SQLite տվյալների բազա, տվյալների բազայի ստեղծում',
    'SQLite-ի հարցումները (query), տվյալների ուղարկում, թարմացում և ջնջում',
    'Android-ի և SQLite-ի կապը, SQLiteOpenHelper, ContentValues class֊ներ, Cursor class',
    'Ծանոթացում RecyclerView-ին',
    'Adapters',
    'Action Bar և Navigation Bar',
    'AsyncTask։Thread-ի և AsyncTask-ի տարբերությունը',
    'Ծանոթացում Handler-ին',
    'Notifications',
    'Service։ Service-ի կենդանի ցիկլը',
    'BroadcastReceiver, BroadcastReceiver-ը Activity-ում',
    'Ծանոթացում Git-ի հետ',
    'Փուլի ամփոփում / Նախագծի հանձնում'
];

const coursesList3 = [
    'Ծանոթացում Retrofit 2-ին',
    'Retrofit 2 Request /մաս 1/',
    'Retrofit 2 Request /մաս 2/',
    'Ծանոթացում Realm-ին',
    'Realm /մաս 1 /',
    'Realm /մաս 2 /',
    'Ծանոթացում RxJava-ին',
    'RxJava /մաս 1 /',
    'RxJava /մաս 2 /',
    'Ծանթացում Dagger 2-ին',
    'Dagger 2 /մաս 1 /',
    'Dagger 2 /մաս 2 /',
    'Փուլի ամփոփում / Նախագծի հանձնում'
];

const courseInformation = {
    status:'Սկսնակ',
    duration:'3',
    language: 'Հայերեն',
    price:'40.000',
    courseTime: 'Feb 11, 2019 1:00:00'
}

class Android extends React.Component{
    componentDidMount() {
        document.title = 'Android ծրագրավորման դասընթաց | Basic IT Center';
    }
    render() {
        return (
            <main id={'android'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Մոբայլ ծրագրավորում</h5>
                                <h1 id="course-title">Android ծրագրավորում</h1>
                                <a href="https://goo.gl/forms/chJHvx7XWY" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={android} alt="Android"/>
                            </section>
                        </section>
                    </section>
                    <Information items={courseInformation} />
                </section>
                <section className="background" id="main-course-background">
                    <section id="main-course">
                        <section>
                            <section id={"schema-background"}>
                                <nav id="schema">
                                    <ul>
                                        <li><Link to={`/`}>Գլխավոր էջ</Link></li>
                                        <li><Link to={`../courses`}>Դասընթացներ</Link></li>
                                        <li><Link to={`../courses/android`}>Android ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>Android օպերացիոն համակարգով են աշխատում միլիոնավոր բջջային սարքեր աշխարհի ավելի քան 190 երկրներում։ Օրեցօր ավելանում է տվյալ ՕՀ-ի օգտատերերի թիվը՝ շնորհիվ իր արագագործության և նորարարական գաղափարների։</p>
                                </article>
                                <img src={ANDROID} alt="Android Development"/>
                                <Principles Principle={principles}/>
                                <Possibility Obscenities={obscenities}/>
                                <ul id="phases">
                                    <h3>ՈՒսումնական ծրագիր՝</h3>
                                    <Syllabus
                                        coursesList={coursesList1}
                                        Id="checkbox1"
                                        coursesDescription={coursesDescription1}
                                        coursesTitle="Android level 1"
                                        forId="checkbox1"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList2}
                                        Id="checkbox2"
                                        coursesDescription={coursesDescription2}
                                        coursesTitle="Android level 2"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="Android level 3"
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
                                        <li><Link to="./java">Java ծրագրավորում</Link></li>
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

export default Android