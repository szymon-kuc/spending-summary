import React from "react";
import { Month } from "./Month";
import { ListContainer } from './ListContainer';

class MainContent extends React.Component{
    state={
        items: []
    }
    render(){
        return(
            <>
                <Month/>
                <ListContainer/>
            </>
        );
    }
}

export { MainContent };