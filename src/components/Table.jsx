import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteButton from './DeleteButton';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import {EditItem} from './Edit';

class DrawTable extends React.Component  {
    state = {
        isClick: false,
        index: ''
    }

    handleClick = (item) => {
        this.props.editItem(item);
    }
    render(){
        const { itemsArray, removeItem, editItem, isClick} = this.props;
        return (
        <>
        <Table style={{ width: '50%', margin: 'auto' }}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Gross</TableCell>
                    <TableCell>VAT</TableCell>
                    <TableCell>NET</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
        {itemsArray.map((item, index) => {
            return (
                    <TableRow key={index}>
                        <TableCell><EditItem data={this.state} name={item.Name} index={index} isClick={isClick}/></TableCell>
                        <TableCell><EditItem data={this.state} name={item.Gross} index={index} isClick={isClick}/></TableCell>
                        <TableCell><EditItem data={this.state} name={item.Vat} index={index} isClick={isClick}/></TableCell>
                        <TableCell><EditItem data={this.state} name={item.Net} index={index} isClick={isClick}/></TableCell>
                        <TableCell>
                            <DeleteButton handleClick={() => removeItem(index)} />
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={() => editItem(item)}>
                                <Edit />
                            </IconButton>
                        </TableCell>
                    </TableRow>
        
            );
        })}
        </TableBody>
        </Table>
        </>      
            )}     
}
export {DrawTable}; 