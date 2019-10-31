import React from "react";
import ReactDOM from "react-dom";

import About from "../../media/about.svg";
import Professional from "../../media/professional-outline.svg";
import Photography from "../../media/photography.svg";
import Connect from "../../media/connect.svg";

import AboutO from "../../media/about-outline.svg";
import ProfessionalO from "../../media/professional-outline.svg";
import PhotographyO from "../../media/photography-outline.svg";
import ConnectO from "../../media/connect-outline.svg";

import AutoResponsive from "autoresponsive-react";

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateContainerDimensions = this.updateContainerDimensions.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: [
        {
          w: "w1",
          src: AboutO,
          hoverSrc: About,
          title: "About"
        },
        {
          w: "w1",
          src: ProfessionalO,
          hoverSrc: Professional,
          title: "Professional"
        },
        {
          w: "w1",
          src: PhotographyO,
          hoverSrc: Photography,
          title: "Photography"
        },
        {
          w: "w1",
          src: ConnectO,
          hoverSrc: Connect,
          title: "Connect"
        }
      ]
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
        ? document.body.clientWidth / 1.95
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
                <img className="a-cover" src={i.hoverSrc} />
                <img className="a-content" src={i.src} />
                <p className="a-mask">
                  <i />
                </p>
                <p className="a-layer">
                  <span className="al-title">{i.title}</span>
                </p>
              </a>
            );
          })}
        </AutoResponsive>
      </div>
    );
  }
}

export default Tiles;
