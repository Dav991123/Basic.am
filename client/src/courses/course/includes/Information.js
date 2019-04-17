import React from 'react';

const onInterval = (refresh) => (WrappedComponent) => {
    return class WithInterval extends React.Component {
        constructor(props) {
            super(props);
            this.state = { ticks: 0 };
            this.interval = setInterval(this.tick.bind(this), refresh);
        }

        tick() {
            this.setState({ ticks: this.state.ticks + 1 })
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};


const Time = (props) => {
    const {items} = props;
    const countDownDate = new Date(items.courseTime).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
        return (
            <section className="background">
                <ul id="course-short-information">
                    <li><span className="icon"></span>{items.status}</li>
                    <li><span className="icon"></span><span className="digit">{items.duration}</span> ամիս</li>
                    <li><span className="icon"></span>{items.language}</li>
                    <li><span className="icon"></span><span className="digit">{items.price}</span> դրամ*</li>
                    <li><span className="icon"></span>դասընթացը մեկնարկվել է</li>
                </ul>
            </section>
        );
    }
    else{
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return (
            <section className="background">
                <ul id="course-short-information">
                    <li><span className="icon"></span>{items.status}</li>
                    <li><span className="icon"></span><span className="digit">{items.duration}</span> ամիս</li>
                    <li><span className="icon"></span>{items.language}</li>
                    <li><span className="icon"></span><span className="digit">{items.price}</span> դրամ*</li>
                    <li>
                        <span className="icon"></span>
                        Մինչ մեկնարկը՝
                        <span className="digit"> {days} </span>
                         օր,  <span className="digit">{hours} </span>
                         ժամ,  <span className="digit"> {minutes} </span> րոպե  {/*{ seconds } վայրկյան */}
                    </li>
                </ul>
            </section>

        );
    }
};

const Information = onInterval(1000)(Time);

export default Information