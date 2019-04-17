import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './includes/header/Header.js';
import Home from './home/Home.js';
import FeedbackAll from './home/includes/FeedbackAll';
import Footer from './includes/footer/Footer.js';
import Courses from './courses/Courses.js';
import Contacts from './contacts/Contacts.js';
import About from './about/About.js';
import Cooperation from './cooperation/Cooperation.js';
import Partners from './includes/partners/Partners.js';
import Navigation from "./includes/Navigation";
import Payment from "./includes/payment/Payment";

import Error from './Error';

// Courses
import FrontEnd from "./courses/course/FrontEnd";
import ReactJS from "./courses/course/React";
import BackEnd from "./courses/course/BackEnd";
import Java from "./courses/course/Java";
import Cplusplus from "./courses/course/Cplusplus";
import Android from "./courses/course/Android";
import Ios from "./courses/course/Ios";
import Csharp from "./courses/course/Csharp";
import Python from "./courses/course/Python";
import ML from "./courses/course/ML";
import ProgrammingBasics from "./courses/course/ProgrammingBasics";
import UiUx from "./courses/course/UiUx";
import Qa from "./courses/course/Qa";
import Seo from "./courses/course/Seo";
import ProjectManagement from "./courses/course/ProjectManagement";

class App extends React.Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
    };
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    };
    render() {
        return (
            <BrowserRouter>
                <section>
                    <Navigation/>
                    <Header/>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/" component={Home} exact={true}/>
                            <Route path="/courses/" component={Courses} exact={true}/>
                            <Route path="/contacts/" component={Contacts}/>
                            <Route path="/about/" component={About}/>
                            <Route path="/cooperation/" component={Cooperation}/>
                            <Route path="/payment/" component={Payment}/>

                            {/* Courses */}
                            <Route path="/courses/web/front-end" component={FrontEnd}/>
                            <Route path="/courses/web/react" component={ReactJS}/>
                            <Route path="/courses/web/back-end" component={BackEnd}/>
                            <Route path="/courses/java" component={Java}/>
                            <Route path="/courses/cplusplus" component={Cplusplus}/>
                            <Route path="/courses/android" component={Android}/>
                            <Route path="/courses/ios" component={Ios}/>
                            <Route path="/courses/csharp" component={Csharp}/>
                            <Route path="/courses/python" component={Python}/>
                            <Route path="/courses/ml" component={ML}/>
                            <Route path="/courses/programming-basics" component={ProgrammingBasics}/>
                            <Route path="/courses/ui-ux" component={UiUx}/>
                            <Route path="/courses/qa" component={Qa}/>
                            <Route path="/courses/seo" component={Seo}/>
                            <Route path="/courses/project-management" component={ProjectManagement}/>

                            <Route component={Error} />
                        </Switch>
                    </ScrollToTop>
                    <Partners/>
                    <Footer/>
                    <FeedbackAll />
                    <MessengerCustomerChat pageId="357724220976830" appId="390222008446213"/>
                </section>
            </BrowserRouter>
        )
    }
}

export default App;