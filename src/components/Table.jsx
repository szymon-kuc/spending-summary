import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteButton from "./DeleteButton";
import { EditItem } from "./Edit";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";

class DrawTable extends React.Component {
  state = {
    clickIndex: "",
    isClick: false
  };

  handleClick = index => {
    if (this.state.isClick === false) {
      this.setState({ isClick: true, clickIndex: index });
    } else {
      this.setState({ isClick: false, clickIndex: -1 });
    }
  };
  render() {
    const { itemsArray, removeItem, editItem } = this.props;
    return (
      <>
        <Table style={{ width: "50%", margin: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gross</TableCell>
              <TableCell>VAT</TableCell>
              <TableCell>NET</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsArray.map((item, index) => {
              if (index !== this.state.clickIndex) {
                return (
                  <TableRow key={index}>
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>{item.Gross}</TableCell>
                    <TableCell>{item.Vat}</TableCell>
                    <TableCell>{item.Net}</TableCell>
                    <TableCell>
                      <DeleteButton handleClick={() => removeItem(index)} />
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => this.handleClick(index)}>
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              } else {
                return (
                  <TableRow key={index}>
                    <EditItem
                      item={item}
                      index={index}
                      removeItem={item => removeItem(item)}
                      handleClick={i => this.handleClick(i)}
                      editItem={(item, index) => editItem(item, index)}
                    />
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </>
    );
  }
}
export { DrawTable };
