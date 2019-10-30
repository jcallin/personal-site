import React, { Component } from "react";

import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </>
    );
  }
}

export default App;
