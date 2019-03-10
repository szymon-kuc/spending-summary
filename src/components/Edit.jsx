import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import TableCell from "@material-ui/core/TableCell";
import TextField from '@material-ui/core/TextField';

class EditItem extends React.Component {
  state = {
    Name: "",
    Gross: 0,
    Vat: this.props.itemsArray[this.props.index].Vat,
    Net: 0,
    date: this.props.itemsArray[this.props.index].date,
    id: this.props.itemsArray[this.props.index].id
  };

  componentDidMount() {
    const { index, itemsArray } = this.props;
    this.setState({ Name: itemsArray[index].Name, Gross: itemsArray[index].Gross, Vat: itemsArray[index].Vat, Net: itemsArray[index].Net })
  }
  handleChange = event => {
    const { name, value } = event.target;
    const { Gross, Vat } = this.state;

    this.setState({ [name]: name === "Name" ? value : parseInt(value) });

    if (name === "Vat" && !isNaN(value) && !isNaN(Gross)) {
      let netto = (1 - value / 100) * Gross;
      this.setState({ Net: netto });
    } else if (name === "Gross" && Vat !== 0) {
      let netto = (1 - Vat / 100) * value;
      this.setState({ Net: netto });
    }

  };
  handleClick = () => {
    const { editItem, index, handleClick } = this.props;
    let { Gross, Vat, Net } = this.state;
    if (!isNaN(Gross) && !isNaN(Vat) && !isNaN(Net)) {
      editItem(this.state);
      handleClick(index);
    }
    else {
      alert('Please insert a number!');
    }
  };
  render() {
    const { index, itemsArray } = this.props;
    return (
      <>
        <TableCell>
          <TextField placeholder="Name" label="Name" onChange={this.handleChange} name="Name" margin="dense" variant="outlined" defaultValue={itemsArray[index].Name} />
        </TableCell>
        <TableCell>
          <TextField label="Gross $" onChange={this.handleChange} name="Gross" margin="dense" variant="outlined" defaultValue={itemsArray[index].Gross} />
        </TableCell>
        <TableCell>
          <TextField label="VAT %" onChange={this.handleChange} name="Vat" margin="dense" variant="outlined" defaultValue={itemsArray[index].Vat} />
        </TableCell>
        <TableCell>
          <TextField label="Net $" onChange={this.handleChange} name="Net" margin="dense" variant="outlined" value={this.state.Net} />
        </TableCell>
        <TableCell>
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
