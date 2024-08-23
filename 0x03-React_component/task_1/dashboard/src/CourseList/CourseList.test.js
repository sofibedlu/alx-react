import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseList', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        const rowElements = wrapper.find(CourseListRow);
        expect(rowElements).toHaveLength(3);
    });

    it('renders correctly with an empty array', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        const rowElements = wrapper.find(CourseListRow);
        expect(rowElements).toHaveLength(3);
        expect(rowElements.at(2).prop('textFirstCell')).toBe('No course available yet');
    });

    it('renders correctly without passing listCourses property', () => {
        const wrapper = shallow(<CourseList />);
        const rowElements = wrapper.find(CourseListRow);
        expect(rowElements).toHaveLength(3);
        expect(rowElements.at(2).prop('textFirstCell')).toBe('No course available yet');
    });

    it('renders correctly with a list of courses', () => {
        const listCourses = [
            { id: 1, name: "Course 1", credit: 3 },
            { id: 2, name: "Course 2", credit: 2 },
            { id: 3, name: "Course 3", credit: 1 },
        ];
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        const rowElements = wrapper.find(CourseListRow);
        expect(rowElements).toHaveLength(5); // 2 header rows + 3 course rows
        expect(rowElements.at(2).prop('textFirstCell')).toBe('Course 1');
        expect(rowElements.at(2).prop('textSecondCell')).toBe(3);
        expect(rowElements.at(3).prop('textFirstCell')).toBe('Course 2');
        expect(rowElements.at(3).prop('textSecondCell')).toBe(2);
        expect(rowElements.at(4).prop('textFirstCell')).toBe('Course 3');
        expect(rowElements.at(4).prop('textSecondCell')).toBe(1);
    });
});