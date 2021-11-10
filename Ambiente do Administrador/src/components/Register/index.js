import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';

function Register(){

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [plan, setPlan] = useState("50MB");
    const [date, setDate] = useState(5);
    const [address, setAddress] = useState("");
    const [notification, setNotification] = useState("");

    async function Cadastrar(){

        await api.post('/user/', {
            name, cpf:cpf.replace(/[^0-9]/g, ''), plan, date, address
        }).then(res => {
            alert("Cadastrado");
            setNotification("");
        }).catch(err => {
            setNotification(err.response.data.error);
        })
    }

    function ValidarCpf(){
        let soma = 0;
        let i;
        let resto;
        let numCpf = cpf.replace(/[^0-9]/g, '');
        
        if(numCpf.length !== 11){
            return alert("CPF inválido");
        }

        for(i = 1; i <= 9; i++ ){
            soma +=  parseInt(numCpf[i-1]) * (11-i);
        }

        resto = (soma * 10) % 11;
        
        if(resto === 11 || resto === 10) resto = 0;

        if(resto !== parseInt(numCpf[9]))return alert('Cpf invalido!');

        soma = 0;
        
        for(i = 1; i <= 10; i++ ){
            //alert(soma);
            soma +=  parseInt(numCpf[i-1]) * (12-i);
            
        }
        
        resto = (soma * 10) % 11;

        if(resto === 11 || resto === 10) resto = 0;

        if(resto !== parseInt(numCpf[10]))return alert('Cpf invalido!');

        Cadastrar();
    }

    return (
        <S.Container>
            <S.Content>
                              
                <label>Nome</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Nome" />
                
                <S.Bloco>
                    <S.Unidade>
                        <label>CPF</label>
                        <input type="text" onChange={e => setCpf(e.target.value)} value={cpf} placeholder="999999999-99" />
                    </S.Unidade>
                    <S.Unidade>
                        <label>Plano</label>
                        <select onChange={e => setPlan(e.target.value)} name="plano">
                            <option value="50MB">50MB</option>
                            <option value="100MB">100MB</option>
                            <option value="200MB">200MB</option>
                            <option value="300MB">300MB</option>
                        </select>
                    </S.Unidade>
                    <S.Unidade>
                        <label>Dia/ Data de Venc.</label>
                        <select onChange={e => parseInt(setDate(e.target.value))} name="date">
                            <option value="5">05</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </S.Unidade>
                </S.Bloco>

                <label>Endereço</label>
                <input type="text" onChange={e => setAddress(e.target.value)} value={address} placeholder="Endereço" />

                <div className="notification">
                    <label>{notification}</label>
                </div>

                <input type="button" value="Cadastrar" onClick={ValidarCpf}/>
           
            </S.Content>
        </S.Container>
    )
}

export default Register;
