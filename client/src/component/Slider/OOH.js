import React from 'react';
import '../OOH.css';

class Card extends React.Component {
	render() {
		return(
			<div className="card">
				<h2>{this.props.title}</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

class Link extends React.Component {
	render() {
		return(
			<a href={this.props.href}>{this.props.text}</a>
		)
	}
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			yellow: '#fcd000',
			blue: '#0ebeff',
			green: '#47cf73',
			purple: '#ae63e4'
		}
	}
	render() {
		return(
			<div className="container">
				<Card title="Title One" bgc={this.state.yellow} content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"/>
				<Card title="Title Two" bgc={this.state.blue} content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"/>
				<Card title="Title Three" bgc={this.state.green} content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"/>
				<Card title="Title Four" bgc={this.state.purple} content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"/>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)