import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import UserDetail from '../components/UserDetail';
import UserRepositories from '../components/UserRepositories';
import { getUserDetails, getUserRepositories } from '../actions/index';
import { connect } from 'react-redux';

class UserDetails extends Component {
    componentDidMount(){
        this.props.getUserDetails(this.props.location.state.userInfo.login)
        this.props.getUserRepositories(this.props.location.state.userInfo.login)
    }
    render() {
        return(
            <div>
                <Grid container justify="center" spacing={4}>
                        <Grid item xs={5}>
                            <UserDetail details={this.props.details}/>
                        </Grid>
                    <Grid item xs={5}>
                        <UserRepositories repositories={this.props.repositories} />
                    </Grid>
                </Grid>
            
            </div>
        );
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, { getUserDetails, getUserRepositories })(UserDetails);