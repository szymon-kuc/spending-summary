import React from "react";
import { DrawTable } from "./Table";

class Spending extends React.Component {
  state = {
    listOfItems: ""
  };
  render() {
    const { listOfItems, removeItem, editItem } = this.props;
    return (
      <div className="table">
        <DrawTable
          itemsArray={listOfItems}
          removeItem={item => removeItem(item)}
          editItem={(item, index) => editItem(item, index)}
        />
      </div>
    );
  }
}

export { Spending };
