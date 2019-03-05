import React from 'react';
import Button from '@material-ui/core/Button';

class AddNewItem extends React.Component {
    render(){
        return(
            <>
                  <Button variant="contained" color="primary" className="button">
                  <i className="material-icons add">add</i>
                </Button>
             
            </>
        );

    }
}

export {AddNewItem};