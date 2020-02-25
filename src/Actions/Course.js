import api from './../API';
import * as Types from '../Constants';

export const getCourses = () => {
    return (dispatch) => {
        api
            .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09')
            .then(res => {
                dispatch({
                    type: Types.GET_COURSES,
                    payload: res.data
                })
            })
            .catch(err => console.log(err.response.data))
    }
}

export const getCourseCate = () => {
    return (dispatch) => {
        api
        .get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
        .then(res => {
            dispatch({
                type: Types.GET_COURSE_CATE,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data))
    }
}

export const searchCourse = (tenKhoaHoc) => {
    return (dispatch) => {
        api
        .get(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP09`)
        .then(res => {
            dispatch({
                type: Types.SEARCH_COURSE,
                payload: res.data
            })
        })
        .catch(err => err.response.data)
    }
}