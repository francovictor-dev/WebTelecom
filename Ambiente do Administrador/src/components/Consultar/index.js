import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';

function Consultar(){

    const [type, setTypeQuery] = useState('name');
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [notification, setNotification] = useState('');

    async function Query(){
        api.get(`/user/${type}/${query}`).then(res => {
            
            setUsers(res.data)
            setNotification('');
            /* 
               name   : t.name, 
                cpf    : t.cpf,
                plan   : t.plan,
                date   : t.date,  
                address: t.address})
            */
            //alert(users[0].plan);
        }).catch(err => {
            setNotification("Registro não encontrado");
            setUsers([]);
            //alert(type);
        })
    }

    async function ExcluirCliente(){
        let confirm = window.confirm("Confirme se quer excluir esse cliente");
        if(confirm){
            await api.delete(`/user/${user._id}`).then(res => {
                alert(user.name + " Excluido com sucesso");
                Query();
                setUser({
                    name    : "",
                    address : "",
                    date    : "",
                    plan    : ""
                });
                alert(user.name);
            })
            
        }
    }

    async function SalvarDados(){

        let body = {
            name    : user.name,
            address : user.address,
            date    : user.date,
            plan    : user.plan
        };
        console.log(user);
        
        await api.put(`/user/${user._id}`, body).then(r => {
            alert("Alteração com sucesso!");
            Query();
            setUser({});
        }).catch(err => {
            setNotification(err.response.data.error);
        });
        
    }

    return (
        <S.Container>
            <S.Query>

                <div>
                    <label>Tipo de consulta</label>
                    <select name="typeQuery" onChange={e => setTypeQuery(e.target.value)}>
                        <option value="name">Nome</option>
                        <option value="cpf">CPF</option>
                        <option value="plan">Plano</option>
                        <option value="date">Data</option>
                        <option value="address">Endereço</option>
                    </select>
                </div>
                <div>
                    <label>Consulta</label>
                    <input type="text" placeholder="consulta" onChange={
                        e => type === 'date' ? parseInt(setQuery(e.target.value)) : setQuery(e.target.value)
                    } value={query} />
                </div>
                <div>
                    <label></label>
                    <input type="button" value="Buscar" onClick={Query}/>
                </div>
            </S.Query>
            <span>{notification}</span>
            <S.Content>

                {
                    //.map faz percussão por todos os
                    //itens da coleção retornando 
                    //no item t
                    users.map(t => (  
                        <S.ItemConsulta onClick={s => setUser(t)}>
                            <div>
                                <label className="label">{t.name}</label>
                            </div>
                            <label className="barra" />
                            <div>
                                <label className="label">{t.cpf}</label>
                            </div>
                            <label className="barra" />
                            <div>
                                <label className="label">{t.address}</label>
                            </div>
                        </S.ItemConsulta>
                        )
                    )
                } 
                
            </S.Content>
            <S.MostrarDados>
                <input type="text" onChange={e => setUser( 
                    {
                        _id: user._id,
                        name: e.target.value,
                        address: user.address,
                        date: user.date,
                        plan: user.plan
                    })
                } value={user.name} />
                <input type="text" onChange={e => setUser(
                    {
                        _id: user._id,
                        name: user.name,
                        address: e.target.value,
                        date: user.date,
                        plan: user.plan
                    }
                )} value={user.address} />
               
                <select name="plan" onChange={e => setUser(
                    {
                        _id: user._id,
                        name: user.name,
                        address: user.address,
                        date: user.date,
                        plan: e.target.value
                    }
                )} value={user.plan}>
                    <option value="50MB">50MB</option>
                    <option value="100MB">100MB</option>
                    <option value="200MB">200MB</option>
                    <option value="300MB">300MB</option>
                </select>
                <select name="date" onChange={e => parseInt(setUser(
                    {
                        _id: user._id,
                        name: user.name,
                        address: user.address,
                        date: e.target.value,
                        plan: user.plan
                    }
                ))} value={user.date}>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <div className="botoes">
                    <input type="button" value="Salvar" onClick={SalvarDados}/>
                    <input type="button" value="Excluir" onClick={ExcluirCliente}/>
                </div>
                
            </S.MostrarDados>
        </S.Container>
    )
}

export default Consultar;
