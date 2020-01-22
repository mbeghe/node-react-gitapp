import React from 'react';
import { Grid } from '@material-ui/core';
import UsersTable from '../components/UsersTable';
import PaginationButton from '../components/PaginationButton';

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item xs={10}>
          <UsersTable />
        </Grid>
        <Grid container justify="flex-end" xs={10}
        style={{
          padding: 10
        }}>
        <Grid item>
          <PaginationButton
            variant="outlined"
            color="primary"
          />
        </Grid>
        </Grid>
        
      </Grid>
      
    </div>
  );
}

export default App;
