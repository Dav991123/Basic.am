import React from 'react';
// import warning from './home/images/warning.svg'
import Link from "react-router-dom/es/Link";

class Error extends React.Component {
    componentDidMount(){
        document.querySelector('#header-background').style.backgroundColor="#222";
    }
    render(){
        return (
            <section id="error">
                <h1>Տվյալ էջը չի գտնվել</h1>
                <Link to={'/'}>Տեղափոխվել Գլխավոր էջ</Link>
            </section>
        )
    }
}
export default Error