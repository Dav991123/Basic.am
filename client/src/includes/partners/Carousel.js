import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Link from "react-router-dom/es/Link";

const options = {
    items: 5,
    nav: false,
    autoplay: true,
    smartSpeed: 500,
    margin:30,
    dots: false,
    rewind: false,
    loop:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1024:{
            items:4
        },
        1280:{
            items:5
        }
    }
};

const Carousel = (props) => {
    const { items } = props;
        return (
        <OwlCarousel options={options} id={"partners"}>
            {
                items.map((value,elem)=> {
                    return (
                        <Link to={value.link} target="_blank" key={elem} rel="noopener noreferrer">
                            <img
                                key={value}
                                src={value.src}
                                alt={value.alt}
                                title={value.title}
                            />
                        </Link>
                    )
                })
            }
        </OwlCarousel>
    )
}

export default Carousel