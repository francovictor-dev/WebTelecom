import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MyApp from '../MyApp';
import styles from './styles';
//import Svg from 'react-native-svg-uri';

//IMAGENS 
import logo from '../../assets/LogoWebTelecomCinza.png';
import botaoSair from '../../assets/IconeSair.png';

export default function Header({tipo, titulo, navigation}){
    
    function Sair(){
        navigation.navigate('Login');
    }
    
    return(
        tipo === 'home' ?
        <View style={styles.header}>
            <Image style={styles.logo} source={logo} />
            
            <View style={styles.titulo}>
                <MyApp text={titulo} color="white" />
            </View>

            <TouchableOpacity style={styles.sair} onPress={Sair}>
                <Image style={{width: '100%', height: '100%'}}source={botaoSair} />
            </TouchableOpacity>
        </View>
        : 
        <View style={styles.header}>
            <View style={styles.titulo}>
                <MyApp text={titulo} color='white' font={28} />
            </View>
        </View>
    )
}