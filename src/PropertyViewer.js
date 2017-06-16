import React, { Component } from "react";
import PropTypes from "prop-types";

class PropertyViewer extends Component {
  handleClick = () => {};

  getOtherInfo() {
    const value = this.props.value;
    if (typeof value === "object")
      return Object.keys(value).length + " children";
    else if (typeof value === "boolean") return value ? "true" : "false";
    else return value;
  }

  getChildren() {
    const value = this.props.value;
    if (typeof value === "object") return Object.keys(value);
    else return [];
  }

  getMargin() {
    return this.props.indent * 30 + "px";
  }

  render() {
    const value = this.props.value;

    const shouldExtend = this.props.global.extended.includes(
      this.props.fullPath
    );

    const children = this.getChildren();

    const canExtend = children.length > 0;

    return (
      <div>
        <div style={{ marginLeft: this.getMargin() }}>
          <div
            onClick={() => this.props.callClick(this)}
            className={
              canExtend
                ? shouldExtend ? "arrow" : "arrow arrow-collapsed"
                : "arrow arrow-no-children"
            }
          />

          <div style={{ display: "inline-block" }}>
            <span className={"property-name"}> {this.props.name}  </span>
            <span className={"property-type"}>
              {" "}{typeof value}
            </span>
            <span className={"property-info"}>
              {" "}{this.getOtherInfo()}
            </span>

          </div>
        </div>

        {shouldExtend
          ? this.getChildren().map(key =>
              <PropertyViewer
                global={this.props.global}
                fullPath={this.props.fullPath + "." + key}
                key={key}
                name={key}
                value={value[key]}
                callClick={this.props.callClick}
                indent={this.props.indent + 1}
              />
            )
          : ""}
      </div>
    );
  }
}

PropertyViewer.propTypes = {};

export default PropertyViewer;
