import React from 'react';
import Link from "react-router-dom/es/Link";

import './course.css';
import valodya from './images/instructors/ios/valodya.png';

import ios from '../images/courses-icon/ios.svg';
import IOS from './images/page-images/ios.gif';

import Possibility from './includes/Possibility';
import Principles from './includes/Principles';
import Conditions from './includes/Conditions';
import Information from './includes/Information.js';
import Instructors from './includes/Instructors.js'
import Syllabus from './includes/Syllabus';

const principles = [
    'ՈՒնեն MacBook, կամ Core i7 և բարձր սերնդի պրոցեսորով օժտված նոթբուք',
    'Օժտված են ալգորիթմիկ մտածելակերպով',
    'ՈՒնեն սովորելու մեծ ձգտում',
    'Ցանկանում են տիրապետել ամենաբարձր վարձատրվող մասնագիտություններից մեկին',
    'Կարող են օրական կտրվածքով տրամադրել առնվազն 3 ժամ՝ տնային հանձնարարություններին',
    'Պատրաստ են ապրել ծրագրավորողի կյանքով ☺'
]

const obscenities = [
    'Ստեղծել բազմաֆունկցիոնալ iOS հավելվածնեևր',
    'Կիրառել Ձեր գիտելիքները իրական նախագծում',
    'Աշխատանքի անցնել առաջատար ՏՏ ընկերություններում՝ որպես iOS ծրագրավորող'
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
        fullName: 'Վալոդյա Գալստյան',
        title: 'iOS ծրագրավորող',
        img: valodya,
        description: ''
    }
]

const coursesDescription1 = 'Ծանոթացում iOS ՕՀ-ին, Objective C-ին և XCode պլատֆորմին';
const coursesDescription2 = 'Ծանոթացում GIT/Bitbucket-ին։ Կլասսներ, ժառանգականության և view-եր';
const coursesDescription3 = 'Ծանոթացում վիզուալ էֆֆեկտներին, կոնտեյներներին և բազմաֆունկցիոնալությանը';
const coursesDescription4 = 'Ծանոթացում notification-երին, դիրեկտորիաներին և ինտեգրացիային';

const coursesList1 = [
    'Introduction,Introduction to the IOS operating system and XCode platform',
    'Templates, Projects, and Workspaces,Creating a New Project',
    'Objective-C Data Types',
    'Automatic Configuration,Property Attributes in Objective-C,Declared Properties',
    'Classes, Objects',
    'Methods and loops',
    'OOP',
    'Design Patterns',
    'Memory Management,Automatic Reference Counting (ARC)',
    'Categories and Extensions',
    'Protocols,Delegates',
    'Blocks(closures)',
    'Quizze',
]

const coursesList2 = [
      'Git/Bitbucket',
      'Storyboard,xib',
      'The View Hierarchy,Controllers,UIView',
      'Text and Web Views,ScrollView',
      'Navigation View,Navigation Based Applications, Adding the Root View Controller, Creating the Navigation Controller, Controlling the Stack Navigation Programmatically',
      'UIAlertView(UIAlertController) and Action Sheets',
      'Controlling Rotation Behavior,View Autosizing, Autolayout,Constraint',
      'Size Class(Responsive)',
      'Adding Scenes, Segues,Transitions',
      'UIImageView,Segment,Slide,Progress',
      'PageViewController,StackView',
      'CollectionViews,Static and Dynamic CollectionViews , Delegates and DataSources,CollectionViews Styles, Custom Cells',
      'Quizze'
]

const coursesList3 = [
    'Table Views,Static and Dynamic Table Views ,Delegates and DataSources,Table View Styles, Custom Cells',
    'UIPickerView and UIDatePicker,Designing the UI,Codingfor the Data Picker,Show/Hiding the Keyboard',
    'Drawing, Core Graphics and Quartz 2D,Lines,Paths,and Shapes',
    'Animation,Core Animation Blocks,Animation Curves, Transformations',
    'Multitasking, Application States,Background Execution,Background App Refresh in iOS, State Restoration,NSOperetions',
    'Visual Effect View With Blure',
    'Tap,Pan,Pinch,Swipe,Rotation,Screen Edge,Long Press Gestures',
    'ToolBar,SearchBar,Flexible Space Bar',
    'Container View,Child Views',
    'Core Location Frameworko Location Accuracy,Obtaining Location Information,Calculating Distances,MapKit Framework and MKMapView',
    'GoogleMap SDK/API',
    'Targeting Multiple Devices iPhone vs. iPad Universal Apps Multiple SDK Support Detecting Device Capabilities',
    'Quizze'
]

const coursesList4 = [
    'Notifications Local Notifications / Push Notifications',
    'Networking Reachability Synchronous Downloads Asynchronous Downloads Handling Timeouts Sending HTTP GET and POST Requests Parsing JSON / Parsing XML',
    'AFNetworking / Alamofire',
    'Localization Resources Language and Region o NSLocale Text,Dates,Numbers',
    'Working with Data,CoreData / Realm',
    'Integrate Social Networks(login,share ...)',
    'Directories and Fileso NSFileManager, NSFileHandle, and NSData',
    'Using Camera and Photo Lybrary',
    'Performance and Power Optimization',
    'Measuring Performance Instruments Responsiveness Memory Usage, Spikes, and Leaks',
    'Apple Account,Itunes Connect,Certificates,Profisioning Profiles',
    'Publish your own project to App Store',
    'Final Exam'
]

const courseInformation = {
    status:'Սկսնակ',
    duration:'4',
    language: 'Հայերեն',
    price:'45.000',
    courseTime: 'Feb 15, 2019 19:30:00'
}

class Ios extends  React.Component {
    render() {
        return (
            <main id={'ios'}>
                <section className="background" id="course-header-background">
                    <section>
                        <section id="course-header">
                            <section>
                                <h5 id="main-course-title">Մոբայլ ծրագրավորում</h5>
                                <h1 id="course-title">iOS ծրագրավորում</h1>
                                <a href="https://goo.gl/forms/iiwCL9f7haX0bQkW2" id="registration-button" target="_blank" rel="noopener noreferrer">Գրանցվել</a>
                            </section>
                            <section id="course-logo">
                                <img src={ios} alt="iOS"/>
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
                                        <li><Link to={"/courses/ios"}>iOS ծրագրավորման դասընթաց</Link></li>
                                    </ul>
                                </nav>
                            </section>
                            <section>
                                <article id="course-description">
                                    <h3>Դասընթացի նկարագրություն</h3>
                                    <p>iOS օպերացիոն համակարգը ստեղծվել է "Apple Inc."-ի կողմից՝ նախատեսված իր սեփական
                                        արտադրանքների համար։ Տվյալ համակարգով են աշխատում iPhone-ը, iPad-ը և iPod Touch-ը։ Այն
                                        հայտնի է բարձր կատարողականությամբ և կայունությամբ։ iOS-ը հզոր, ապահով և վստահված
                                        օպերացիոն համակարգ է։ Իր արագագործության և որակի շնորհիվ այն ունի ավելի քան 700 միլիոն
                                        օգտատեր ամբողջ աշխարհում։</p>
                                </article>
                                <img src={IOS} alt="iOS Development"/>
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
                                        coursesTitle="iOS Level 2"
                                        forId="checkbox2"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList3}
                                        Id="checkbox3"
                                        coursesDescription={coursesDescription3}
                                        coursesTitle="iOS Level 3"
                                        forId="checkbox3"
                                        digitCounterClass="digit counter"
                                    />
                                    <Syllabus
                                        coursesList={coursesList4}
                                        Id="checkbox4"
                                        coursesDescription={coursesDescription4}
                                        coursesTitle="iOS Level 4"
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

export default Ios