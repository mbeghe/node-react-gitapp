import React, { Component } from 'react';
import { Paper, Link } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class UserRepositories extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>URL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { this.props.repositories.loading ? console.log('Loading repos...'):
                                this.props.repositories.repositories.map((repo, ix) => {
                                    return (
                                        <TableRow hover={true} key={ix}>
                                            <TableCell>{repo.id}</TableCell>
                                            <TableCell>{repo.name}</TableCell>
                                            <TableCell>
                                                <Link href={repo.URL}>
                                                    Repository link
                                                </Link>
                                            </TableCell>
                                        </TableRow> 
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default UserRepositories;