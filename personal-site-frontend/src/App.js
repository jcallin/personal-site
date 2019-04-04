import React, { Component } from "react";

import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FirstPage />
        <SecondPage />
      </>
    );
  }
}

export default App;
