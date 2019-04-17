import React from 'react';

import './about.css';
import BackgroundVideo from "./background.mp4";

import logo from "./images/logo.svg";
import room from "./images/room.jpg";
import html from "../courses/images/courses-icon/html.svg";

class About extends React.Component {
    componentDidMount() {
        document.title = 'Մեր մասին | Basic IT Center';
        function VerticalTimeline( element ) {
                this.element = element;
                this.blocks = this.element.getElementsByClassName("js-cd-block");
                this.images = this.element.getElementsByClassName("js-cd-img");
                this.contents = this.element.getElementsByClassName("js-cd-content");
                this.offset = 0.8;
                this.hideBlocks();
            };

            VerticalTimeline.prototype.hideBlocks = function() {
                // eslint-disable-next-line
                if ( !"classList" in document.documentElement ) {
                    return;
                }
                let self = this;
                for( var i = 0; i < this.blocks.length; i++) {
                    (function(i){
                        if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                            self.images[i].classList.add("cd-is-hidden");
                            self.contents[i].classList.add("cd-is-hidden");
                        }
                    })(i);
                }
            };

            VerticalTimeline.prototype.showBlocks = function() {
                // eslint-disable-next-line
                if ( ! "classList" in document.documentElement ) {
                    return;
                }
                var self = this;
                for( var i = 0; i < this.blocks.length; i++) {
                    (function(i){
                        if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                            // add bounce-in animation
                            self.images[i].classList.add("cd-timeline__img--bounce-in");
                            self.contents[i].classList.add("cd-timeline__content--bounce-in");
                            self.images[i].classList.remove("cd-is-hidden");
                            self.contents[i].classList.remove("cd-is-hidden");
                        }
                    })(i);
                }
            };

            var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
                verticalTimelinesArray = [],
                scrolling = false;
            if( verticalTimelines.length > 0 ) {
                for( var i = 0; i < verticalTimelines.length; i++) {
                    (function(i){
                        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
                    })(i);
                }

                window.addEventListener("scroll", function(event) {
                    if( !scrolling ) {
                        scrolling = true;
                        (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
                    }
                });
            }

            function checkTimelineScroll() {
                verticalTimelinesArray.forEach(function(timeline){
                    timeline.showBlocks();
                });
                scrolling = false;
            };
    }
    render() {
        return(
            <main>
                <section id={'about-background'}>
                    <video src={BackgroundVideo} playsInline autoPlay loop muted></video>
                    <h1>Հաջողությունների պատմություն</h1>
                </section>
                <section className="cd-timeline js-cd-timeline">
                    <div className="cd-timeline__container">
                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src={logo} alt="Basic IT Center"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>Basic IT Center-ի հիմնում</h2>
                                <p>2015 թվականի հոկտեմբերի 1-ին սկիզբ դրվեց մի գաղափարի, որը հիմք հանդիսացավ Basic IT Center-ի ստեղծմանը։<br/>ՈԻնեինք ընդամենը մեկ լսարան և այն ուներ հետևյալ տեսքը 🙂՝</p>
                                <img src={room} alt=""/>
                                <span className="cd-timeline__date">Հոկտեմբեր, 2015</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src={html} alt="HTML5"/>
                            </div>

                            <div className="cd-timeline__content js-cd-content">
                                <h2>Առաջին դասընթաց</h2>
                                <p>Անցկացվեց առաջին դասընթացը, որի շրջանակներում մասնակիցներին հնարավորություն տրվեց մասնակցելու վեբ ծրագրավորման դասընթացներին։</p>
                                <span className="cd-timeline__date">Հոկտեմբեր, 2015</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                                <img src="img/cd-icon-picture.svg" alt=" "/>
                            </div>

                            <div className="cd-timeline__content js-cd-content">
                                <h2>Նոր դասընթացներ</h2>
                                <p>Աշխատաշուկայի պահանջարկների հիման վրա մեկվարկվեցին մի շարք այլ ծրագրավորման լեզուների դասընթացներ՝ Java, Android, C++ և C#։</p>
                                <span className="cd-timeline__date">Հունվար, 2016</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>

                            <div className="cd-timeline__content js-cd-content">
                                <h2>«Ծրագրավորումը 0-ից» սեմինար</h2>
                                <p>Սեմինարի նպատակն էր մասնակցիներին ծանոթացնել աշխատաշուկայում մեծ պահանջարկ ունեցող ծրագրավորման միջավայրերին, դրանց առանձնահատկություններին և կիրառման հարթակներին։</p>
                                <span className="cd-timeline__date">Հունիս, 2016</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>100+ ուսանող</h2>
                                <p>Դասընթացների անցկացման բարձր որակի շնորհիվ կարճ ժամանակահատվածում գրանցվեց ուսանողների աննախադեպ աճ։</p>
                                <span className="cd-timeline__date">Նոյեմբեր, 2016</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>

                            <div className="cd-timeline__content js-cd-content">
                                <h2>IT Battle</h2>
                                <p>Կազմակերպվեց դեբատ, որի ընթացքում մասնակիցներից կազմվում էին թիմեր, որոնցից յուրաքանչյուրը պետք է մտածեր օպտիմալ լուծումներ առաջադրված խնդիրների համար։</p>
                                <a href="https://www.facebook.com/pg/basic.it.center/photos/?tab=album&album_id=1312209385528304">Մանրամասն</a>
                                <span className="cd-timeline__date">Մարտ, 2017</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>«Ծրագրավորումը 0-ից» №2 սեմինար</h2>
                                <p>Բազմաթիվ մասնակիցների խնդրանքով և պահանջով անցկացվեց ևս 1 սեմինար նույն խորագրով և նմանատիպ ֆորմատով, որի ընթացքում մասնակիցների մեծ մասը կողմնորոշվեծ ծրագրավորման լեզվի ընտրության հարցում։</p>
                                <a href="https://www.facebook.com/pg/basic.it.center/photos/?tab=album&album_id=1332691410146768">Մանրամասն</a>
                                <span className="cd-timeline__date">Մարտ, 2017</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>Basis Of Success</h2>
                                <p>Նախագիծը անցկացվում էր iDram-ի հիմնադիր Գևորգ Պողոսյանի մասնակցությամբ, ով իր հարուստ փորձով և գիտելիքներով կիսվում էր ներկա մասնակիցների հետ</p>
                                <span className="cd-timeline__date">Ապրիլ, 2017</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>«Ծրագրավորումը 0-ից» №3 սեմինար</h2>
                                <p>Սեմինարի ընթացքում քննարկվեցին ծրագրավորման ամենապահանջված միջավայրերը՝ Java, Android, Front-End, Back-End, ինչպես նաև Հայաստանում առաջին անգամ մեկնարկվող Unity 3D ծրագրավորուման դասընթացը</p>
                                <a href="https://www.facebook.com/pg/basic.it.center/photos/?tab=album&album_id=1429040120511896">Մանրամասն</a>
                                <span className="cd-timeline__date">Հունիս, 2017</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>Խաղերի ստեղծում Unity 3D-ով</h2>
                                <p>Սեմինարի ընթացքում քննարկվեցին խաղերի ստեղծման հնարավոր ձևերը, վիրտուալ աշխարհի անհավանական ասպեկտները և իհարկե հնարավորություն ընձեռվեց ձեռք բերված տեսական գիտելիքները կիրառելու գործնականում</p>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Vl_eKYHfYcc"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <span className="cd-timeline__date">Հունիս, 2017</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>Java TechKnow</h2>
                                <p>Basic IT Center-ի Java-ի թիմը մանրամասն ներկայացրին Java-ի կիրառման հարթակները՝ խոսելով Android-ից, ինչպես նաև Spring-ից՝ անդրադառնալով յուրաքանչյուրի առանձնահատկություններին։ Սեմինարի հետաքրքիր և բովանդակալից հատվածներից էր միկրոսերվիսային ճարտարապետությունը՝ իր անբաժանելի TDD, NoSQL, MongoDB հատվածներով։</p>
                                <a href="https://www.facebook.com/pg/basic.it.center/photos/?tab=album&album_id=2120519014697333">Մանրամասն</a>
                                <span className="cd-timeline__date">Հունիս, 2017</span>
                            </div>
                        </div>

                        <div className="cd-timeline__block js-cd-block">
                            <div className="cd-timeline__img js-cd-img">
                                <img src="img/cd-icon-location.svg" alt="Location"/>
                            </div>
                            <div className="cd-timeline__content js-cd-content">
                                <h2>Python Basics - Django / Machine Learning</h2>
                                <p>Տեղի ունեցավ առաջին մասշտաբային հանդիպումը նվիրված Python ծրագրավորման լեզվին և մեքենայական ուսուցմանը, ինչպես նաև մանրամասն ներկայացվեծ Django տեխնոլոգիան։</p>
                                <a href="https://www.facebook.com/pg/basic.it.center/photos/?tab=album&album_id=2120511918031376">Մանրամասն</a>
                                <span className="cd-timeline__date">Փետրվար, 2018</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default About