import {
    SET_USER_CREDS
} from "./actions";

const initialState = {
    username: '',
    password: ''
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_CREDS:
            return {
                ...state,
                username: action.username,
                password: action.password
            };
        default:
            return state;
    }
};

export default AuthReducer;

