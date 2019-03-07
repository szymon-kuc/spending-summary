<<<<<<< HEAD
import React from 'react';
import { Search } from './Search';
import { AddNewItem as Add} from './AddNewItem';
import {Spending} from './Spending';
import _ from 'lodash';
=======
import React from "react";
import { Search } from "./Search";
import { AddNewItem as Add } from "./AddNewItem";
import { Spending } from "./Spending";
import { filter, orderBy } from "lodash";
>>>>>>> aNewBranch

class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      updateListOfItems: ""
    };
    this.onNewItemAdd = this.onNewItemAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  onNewItemAdd(newItem) {
    const { addItem } = this.props;
    addItem(newItem);
    this.setState({ searchText: "" });
  }
  handleSearch(searchText) {
    this.setState({ searchText: searchText });

<<<<<<< HEAD
    constructor(){
        super();
        this.state = {
            searchText: '',
            updatedListOfItems: ''
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
        this.setState({ searchText });
=======
    const { filterListOfItems } = this.props.data;
>>>>>>> aNewBranch

    let newListOfItems = filterListOfItems;

<<<<<<< HEAD
            const newArray = _(filterListOfItems)
             .filter(item => item.Name.toLowerCase().includes(searchText.toLowerCase()))
             .orderBy(item => item.Name, ['desc'])
             .valueOf()

        this.setState({updatedListOfItems: newArray});

    }
    render(){
        const { data, removeItem, editItem } = this.props;
        const { searchText, updatedListOfItems } = this.state;
        return(
            <>
            <div className="center">
                <Search handleSearch={(searchText) => this.handleSearch(searchText)} text={searchText}/>
                <Add onNewItemAdd={(newItem) => this.onNewItemAdd(newItem)} searchText={searchText} date={data.date}/>
            </div>
            <Spending listOfItems={searchText === '' ? data.filterListOfItems : updatedListOfItems } searchText={searchText} removeItem={item => removeItem(item)} editItem={item => editItem(item)} isClick={data.isClick} editItemIndex={data.editItemIndex}/>
            </>
        );

    }
=======
    let newArray = filter(
      newListOfItems,
      item => item.Name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    );
    newArray = orderBy(newArray, [item => item.Name], ["desc"]);

    this.setState({ updateListOfItems: newArray });
  }
  render() {
    const { data, removeItem, editItem } = this.props;
    const { searchText, updateListOfItems } = this.state;
    return (
      <>
        <div className="center">
          <Search
            handleSearch={searchText => this.handleSearch(searchText)}
            text={searchText}
          />
          <Add
            onNewItemAdd={newItem => this.onNewItemAdd(newItem)}
            searchText={searchText}
            date={data.date}
          />
        </div>
        <Spending
          listOfItems={
            searchText === "" ? data.filterListOfItems : updateListOfItems
          }
          searchText={searchText}
          removeItem={item => removeItem(item)}
          editItem={(item, index) => editItem(item, index)}
        />
      </>
    );
  }
>>>>>>> aNewBranch
}

export { ListContainer };
