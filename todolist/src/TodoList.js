import React, { Component } from 'react'; //importa React y el componente del modulo
import ItemList from './ItemList';

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class TodoList extends Component { //clase TodoList que hereda de Component
	
	//constructor del objeto
	constructor (props) { 
		
		//super es el padre
		super(props); 

		//estado de la lista de items "actual" "en ese momento" 
		//al inicializarla esta vacia
		this.state = {
			items : []
		}
		
		//variable para las ids
		this.last_id = 0;
		this.num = 0;

    //vinculamos la funcion addItem a nuestro objeto
		this.addItem = this.addItem.bind(this);
    //vinculamos la funcion removeItem a nuestro objeto
		this.removeItem = this.removeItem.bind(this);

		
		fetch("//192.168.1.196:8081/get_items")
				.then(res => res.json())
				.then(data => {
					data.forEach(item => {
						this.state.items.push({
							id: item.id,
							item: item.item
							});
						});

					this.setState({ items: this.state.items });

					});

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
		this.num++;
	
		//hacemos el push de su valor en el array del estado
		this.state.items.push({id: this.last_id, item:text_v});

		//funcion para realizar los cambios (internamente llamamos a render();)
		this.setState({ 
				items: this.state.items  
		});	


		//cogemos los datos y los convertimos a un objeto JS y los enviamos a la ip y puerto para verlos
		let item_data = JSON.stringify({
				id: this.last_id,
				item: text_v
		});

			fetch("//192.168.1.196:8081/submit", {
					method: "POST",
					headers: {
							'Content-Type':'text/json'
					},
					body: item_data
			});

		}


	//funcion para borrar los items de la web
	removeItem(id_item) {
	
		console.log("Remove" + id_item);	
		//bucle para encontrar la casilla dentro del array cn ese id
		//triple igual, para igual el tipo tmb
		//splice para borrar tanto el contenido como la casilla del array, solo 1

		for (let i = 0; i < this.state.items.length; i++) {
			if (this.state.items[i].id === id_item){

				let item_delete = JSON.stringify({ 
						id: this.state.items[i].id,
						item: this.state.items[i].item
				});

        fetch("//192.168.1.196:8081/remove", {
        		method: "POST",
            headers:{
            		'Content-type':'text/json'
            },
            body: item_delete
         });

				this.state.items.splice(i,1);
				break;
			}
		}

		this.num--;

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
        <p>Things to do: {this.num}</p>
				<form onSubmit={this.addItem}>
				<p><TextField type="text" id="text-task" autoComplete="off" placeholder="Add a Todo"/>
				<Button color="primary" variant="contained" type="submit">Añadir</Button></p>
				</form>
				<ul>
					{list}					
				</ul>
      </div>
    );
  }
}

export default TodoList; //exportar este modulo como TodoList
