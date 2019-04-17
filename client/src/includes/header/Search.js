import React from 'react';
import SearchIcon from './images/search.svg';
import { Link  } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }

    handleChange = e =>{
        let inputValue = String(e.target.value);
        this.setState({searchString:inputValue});
    }

    componentDidMount() {
        window.addEventListener('scroll', ()=> {
            this.setState({searchString:''})
        })
    }

    render() {
        let courses = this.props.items,
            searchString = this.state.searchString.trim().toLocaleLowerCase().replace(/\+/g,'c+');
        console.log(searchString)
        if(searchString.length > 0) {
            courses = courses.filter(elem => {
                return elem.projectTitle.toLocaleLowerCase().match(searchString)
            })
        }

        let style;
        if(courses.length > 0 && this.state.searchString) {
            style = 'filled'
        } else {
            style = 'is-result'
        }

        const click = () => {
            this.setState(({searchString:''}))
        }
        return (
            <li id="search">
                <label>
                    <input
                        type="text"
                        placeholder="Փնտրել..."
                        autoComplete="off"
                        onChange={this.handleChange}
                        className={style}
                        value={this.state.searchString}
                    />
                    <img src={SearchIcon} alt={'Search'}/>
                </label>
                {
                    searchString ? (
                        <ul>
                            {
                                courses.length === 0 ? false: (
                                    courses.map((elem, index) => {
                                        return (
                                            <li key={index} onClick={click}><Link to={`/courses/${elem.href}`}>{elem.projectTitle}</Link></li>
                                        )
                                    })
                                )
                            }
                        </ul>
                    ) : false
                }
            </li>
        )
    }
}
export default Search