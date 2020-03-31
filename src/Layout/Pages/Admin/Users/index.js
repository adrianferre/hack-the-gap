import React from 'react'
import './estilos.css';
import UsersPage from './UsersPage';
import Imagen from './imagenes/flecha.svg';
import Imagen1 from './imagenes/descarga.svg';
import Imagen2 from './imagenes/tacho.svg';
import Imagen3 from './imagenes/buscador.svg';
import Imagen4 from './imagenes/seleccion.svg';
import Imagen5 from './imagenes/ajuste.svg';
import Imagen6 from './imagenes/tacho2.svg';
import Imagen7 from './imagenes/editar.svg';
import Imagen8 from './imagenes/flecha1.svg';


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
            <div className="Rectangle-2">  <img className="img1"  src={Imagen4} width="24" height="24" /> <img className="img1"  src={Imagen8} width="24" height="24" /> <div className="sera"><span className="Grupo-Buenos-Aires">Grupo Buenos Aires</span> </div>
              <div className="AlFondo">
                  <img  className="AlFondo" src={Imagen5} width="24" height="24" />
              </div>
            </div>

            <div className="Rectangle-2-Copy ">  <img className="img2"  src={Imagen4} width="24" height="24" />
            <div className="AlFondo"> <div className="Rectangle-4"> <span className="No-disponible">No disponible</span> </div><img  className="editar3" src={Imagen7} width="24" height="24" />
                  <img  className="AlFondo2" src={Imagen6} width="24" height="24" />
              </div>
            </div>
            <div>   <img className="img3"  src={Imagen4} width="24" height="24" />
            <div  className="AlFondo"> <div className="Rectangle-4-copy1"> <span className="No-disponible">Disponible</span></div>  <img  className="editarante" src={Imagen7} width="24" height="24" />
            <img  className="AlFondo1" src={Imagen6} width="24" height="24" />
            </div>
            </div>

            <div className="Rectangle-2-Copy-copy">  <img className="img4"  src={Imagen4} width="24" height="24" />
            <div  className="AlFondo"> <div className="Rectangle-4-copy2"> <span className="No-disponible">Disponible</span></div><img  className="editar3" src={Imagen7} width="24" height="24" />
            <img  className="AlFondo" src={Imagen6} width="24" height="24" />
            </div>
            </div>
          </div>
          <div className="Rectangle-5">
            <div className="Rectangle-2">  <img className="img1"  src={Imagen4} width="24" height="24" /> <img className="img1"  src={Imagen8} width="24" height="24" /> <div className="sera"><span className="Grupo-Buenos-Aires">Grupo Catamarca</span> </div>
              <div className="AlFondo">
                  <img  className="AlFondo" src={Imagen5} width="24" height="24" />
              </div>
            </div>

            <div className="Rectangle-2-Copy ">  <img className="img2"  src={Imagen4} width="24" height="24" />
            <div className="AlFondo"> <div className="Rectangle-4"> <span className="No-disponible">No disponible</span> </div><img  className="editar3" src={Imagen7} width="24" height="24" />
                  <img  className="AlFondo2" src={Imagen6} width="24" height="24" />
              </div>
            </div>
            <div>   <img className="img3"  src={Imagen4} width="24" height="24" />
            <div  className="AlFondo"> <div className="Rectangle-4-copy1"> <span className="No-disponible">Disponible</span></div>  <img  className="editarante" src={Imagen7} width="24" height="24" />
            <img  className="AlFondo1" src={Imagen6} width="24" height="24" />
            </div>
            </div>

            <div className="Rectangle-2-Copy-copy">  <img className="img4"  src={Imagen4} width="24" height="24" />
            <div  className="AlFondo"> <div className="Rectangle-4-copy2"> <span className="No-disponible">Disponible</span></div><img  className="editar3" src={Imagen7} width="24" height="24" />
            <img  className="AlFondo" src={Imagen6} width="24" height="24" />
            </div>
            </div>
          </div>
        </div>

        </div>








    )
  }
}

export default Users
