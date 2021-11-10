import React, { useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import iconeMenu from '../../assets/IconeMenu.png';
//import Gerenciar from '../../components/Gerenciar';

function MenuNav({typeAdmin}){

  const [menuStatus, setMenuStatus] = useState(true);

  function ChangeMenuStatus(){
    if(menuStatus){
      setMenuStatus(false);
    }else{
      setMenuStatus(true);
    }
  }

  const divStyle = typeAdmin === 'AdminComum' ? {display:'none'} : {display:'block'};

  return (
     
      <S.Container actived={menuStatus}>
        <img src={iconeMenu} alt="Botão Menu" onClick={ChangeMenuStatus}/>
        <S.Content actived={menuStatus}>
          <div className="ButtonHide" onClick={ChangeMenuStatus}>
              
              <span>  
                Esconder Menu
              </span>
          </div>  

    
          <Link to="/admin/home/cadastrar">
            <div className="ItemMenu">
                <span>
                  Cadastrar
                </span>
            </div>  
          </Link>

          <Link to="/admin/home/consultar">
            <div className="ItemMenu">
                <span>
                  Consultar
                </span>
            </div> 
          </Link>

          <Link to="/admin/home/gerenciar">
            <div className="ItemMenu"  id="gerenciar" style={divStyle}>
         
                <span>
                  Gerenciar
                </span>

            </div> 
          </Link>

          <div className="ItemBranco">

          </div> 
        </S.Content>

      </S.Container>
      
  )
}

export default MenuNav;