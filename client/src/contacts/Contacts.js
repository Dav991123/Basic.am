import React from 'react';
import ContactsDatalist from './includes/ContactDetails.js';
import SignUp from './includes/SignUp.js';
import './contacts.css';
import './flaticon/flaticon.css'

class Contacts extends React.Component {
    componentDidMount() {
        document.title = 'Հետադարձ կապ | Basic IT Center';

        function classReg( className ) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        let hasClass, addClass, removeClass;

        if ( 'classList' in document.documentElement ) {
            hasClass = function( elem, c ) {
                return elem.classList.contains( c );
            };
            addClass = function( elem, c ) {
                elem.classList.add( c );
            };
            removeClass = function( elem, c ) {
                elem.classList.remove( c );
            };
        }
        else {
            hasClass = function( elem, c ) {
                return classReg( c ).test( elem.className );
            };
            addClass = function( elem, c ) {
                if ( !hasClass( elem, c ) ) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function( elem, c ) {
                elem.className = elem.className.replace( classReg( c ), ' ' );
            };
        }

        function toggleClass( elem, c ) {
            let fn = hasClass( elem, c ) ? removeClass : addClass;
            fn( elem, c );
        }

        let classie = {
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };


        window.classie = classie;
        if (!String.prototype.trim) {
            (function() {
                let rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                // eslint-disable-next-line
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call( document.querySelectorAll( 'input,textarea' ) ).forEach( function( inputEl ) {
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'filled' );
            }
            if( inputEl.innerHTML.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'filled' );
            }

            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'filled' );
        }

        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '') {
                classie.remove( ev.target.parentNode, 'filled' );
            }
        }
    }
    render() {
        return (
            <main>
                <section className={'background'} id={'contacts-background'}>
                    <section>
                        <ContactsDatalist />
                        <SignUp />
                    </section>
                </section>
            </main>
        )
    }
}

export default Contacts