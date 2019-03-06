import React from 'react';
import { Search } from './Search';
import { AddNewItem as Add} from './AddNewItem';
import {Spending} from './Spending';
import { filter, orderBy } from 'lodash';

class ListContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            searchText: '',
            updateListOfItems: ''
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

        const { listOfItems} = this.props.data;

        let newListOfItems = listOfItems;
        
        let newArray = filter(newListOfItems, item => item.Name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
        newArray =  orderBy(newArray, [item => item.Name], ['desc']);

        this.setState({updateListOfItems: newArray});

    }
    render(){
        const { data } = this.props;
        const { searchText, updateListOfItems } = this.state;
        return(
            <>
            <div className="center">
                <Search handleSearch={(searchText) => this.handleSearch(searchText)} text={searchText}/>
                <Add onNewItemAdd={(newItem) => this.onNewItemAdd(newItem)} searchText={searchText} date={data.date}/>
            </div>
            <Spending listOfItems={searchText === '' ? data.listOfItems : updateListOfItems } searchText={searchText}/>
            </>
        );

    }
}

export {ListContainer};