import { combineReducers } from 'redux';
import postsReducer from "./posts";
import news from "./news";
import comments from "./comments";

const reducer = combineReducers({
    postsReducer,
    news,
    comments
});

export default reducer;