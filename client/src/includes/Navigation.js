import React from 'react';

const NavigationItems = [
    {href: '/',text:'Գլխավոր էջ'},
    {href: '/courses',text: 'Դասընթացներ'},
    {href: '/about',text: 'Մեր մասին'},
    {href: '/projects',text: 'Նախագծեր'},
    {href: '/contacts',text: 'Հետադարձ կապ'}
]

class Navigation extends React.Component {
    componentDidMount() {
        let isLateralNavAnimating = false;
        const menu = document.querySelector('.menu');
        let links = document.querySelectorAll('#navigation section ul li a');
        const body = document.querySelector('body');
        const navigation_wrapper = document.querySelector('.navigation-wrapper');

        menu.addEventListener('click', function(event){
            event.preventDefault();
            if( !isLateralNavAnimating ) {
                if(menu['csstransitions'] && !menu.hasOwnProperty('csstransitions')){
                    isLateralNavAnimating = true;
                }

                menu.classList.toggle('active');
                body.classList.toggle('navigation-is-open');
                navigation_wrapper.addEventListener('webkitTransitionEnd, transitionend', function() {
                    isLateralNavAnimating = false;
                });
            }
        });
        links.forEach((link) => {
            link.addEventListener('click', function(){
                menu.classList.remove('toggle');
                body.classList.remove('navigation-is-open');
            });
        });
    }
    render() {
        return (
            <section id="navigation">
                <section className="navigation-wrapper">
                    <ul>
                        {
                            NavigationItems.map((value, index) => {
                                return (
                                    <li key={index}><a href={value.href}>{value.text}</a></li>
                                )
                            })
                        }
                    </ul>
                </section>
            </section>
        )
    }
}

export default Navigation