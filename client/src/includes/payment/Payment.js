import React from 'react';

class Payment extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', ()=> {
            this.setState({searchString:''})
        })
    }

    render() {
        return (
            <li id="search">

            </li>
        )
    }
}
export default Payment