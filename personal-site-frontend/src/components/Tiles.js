import React from "react";
import ReactDOM from "react-dom";
import Utils from "../Utils";

import AutoResponsive from "autoresponsive-react";

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateContainerDimensions = this.updateContainerDimensions.bind(this);
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
    this.updateContainerDimensions();
    window.addEventListener("resize", this.updateContainerDimensions);
  }

  updateContainerDimensions() {
    var containerNode = ReactDOM.findDOMNode(this.refs.container);
    var containerUnrendered = containerNode === null;
    this.setState({
      containerWidth: containerUnrendered
        ? document.body.clientWidth / 2
        : containerNode.clientWidth
    });
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth,
      itemClassName: "item",
      gridWidth: 10,
      transitionDuration: ".5",
      justifySelf: "center"
    };
  }

  calculateItemMargin(containerWidth, numItems, itemMarginLeft, itemWidth) {
    // Margin should be 1/2 the width of the remaining space from the total items
    // on the line width minus the total container width
    var eachItemWidth = itemWidth + itemMarginLeft;
    var totalItemWidth = eachItemWidth * numItems;

    var itemsOnLine =
      containerWidth + 10 > totalItemWidth
        ? numItems
        : Math.floor(containerWidth / eachItemWidth);
    var itemsOnLineWidth = eachItemWidth * itemsOnLine;
    return (containerWidth - itemsOnLineWidth) / 2 + 5;
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
              width: i.w === "w1" ? 170 : 390,
              height: i.w === "w1" ? 240 : 490,
              marginLeft: `${this.calculateItemMargin(
                this.state.containerWidth,
                this.state.data.length,
                this.getAutoResponsiveProps().itemMargin,
                170
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
                  <i />
                </p>
                <p className="a-layer">
                  <span className="al-brand">{i.brand}</span>
                  <span className="al-title">{i.title}</span>
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
