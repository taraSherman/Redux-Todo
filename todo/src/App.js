import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

// Todo component rendered
class App extends Component {
	render() {
		return (
			<div className="App">
				<Todo />
			</div>
		)
	}
}

export default App;