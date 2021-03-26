import React, { Component } from 'react'; //importa React y el componente del modulo
import ItemList from './ItemList';


class TodoList extends Component { //clase TodoList que hereda de Component
addItem (e) {
e.preventDefault();

}

render() {
    return (
      <div className="TodoList">
      	<h1>Welcome to your list</h1>
        <ul>
					<ItemList item="Uno"/>
					<ItemList item="Dos"/>
					<ItemList item="Tres"/>
				</ul>
				<form onSubmit={this.addItem}>
				<p><input type="text" /></p>
				<p><button type="submit">Añadir</button></p>
				</form>
      </div>
    );
  }
}

export default TodoList; //exportar este modulo como TodoList
