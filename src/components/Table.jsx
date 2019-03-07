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

    handleClick = (index) => {
        this.props.editItem(index);
    }
    render(){
        const { itemsArray, removeItem, isClick, editItemIndex} = this.props;
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
                        <EditItem data={this.state} name={item} index={index} isClick={isClick} editItemIndex={editItemIndex}/>
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
        })}
        </TableBody>
        </Table>
        </>      
            )}     
}
export {DrawTable}; 