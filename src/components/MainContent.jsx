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
      id: '',
      amount: [],
      amountObj: { amountOfGross: 0, amountOfNet: 0 }
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
    this.amount(newArray);
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
    this.setState(prevState => ({
      ...prevState,
      amountObj: { amountOfGross: prevState.amountObj.amountOfGross - item.Gross, amountOfNet: prevState.amountObj.amountOfNet - item.Net },
      listOfItems: prevState.listOfItems.filter((el) => {
        if (el.id === item.id) {
          return null;
        } else {
          return el;
        }
      }),
      filterListOfItems: prevState.filterListOfItems.filter((el) => {
        if (el.id === item.id) {
          return null;
        } else {
          return el;
        }
      })
    }));
  };

  editItem = (item) => {

    let { filterListOfItems, listOfItems } = this.state;

    const filterList = this.returnEdit(filterListOfItems, item);
    const mainList = this.returnEdit(listOfItems, item);
    this.setState({ filterListOfItems: filterList, listOfItems: mainList });
    this.amount(filterList);
  };

  returnEdit = (items, item) => {
    const filterItems = items.map(element => {
      if (element.id === item.id) {
        return item;
      } else {
        return element;
      }
    });
    return filterItems;

  }
  amount = (items) => {
    const { date } = this.state;
    let amountObj = { amountOfGross: 0, amountOfNet: 0, id: date };

    items.forEach((el) => {
      amountObj.amountOfGross += el.Gross;
      amountObj.amountOfNet += el.Net;
    });

    this.setState({ amountObj });
    this.setState(prevState => ({
      ...prevState,
      amount: prevState.amount.filter((el) => {
        if (el.id === date) {
          el.amountOfGross += amountObj.amountOfGross;
          el.amountOfNet += amountObj.amountOfNet;
        }
        return el;
      })
    }));
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
        <Amount amount={this.state.amountObj} />
      </>
    );
  }
}

export { MainContent };
