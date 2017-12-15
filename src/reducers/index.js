import { combineReducers } from 'redux'
import {
	GET_CATEGORIES_SUCCESS,
	SET_CURRENT_CATEGORY,
	GET_POSTS,
	VOTE_FOR_POST,
	GET_POSTS_IN_CATEGORY,
	GET_POST_DETAILS,
	SET_SORTING,
	ADD_POST,
	DELETE_POST,
	EDIT_POST,
	} from '../actions'


function categories (state = null, action) {
	const {categories} = action
	switch (action.type){
		case GET_CATEGORIES_SUCCESS:
			return categories
		default:
			return state
	}
}

function currentCategory (state = null, action) {
	switch (action.type) {
		case SET_CURRENT_CATEGORY:
			return state

		default:
			return state
	}
}

function posts (state = [], action) {
	const { post } = action

	switch (action.type){
		case GET_POSTS:
			return action.posts

		case GET_POSTS_IN_CATEGORY:
			return action.posts

		case ADD_POST:
			return {
				...state,
				...post
			}
		case VOTE_FOR_POST:
			return {
				...state,
				...post
			}

		case DELETE_POST:
			return {
				...state,
			}
		case EDIT_POST:
			return {
				...state,
			}
		default:
			return state
	}
}

function comments (state = null, action) {
	//const {comments} = action

	switch (action.type) {
		case GET_POST_DETAILS:
			return null

		default:
			return state
	}
}

function sorting (state = null, action) {
	switch (action.type) {
		case SET_SORTING:
			return {
				...state,

			}
		default:
			return state
	}

}

export default combineReducers({
	categories,
	currentCategory,
	posts,
	comments,
	sorting,
})
