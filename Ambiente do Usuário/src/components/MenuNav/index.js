import React, { useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import iconeMenu from '../../assets/IconeMenu.png';
//import Gerenciar from '../../components/Gerenciar';

function MenuNav(props){

  const [menuStatus, setMenuStatus] = useState(true);


  function ChangeMenuStatus(){
    if(menuStatus){
      setMenuStatus(false);
    }else{
      setMenuStatus(true);
    }
  }

  return (
     
      <S.Container actived={menuStatus}>
        <img src={iconeMenu} alt="Botão Menu" onClick={ChangeMenuStatus}/>
        <S.Content actived={menuStatus}>
          <div className="ButtonHide" onClick={ChangeMenuStatus}>
              
              <span>  
                Esconder Menu
              </span>
          </div>  

    
          <Link to="/usuario/boletos">
            <div className="ItemMenu">
                <span>
                  Boletos
                </span>
            </div>  
          </Link>

          <Link to="/usuario/home/">
            <div className="ItemMenu">
                <span>
                  Tutorial
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