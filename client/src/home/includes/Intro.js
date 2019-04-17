import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Typed from 'typed.js';
import BackgroundVideo from "../../courses/background.mp4";

class Intro extends  React.Component {
    componentDidMount() {
        scrollToComponent(this.Blue, { offset: 1000, align: 'bottom', duration: 500, ease:'inCirc'});
        const { items } = this.props;
        const options = {
            loop: true,
            strings: items,
            startDelay: 1000,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            smartBackspace: false,
            shuffle: true,
            showCursor: true,
            // onStringTyped: (arrayPos, self) => {
            //     //spasi 2 varkyan nor gri hajord tox@
            // },
        };
        this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (
            <section className="background" id="intro-background">
                <video src={BackgroundVideo} playsInline nline autoPlay loop muted></video>
                <section id="intro">
                    <section>
                        <h1>Մենք ուսուցանում ենք</h1>
                        <span className="words-wrapper" ref={(el) => { this.el = el; }}></span>
                    </section>
                </section>
                <button className="scroll-link" onClick={() => scrollToComponent(this.bottom, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>
                    <svg className="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130"
                         preserveAspectRatio="xMidYMid meet">
                        <g fill="none" fillRule="evenodd">
                            <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" strokeWidth="3" rx="36"></rect>
                            <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"></circle>
                        </g>
                    </svg>
                </button>
            </section>
        )
    }
}

export default Intro