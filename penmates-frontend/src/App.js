import React, { Component } from "react";

import NavBar from "../src/components/NavBar";
import FirstPage from "./components/pages/FirstPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FirstPage />
      </>
    );
  }
}

export default App;
