import React from "react";
import {DrawTable} from "./Table";

class Spending extends React.Component {

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