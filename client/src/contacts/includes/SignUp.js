import React from 'react';
class SignUp extends React.Component {
    render() {
        return (
            <form action="/contacts" method="post">
                <h1><i className="flaticon-paper-plane"></i>Գրեք մեզ</h1>
                <span className="input filled">
					<input type="text" id="input-1" name="name" required autoFocus/>
					<label htmlFor="input-1">
						<span>Անուն</span>
					</label>
					<svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                         preserveAspectRatio="none">
						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
					</svg>
				</span>
                <span className="input">
					<input type="email" id="input-2" name="email" required />
					<label htmlFor="input-2">
						<span>Էլ. հասցե</span>
					</label>
					<svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                         preserveAspectRatio="none">
						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
					</svg>
				</span>
                <span className="input">
					<input type="text" id="input-3" name="phone"/>
					<label htmlFor="input-3">
						<span>Հեռախոսահամար</span>
					</label>
					<svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                         preserveAspectRatio="none">
						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
					</svg>
				</span>
                <span className="input">
                    <textarea id="input-4" name="message" required></textarea>
					<label htmlFor="input-4">
						<span>Հաղորդագրություն</span>
					</label>
					<svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                         preserveAspectRatio="none">
						<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
					</svg>
				</span>
                <input type="submit" value="ՈՒղարկել" />
            </form>
        )
    }
}
export default SignUp