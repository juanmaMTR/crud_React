import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Menu extends React.Component {
    constructor(){
        super()
    }
    render() {
      return (
        <div id='menu'>
            <ul>
              <li>
              Elemento1
              <ol>
                <li>Elemento 1.1</li>
              </ol>
              </li>
              <li>Elemento2</li>
              <li>
                Elemento3
                <ol>
                  <li>Elemento 3.1</li>
                  <li>Elemento 3.2</li>
                </ol>
              </li>
            </ul>
        </div>
      );
    }
}

class Formulario extends React.Component {
    constructor(){
        super()
    }
    /*handleClick(i){
        const newSquares=this.state.squares.slice()
        newSquares[i]=this.state.turnoX ? 'X':'O'
        if(this.comprobarGanador(newSquares)){
            console.log('Hay Ganador!!!!');
        }
        this.setState({
            squares:newSquares,
            turnoX: !this.state.turnoX,
        })
        //console.log(i); //Muestra la posición que se pulsa
    }*/
    /*renderSquare(i) {
      return <Square value={this.state.squares[i]}
                onClick={()=>this.handleClick(i)}
            />;
    }*/

    render() {
      return (
        <div id='formulario'>
            <form>
                <Campos />
                <input type="submit" value="Enviar" />
            </form>
        </div>
      );
    }
}

class Campos extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div id='campos'>
                <label>
                    Nombre:
                    <input type="text" placeholder="Nombre"/>
                </label>
                <br />
                <label>
                    Apellidos:
                    <input type="text" placeholder="Apellidos"/>
                </label>
                <br />
                <label>
                    Correo:
                    <input type="mail" placeholder="Correo"/>
                </label>
                <br />
                <label>
                    DNI:
                    <input type="text" placeholder="DNI"/>
                </label>
            </div>

        );
    }
}

class Pagina extends React.Component {
    render() {
      return (
        <div className="pagina">
          <Menu />
          <Formulario />
        </div>
      );
    }
}

  // ========================================

ReactDOM.render(
    <Pagina />,
    document.getElementById('root')
);
