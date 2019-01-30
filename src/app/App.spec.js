import React from "react";
import { shallow } from "enzyme";

import { Header } from "./App";

it("renders a header on App component", () => {
  const wrapper = shallow(<Header />);
  const title = <header className="app-header">React CRA training</header>;
  expect(wrapper.contains(title)).toEqual(true);
});
