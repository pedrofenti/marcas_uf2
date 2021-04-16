import React, { Component } from 'react'; //importa React y el componente del modulo
import ItemList from './ItemList';

import ".TodoList.css"

class TodoList extends Component { //clase TodoList que hereda de Component
	
	//constructor del objeto
	constructor (props) { 
		
		//super es el padre
		super(props); 

		//estado
		this.state = {
			items : []
		};
		
		//variable para las ids
		this.last_id = 0;

    //vinculamos la funcion addItem a nuestro objeto
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);

		}
	
	//funcion para anyadir en la lista
	addItem (e) {

		//hace que no se envie el formulario por defecto
		e.preventDefault();
	
		//cogemos lo que haya en el formulario
		let text_v = document.getElementById("text-task").value;
		document.getElementById("text-task").value = "";
		document.getElementById("text-task").focus();

		this.last_id++;
	
		//hacemos el push de su valor en el array del estado
		this.state.items.push({id: this.last_id, item:text_v});
	
		//funcion para realizar los cambios (internamente llamamos a render();)
		this.setState({ items: this.state.items  });	
		}

	removeItem(id_item) {
	
		console.log("Remove" + id_item);	
		//bucle para encontrar la casilla dentro del array cn ese id
		//triple igual, para igual el tipo tmb
		//splice para borrar tanto el contenido como la casilla del array, solo 1

		for (let i = 0; i < this.state.items.length; i++) {
			if (this.state.items[i].id === id_item){
				this.state.items.splice(i,1);
				break;
			}
		}	
	
		//funcion para realizar los cambios (internamente llamamos a render();)
		this.setState({ items: this.state.items  });	
	

	}
	
	render() {
	
		//map es un bucle del estado
		let list = this.state.items.map( (todo_item) => {
			return (<ItemList item={todo_item.item}
												id_item={todo_item.id}
												parentRemove={this.removeItem}/>);
		});
	
    return (
      <div className="TodoList">
        <p>Num Items: NUM</p>
				<form onSubmit={this.addItem}>
				<p><input type="text" id="text-task" />
				<button type="submit">Añadir</button></p>
				</form>
				<ul>
					{list}					
				</ul>
      </div>
    );
  }
}

export default TodoList; //exportar este modulo como TodoList
