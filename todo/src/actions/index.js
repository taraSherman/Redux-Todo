// actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

// action creator
export function addTodo (todo) {
	// action: add completed
	return {
		type: ADD_TODO,
		payload: {
			todo,
			id: Date.now(), // set submitted time as ID
			completed: false
		}
	}
}

// action 
export function toggleCompleted (todo) {
	// action: toggle completed
	return {
		type: TOGGLE_COMPLETED,
		payload: {
			...todo,
			completed: !todo.completed
		}
	}
}