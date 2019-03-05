import React from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {

    state = {
        searchText: ''
    }

    handleText = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    render(){

        return(
                <TextField
                    id="searchText"
                    label="Search..."
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.handleText}
                />
        );
    }
}

export { Search };