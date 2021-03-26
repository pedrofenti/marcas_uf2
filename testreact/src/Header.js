import React, { Component } from 'react'; //importa React y el componente del modulo

class Header extends Component { //clase Header que hereda de Component
  render() {
    return (
<div>
<h1>Cabecera</h1>
<ul>
	<li>Opcion</li>
	<li>Otra Opcion</li>
</ul>
</div>
	  );
  }
}

export default Header; //exportar este modulo como App
