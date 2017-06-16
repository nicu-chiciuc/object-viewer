import React, { Component } from "react";
import PropTypes from "prop-types";

class PropertyViewer extends Component {
  handleClick = () => {};

  render() {
    const value = this.props.value;
    const type = typeof value;
    let keys = Object.keys(value);
    if (typeof value === "string") keys = [];

    let otherInfo;

    if (type === "object" || type === "array")
      otherInfo = keys.length + " children";
    else otherInfo = value;

    console.log(keys);

    const shouldExtend = this.props.global.extended.includes(
      this.props.fullPath
    );

    const marginLeft = this.props.indent * 30 + "px";

    return (
      <div>
        <div style={{ marginLeft }}>
          <div
            onClick={() => this.props.callClick(this)}
            className={shouldExtend ? "arrow" : "arrow arrow-collapsed"}
          />

          <div style={{ display: "inline-block" }}>
            <span className={"property-name"}> {this.props.name}  </span>
            <span className={"property-type"}> {type}  </span>
            <span className={"property-info"}>
              {otherInfo}
            </span>

          </div>
        </div>

        {shouldExtend
          ? keys.map(key =>
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
