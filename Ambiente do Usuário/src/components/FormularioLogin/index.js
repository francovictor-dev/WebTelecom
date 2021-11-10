import React, { useState } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/LogoVermelhaEscura.svg';
import api from '../../services/api';

function Formulario(){

    const [cpf, setCpf] = useState("");
    const [notification, setNotification] = useState("");
    const history = useHistory();

    
    async function Login(){

        let cpfNum = cpf.replace(/[^0-9]/g, '');

        await api.post('/user/auth', {
            cpf:cpfNum
        }).then(res => {
            //alert(res.data.usuario.name);
            setNotification("");
            localStorage.setItem('token', res.data.token);
            history.push('/usuario/home');
        }).catch(err => {
            setNotification(err.response.data.error);
        })
    }

    return (
        <S.Container>
            <div className="content">
                <object 
                    type="image/svg+xml" data={logo}>
                </object>


                <div className="notification">
                    <label>{notification}</label>
                </div>
                

                <input type="text" placeholder="CPF" 
                    onChange={e => setCpf(e.target.value)} value={cpf}
                />

                <input type="button" 
                    value="Entrar" onClick={Login}/>
            </div>
            
        </S.Container>
    )
}

export default Formulario;