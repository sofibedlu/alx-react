import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
    it('selectCourse action creator returns the correct action', () => {
        const expectedAction = {
            type: SELECT_COURSE,
            index: 1
        };
        expect(selectCourse(1)).toEqual(expectedAction);
    });

    it('unSelectCourse action creator returns the correct action', () => {
        const expectedAction = {
            type: UNSELECT_COURSE,
            index: 1
        };
        expect(unSelectCourse(1)).toEqual(expectedAction);
    });
});