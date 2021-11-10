import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/LogoCinza.svg';
import iconeSair from '../../assets/IconeSair.png';

function Header({nameUser}){

    return (
        <S.Container>

            <S.LeftSide>
                
                <div className="icone">
                    <object 
                        type="image/svg+xml" data={logo}>
                    </object>
                </div>
               
                <S.Content>
                    <strong className="name">Olá, {nameUser}</strong>
                </S.Content>
            </S.LeftSide>

            <S.RightSide>
                <Link to="/usuario/perfil"><h1>Perfil</h1></Link>

                <Link to="/usuario">
                    <img src={iconeSair} alt="Icone Sair"/>
                </Link>
                
            </S.RightSide>
            
        </S.Container>
    )
}

export default Header;