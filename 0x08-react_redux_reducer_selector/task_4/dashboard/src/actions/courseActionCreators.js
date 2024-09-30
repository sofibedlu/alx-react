import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index
    };
};

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    };
}

export const fetchCourseSuccess = (courses) => ({
    type: FETCH_COURSE_SUCCESS,
    data: courses
});

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));