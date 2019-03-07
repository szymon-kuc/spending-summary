import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteButton from './DeleteButton';
import {EditItem} from './Edit';

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
                        <EditItem handleEdit={index} />
                    </TableCell>
                </TableRow>
    
        );
    })}
     </TableBody>
    </Table>
    </>           
);
export {DrawTable}; 