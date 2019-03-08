import React from 'react';

class EditItem extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
        }

        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({ [name]: value });
        
        //this.props.editItem(value);
    }

    render(){
        const {name, data, isClick} = this.props;
        if(isClick !== true )
        {
            return(
                <>{name}</>
            );
        }
        else{
            return(
                <input onChange={this.handleChange} type="text" name="name" value={this.state.value}></input>
            );
        }
        
    }
}

export { EditItem };