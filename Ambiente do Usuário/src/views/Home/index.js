import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

//componentes
import Header from '../../components/Header';
import MenuNav from '../../components/MenuNav';

function Home(){

    const [name, setName] = useState('');    

    async function User(){
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        await api.get('/user/token', config)
            .then(res => {
                //alert(res.data.usuario)
                api.get('/user/select/'+res.data.usuario)
                .then(response => {
                   setName(response.data.name);
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
            <Header nameUser={name} />
            <div className="middle">
                <MenuNav />
            </div> 
        
        </S.Conteiner>
    )
}

export default Home;