import React, { Component } from 'react'; //importa React y el componente del modulo
import ItemList from './ItemList';


class TodoList extends Component { //clase TodoList que hereda de Component
	
	constructor (props) {
		
		super(props);

		this.state = {
			items : []
		};

		this.addItem = this.addItem.bind(this);

	}
		
	addItem (e) {
	e.preventDefault();
	
	let text_v = document.getElementById("text-task").value;

	this.state.items.push({id:1, item:text_v});

	this.setState({ items: this.state.items  })

}

render() {
	
		let list = this.state.items.map( (todo_item) => {
			return (<ItemList item={todo_item.item}/>);
		});
	
    return (
      <div className="TodoList">
      	<h1>Welcome to your list</h1>
        <ul>
					{list}					
				</ul>
				<form onSubmit={this.addItem}>
				<p><input type="text" id="text-task" /></p>
				<p><button type="submit">Añadir</button></p>
				</form>
      </div>
    );
  }
}

export default TodoList; //exportar este modulo como TodoList
