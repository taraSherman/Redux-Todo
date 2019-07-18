import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

// set initial state
const initialState = {
	todos: [
		{
			todo: 'Todo1',
			id: +new Date(), // initial load of data adds current date/time as ID
			completed: false
		},
		{
			todo: 'Todo2',
			id: +new Date()+1, // initial load of data adds current date/time +1 as ID (avoids ID conflicts)
			completed: false
		},
		{
			todo: 'Todo3',
			id: +new Date()+2, // initial load of data adds current date/time +2 as ID (avoids ID conflicts)
			completed: false
		}
	]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { 
				todos:[
					...state.todos,
					action.payload
				]
			}

		case TOGGLE_COMPLETED:
			return {
				todos: [
					...state.todos.map((todo) => {
						if (todo.id !== action.payload.id) {
							return todo;
						} else {
							return action.payload;
						}
					})
				]
			}
		default:
			return state;
	}
}