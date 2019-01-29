import React from "react";
import { shallow } from "enzyme";

import App from "./App";

it("renders a header on App component", () => {
  const wrapper = shallow(<App />);
  const title = <header className="app-header">React CRA training</header>;
  expect(wrapper.contains(title)).toEqual(true);
});
