import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import styles from './styles';
import Myapp from '../../components/MyApp';
import AsyncStorage from '@react-native-async-storage/async-storage';
//APIs
import api from '../../services/api';

//COMPONENTES
import Header from '../../components/Header';


export default function Home({navigation}){

    const [name, setName] = useState('');
    const [plan, setPlan] = useState('');
    const [date, setDate] = useState('');

    async function User(){

        await AsyncStorage.getItem('token', (err, token) => {
            
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            };

            api.get('/user/token', config)
            .then(res => {
                api.get('/user/select/'+res.data.usuario)
                .then(response => {
                   setName(response.data.name);
                   setPlan(response.data.plan);
                   setDate(response.data.date);
                }).catch(error => {
                    alert(error.response.data.error);
                })
            }).catch(error => {
                console.log(error.response.data.error);
            });

        })  
    }
    

    //useEffect(() => {
    //    User();
    //})
    User();


    return (
      
        <View style={styles.home}>
            <Header tipo='home' titulo={'Olá, ' + name} navigation={navigation}/>  

            <View style={styles.titulo}>
                <Myapp text="Home" color="#939393" font={26}/>
            </View>
            
            <View elevation={8} style={styles.itens}>
                <Myapp text="Plano" color="#939393" font={20}/>
                <Myapp text={plan} color="#939393" font={20}/>
            </View>  

            <View elevation={8} style={styles.itens}>
                <Myapp text="Data Vencimento" color="#939393" font={20}/>
                <Myapp text={date} color="#939393" font={20}/>
            </View>  
        </View> 
    
    )
}
