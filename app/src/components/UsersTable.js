import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getUsersRange } from '../actions/index'

class UsersTable extends Component {
    componentDidMount(){
        this.props.getUsersRange(0);
    }
    render(){
        const { history } = this.props;
        return(
            <div>
                <Paper>
                    <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Login</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.usersList.usersList.map((user, ix) => {
                                    return (
                                    <TableRow 
                                    hover={true} 
                                    key={ix} 
                                    onClick={() => {history.push({ pathname:`/${user.login}/details`, state: { userInfo: user}})}}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.login}</TableCell>
                                    </TableRow> 
                                    );
                                })}
                            </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUsersRange })(withRouter(UsersTable));