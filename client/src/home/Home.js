import React from 'react';

import Intro from './includes/Intro';
import Benefits from "./includes/Benefits";
import Counter from './includes/Counter';
import Feedback from './includes/Feedback';
import Faq from './includes/Faq';

const programs = [
    'Վեբ ծրագրավորում',
    'Java ծրագրավորում',
    'C++ ծրագրավորում',
    'Android ծրագրավորում ',
    'iOS ծրագրավորում',
    'C# (Sharp) ծրագրավորում',
    'Python ծրագրավորում',
    'Արհեստական բանականություն',
    'Ծրագրավորման հիմունքներ',
    'UI/UX դիզայն',
    'Ալգորիթմներ',
    'QA Որակի ապահովում',
    'SEO',
    'Նախագծի կառավարում',
    'IT Անգլերեն',
];

class Home extends React.Component {
    componentDidMount() {
        document.title = 'Basic IT Center';
    }
    render() {
        return(
            <main id={'home'}>
                <Intro items={programs}/>
                <Benefits/>
                <Counter />
                <Feedback />
                <Faq />
            </main>
        )
    }
}

export default Home