import React from "react";
import ReactDOM from "react-dom";

import AutoResponsive from "autoresponsive-react";

let Utils = {};

Utils.ajax = function(url, successCallback) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);

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
    this.state = {};
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    Utils.ajax("./data/tiles.json", d => {
      let data = JSON.parse(d).data;
      this.setState({
        data: data
      });
    });
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth
        });
      },
      false
    );
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: "item",
      gridWidth: 10,
      transitionDuration: ".5"
    };
  }

  calculateItemMargin(containerWidth, numItems, spaceBetweenItems, itemWidth) {
    // Margin should be 1/2 the width of the remaining space from the total items width
    // minus the total container width
    var totalItemWidth =
      itemWidth * numItems + (numItems - 1) * spaceBetweenItems;
    var itemsOnLine =
      containerWidth > totalItemWidth
        ? numItems
        : Math.floor(containerWidth / itemWidth);
    var itemsOnLineWidth =
      itemWidth * itemsOnLine + (numItems - 1) * spaceBetweenItems;
    return (containerWidth - itemsOnLineWidth) / 2;
  }

  render() {
    if (!this.state.data) {
      return <div>loading...</div>;
    }

    return (
      <div className="albumPanel">
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {this.state.data.map((i, index) => {
            let style = {
              width: i.w === "w1" ? 190 : 390,
              height: i.w === "w1" ? 240 : 490,
              marginLeft: `${this.calculateItemMargin(
                this.state.containerWidth,
                this.state.data.length,
                this.getAutoResponsiveProps().itemMargin,
                190
              )}px`
            };
            return (
              <a
                key={index}
                href="#"
                className={`${i.w} album item`}
                style={style}
              >
                <img className="a-cont j_ACont" src={`media/${i.hoverSrc}`} />
                <img className="a-cover" src={`media/${i.src}`} />
                <p className="a-mask">
                  {index}
                  <i />
                </p>
                <p className="a-layer">
                  <span className="al-brand">{i.brand}</span>
                  <span className="al-title">{i.title}</span>
                  <span className="al-count">{i.count}件商品</span>
                </p>
                <p className="a-more j_ALMore" />
              </a>
            );
          })}
        </AutoResponsive>
      </div>
    );
  }
}

export default Tiles;
