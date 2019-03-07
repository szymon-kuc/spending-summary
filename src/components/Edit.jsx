import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';

class EditItem extends React.Component{

    render(){
        return(
            <>
            <IconButton>
                <Edit />
            </IconButton>
            </>
        );
    }
}

export { EditItem };