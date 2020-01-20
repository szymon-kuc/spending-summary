import React from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {

    handleText = (event) => {
        const { value } = event.target;
        this.props.handleSearch(value);
      }

    render(){

        return(
                <TextField
                    id="searchText"
                    label="Search..."
                    value={this.props.text}
                    name="searchText"
                    onChange={this.handleText}
                />
        );
    }
}

export { Search };