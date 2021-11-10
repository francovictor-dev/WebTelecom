import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

function Perfil(){

    const [paginaDados, setPaginaDados] = useState(true);
    const [paginaAlterar, setPaginaAlterar] = useState(false);

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [plan, setPlan] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');

    const [alterarName, setAlterarName] = useState('');
    const [alterarAddress, setAlterarAddress] = useState('');

    const [notification1, setNotification1] = useState('');
    const [notification2, setNotification2] = useState('');

    function AbrirPaginaDados(){
        setPaginaDados(true);
        setPaginaAlterar(false);
    }

    function AbrirPaginaAlterar(){
        setPaginaDados(false);
        setPaginaAlterar(true);
        setName('');
        setAddress('');
    }

    async function MostrarDados(){
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        await api.get('/user/token', config)
            .then(res => {
                //alert(res.data.usuario)
                api.get(`/user/select/${res.data.usuario}`)
                .then(response => {
                    //alert(response.data.name);
                    setName(response.data.name);
                    setCpf(response.data.cpf);
                    setPlan(response.data.plan);
                    setDate(response.data.date);
                    setAddress(response.data.address);
                }).catch(error => {
                    alert(error.response.data.error);
                })
            }).catch(err => {
                alert(err.response.data.error);
            });
    }

    async function SalvarNome(){

        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        /*
        if(!password){
            return setNotification('Senha é obrigatório');
        }
        */

        await api.get('/user/token', config)
            .then(res => {
                //alert(res.data.usuario)
                api.put(`/user/${res.data.usuario}`, { "name": alterarName })
                .then(response => {
                    alert('Alteração com sucesso \nAtualize o navegador para atualizar a alteração.');
          
                    setNotification1('');
                }).catch(error => {
                    setNotification1(error.response.data.error);
                })
            }).catch(err => {
                setNotification1(err.response.data.error);
            });
    }

    async function SalvarEndereco(){

        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        /*
        if(!password){
            return setNotification('Senha é obrigatório');
        }
        */

        await api.get('/user/token', config)
            .then(res => {
                //alert(res.data.usuario)
                api.put(`/user/${res.data.usuario}`, {"address": alterarAddress})
                .then(response => {
                    alert('Alteração com sucesso');
                    setNotification2('');
                }).catch(error => {
                    setNotification2(error.response.data.error);
                })
            }).catch(err => {
                setNotification2(err.response.data.error);
            });
    }

    useEffect(() => {
        MostrarDados()
    }) 

    return (
        <S.Container>
            <S.Content>
                <input type="button" value="Dados" onClick={AbrirPaginaDados}/>
                <input type="button" value="Alterar" onClick={AbrirPaginaAlterar}/>

                {paginaDados ? MostrarDados : null}

                {
                    paginaDados ? 
                        
                        <S.Dados>
                            <label>Nome: {name}</label>
                            <label>CPF: {cpf}</label>
                            <label>Plano: {plan}</label>
                            <label>Data de vencimento: {date}</label>
                            <label>Endereço: {address}</label>
                        </S.Dados>

                    : null

                }

                {
                    paginaAlterar ? 

                    <S.Alterar>            
                        <label>Alterar Nome</label>
                        <input type="text" placeholder="Nome" onChange={e => setAlterarName(e.target.value)} value={alterarName}/>
                        <span>{notification1}</span>
                        <input type="button" value="Salvar" onClick={SalvarNome} />

                        <label>Alterar Endereço</label>
                        <input type="text" placeholder="Endereço" onChange={e => setAlterarAddress(e.target.value)} value={alterarAddress}/>
                        <span>{notification2}</span>
                        <input type="button" value="Salvar" onClick={SalvarEndereco} />
                    </S.Alterar>

                    : null
                }

               

                
            </S.Content>
            
        </S.Container>
    )
}

export default Perfil;
