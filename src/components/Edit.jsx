<<<<<<< HEAD
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
=======
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import TableCell from "@material-ui/core/TableCell";
import DeleteButton from "./DeleteButton";

class EditItem extends React.Component {
  state = {
    Name: "",
    Gross: "",
    Vat: "",
    Net: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    //console.log(this.state);
  };
  handleClick = () => {
    const { editItem, index, handleClick } = this.props;
    editItem(this.state, index);
    handleClick(index);
  };
  render() {
    const { index, removeItem } = this.props;
    return (
      <>
        <TableCell>
          <input type="text" name="Name" onChange={this.handleChange} />
        </TableCell>
        <TableCell>
          <input type="text" name="Gross" onChange={this.handleChange} />
        </TableCell>
        <TableCell>
          <input type="text" name="Vat" onChange={this.handleChange} />
        </TableCell>
        <TableCell>
          <input type="text" name="Net" onChange={this.handleChange} />
        </TableCell>
        <TableCell>
          <DeleteButton handleClick={() => removeItem(index)} />
        </TableCell>
        <TableCell>
          <IconButton onClick={this.handleClick}>
            <Edit />
          </IconButton>
        </TableCell>
      </>
    );
  }
>>>>>>> aNewBranch
}

export { EditItem };
