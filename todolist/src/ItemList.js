import React, { Component } from 'react'; //importa React y el componente del modulo

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
      <li>{this.props.item} <button className="delete"
			onClick={this.removeItem}>X</button></li>
    );
  }
}

export default ItemList; //exportar este modulo como ItemList
