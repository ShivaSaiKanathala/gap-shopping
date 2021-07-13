import React, { useState } from "react";
import { shallow } from "enzyme";
import QuantityInput from "./quantity-input";
import { Input } from "./quantity-input-components";

it("should render - button", () => {
  const wrapper = shallow(<QuantityInput value={1} onChange={() => {}} />);
  const decrementButton = wrapper.childAt(0);
  const result = decrementButton.text();

  expect(result).toBe("-");
});

it("should render input", () => {
  const wrapper = shallow(<QuantityInput value={1} onChange={() => {}} />);

  expect(wrapper.find(Input)).toHaveLength(1);
});

it("should render + button", () => {
  const wrapper = shallow(<QuantityInput value={1} onChange={() => {}} />);
  const incrementButton = wrapper.childAt(2);
  const result = incrementButton.text();

  expect(result).toBe("+");
});

it("should increment value", () => {
  const wrapper = shallow(<QuantityInput value={1} onChange={() => {}} />);
  const incrementButton = wrapper.childAt(2);

  incrementButton.simulate("click");
  const input = wrapper.childAt(1);

  expect(input.text()).toBe("2");
});

it("should decrement value", () => {
  const wrapper = shallow(<QuantityInput value={10} onChange={() => {}} />);
  const decrementButton = wrapper.childAt(0);

  decrementButton.simulate("click");
  const input = wrapper.childAt(1);

  expect(input.text()).toBe("9");
});
