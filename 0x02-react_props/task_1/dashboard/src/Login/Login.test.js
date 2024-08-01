import { shallow } from "enzyme";
import Login from './Login';
import React from 'react';

describe('Login component', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it ('renders an input and label tag', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});