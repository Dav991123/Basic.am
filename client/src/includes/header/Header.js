import React from 'react';
import { Link ,NavLink } from 'react-router-dom'

import Headroom from 'react-headroom'

import BasicCourses from '../../courses/includes/BasicCourses'
import SecondaryCourses from '../../courses/includes/SecondaryCourses'
import Search from './Search'

import logo from './images/white-logo.svg'
import hy from './images/languages-icons/hy.svg'
import en from './images/languages-icons/en.svg';
import ru from './images/languages-icons/ru.svg';
import './header.css';

export default class Header extends React.Component {
    render() {
        const FullArray = BasicCourses.concat(SecondaryCourses);
        FullArray.push(
            {
                projectTitle: 'React ծրագրավորում', href: 'web/react'
            },
            {
                projectTitle: 'Node.js ծրագրավորում', href: 'web/back-end'
            }
        );
        return (
            <Headroom
                      onUnfix={function (){document.querySelector("#header-background").classList.toggle("scrolled")}}
                      onUnpin={function (){document.querySelector("#header-background").classList.add("scrolled")}}
                      pinStart={1}
                      >
                <section className="background" id="header-background">
                    <header>
                        <button className="menu"><span></span></button>
                         <Link to="/" id="logo">
                             <img src={logo} alt="Basic IT Center" title="Basic IT Center"/>
                        </Link>
                        <ul>
                            <li><NavLink to="/courses" activeClassName="active">Դասընթացներ</NavLink></li>
                            <li><NavLink to="/contacts" activeClassName="active">Հետադարձ կապ</NavLink></li>
                            <li id="language">
                                <span>
                                    <img src={hy} alt={''}/> ՀԱՅ
                                </span>
                                <ul>
                                    <li><span><img src={en} alt={''}/> ENG</span></li>
                                    <li><span><img src={ru} alt={''}/> РУС</span></li>
                                </ul>
                            </li>
                            <Search items={FullArray} />
                        </ul>
                    </header>
                </section>
            </Headroom>
        )
    }
}
