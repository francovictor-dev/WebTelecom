import React, {useEffect, useState} from 'react';
import * as S from './styles';
import api from '../../services/api';

function Boletos(){

    const [cpf, setCpf] = useState('');
    const [boleto, setBoleto] = useState([]);
    
    async function GerarBoletos(){
        
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        };

        //acesso servidor local obter token de acesso
        
        await api.get('/user/token', config)
        .then(res => {
            //acesso servidor local para ter CPF
            api.get('/user/select/'+res.data.usuario)
            .then(response => {
                //acesso servidor Juno para ter os boletos
                setCpf(response.data.cpf);

                api.get(`/juno/charge/${cpf}`)
                .then(response => {
                    setBoleto(response.data._embedded.charges);
                }).catch(e => {
                    alert("Sem boletos cadastrados");
                })

            }).catch(error => {
                alert(error.response.data.error);
            })
        }).catch(err => {
            alert(err.response.data.error);
        });
    }

    

    useEffect(() => {
        GerarBoletos();
    });

    return(
        <S.Container>
            <h1>Boletos</h1>
            <S.Content>
                <div className="inicioTabela">
                    <div>
                        <label>Número</label>
                    </div>
                    
                    <label className="separador" />
                    
                    <div>
                        <label>Data Vencimento</label>
                    </div>

                    <label className="separador" />
                    
                    <div>
                        <label>Valor</label>
                    </div>
                    
                    <label className="separador" />
                    
                    <div>
                        <label>STATUS</label>
                    </div>
                    
                    <label className="separador" />
                    
                    <div>
                        <label>Boleto</label>
                    </div>
                </div>

                {
                    boleto.map(t => (
                        <div className="registro">
                            <div>
                                <label>{t.code}</label>
                            </div>
                            
                            <label className="separador" />
                            
                            <div>
                                <label>{t.dueDate}</label>
                            </div>

                            <label className="separador" />
                            
                            <div>
                                <label>R${t.amount}</label>
                            </div>
                            
                            <label className="separador" />
                            
                            <div>
                                <label>{t.status}</label>
                            </div>
                            
                            <label className="separador" />
                            
                            <div>
                                <a href={t.link} target="_blank" rel="noopener noreferrer"><input type="button" value="Gerar Boleto" /></a>
                            </div>
                        </div>
                    )
                )}
                

            </S.Content>
        </S.Container>
    )
}

export default Boletos;