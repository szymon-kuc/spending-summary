import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const DrawTable = ({itemsArray}) => (
    <>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gross</TableCell>
                <TableCell>VAT</TableCell>
                <TableCell>NET</TableCell>
            </TableRow>
        </TableHead>
    {itemsArray.map((item, index) => {
        return (
            <TableBody key={index}>
                <TableRow>
                    <TableCell>{item.Name}</TableCell>
                    <TableCell>{item.Gross}</TableCell>
                    <TableCell>{item.Vat}</TableCell>
                    <TableCell>{item.Net}</TableCell>
                </TableRow>
            </TableBody>
        );
    })}
    </Table>
    </>           
);
export {DrawTable}; 