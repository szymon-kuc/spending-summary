import React from "react";
import { Search } from "./Search";
import { AddNewItem as Add } from "./AddNewItem";
import { Spending } from "./Spending";
import _ from "lodash";

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
  onNewItemAdd(newItem, id) {
    const { addItem } = this.props;
    addItem(newItem, id);
    this.setState({ searchText: "" });
  }
  handleSearch(searchText) {
    this.setState({ searchText });

    const { filterListOfItems } = this.props.data;

    const newArray = _(filterListOfItems)
      .filter(item => item.Name.toLowerCase().includes(searchText.toLowerCase()))
      .orderBy(item => item.Name, ['desc'])
      .valueOf()

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
            onNewItemAdd={(newItem, id) => this.onNewItemAdd(newItem, id)}
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
          editItem={item => editItem(item)}
        />
      </>
    );
  }
}

export { ListContainer };
