import * as Types from './../Constants';

const initialState = [] ;

export const coursesByCate = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_COURSES_BY_CATE:
            return action.payload;
        default:
            return state;
    }
}