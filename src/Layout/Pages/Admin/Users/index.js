import React from 'react'
import './estilos.css';
import UsersPage from './UsersPage';
import Imagen from './imagenes/flecha.svg';
import Imagen1 from './imagenes/descarga.svg';
import Imagen2 from './imagenes/tacho.svg';
import Imagen3 from './imagenes/buscador.svg';

class Users extends React.Component {
  handleClick = position => this.props.onClick(position);
  render() {
    return (
      <div class="contenedor">
        <div className="Rectangle-10">
          <div className="Contenedor2">
          <div className="Grupos-Usuarios">
            <span>Grupos & Usuarios</span>
          </div>
          <div className="Padre-3">
          <div className="Line-3">
          </div>
          </div>
          <div className="Ipsum-Copy-10">
            <span>Todos los roles</span>
          </div>
          <div className="contfle">
          <div className="flecha">
            <img src={Imagen} width="20" height="20" />
          </div>
          </div>
          <div className="Rectangle-3" >
             <img className="Imagen" src={Imagen3} width="25" height="25" />
            <input type="text" name="name" placeholder="Buscar.." />
          </div>
          <div className="imagenes">
          <img className="descarga" src={Imagen1} width="25" height="25" />
          <img src={Imagen2} width="25" height="25" />
          </div>
        </div>
        <div className="desktop_user_groups"></div>
        <div className="Rectangle-5">
        <div className="Rectangle-2"></div>
        <div className="Rectangle-2-Copy "></div>
        <div className="Rectangle-2-Copy-copy"></div>
        </div>
        </div>
        </div>


    )
  }
}

export default Users
