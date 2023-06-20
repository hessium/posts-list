import {INCREASE_COUNT, USER_TAKE} from "../constants";

const counter = (state = {users: [] }, { type }) => {
    switch (type) {
        case USER_TAKE: return { ...state, users: state.state };
        default: return state;
    }
};

