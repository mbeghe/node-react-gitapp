import React, { Component } from 'react';
import { Typography, Paper, Grid, Link } from '@material-ui/core';

class UserDetail extends Component {
    render() {
        return(
            <div>
                <Paper>
                    {this.props.details.loading ? console.log('Loading details...') :
                        <div>
                            <Grid container direction="column" justify="center" alignItems="center" >
                                <Grid item xs={12} border={1}>
                                    <Typography variant="h6">ID: {this.props.details.details.id}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">User: {this.props.details.details.login}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link variant="h6" href={this.props.details.details.profile_url}>GitHub URL</Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">User creation date: {this.props.details.details.created}</Typography>
                                </Grid>
                            </Grid>
                            
                        </div>
                    }
                </Paper>
            </div>
        );
    }
}

export default UserDetail;