import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe('CourseListRow', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () =>  {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1"/>);
        const thElement = wrapper.find('th');
        expect(thElement).toHaveLength(1);
        expect(thElement.prop("colSpan")).toEqual('2');
        expect(thElement.text()).toEqual('Header 1');
    });
    it('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
        const thElement = wrapper.find('th');
        expect(thElement).toHaveLength(2);
        expect(thElement.at(0).text()).toBe('Header 1');
        expect(thElement.at(1).text()).toBe('Header 2');
    });
    it('renders correctly two <td> elements within a <tr> when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row 1" textSecondCell="Row 2" />);
        const trElement = wrapper.find('tr');
        const tdElements = trElement.find('td');
        expect(tdElements).toHaveLength(2);
        expect(tdElements.at(0).text()).toBe('Row 1');
        expect(tdElements.at(1).text()).toBe('Row 2');
    });
});