import { Map, fromJS } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    const initialState = Map();

    it('should return the initial state when no action is passed', () => {
        const state = courseReducer(undefined, {});
        expect(state.toJS()).toEqual(initialState.toJS());
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "Course 1", credit: 3 },
                { id: 2, name: "Course 2", credit: 2 },
                { id: 3, name: "Course 3", credit: 1 },
            ]
        };
        const expectedState = fromJS({
            1: { id: 1, name: "Course 1", credit: 3, isSelected: false },
            2: { id: 2, name: "Course 2", credit: 2, isSelected: false },
            3: { id: 3, name: "Course 3", credit: 1, isSelected: false },
        });
        const state = courseReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = fromJS({
            1: { id: 1, name: "Course 1", credit: 3, isSelected: false },
            2: { id: 2, name: "Course 2", credit: 2, isSelected: false },
            3: { id: 3, name: "Course 3", credit: 1, isSelected: false },
        });
        const action = {
            type: SELECT_COURSE,
            index: 2
        };
        const expectedState = initialState.setIn([2, 'isSelected'], true);
        const state = courseReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = fromJS({
            1: { id: 1, name: "Course 1", credit: 3, isSelected: false },
            2: { id: 2, name: "Course 2", credit: 2, isSelected: true },
            3: { id: 3, name: "Course 3", credit: 1, isSelected: false },
        });
        const action = {
            type: UNSELECT_COURSE,
            index: 2
        };
        const expectedState = initialState.setIn([2, 'isSelected'], false);
        const state = courseReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });
});