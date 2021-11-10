import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';

function Perfil(){

    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState('');

    async function Salvar(){

        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        if(!password){
            return setNotification('Senha é obrigatório');
        }

        await api.get('/admin/token', config)
            .then(res => {
                //alert(res.data.usuario)
                api.put('/admin/update/'+res.data.usuario, {password})
                .then(response => {
                    alert('Alteração com sucesso');
                    setNotification('');
                }).catch(error => {
                    setNotification(error.response.data.error);
                })
            }).catch(err => {
                setNotification(err.response.data.error);
            });
    }

    return (
        <S.Container>
            <S.Content>
                              
                <label>Alterar Senha</label>
                <input type="text" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password}/>
                <span>{notification}</span>
                <input type="button" value="Salvar" onClick={Salvar} />
           
            </S.Content>
        </S.Container>
    )
}

export default Perfil;
