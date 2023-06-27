import { SET_POSTS } from "../constants";

const initialState = {
   allPosts: [],
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                allPosts: [...state.allPosts,  action.payload],
            };
        default: return state;
    }
};

export default postsReducer;