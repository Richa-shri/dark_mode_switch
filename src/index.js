import React from "react";
import reactDom from "react-dom";
import DarkModeSwitch from "./lib";

const App = () => {
  return (
    <div>
      <DarkModeSwitch />
    </div>
  );
};
reactDom.render(<App />, document.getElementById("root"));
