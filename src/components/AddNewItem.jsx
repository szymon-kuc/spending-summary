import React from 'react';
import Button from '@material-ui/core/Button';

class AddNewItem extends React.Component {

    constructor(props){
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleAddItem(){
       let { onNewItemAdd, searchText, date} = this.props;
       let newItem = {Name: searchText, Gross:'', Vat:'', Net:'', id: date};

       onNewItemAdd(newItem);

    }
    render( ){
        return(
            <Button variant="contained" color="primary" className="button" onClick={this.handleAddItem}>
            <i className="material-icons add">add</i>
            </Button> 
        );

    }
}

export {AddNewItem};