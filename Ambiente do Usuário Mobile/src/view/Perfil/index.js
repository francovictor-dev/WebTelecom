import React, { useState} from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Myapp from '../../components/MyApp';
import Icon from 'react-native-vector-icons/Entypo';

//APIs
import api from '../../services/api';

//COMPONENTES
import Header from '../../components/Header';


export default function Perfil(){

    const [page, setPage] = useState('dados');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [plan, setPlan] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [notification1, setNotification1] = useState('');
    const [notification2, setNotification2] = useState('');

    const [alterarName, setAlterarName] = useState('');
    const [alterarAddress, setAlterarAddress] = useState('');

    async function SalvarNome(){

        await AsyncStorage.getItem('token', (err, token) => {
         
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }

            api.get('/user/token', config)
            .then(res => {
                //alert(res.data.usuario)
                api.put(`/user/${res.data.usuario}`, { "name": name })
                .then(response => {
                    alert('Alteração com sucesso');
                    setNotification1('');
     
                }).catch(error => {
                    setNotification1(error.response.data.error);
                })
            }).catch(err => {
                setNotification1(err.response.data.error);
            });
        })

    }


    async function SalvarEndereco(){

        await AsyncStorage.getItem('token', (err, token) => {

            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            };
    
            api.get('/user/token', config)
                .then(res => {
                    //alert(res.data.usuario)
                    api.put(`/user/${res.data.usuario}`, {"address": address})
                    .then(response => {
                        alert('Alteração com sucesso');
                        setNotification2('');
                    }).catch(error => {
                        setNotification2(error.response.data.error);
                    })
                }).catch(err => {
                    setNotification2(err.response.data.error);
                });

        })
        
    }

    async function MostrarDados(){


        await AsyncStorage.getItem('token', (err, token) => {
         
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            
            api.get('/user/token', config)
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

        })
    }

    //useEffect(() => {
    //    MostrarDados()
    //})

    return (
        
        <View style={styles.perfil}>
            <Header tipo='perfil' titulo='Perfil'/> 
            <View style={styles.botaoOpcao}>

                <TouchableOpacity style={
                    page === 'dados' ? styles.opcaoAtivado : styles.opcaoDesativado
                } onPress={() => setPage('dados') }>
                    <Icon name="text" size={30} color={'#939393'}  />   
                    <Myapp text="Dados" color="#939393" font={18}/>
                </TouchableOpacity>

                <TouchableOpacity style={
                    page === 'editar' ? styles.opcaoAtivado : styles.opcaoDesativado
                } onPress={() => setPage('editar')}>
                    <Icon name="edit" size={30} color={'#939393'}  />   
                    <Myapp text="Editar" color="#939393" font={18} />
                </TouchableOpacity>

            </View> 

            {
                page === 'dados' ? MostrarDados() &&
                <View key='dados'>
                    <View style={styles.dadosItem}>
                        <Myapp text={`Nome: ${name}`} color='#939393' font={18} />
                    </View> 
                    <View style={styles.dadosItem}>
                        <Myapp text={cpf.length === 11 ? `CPF: ${cpf}` : `CNPJ: ${cpf}`} color='#939393' font={18} />
                    </View>
                    <View style={styles.dadosItem}>
                        <Myapp text={`Plano: ${plan}`} color='#939393' font={18} />
                    </View> 

                    <View style={styles.dadosItem}>
                        <Myapp text={`Data de vencimento: ${date}`} color='#939393' font={18} />
                    </View> 

                    <View style={styles.dadosItem}>
                        <Myapp text={`Endereço: ${address}`} color='#939393' font={18} />
                    </View>            
                </View>
                 
                : 

                <View key='edit'>
                
                    <View style={styles.dadosItem2}>
                        <TextInput style={styles.textInput} onChangeText={e => setName(e)} value={name} placeholder="Nome" />  
                        <TouchableOpacity style={styles.button}>
                            <Icon name="save" size={40} color={'#D12626'} onPress={SalvarNome}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dadosItem2}>
                        <TextInput style={styles.textInput} onChangeText={e => setAddress(e)} value={address} placeholder="Endereço" keyboardType='default'/>                                            
                        <TouchableOpacity style={styles.button}>
                            <Icon name="save" size={40} color={'#D12626'} onPress={SalvarEndereco}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            }
                    
        </View> 
    )
}
