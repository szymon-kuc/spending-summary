import React from "react";
import { DrawTable } from "./Table";

const Spending = ({listOfItems, removeItem, editItem}) => {

    return (
      <div className="table">
        <DrawTable
          itemsArray={listOfItems}
          removeItem={item => removeItem(item)}
          editItem={item => editItem(item)}
        />
      </div>
    );
  }

export { Spending };
