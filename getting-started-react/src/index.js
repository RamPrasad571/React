import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  const user = {
    firstName: "Ram Prasad",
    lastName: "Maashetty"
  };
  function fullName(user) {
    return user.firstName + " " + user.lastName + " " + props.id;
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox {fullName(user)}</h1>
      <h2>Time is {new Date().toLocaleTimeString()}</h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App id="1234" />, rootElement);
