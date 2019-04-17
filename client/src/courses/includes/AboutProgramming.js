import React from 'react';
import Typed from 'typed.js';
import BackgroundVideo from '../background.mp4'

class AboutProgramming extends React.Component {
    componentDidMount() {
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
            <section id="about-programming" className="headline letters type">
                <video src={BackgroundVideo} playsInline autoPlay loop muted></video>
                <h1><span>Ծրագրավորում`</span>
                    <span className="words-wrapper" ref={(el) => { this.el = el; }}></span>
                </h1>
            </section>
        )
    }
}

export default AboutProgramming;