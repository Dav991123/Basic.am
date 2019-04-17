import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

const Container =  [
    {
        fullName:'Լիանա Բաղիյան',
        spec: 'Վեբ ծրագրավորող',
        img: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/40496295_2198549173701126_5477159140168040448_n.jpg?_nc_cat=110&_nc_ht=scontent.fevn1-1.fna&oh=d0fa7c045cd87ebfbc7ff91d1be4be94&oe=5CB7708B',
        alt: 'Լիանա Բաղիյան',
        text: 'Հաճելի անձնակազմ ու բարձր մակարդակ: Էն որ իրանք գիտեն, ոնց մատուցել նյութը: Ու առաջացած հարցերին պատասխանում են ոչ միայն դասի ժամանակ, այլ կոնտակտի մեջ կարող ես լինել ցանկացած ժամի: Ուրախ եմ, որ ընտրել եմ ձեզ:'
    },
    {
        fullName:'Տարոն Վարդանյան',
        spec: 'Վեբ ծրագրավորող',
        img: 'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-9/38638973_656284961417267_1831854258127896576_o.jpg?_nc_cat=105&_nc_ht=scontent.fevn1-2.fna&oh=d98845ad420ea41ce591aae3fd9a0d59&oe=5CFD7846',
        alt: 'Տարոն Վարդանյան',
        text: 'Բանիմաց և հաճելի անձնակազմ,ուսման համար լավ մշակված ծրագրերով !!!'
    },
    {
        fullName:'Լևոն Ալթունյան',
        spec: 'Վեբ ծրագրավորող',
        img: 'https://scontent.fevn1-2.fna.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent.fevn1-2.fna&oh=70fa51c26387dfcfa42436b977f1615c&oe=5CC1B549',
        alt: 'Լևոն Ալթունյան',
        text: 'Рекомендую действительно хорошие наставники и учреждения!'
    },
    {
        fullName:'Ռաֆո Ֆրանգուլյան',
        spec: 'Վեբ ծրագրավորող',
        img: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/42746838_2194926934055160_7649600473757908992_n.jpg?_nc_cat=102&_nc_ht=scontent.fevn1-1.fna&oh=f2f3cb9110388bdabeb0638d0f2b5e37&oe=5CF045DC',
        alt: 'Ռաֆո Ֆրանգուլյան',
        text: 'Եթե իրոք ցանկանում եք ունենալ լավ գիտելիքներ ապա այցելեք Basic'
    },
    {
        fullName:'Կարինե Պետրոսյան',
        spec: 'Վեբ ծրագրավորող',
        img: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-1/p320x320/37781349_1865931393712472_6428610008161714176_n.jpg?_nc_cat=108&_nc_ht=scontent.fevn1-1.fna&oh=d7505df26480117e6a5efb12fbc64ed6&oe=5CF83416',
        alt: 'Կարինե Պետրոսյան',
        text: 'Very creative and interesting atmosphere for learning how to code. Great thanks to all staff!'
    },
    {
        fullName:'Վարդան Մանուկյան',
        spec: 'Android ծրագրավորող',
        img: 'https://scontent.fevn1-2.fna.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/49719505_1448033808660024_3798862173464166400_n.jpg?_nc_cat=107&_nc_ht=scontent.fevn1-2.fna&oh=7abe4e1b9d3dab033d118b6b39148d23&oe=5CFA1B12',
        alt: 'Վարդան Մանուկյան',
        text: 'Լավ կազմակերպված ծրագիր, հաճելի անձնակազմ, դասախոսներից շատ գոհ եմ 👍👍👍'
    },
    {
        fullName:'Aram Gevorgyan',
        spec: 'Java ծրագրավորող',
        img: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/49898279_2611642012196057_2648438029131186176_o.jpg?_nc_cat=109&_nc_ht=scontent.fevn1-1.fna&oh=f7b31215109c97f7921104c8469f28bb&oe=5CBA2F43',
        alt: 'Aram Gevorgyan',
        text: 'Отличное заведение , отличные преподаватели , руководители )) Хорошо выбранная методика ))'
    }
];

const options = {
    items: 1,
    nav: true,
    autoplay: true,
    smartSpeed: 500,
    dots: false,
    rewind: false,
    loop:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    navText: ['']
};

class Feedback extends  React.Component {
    componentDidMount() {
        let SeeAll = document.querySelector('#feedback-background .see-all');
        let CloseAll = document.querySelector('.close-btn');
        let cd_testimonials_all = document.querySelector('.cd-testimonials-all');
        //let header = document.querySelector('#header-background');

        SeeAll.addEventListener('click', function(){
            cd_testimonials_all.classList.add('is-visible');
            document.body.style.overflow="hidden";
        });

        CloseAll.addEventListener('click', function(){
            cd_testimonials_all.classList.remove('is-visible');
            document.body.style.overflow="auto";
        });

        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
                cd_testimonials_all.classList.remove('is-visible');
                document.body.style.overflow="auto";
            }
        };
    }
    render() {
        return (
            <section className="background" id="feedback-background">
                <h1>Անկեղծ կարծիքներ Facebook-ից <span role={"img"} aria-label={"Emoji"}>😊</span></h1>
                <section className="cd-testimonials-wrapper cd-container">
                    <OwlCarousel options={options}>
                        {
                            Container.map((value, index) => {
                                return (
                                    <section className={'cd-testimonials'} key={index}>
                                        <section>
                                            <p>{value.text}</p>
                                            <section className="cd-author">
                                                <img src={value.img} alt={value.alt} />
                                                <section className="cd-author-info">
                                                    <h4>{value.fullName}</h4>
                                                    <span>{value.spec}</span>
                                                </section>
                                            </section>
                                        </section>
                                    </section>
                                )
                            })
                        }
                    </OwlCarousel>
                    <button className="see-all">Դիտել այլ կարծիքներ</button>
                </section>
            </section>
        )
    }
}
export default Feedback



