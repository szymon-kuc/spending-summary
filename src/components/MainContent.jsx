import React from "react";
import { Month } from "./Month";
import { ListContainer } from './ListContainer';

class MainContent extends React.Component{
    constructor(){
        super();
        this.state = {
            listOfItems: [],
            date: "Jan 2019"
        }

        this.AddItemToArray = this.AddItemToArray.bind(this);
    }

    setDate(date){
        this.setState({date: date});
    }
    AddItemToArray(item){
        this.state.listOfItems.push(item);
        console.log(this.state.listOfItems);
    }
    render(){
        return(
            <>
                <Month date={(date)=>this.setDate(date)}/>
                <ListContainer data={this.state} addItem={item => this.AddItemToArray(item)}/>
            </>
        );
    }
}

export { MainContent };