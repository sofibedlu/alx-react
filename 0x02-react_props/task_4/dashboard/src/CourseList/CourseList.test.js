import React from "react";
import CourseList from "./CourseList";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseList', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper = shallow(<CourseList />);
        const rowElements = wrapper.find(CourseListRow);
        expect(rowElements).toHaveLength(5);
    });
});