import React, { Component } from 'react'; //importa React y el componente del modulo

class Footer extends Component { //clase Footer que hereda de Component
  render() {
    return (
<footer>
<div className="copyright">
	<p>Copyright (c) 2020 - ENTI M06-UF2</p>
</div>
</footer>
	  );
  }
}

export default Footer; //exportar este modulo como App
