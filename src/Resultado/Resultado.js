import React from 'react';

class Resultado extends React.Component{
    render(){
        return(
            <div>
               <p >El resultado de la multiplicación es: {this.props.valor}</p>
            </div>
        )
    }
}

export default Resultado;