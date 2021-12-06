import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

//SERVIÇOS
import api from '../../services/api';

//COMPONENTES
import MyApp from '../../components/MyApp';
import logo from '../../assets/LogoWebTelecomVermelho.png';


export default function Login({navigation}){

    const [cpf, setCpf] = useState({});
    const [notification, setNotification] = useState('');
    const [displayNot, setDisplayNot] = useState(false);

    async function Entrar(){

        let cpfNum = cpf.replace(/[^0-9]/g, '');

        await api.post('/user/auth', {
            cpf:cpfNum
        }).then(res => {
            setNotification("");
            setDisplayNot(false)
            AsyncStorage.setItem('token', res.data.token);
            navigation.navigate('User');
        }).catch(err => {
            setDisplayNot(true);
            setNotification(err.response.data.error);
        });
    }

    return (
        <View style={styles.login}>
            <View style={styles.formulario}>
                <Image style={styles.logo} source={logo} />
                <View style={{margin: 10, display: displayNot ? 'flex' : 'none'}}>
                    <MyApp text={notification} color='#D12626' font={18} />
                </View>
                <TextInput style={styles.cpf} onChangeText={e => setCpf(e)} valuee={cpf} placeholder="CPF/CNPJ" />
                <TouchableOpacity style={styles.botao} onPress={Entrar}>
                    <MyApp text="Entrar" color="white" font={26}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}