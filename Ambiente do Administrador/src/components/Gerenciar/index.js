import React, { useState } from 'react';
import * as S from './styles';
import api from '../../services/api';

function Gerenciar({currentUser}){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [typeAdmin, setTypeAdmin] = useState('');
    const [notification, setNotification] = useState('');
    const [users, setUsers] = useState([]);
    const [pagina, setPagina] = useState('criar');
    const [admin, setAdmin] = useState([]);
    
    //######---MÉTODO DE BOTÕES---##########

    async function Cadastrar(){
        await api.post('/admin/', {user, password, typeAdmin})
        .then(res => {
            alert("Cadastrado");
            setNotification('');
        }).catch(err => {
            setNotification(err.response.data.error);
        })
    }

    function MostrarUsers(pagina){
         api.get('/admin/all')
        .then(res => {
            //buscar index do admin na array
            let indexAdmin = res.data.findIndex(e => e.user === 'admin');
            //excluir da array
            res.data.splice(indexAdmin, 1)
            //achar index do admin atual
            indexAdmin = res.data.findIndex(e => e.user === currentUser);
            //excluir esse admin
            res.data.splice(indexAdmin, 1)
            
            setUsers(res.data)
            setAdmin(res.data);
            setPagina(pagina);
        }).catch(err => {
            alert("Erro");
        })
    }

    async function Salvar(){
        for(var i = 0; i < admin.length; i++ ){
            await api.put(`/admin/update/${admin[i]._id}`, {
                typeAdmin : admin[i].typeAdmin
            })
            .then(res => {
                
            }).catch(err => {
                return setNotification("error");
            })
        }
        alert("Salvo");        
    }

    async function Excluir(){
        
        let checked;
        let i;
        let contador = 0;

        for(i = 0; i < users.length; i++){
            checked = document.querySelector(`#${users[i].user}`).checked;      

            if(checked){
                
                contador++;

                await api.delete(`/admin/${admin[i]._id}`)
                .then(res => {
                    
                }).catch(err => {
                    return setNotification("error");
                })
                
            }

        }
        if(contador > 0)
            {
                alert("Excluído(s) com sucesso"); MostrarUsers('excluir');
            }
        else
            {
                alert("Escolha o(s) admin(s)");
            }
        
        //console.log(document.querySelector(`#${users[1].user}`).checked);
    }
    //######---MÉTODO DE PÁGINAS---##########
    function MostrarPaginaCriar(){
        setPagina('criar');
    }

    function MostrarPaginaAlterar(){
        MostrarUsers('alterar');
    }

    function MostrarPaginaExcluir(){
        MostrarUsers('excluir');
    }

    return (
        <S.Container>

            <S.Opcoes>
                <input type="button" value="Criar" onClick={MostrarPaginaCriar} />
                <input type="button" value="Alterar" onClick={MostrarPaginaAlterar} />
                <input type="button" value="Excluir" onClick={MostrarPaginaExcluir} />
            </S.Opcoes>
            
            {
                pagina === 'criar' ?

                <S.Create>
                    <h1>Criar novo Admin</h1>

                    <label id="notification">{notification}</label>
                    <div className="div1">
                        <input type="text" placeholder="Nome Admin" value={user}
                            onChange={e => setUser(e.target.value)}/>
                        <input type="text" placeholder="Senha" value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="div2" onChange={e => setTypeAdmin(e.target.value)} >
                        
                        <label className="label">
                            <span>Super Admin</span>
                            <input type="radio" className="radio" name="typeadmin"
                                value="SuperAdmin" />
                        </label>
                
                        <label className="label">
                            <span>Admin comum</span>
                            <input type="radio" className="radio" name="typeadmin" 
                                value="AdminComum"/>
                        </label>
                    </div>

                    <input type="button" value="Cadastrar Admin" onClick={Cadastrar} />
                </S.Create>

                : null
            }
            
            {
                pagina === 'alterar' ?

                <S.Update id="gerenciar">
                
                    <h1>Alterar Admins</h1>

                    <div className="div1">
                        <div>
                            <label>Conta</label>
                        </div>
                        <div>
                            <label>Tipo Admin</label>
                        </div>
                    
                    </div>   
                    
                    {
                   
                        //admin[admin.findIndex(x => x.user === t.user)].typeAdmin
                        users.map(t =>  (
                            <div className="div2" key={t.user}>
                                <div>
                                    <label>{t.user}</label>
                                </div>
                                <div>
                                    <select onChange={e => {

                                        let arr = [...admin];
                                        arr[users.findIndex(j => j.user === t.user)].typeAdmin = e.target.value;
                                        setAdmin(arr);
                                        console.log(arr);
   
                                    }}          
                                        value={admin[users.findIndex(j => j.user === t.user)].typeAdmin}>
                                        <option  value="SuperAdmin">SuperAdmin</option>
                                        <option  value="AdminComum">AdminComum</option>
                                    </select>
                                </div>
                            </div>
                            )
                        )
                
                    }
                    <input type="button" value="Salvar" onClick={Salvar}/>
                </S.Update>
                : null
            }

            {
                pagina === 'excluir' ? 

                <S.Excluir>
                <h1>Excluir Admins</h1>

                    <div className="div1">
                        <div>
                            <label>Conta</label>
                        </div>
                        <div>
                            <label>Escolher</label>
                        </div>
                    </div>   

                    {
                        users.map(t =>  (
                            <div className="div2" key={t.user}>
                                <div>
                                    <label>{t.user}</label>
                                </div>
                                <div>
                                    <input type="checkbox" id={t.user} name={t.user} 
                                        
                                    />
                                </div>
                            </div>
                            )
                        )
                    }
                    <input type="button" value="Excluir" onClick={Excluir} />
                </S.Excluir>

                : null
            }
            
        </S.Container>
    )
}

export default Gerenciar;
