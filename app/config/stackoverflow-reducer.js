import {
    FETCH_LIST_START,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_ERROR
} from "./actions";

const initialState = {
    items: [],
    isLoading: true,
    error: false
};

const StackoverflowReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_START:
            return {
                ...state,
                isLoading: true,
                items: []
            };
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.items
            };
        case FETCH_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
};

export default StackoverflowReducer;