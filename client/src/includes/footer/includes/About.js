import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Payment from './Payment'
import paymentLogos from '../images/payment-logos.png';

const About = (props) => {
    const { items } = props

    return (
        <ul id={'about'}>
           {
            items.map((value,item)=>{
                return (
                    <li key={item}>
                        <Link key={value} to={value.link}>
                            {value.content}
                        </Link>
                    </li>
                   )
            })
           }
            <li><a href="http://hr.am/company/profile/cid/432402236863/t/" target="_blank" rel="noopener noreferrer">Աշխատանք</a></li>
            <Popup trigger={<li>Օնլայն վճարում</li>} contentStyle={{background:'none',border:'none',padding:'0',width:'auto'}} modal lockScroll closeOnDocumentClick closeOnEscape>
                <section id={'payment-modal'}>
                    <button className="remodal-close"></button>
                    <h3 className="title">Օնլայն վճարում</h3>
                    <p>Հարգելի ուսանող, «Վճարման հաշիվ» դաշտում հարկավոր է նշել Ձեր էլ. հասցեին ուղարկված վճարման հաշվին համարժեք համարը։</p>
                    <Payment />
                    <img src={paymentLogos} alt="Arca, Visa, MasterCard"/>
                </section>
            </Popup>
        </ul>
    )
}

export default About;