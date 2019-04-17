import React from 'react';
import professionalism from '../images/professionalism.svg'
import innovation from '../images/innovation.svg'
import creativity from '../images/creativity.svg'
import horizons from '../images/horizons.svg'
import professional_team from '../images/professional-team.svg'
import teamwork from '../images/teamwork.svg'
import payment_methods from '../images/payment_methods.svg'
import invite from '../images/invite.svg'
import map from '../images/map.svg'
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 3,
    nav: false,
    autoplay: true,
    smartSpeed: 500,
    margin:30,
    dots: true,
    rewind: false,
    loop:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    autoHeight: false,
    autoHeightClass: 'owl-height',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1024:{
            items:3
        },
        1280:{
            items:3
        },
        1920:{
            items:4
        }
    }
};

const Benefits = () => {
    return (
        <section className="background" id="benefits-background">
            <OwlCarousel options={options} id={"benefits"}>
                <article>
                    <img src={professionalism} alt="Պրոֆեսիոնալիզմ"/>
                    <h1>Պրոֆեսիոնալիզմ</h1>
                    <p>Մենք կիրառում ենք ծրագրավորման ուսուցման լավագույն մեթոդները՝ պատրաստելով որակյալ կադրեր և ապահովելով մեր ուսանողների համար բարձր վարձատրվող հեռանկարային աշխատանք։</p>
                </article>
                <article>
                    <img src={innovation} alt="Իննովացիա"/>
                    <h1>Նորարարություն</h1>
                    <p>Հաշվի առնելով ՏՏ ոլորտի ակնթարթային զարգացումը՝ ուսումնասիրում ենք նորագույն տեխնոլոգիաները և մեր ուսանողների հետ միասին նպաստում դրանց զարգացմանն ու գործնական հարթակում կիրառմանը։</p>
                </article>
                <article>
                    <img src={creativity} alt="Ստեղծարարություն"/>
                    <h1>Ստեղծարարություն</h1>
                    <p>Խնդիրները նոր հնարավորությունների վերածելու ճկունություն և ստեղծագործ մոտեցումների կիրառման էկոհամակարգ։</p>
                </article>
                <article>
                    <img src={horizons} alt="Նոր հորիզոններ"/>
                    <h1>Նոր հորիզոններ</h1>
                    <p>Կստեղծենք նոր հորիզոններ և հեռանկարներ՝ նպաստելու ապագայի մասնագիտության զարգացմանը և հաջողություններին։</p>
                </article>
                <article>
                    <img src={professional_team} alt="Փորձառու թիմ"/>
                    <h1>Փորձառու թիմ</h1>
                    <p>Մեր փորձառու մասնագետների օգնությամբ կհաղթահարեք յուրաքանչյուր դժվարություն և հնարավորություն կունենաք ուղելու հարցեր ոչ միայն դասընթացի ընթացքում այլ նաև հետո։</p>
                </article>
                <article>
                    <img src={teamwork} alt="Թիմային աշխատանք"/>
                    <h1>Թիմային աշխատանք</h1>
                    <p>Մենք խրախուսում ենք թիմային աշխատանքը՝ օգտագործելով ՏՏ ոլորտի ժամանակակից տեխնոլոգիաները, ինչպես օրինակ Slack-ը և GitHub-ը</p>
                </article>
                <article>
                    <img src={payment_methods} alt="Ճկուն վճարային համակարգ"/>
                    <h1>Ճկուն վճարային համակարգ</h1>
                    <p>Վճարման 5 եղանակ՝ առցանց, տերմինալային, կանխիկ, բանկային և փոխանցումով։ Ինչպես նաև կատարելով վճարում iDram վճարային համակարգի միջոցով կստանաք cashback:</p>
                </article>
                <article>
                    <img src={invite} alt="Հրավիրիր ընկերոջդ"/>
                    <h1>Հրավիրիր ընկերոջդ</h1>
                    <p>Հրավիրելով ձեր ընկերոջը մասնակցելու որևէ դասընթացի, Դուք կօգտվեք 10% զեղչային համակարգից, որը կարող եք կիրառել ցանկացած ժամանակ։</p>
                </article>
                <article>
                    <img src={map} alt="Քաղաքի սրտում"/>
                    <h1>Քաղաքի սրտում</h1>
                    <p>Այո, այո, գտնվում ենք քաղաքի սրտում՝ Աբովյան-Իսահակյան փողոցների խաչմերուկում՝ Երիտասարդական մետրոկայանի հարևանությամբ։</p>
                </article>
            </OwlCarousel>
        </section>
    )
}

export default Benefits

// class Benefits extends  React.Component {
//     render() {
//         return (
//
//         )
//     }
// }

// export default Benefits