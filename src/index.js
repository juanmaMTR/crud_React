import react from 'react';
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
              <Elemento />
              <Elemento />
              <Elemento />
              <ol>
                <Elemento />
                <Elemento />
              </ol>
            </ul>
        </div>
      );
    }
}

class Elemento extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <li>Elemento</li>
        )
    }
}

class Formulario extends React.Component {
    constructor(){
        super()
    }
    handleClick(checked){
        if(checked==true){
            let formulario=document.getElementById('formulario')
            formulario.style.display="none"
            let listaResultado=document.getElementById('listaResultado')
            listaResultado.style.display="block"
        }
    }
    render() {
      return (
        <div id='formulario'>
            <form>
                <Campos />
                <input type="button" value="Enviar" onClick={()=>this.handleClick(true)}/>
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

class ListaResultado extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='listaResultado'>
                <Resultados />
                <Resultados />
                <Resultados />
            </div>
        )
    }
    aleatorio(){
        console.log('entraaaa');
    }
}

class Resultados extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id='resultados'>
                <h1>Titulo</h1>
                <p>Descripción</p>
            </div>
        )
    }
}

class Pagina extends React.Component {
    render() {
      return (
        <div className="pagina">
          <Menu />
          <Formulario />
          <ListaResultado />
        </div>
      );
    }
}

  // ========================================

ReactDOM.render(
    <Pagina />,
    document.getElementById('root')
);
