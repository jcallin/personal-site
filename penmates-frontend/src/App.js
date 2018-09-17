import React, { Component } from 'react';
import { Pager } from "react-bootstrap";
import ReactPageScroller from 'react-page-scroller';

import NavBar from '../src/components/NavBar'
import FirstPage from '../src/components/pages/FirstPage';
import SecondPage from '../src/components/pages/SecondPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {currentPage: 1};
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
    this.setState({currentPage: number});
  };

  getPagesNumbers = () => {

    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
      )
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return <React.Fragment>
      <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
        <FirstPage/>
        <SecondPage/>
      </ReactPageScroller>
      <NavBar/>
   </React.Fragment>
  }
}

export default App;
