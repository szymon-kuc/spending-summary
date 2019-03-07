import React from 'react';
import TableCell from '@material-ui/core/TableCell';

class EditItem extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            gross: '',
            vat: '',
            net: ''
        }

        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({ [name]: value });
        
    }

    render(){
        const {name, isClick} = this.props;
        if(isClick !== true)
        {
            return(
                <>
                <TableCell>{name.Name}</TableCell>
                <TableCell>{name.Gross}</TableCell>
                <TableCell>{name.Vat}</TableCell>
                <TableCell>{name.Net}</TableCell>
                </>
            );
        }
        else{
            return(
                <>
                <TableCell><input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input></TableCell>
                <TableCell><input onChange={this.handleChange} type="text" name="gross" value={this.state.gross}></input></TableCell>
                <TableCell><input onChange={this.handleChange} type="text" name="vat" value={this.state.vat}></input></TableCell>
                <TableCell><input onChange={this.handleChange} type="text" name="net" value={this.state.net}></input></TableCell>
                </>
            );
        }
        
    }
}

export { EditItem };