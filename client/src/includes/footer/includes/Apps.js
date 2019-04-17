import React from 'react';

const Apps = (props) => {
    const { items } = props
    return (
        <ul id={'apps'}>
            {
                items.map((value,key)=>{
                    return (
                    <li key={key}><a href={value.link} key={value} target={'_blank'}><img alt={value.content} src={value.src}/>{value.content}</a></li>
                    )
                })
            }
            <li>
                <iframe
                    src={'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasic.it.center%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'}
                    width={340} height={154} style={{border:'none',overflow:'hidden'}} scrolling={'no'} frameBorder={0}
                    allow={'encrypted-media'} title={'Facebook'}></iframe>
            </li>
        </ul>
    )
}

export default Apps