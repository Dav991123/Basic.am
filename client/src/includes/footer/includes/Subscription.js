import React from 'react';

 const Subscription = (props) => {
     const { items } = props
     return (
         <section id={'subscription'}>
            <fieldset>
                <legend>Բաժանորդագրություն նորություններին</legend>
                    <form action="https://it-center.us12.list-manage.com/subscribe/post?u=b992adf1aff12ebf6958a4018&amp;id=31d4646a5f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Էլ. հասցե" required />
                        <input type="submit" value="Բաժանորդագրվել" name="subscribe" />
                     </form>
            </fieldset>
            <fieldset>
                <legend>Հետևեք մեզ</legend>
                    <ul id={'social'}>
                        {
                            items.map((value,item)=> {
                                return (
                                    <li key={item}><a href={value.link} key={value} target={'_blank'}><img src={value.src} alt={value.alt} key={item}/></a></li>
                                )
                            })
                        }
                    </ul>
            </fieldset>
         </section>
     ) 
 }
 export default Subscription