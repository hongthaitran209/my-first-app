import {combineReducers} from "redux";
import { coursesReducer } from "./coursesReducer";
import { courseCateReducer} from './courseCateReducer';
import { coursesByCate } from "./coursesByCateReducer";
import { searchCourseReducer } from "./searchCourseReducer";
import { userReducer } from "./userReducer";
import { edittedUserReducer } from "./edittedUserReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    courseCate: courseCateReducer,
    coursesByCate: coursesByCate,
    searchCourse: searchCourseReducer,
    users: userReducer,
    edittedUser: edittedUserReducer,
})

export default rootReducer;