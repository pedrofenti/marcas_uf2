import React, { Component } from 'react'; //importa React y el componente del modulo

class ItemList extends Component { //clase ItemList que hereda de Component
  render() {
    return (
      <li>{this.props.item} <button>X</button></li>
    );
  }
}

export default ItemList; //exportar este modulo como ItemList
