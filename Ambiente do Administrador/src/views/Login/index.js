import React from 'react';
import * as S from './styles';


//componentes
import Formulario from '../../components/FormularioLogin';


function Login(){
    return (
        <S.Conteiner>
            
            <S.LeftSide>
                
            </S.LeftSide>
            <S.RightSide>
                <Formulario />
            </S.RightSide>
        </S.Conteiner>
    )
}

export default Login;