import React from 'react';
import './App.css';
import Header from './Header/Header';
import Multiplicar from './Multiplicar/Multiplicar';
import Resultado from './Resultado/Resultado';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        entrada :0,
        resultado:0,
        botonPulsado: 0,
        boton_1: 37,
        boton_2: 43
    }
  }

  Resultado = (event) =>{

    let multi= event.target.value * this.state.botonPulsado;
    this.setState ({
        entrada: event.target.value,
        resultado : multi
    })
  }

  Multi = (numero) =>{

    let multi = this.state.entrada * numero
    this.setState ({  
        resultado : multi,
        botonPulsado: numero
    })
  }
  render() {
    return (
      <div className="App">
        <Header titulo="Escribe un número y pulsa uno de los dos botones" />

        <Multiplicar cambiando={this.Resultado}/><br></br>
        <button onClick={()=>this.Multi(this.state.boton_1)}> X*37 </button>
        <button onClick={()=>this.Multi(this.state.boton_2)}> X*43 </button>
        
        <Resultado valor={this.state.resultado}/>
        
        <p>El botón que está pulsado es: x {this.state.botonPulsado}</p>

      </div>

    )
  }

}

export default App;
