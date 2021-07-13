import React from "react";
import { shallow } from "enzyme";
import Header from "./header";

it("should render title", () => {
  const wrapper = shallow(<Header itemCount={1} />);
  const title = wrapper.children().first();
  const result = title.text();

  expect(result).toBe("Gap Shopping Bag");
});

it("should render 1 item", () => {
  const wrapper = shallow(<Header itemCount={1} />);
  const title = wrapper.children().last();
  const result = title.text();

  expect(result).toBe("1 Item");
});

it("should render 2 item", () => {
  const wrapper = shallow(<Header itemCount={2} />);
  const title = wrapper.children().last();
  const result = title.text();

  expect(result).toBe("2 Items");
});
