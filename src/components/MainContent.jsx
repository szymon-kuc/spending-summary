import React from "react";
import { Month } from "./Month";
import { ListContainer } from "./ListContainer";
import { filter } from "lodash";
import { Amount } from "./Amount";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfItems: [],
      filterListOfItems: [],
      date: 'Jan 2019',
      id: ''
    };

    this.addItemToArray = this.addItemToArray.bind(this);
    this.filterItemsByDate = this.filterItemsByDate.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  setDate(date) {
    this.setState({ date });
    this.filterItemsByDate(date);
  }
  filterItemsByDate(date) {
    const { listOfItems } = this.state;

    let newArray = filter(listOfItems, { date: date });

    this.setState({ filterListOfItems: newArray });
  }
  addItemToArray(item, id) {
    this.setState(prevState => ({
      ...prevState,
      listOfItems: prevState.listOfItems.concat(item),
      filterListOfItems: prevState.filterListOfItems.concat(item),
      id: id
    }));
  }
  removeItem = item => {
    this.setState({
      listOfItems: this.state.listOfItems.filter((el) => {
        if(el.id === item.id){
          return null;
        }else{
          return el;
        }
      }),
      filterListOfItems: this.state.filterListOfItems.filter((el) => {
        if(el.id === item.id){
          return null;
        }else{
          return el;
        }
      })
    });
  };

  editItem = (item) => {

    let { filterListOfItems, listOfItems, date, id } = this.state;
    if(item.date === '' && item.id === ''){
      item.date = date;
      item.id = id;
    }

    const filterList = this.returnEdit(filterListOfItems, item);
    const mainList = this.returnEdit(listOfItems, item);
    this.setState({ filterListOfItems: filterList, listOfItems: mainList });
  };

  returnEdit = (items, item) =>{

    const editItem = items.filter((el) => {
      if(el.id === item.id){
        return item;
      }else{
        return null;
      }
    });
   const filterItems = items.map(element => {
      if (element.id === editItem[0].id) {
        return item;
      } else {
        return element;
      }
    });
    return filterItems;
  }

  render() {
    return (
      <>
        <Month date={date => this.setDate(date)} />
        <ListContainer
          data={this.state}
          addItem={(item, id) => this.addItemToArray(item, id)}
          removeItem={item => this.removeItem(item)}
          editItem={item => this.editItem(item)}
        />
        <Amount itemsArray={this.state.filterListOfItems}/>
      </>
    );
  }
}

export { MainContent };
