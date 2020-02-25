import * as Types from '../Constants';

const initialState = [];

export const courseCateReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_COURSE_CATE:
            return action.payload;
        default:
            return state
    }
}