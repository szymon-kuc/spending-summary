import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Amount extends React.Component {

    render() {
        const { amount } = this.props;
        return (
            <>
                <Paper style={{ width: "60%", margin: "0 auto" }}>
                    <div style={{ display: "table", margin: "0 auto", marginTop: "60px", height: 100 }}>
                        <Typography variant="h5" component="h3" style={{ float: "left", marginRight: "100px", lineHeight: "100px" }}>
                            Gross: ${amount.amountOfGross}
                        </Typography>
                        <Typography variant="h5" component="h3" style={{ float: "left", lineHeight: "100px" }} >
                            Net: ${amount.amountOfNet}
                        </Typography>
                    </div>
                </Paper>
            </>
        );
    }
}

export { Amount };