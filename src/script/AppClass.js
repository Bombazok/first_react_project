import propTypes from "prop-types";
import React from "react";

class AppClass extends React.Component {
	state = {
		count: 0
	}

	constructor() {
		super();
		console.log('constructor');
	}

	componentDidMount() {
		console.log('mount');
	}

	minus = () => {
		this.setState(current => ({count: current.count - 1}))
	}

	plus = () => {
		this.setState(current => ({count: current.count + 1}))
	}

	render() {
		console.log('render');

		return <div className="AppClass">
			<h1>Число: {this.state.count}</h1>
			<button onClick={this.minus}>Minus</button>
			<button onClick={this.plus}>Plus</button>
		</div>
	}
}

export default AppClass;
