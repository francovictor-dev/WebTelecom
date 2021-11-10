import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

//componentes
import Header from '../../components/Header';
import MenuNav from '../../components/MenuNav';
import Gerenciar from '../../components/Gerenciar';

function Home(){

    const [user, setUser] = useState('');    
    const [typeAdmin, setTypeAdmin] = useState('');

    async function User(){
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        await api.get('/admin/token', config)
            .then(res => {
                //alert(res.data.usuario),
                api.get('/admin/select/'+res.data.usuario)
                .then(response => {
                   setUser(response.data.user);
                   setTypeAdmin(response.data.typeAdmin);
                   
                }).catch(error => {
                    alert(error.response.data.error);
                })
            }).catch(err => {
                alert(err.response.data.error);
            });
    }

    useEffect(() => {
        User();
    }) 

    return (
        <S.Conteiner>
            <Header nameUser={user} typeAdmin={typeAdmin} />
            <div className="middle">
                <MenuNav typeAdmin={typeAdmin}/>
                <Gerenciar currentUser={user}/>
            </div>
            
        </S.Conteiner>
    )
}

export default Home;