import React from 'react';

class Counter extends React.Component {
    onScroll = () => {
        let hT = this.scroller.offsetTop;
        function getAbsoluteHeight(el) {
            el = (typeof el === 'string') ? document.querySelector(el) : el;

            let styles = window.getComputedStyle(el);
            let margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

            return Math.ceil(el.offsetHeight + margin);
        }
        let hH = getAbsoluteHeight('#counter');
        let wH = window.innerHeight;
        let wS = window.pageYOffset;

        if (wS > (hT+hH-wH)){
            document.querySelector("#odometer-years").innerHTML = 3;
            document.querySelector("#odometer-graduates").innerHTML = 500;
            document.querySelector("#odometer-lessons").innerHTML = 20000;
        }
    };
    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, false);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }
    render() {
        return (
            <section className="background" id="counter-background" ref={r => {this.scroller = r;}}>
                <section id="counter" ref={(section) => { this.bottom = section; }}>
                    <h1>
                        <section>
                            <span className="digit odometer" id="odometer-years"></span> տարի
                        </section>
                        <section>
                            <span className="digit odometer" id="odometer-graduates"></span> շրջանավարտ
                        </section>
                        <section>
                            <span className="digit odometer" id="odometer-lessons"></span> անցկացրած դաս
                        </section>
                    </h1>
                </section>
                <svg width="100%" viewBox="0 0 1440 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1.53029,0,0,1,0,0)">
                        <path d="M941,0C869.593,177.234 89.001,133.26 0,300L941,300L941,0Z"/>
                    </g>
                    <defs>
                        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(286.221,-533,348.301,438,488.797,418)">
                            <stop offset="0"/>
                            <stop offset="1"/>
                        </linearGradient>
                    </defs>
                </svg>
            </section>
        );
    }
}

export default Counter