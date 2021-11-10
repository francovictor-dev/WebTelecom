import React, { useState } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/LogoVermelhaEscura.svg';
import api from '../../services/api';

function Formulario(){

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState("");
    const history = useHistory();


    async function Login(){
        await api.post('/admin/auth', {
            user, password
        }).then(res => {
            //alert(res.data.token);
            setNotification("");
            localStorage.setItem('token', res.data.token);
            history.push('/admin/home');
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
                

                <input type="text" placeholder="Usuário" 
                    onChange={e => setUser(e.target.value)} value={user}
                />

                <input type="password" placeholder="Senha" 
                    onChange={e => setPassword(e.target.value)} value={password}
                />

                <input type="button" 
                    value="Entrar" onClick={Login}/>
            </div>
            
        </S.Container>
    )
}

export default Formulario;