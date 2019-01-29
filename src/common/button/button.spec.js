import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Button, {
  ERROR_MESSAGE_GEATERTHAN,
  ERROR_MESSAGE_LESSTHAN
} from "./Button";

describe("Common Counter Component", () => {
  const props = {
    setIncrement: jest.fn(),
    setDecrement: jest.fn()
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show an error message when the counter number is greater than 9", () => {
    const wrapper = shallow(<Button {...props} counter={10} />);
    const incrementButton = wrapper.find("button#increment");
    incrementButton.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual(ERROR_MESSAGE_GEATERTHAN);
  });

  it("should show an error message when the counter number is less than 0", () => {
    const wrapper = shallow(<Button {...props} counter={0} />);
    const incrementButton = wrapper.find("button#decrement");
    incrementButton.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual(ERROR_MESSAGE_LESSTHAN);
  });

  it("should count by 1 when the increment button is clicked", () => {
    const wrapper = shallow(<Button {...props} counter={0} />);
    const incrementButton = wrapper.find("button#increment");
    incrementButton.simulate("click");
    const text = wrapper.find("input#counterValue").props().value;
    expect(text).toEqual(1);
  });

  it("should decrement by 0 when the decremet button is clicked", () => {
    const wrapper = shallow(<Button {...props} counter={1} />);
    const incrementButton = wrapper.find("button#decrement");
    incrementButton.simulate("click");
    const text = wrapper.find("input#counterValue").props().value;
    expect(text).toEqual(0);
  });
});
