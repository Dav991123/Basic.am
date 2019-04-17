import React from 'react';
import Carousel from './Carousel';

import ucom from './icon-partners/ucom.svg';
import vivacell from './icon-partners/vivacell-mts.svg';
import idram from './icon-partners/idram.png';
import digitain from './icon-partners/digitain.svg';

const partners = [
    {link: '//www.mts.am/', src:  vivacell, alt: 'VivaCell MTS', title: 'VivaCell MTS'},
    {link: '//www.ucom.am/', src: ucom, alt: 'Ucom', title: 'Ucom'},
    {link: '//www.idram.am/', src: idram, alt: 'Idram', title: 'Idram'},
    {link: '//www.digitain.com/', src: digitain, alt: 'Digitain', title: 'Digitain'}
];

const Partners = () => {
    return (
        <Carousel items={partners}/>
    )
}

export default Partners