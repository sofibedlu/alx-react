import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map, fromJS } from 'immutable';

const initialState = Map();

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            const coursesWithSelection = Object.keys(normalizedData.entities.courses).reduce((acc, key) => {
                acc[key] = { ...normalizedData.entities.courses[key], isSelected: false };
                return acc;
            }, {});
            return state.merge(fromJS(coursesWithSelection));
        case SELECT_COURSE:
            return state.setIn([action.index, 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([action.index, 'isSelected'], false);
        default:
            return state;
    }
};

export default courseReducer;