import {combineReducers} from "redux";

const posts = (state = [], action) => {
	return state;
}

const reducer = combineReducers({
	posts,
});

export  default reducer;