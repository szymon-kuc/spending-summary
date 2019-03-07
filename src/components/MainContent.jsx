import React from "react";
import { Month } from "./Month";
<<<<<<< HEAD
import { ListContainer } from './ListContainer';
import { filter} from 'lodash';

class MainContent extends React.Component{
    constructor(){
        super();
        this.state = {
            listOfItems: [],
            filterListOfItems: [],
            date: "Jan 2019",
            isClick: false,
            editItemIndex: ''
        }

        this.addItemToArray = this.addItemToArray.bind(this);
        this.filterItemsByDate = this.filterItemsByDate.bind(this);
        this.setDate = this.setDate.bind(this);
        this.handleChange.bind(this);
    }

    setDate(date){
        this.setState({date});
        this.filterItemsByDate(date);
    }

    filterItemsByDate(date){
        const { listOfItems } = this.state;

        let newArray = filter(listOfItems, {id: date});

        this.setState({filterListOfItems: newArray})
    }

    addItemToArray(item){
        this.setState(prevState => ({
            ...prevState,
            listOfItems: prevState.listOfItems.concat(item),
            filterListOfItems: prevState.filterListOfItems.concat(item)
          }));
    }

    removeItem = item => {
        this.setState(prevState => ({
            listOfItems: prevState.listOfItems.filter((row, i)=>{
                return i !== item;
            }),
            filterListOfItems: prevState.filterListOfItems.filter((row, i)=>{
                return i !== item;
            }),
        }));
    }

    editItem = item =>{
        
        this.setState({editItemIndex: item});
        if(this.state.isClick === false ){
            this.setState({isClick: true});
        }
        else{
            this.setState({isClick: false});
        }
        //let { filterListOfItems } = this.state;

    //     let editItem = filterListOfItems.filter((row, i)=>{
    //         return i === item;
    //     });
    //    const element = <input type="text" name="value" onChange={this.handleChange}></input>;
        
    //   filterListOfItems.forEach(item => {
    //         if(item.Name === editItem[0].Name){
    //             item = editItem[0];
    //         }
    //    });
       
    //    this.setState({filterListOfItems});
    }
    handleChange(event){
        const { value } = event.target;
        //this.setState({ [name]: value });
        console.log(value);
    }   
    
    render(){
        return(
            <>
                <Month date={(date)=>this.setDate(date)}/>
                <ListContainer data={this.state} addItem={item => this.addItemToArray(item)} removeItem={item => this.removeItem(item)} editItem={item => this.editItem(item)}/>
            </>
        );
    }
=======
import { ListContainer } from "./ListContainer";
import { filter } from "lodash";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfItems: [],
      filterListOfItems: [],
      date: "Jan 2019"
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

    let filterListOfItems = listOfItems;

    let newArray = filter(filterListOfItems, { id: date });

    this.setState({ filterListOfItems: newArray });
  }
  addItemToArray(item) {
    this.setState(prevState => ({
      ...prevState,
      listOfItems: prevState.listOfItems.concat(item),
      filterListOfItems: prevState.filterListOfItems.concat(item)
    }));
  }
  removeItem = item => {
    this.setState({
      listOfItems: this.state.listOfItems.filter((row, i) => {
        return i !== item;
      }),
      filterListOfItems: this.state.filterListOfItems.filter((row, i) => {
        return i !== item;
      })
    });
  };

  editItem = (item, index) => {
    item.id = this.state.date;
    let { filterListOfItems, listOfItems } = this.state;

    let editItem = filterListOfItems.filter((row, i) => {
      return i === index;
    });
    let newArray = filterListOfItems.map(element => {
      if (element.Name === editItem[0].Name) {
        return item;
      } else {
        return element;
      }
    });
    let newArray2 = listOfItems.map(element => {
      if (element.Name === editItem[0].Name) {
        return item;
      } else {
        return element;
      }
    });

    this.setState({ filterListOfItems: newArray, listOfItems: newArray2 });
  };

  render() {
    return (
      <>
        <Month date={date => this.setDate(date)} />
        <ListContainer
          data={this.state}
          addItem={item => this.addItemToArray(item)}
          removeItem={item => this.removeItem(item)}
          editItem={(item, index) => this.editItem(item, index)}
        />
      </>
    );
  }
>>>>>>> aNewBranch
}

export { MainContent };
