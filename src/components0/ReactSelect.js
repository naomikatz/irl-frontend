import React from "react";
import { render } from "react-dom";
import Select from "react-select";


export default class ReactSelect extends React.Component {

  constructor() {
    super();
    this.state = {
      multiValue: [],
      filterOptions: [
        { value: "foo", label: "Foo" },
        { value: "bar", label: "Bar" },
        { value: "bat", label: "Bat" }
      ]
    };

    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }

  render() {
    return (
      <div>
        <label>Multi (now working)</label>
        <Select
          name="filters"
          placeholder="Filters"
          value={this.state.multiValue}
          options={this.state.filterOptions}
          onChange={this.handleMultiChange}
          multi
        />
      </div>
    );
  }
}
