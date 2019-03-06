import React from "react";
import Button from '@material-ui/core/Button';

class Month extends React.Component{

    constructor(){
        super();
        this.state = {
            year: 2019,
            month: 0,
            date: 'Jan 2019'
        }

        this.handleDate = this.handleDate.bind(this);
    }
    handleDate(e){
        let {year, month} = this.state;
        this.setState({month: e === "plus" ? month += 1 : month -= 1 });
        let newDate = new Date(year, month);
        newDate = newDate.toLocaleString('en-us', {year: 'numeric', month: 'short'});
        this.setState({date: newDate});
        //console.log(newDate);
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
