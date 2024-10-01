import { shallow, mount } from "enzyme";
import Login from './Login';
import React from 'react';

describe('Login component', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it ('renders an input and label tag', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(3);
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(true);
    });

    // it('submit button is enabled after changing the value of the two inputs', () => {
    //     const wrapper = mount(<Login />);
    //     const emailInput = wrapper.find('input#email');
    //     const passwordInput = wrapper.find('input#password');
    //     const submitButton = wrapper.find('input[type="submit"]');

    //     emailInput.simulate('change', { target: { value: 'test@example.com' } });
    //     passwordInput.simulate('change', { target: { value: 'password' } });

    //     // Trigger re-render manually
    //     wrapper.update();

    //     expect(submitButton.prop('disabled')).toBe(false);
    // });
});