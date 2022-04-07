import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div className="wrapper">
      <Card username="ben" />
      <Card username="ishandeveloper" />
      <Card username="graciegregory" />
    </div>
  );
};

export default App;
