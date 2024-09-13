import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("NotificationItem", () => {
    it("renders without crashing", () => {
        shallow(<NotificationItem />);
    });
    it("renders value props correctly", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find("li").text()).toEqual("test");
        expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
    });
    it("renders html prop correctly", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
        expect(wrapper.find("li").html()).toContain("<u>test</u>");
    });

    it('calls markAsRead with the right ID when clicked', () => {
        const markAsReadSpy = jest.fn();
        const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
    
        wrapper.find('li').simulate('click');
        expect(markAsReadSpy).toHaveBeenCalledWith(1);
      });
});