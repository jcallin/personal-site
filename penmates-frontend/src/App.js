import React, { Component } from 'react';

import NavBar from '../src/components/NavBar'
import FirstPage from '../src/components/pages/FirstPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
    <NavBar />
    <FirstPage />
    </>
  }
}

export default App;
