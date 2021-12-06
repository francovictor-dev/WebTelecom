import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

//APIs
import api from '../../services/api';

//COMPONENTES
import Header from '../../components/Header';
import Myapp from '../../components/MyApp';

export default function Boleto(){

    const [cpf, setCpf] = useState('');
    const [boleto, setBoleto] = useState([]);

    async function GerarBoletos(){
        await AsyncStorage.getItem('token', (e, token) => {
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            };

            api.get('/user/token', config)
            .then(r => {
                //acesso servidor local para ter CPF
                api.get('/user/select/'+r.data.usuario)
                .then(res => {
                    //acesso servidor Juno para ter os boletos
                    setCpf(res.data.cpf);

                    api.get(`/juno/charge/${cpf}`)
                    .then(response => {
                        setBoleto(response.data._embedded.charges);
                        //console.log(response.data._embedded.charges);
                    }).catch(er => {
                        
                    })

                }).catch(error => {
                    alert(error.response.data.error);
                })
            }).catch(err => {
                alert(err.response.data.error);
            });
        })
    }

    //useEffect(() => {
    //    GerarBoletos();
    //}, [])

    GerarBoletos();

    return (
        <View style={styles.boleto}>
            <Header tipo='boleto' titulo='Boletos'/>    
            
            <View style={styles.inicioTabela} >
                <View style={styles.tabelaItem}>
                    <Myapp text="Número" font={12} color="#939393" />
                </View>
                    
                <View style={styles.tabelaItem}>
                    <Myapp text="Data-Vencimento" font={12} color="#939393" />
                </View>

                <View style={styles.tabelaItem}>
                    <Myapp text="Valor" font={12} color="#939393" />
                </View>

                <View style={styles.tabelaItem}>
                    <Myapp text="Status" font={12} color="#939393" />
                </View>

                <View style={styles.tabelaItem}>
                    <Myapp text="Baixar Boleto" font={12} color="#939393" />
                </View>
            </View>
            <ScrollView>
            {

                boleto.map(t => (
                    <View style={styles.registro} key={t.code}> 
          
                        <View style={styles.tabelaItem}>
                            <Myapp text={t.code} font={12} color="#939393" />
                        </View>

                        {/*Separador de cada coluna*/}
                        <View style={{width: 1, height: 30, backgroundColor: '#D8D8D6'}} />

                        <View style={styles.tabelaItem}>
                            <Myapp text={t.dueDate} font={12} color="#939393" />
                        </View>
                            
                        {/*Separador de cada coluna*/}
                        <View style={{width: 1, height: 30, backgroundColor: '#D8D8D6'}} />

                        <View style={styles.tabelaItem}>
                            <Myapp text={t.amount} font={12} color="#939393" />
                        </View>

                        {/*Separador de cada coluna*/}
                        <View style={{width: 1, height: 30, backgroundColor: '#D8D8D6'}} />

                        <View style={styles.tabelaItem}>
                            <Myapp text={t.status} font={12} color="#939393" />
                        </View>

                        {/*Separador de cada coluna*/}
                        <View style={{width: 1, height: 30, backgroundColor: '#D8D8D6'}} />

                        <TouchableOpacity style={styles.tabelaItem}>
                            <Icon name="download" size={30} color={'#590000'}  onPress={() => Linking.openURL(t.link)}/> 
                        </TouchableOpacity>
            
                    </View>    
                ))
                
            }
            </ScrollView>            

        </View> 
    )
}
