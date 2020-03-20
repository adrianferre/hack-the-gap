import React from 'react'
import './estilos.css';
import UsersPage from './UsersPage'

class Users extends React.Component {
  handleClick = position => this.props.onClick(position);
  render() {
    return (
      <div class="contenedor">
        <div className="Rectangle-10">
          <div className="Grupos-Usuarios">
            <span>Grupos & Usuariosss</span>
          </div>
          <div className="Line-3">
          </div>
          <div className="Ipsum-Copy-10">
            <span>Todos los roles</span>
          </div>
          <div className="Shape">
          </div>
          <div className="Rectangle-3">
            <sapn className="Buscar"> Buscar...</sapn>
          </div>
        </div>

      </div>
    )
  }
}

export default Users
