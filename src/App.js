import React, { Component } from "react";

import PropertyViewer from "./PropertyViewer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rootObject: this.props.rootObject,
      extended: this.props.extended
    };

    window.setRootObject = this.setRootObject.bind(this);
  }

  handleClicks = comp => {
    const fullPath = comp.props.fullPath;
    console.log("clicked", fullPath);

    const ind = this.state.extended.indexOf(fullPath);
    if (ind === -1) {
      this.state.extended.push(fullPath);
    } else {
      this.state.extended.splice(ind, 1);
    }
    this.setState({ extended: this.state.extended });
  };

  resetLevel = () => {
    const maxLevel = parseInt(this.resetDepth.value);

    if (isNaN(maxLevel)) {
      console.error("Value given is not a number!");
      return;
    }

    const root = this.state.rootObject;
    let newExtended = [];

    recursiveReset("", 1, "rootObject", root);

    this.setState({ extended: newExtended });

    function recursiveReset(fullPath, levelNow, name, value) {
      if (levelNow > maxLevel) return;
      const newFullPath = fullPath.length ? fullPath + "." + name : name;
      newExtended.push(newFullPath);

      if (typeof value === "object") {
        Object.keys(value).forEach(key => {
          recursiveReset(newFullPath, levelNow + 1, key, value[key]);
        });
      }
    }
  };

  setRootObject(newObject) {
    this.setState({
      rootObject: newObject,
      extended: []
    });
  }

  render() {
    return (
      <div>
        <p>
          The components supports circular objects.
        </p>
        <p>
          The global function{" "}
          <span style={{ fontWeight: "bold" }}>setRootObject()</span> can be
          given a
          variable and it will update the state of the components.
        </p>

        <div>
          <input
            ref={node => (this.resetDepth = node)}
            type="text"
            className="text"
          />
          <button onClick={this.resetLevel}>Reset depth</button>
        </div>

        <PropertyViewer
          global={this.state}
          fullPath={"rootObject"}
          name={"rootObject"}
          value={this.state.rootObject}
          callClick={this.handleClicks}
          indent={0}
        />
      </div>
    );
  }
}
