import React from "react";
import {DrawTable} from "./Table";

class Spending extends React.Component {
    state = {
        listOfItems: ''
    }
    render(){
        const { listOfItems } = this.props;
        return(
            <div className="table">
                <DrawTable itemsArray={listOfItems}/>
            </div>
        );
    }
}

export {Spending};