import React from 'react';
import { Search } from './Search';
import { AddNewItem as Add} from './AddNewItem';
import {Spending} from './Spending';

class ListContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            searchText: ''
        }
        this.onNewItemAdd = this.onNewItemAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    onNewItemAdd(newItem){
        const {addItem} = this.props;
        addItem(newItem);
        this.setState({searchText: ''})
    }
    handleSearch(searchText){
        this.setState({searchText: searchText});
    }
    render(){
        const { data } = this.props;
        const { searchText } = this.state;
        return(
            <>
            <div className="center">
                <Search handleSearch={(searchText) => this.handleSearch(searchText)} text={searchText}/>
                <Add onNewItemAdd={(newItem) => this.onNewItemAdd(newItem)} searchText={searchText} date={data.date}/>
            </div>
            <Spending listOfItems={data.listOfItems}/>
            </>
        );

    }
}

export {ListContainer};