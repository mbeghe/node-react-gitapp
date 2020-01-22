import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getUsersRange } from '../actions/index'

function handleClick() {
  this.props.getUsersRange(this.props.usersList.rangeIndex)
}
class PaginationButton extends Component {
  
  render(){

    return (
      <div>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleClick.bind(this)}
        >
          Next page
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getUsersRange })(PaginationButton)