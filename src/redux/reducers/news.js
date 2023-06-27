import { SET_POSTS} from "../constants";

const initialState = {
    posts: [],
};

const news = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...payload],
            };
        default: return state;
    }
};

export default news;