import React, { Component } from "react";

function NumberViewer(props) {
  const marginLeft = props.indent * 30 + "px";

  return <div style={{ marginLeft }}> {props.name} </div>;
}

export default class PropertyViewer extends Component {
  render() {
    const value = this.props.value;
    let keys = Object.keys(value);
    if (typeof value === "string") keys = [];

    console.log(keys);

    if (this.props.indent > 10) return <div>overflow</div>;
    else
      return (
        <div>
          <NumberViewer name={this.props.name} indent={this.props.indent} />
          {keys.map(key =>
            <PropertyViewer
              key={key}
              name={key}
              value={value[key]}
              indent={this.props.indent + 1}
            />
          )}
        </div>
      );
  }
}
