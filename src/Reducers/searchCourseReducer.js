import * as Types from '../Constants';

const initialState = [] ;

export const searchCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_COURSE:
            return action.payload;
        default:
            return state;
    }
}