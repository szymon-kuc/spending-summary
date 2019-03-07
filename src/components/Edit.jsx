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
}

export { EditItem };
