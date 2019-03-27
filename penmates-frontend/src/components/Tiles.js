import React from 'react';
import ReactDOM from 'react-dom';

import AutoResponsive from 'autoresponsive-react';

let Utils = {};

Utils.ajax = function(url, successCallback) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        successCallback(this.responseText);
      }
    }
  };

  request.send();
  request = null;
};

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    Utils.ajax('./data/tiles.json', d => {
      let data = JSON.parse(d).data;
      this.setState({
        data: data
      });
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth
      });
    }, false);
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  }

  render() {
    if (!this.state.data) {
      return <div>loading...</div>;
    }

    return (
      <div className="albumPanel">
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {
            this.state.data.map((i, index) => {
              let style = {
                width: i.w === 'w1' ? 190 : 390,
                height: i.w === 'w1' ? 240 : 490
              };
              return (
                <a key={index} href="#" className={`${i.w} album item`} style={style}>
                  <img className="a-cont j_ACont" src={`media/${i.hoverSrc}`}/>
                  <img className="a-cover" src={`media/${i.src}`}/>
                  <p className="a-mask">{index}<i></i></p>
                  <p className="a-layer">
                    <span className="al-brand">{i.brand}</span>
                    <span className="al-title">{i.title}</span>
                    <span className="al-count">{i.count}件商品</span>
                  </p>
                  <p className="a-more j_ALMore"></p>
                </a>
              );
            })
          }
        </AutoResponsive>
      </div>
    );
  }
}

export default Tiles;