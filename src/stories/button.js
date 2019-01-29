import React from "react";

import { storiesOf } from "@storybook/react";

import Button from "../common/button/Button";

storiesOf("Button", module).add("counter", () => (
  <Button setIncrement={() => null} setDecrement={() => null} />
));
