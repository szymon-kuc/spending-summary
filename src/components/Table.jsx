import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import DeleteButton from './DeleteButton';

const DrawTable = ({itemsArray, removeItem}) => (
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
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>{item.Gross}</TableCell>
                    <TableCell>{item.Vat}</TableCell>
                    <TableCell>{item.Net}</TableCell>
                    <TableCell>
                        <DeleteButton handleClick={() => removeItem(index)} />
                    </TableCell>
                    <TableCell>
                        <IconButton>
                            <Edit />
                        </IconButton>
                    </TableCell>
                </TableRow>
    
        );
    })}
     </TableBody>
    </Table>
    </>           
);
export {DrawTable}; 