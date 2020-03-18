import React from 'react'
import './estilos.css';
import UsersPage from './UsersPage'

class Users extends React.Component{
  handleClick= position => this.props.onClick(position);
render(){
  return(
      <div  className="contenedor">
      <h1>Fleitas </h1>

      <div className="imagen">


      </div>
      </div>
  )
}
}

export default Users
