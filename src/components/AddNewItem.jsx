import React from 'react';
import Button from '@material-ui/core/Button';

class AddNewItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: 0,
            alert: ""
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleAddItem(){
       let { onNewItemAdd, searchText, date} = this.props;
       let id = this.state.id + date;
       let newItem = {Name: searchText, Gross:'', Vat:'', Net:'', date: date, id:id};
       if(searchText !== ""){
        this.setState({alert: ""});
        this.setState(prevState => ({
            ...prevState,
                id: prevState.id + 1
          }));
    
           onNewItemAdd(newItem, id);
       }
       else{
           this.setState({alert: "type name!"});
       }
    }

    render( ){
        return(
            <>
                <Button variant="contained" color="primary" className="button" onClick={this.handleAddItem}>
                <i className="material-icons add">add</i>
                </Button> 
                <p className="alert">{this.state.alert}</p>
            </>
        );

    }
}

export {AddNewItem};