import React, { Component } from 'react'; //importa React y el componente del modulo

import { Button } from '@material-ui/core';
import  DeleteIcon  from '@material-ui/icons/Delete';

class ItemList extends Component { //clase ItemList que hereda de Component
  
	constructor (props){
		super(props);

		this.removeItem = this.removeItem.bind(this);
	}

	removeItem(){
		this.props.parentRemove(this.props.id_item);
	}
	
	render() {
    return (
      <li>{this.props.item} <Button className="delete" variant="contained" color="secondary"  onClick={this.removeItem}>{<DeleteIcon />}</Button></li>
    );
  }
}

export default ItemList; //exportar este modulo como ItemList
