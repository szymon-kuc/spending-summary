import React from "react";
import Button from '@material-ui/core/Button';
import moment from 'moment';
class Month extends React.Component{

    constructor(){
        super();
        this.state = {
            date: 'Jan 2019'
        }

        this.handleDate = this.handleDate.bind(this);
    }
    handleDate(e){
        let newDate = moment(this.state.date, 'MMM YYYY');
        newDate = e === "plus" ? newDate.add(1, 'month') : newDate.add(-1, 'month');
        newDate = newDate.format("MMM YYYY");

        this.setState({date: newDate});
        this.props.date(newDate);
    }
    render(){
        let { date } = this.state;
        return(
            <>
            <div className="center">
                <Button color="primary" onClick={() => this.handleDate("minus")}>
                <i className="material-icons">chevron_left</i></Button>
                {date}
                <Button color="primary" onClick={() => this.handleDate("plus")}>
                <i className="material-icons">chevron_right</i></Button>
            </div>
            </>
        );
    }
}

export { Month };
