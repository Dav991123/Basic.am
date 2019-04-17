import React from 'react';
import './footer.css';

import About from './includes/About.js';
import Apps from './includes/Apps.js';
import Subscription from './includes/Subscription.js';

import slack from './images/slack.svg';
import play_store from './images/play-store.svg';
import app_store from './images/app-store.svg';
import github from './images/github.svg';
import react from './images/react.svg';

class Footer extends React.Component {
    render() {
        const about = [
            {link: '/', content:'Գլխավոր էջ'},
            {link: '/courses', content: 'Դասընթացներ'},
            {link: '/about', content: 'Մեր մասին'},
            {link: '/blog', content: 'Բլոգ'},
            {link: '/cooperation', content: 'Համագործակցություն'},
            {link: '/contacts', content: 'Հետադարձ կապ'},
        ]

        const apps = [
            {link: 'https://www.apple.com/ios/app-store/', content: 'App Store', src: app_store},
            {link: 'https://play.google.com/store', content: 'Google Play', src: play_store},
            {link: 'https://github.com/basicitcenter', content: 'GitHub', src: github},
            {link: 'https://basicitcenter.slack.com/', content: 'Slack', src: slack},
        ]

        const subscription = [
            {
                link: 'https://www.facebook.com/basic.it.center/',
                src:'https://image.flaticon.com/icons/svg/174/174848.svg',
                alt: 'Facebook'
            },
            {
                link: 'https://www.instagram.com/basic_it_center/', 
                src: 'https://image.flaticon.com/icons/svg/174/174855.svg',
                alt: 'Instagram'
            },
            {
                link: 'https://www.linkedin.com/in/basic-it-center/', 
                src: 'https://image.flaticon.com/icons/svg/174/174857.svg',
                alt: 'Linkedin'
            },
            {
                link: 'https://www.youtube.com/channel/UC2I3ynGgCLwpYoDZ0ldk6sw', 
                src: 'https://image.flaticon.com/icons/svg/174/174883.svg',
                alt: 'YouTube'
            }
        ]


        return (
        <section className="background" id="footer-background">
            <footer>
               <About items={about}/>
               <Apps items={apps}/>
               <Subscription items={subscription}/>
            </footer>
            <section id="copyright"><span className="digit">&copy; 2019</span> | Պատրաստված է <img src={react} alt="React" title="React"/>-ով և <span id="heart">♥</span>-ով՝ «Basic IT Center»-ի ուսանողների կողմից</section>
        </section>
        )
    }
}

 export default Footer