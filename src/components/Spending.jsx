import React from "react";
import {DrawTable} from "./Table";

class Spending extends React.Component {
    state = {
        listOfItems: ''
    }
    render(){
        const { listOfItems, removeItem } = this.props;
        return(
            <div className="table">
                <DrawTable itemsArray={listOfItems} removeItem = {item => removeItem(item)}/>
            </div>
        );
    }
}

export {Spending};