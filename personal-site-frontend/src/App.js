import React, { Component } from "react";

import SplashPage from "./components/pages/SplashPage";
import Professional from "./components/pages/Professional";
import Photography from "./components/pages/Photography";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SplashPage />
        <Professional />
        <Photography />
      </>
    );
  }
}

export default App;
