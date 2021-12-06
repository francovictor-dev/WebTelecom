import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';
import styles from './styles';
import Myapp from '../../components/MyApp';
import Video from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';

//import { setCustomText } from 'react-native-global-props';

//IMAGENS
import logoIntelbras from '../../assets/IntelBrasLogo.png';
import intelbrasRoteador1 from '../../assets/IntelbrasRF301K.png';
import intelbrasRoteador2 from '../../assets/IntelbrasActionRG1200.png';
import intelbrasRoteador3 from '../../assets/IntelbrasGF1200.png';
import intelbrasRoteador4 from '../../assets/IntelbrasW4-300F.png';
import logoMercurys from '../../assets/MercusysLogo.png';
import mercurysRoteador1 from '../../assets/MercusysMW301R.png';
import mercurysRoteador2 from '../../assets/MercusysAC12G.png';
import logoTenda from '../../assets/TendaLogo.png';
import tendaRoteador from '../../assets/TendaRoteador.png';

//COMPONENTES
import Header from '../../components/Header';

export default function Tutorial(){

    const [altura, setAltura] = useState(new Animated.Value(0));
    const [altura2, setAltura2] = useState(new Animated.Value(0));
    const [altura3, setAltura3] = useState(new Animated.Value(0));

    const [activedToggle, setActivedToggle] = useState(false);
    const [activedToggle2, setActivedToggle2] = useState(false);
    const [activedToggle3, setActivedToggle3] = useState(false);

    const [item1Display, setItem1Display] = useState('none');
    const [item2Display, setItem2Display] = useState('none');
    const [item3Display, setItem3Display] = useState('none');

    const [video, setVideo] = useState(false);
    const [video2, setVideo2] = useState(false);
    const [video3, setVideo3] = useState(false);
    const [video4, setVideo4] = useState(false);
    const [video5, setVideo5] = useState(false);
    const [video6, setVideo6] = useState(false);
    const [video7, setVideo7] = useState(false);

    function Toggle(){

        setActivedToggle(activedToggle ? false : true );

        activedToggle ?
        (
            setItem1Display('flex'),
            Animated.timing(
                altura,
                {
                    toValue: 1250,
                    duration: 600,
                    useNativeDriver: false
                }
            ).start()
        )
        :
        (
            Animated.timing(
            altura,
                {
                    toValue: 0,
                    duration: 600,
                    useNativeDriver: false
                }
            ).start(), setTimeout(() => setItem1Display('none'), 10)
        )
    }

    function Toggle2(){

        setActivedToggle2(activedToggle2 ? false : true );

        activedToggle2 ?
        (
            setItem2Display('flex'),
            Animated.timing(
                altura2,
                {
                    toValue: 650,
                    duration: 600,
                    useNativeDriver: false
                }
            ).start()
        )
        :
        (
            Animated.timing(
            altura2,
                {
                    toValue: 0,
                    duration: 600,
                    useNativeDriver: false
                }
            ).start(), setTimeout(() => setItem2Display('none'), 10)
        )
    }

    function Toggle3(){

        setActivedToggle3(activedToggle3 ? false : true );

        activedToggle3 ?
        (
            setItem3Display('flex'),
            Animated.timing(
                altura3,
                {
                    toValue: 400,
                    duration: 600,
                    useNativeDriver: false
                }
            ).start()
        )
        :
        (
            Animated.timing(
            altura3,
                {
                    toValue: 0,
                    duration: 600,
                    useNativeDriver: false
                }
            ).start(), setTimeout(() => setItem3Display('none'), 10)
        )
    }

    return (
        <View style={styles.header}>
            <Header tipo='tutorial' titulo='Tutorial'/>
            <ScrollView>
                {/* ROTEADORES INTELBRAS */}
                <TouchableOpacity style={styles.headerItem} onPress={Toggle}>
                    
                    <View style={styles.info}>
                        <Myapp text="Login e Senha: admin" color="#939393"/>
                        <Myapp text="IP: 10.0.0.1" color="#939393" />
                    </View>
                  
                    <View style={styles.image}>
                        <Image style={{width: 160, height: 30}} source={logoIntelbras} />
                    </View>
                    

                </TouchableOpacity>
                
                <Animated.View style={{width: '100%', height: altura, backgroundColor: '#FFF'}}>
                    
                    <View name="modelos" style={{display: item1Display}}>
                        <View style={styles.obs}>
                            <Myapp text="OBS: Os roteadores W4-300F e o GF1200 possuem a mesma configuração e interface." color="#939393" />
                        </View>

                        {/*MODELO ROTEADOR*/}
                        <View style={styles.roteador}>

                            <Myapp text="Intelbras RF301K (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => {setVideo(video ? false : true) }}>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video ? 'none' : 'flex')
                                }} 
                                source={intelbrasRoteador1}/>
                            </TouchableOpacity>
                            

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GQm6cbD4Hdw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo(video ? false : true)}}
                                style={{
                                    display: (video ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>

                        {/*MODELO ROTEADOR 2*/}
                        <View style={styles.roteador}>

                            <Myapp text="Action RG1200 (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => setVideo2(video2 ? false : true) }>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video2 ? 'none' : 'flex')
                                }} 
                                source={intelbrasRoteador2}/>
                            </TouchableOpacity>

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/hFuj4kceiXI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video2 ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo2(video2 ? false : true)}}
                                style={{
                                    display: (video2 ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>

                        {/*MODELO ROTEADOR 3*/}
                        <View style={styles.roteador}>

                            <Myapp text="Intelbras GF1200 (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => setVideo3(video3 ? false : true) }>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video3 ? 'none' : 'flex')
                                }} 
                                source={intelbrasRoteador3}/>
                            </TouchableOpacity>

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/B01eGHRxJmI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video3 ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo3(video3 ? false : true)}}
                                style={{
                                    display: (video3 ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>

                        {/*MODELO ROTEADOR 4*/} 
                        <View style={styles.roteador}>

                            <Myapp text="Intelbras W4-300F (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => setVideo4(video4 ? false : true) }>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video4 ? 'none' : 'flex')
                                }} 
                                source={intelbrasRoteador4}/>
                            </TouchableOpacity>

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/B01eGHRxJmI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video4 ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo4(video4 ? false : true)}}
                                style={{
                                    display: (video4 ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>
                    </View>
                
                </Animated.View>

                {/* ROTEADORES MERCURYS */}
                <TouchableOpacity style={styles.headerItem} onPress={Toggle2}>
                    <View style={styles.info}>
                        <Myapp text="Senha: admin1" color="#939393"/>
                        <Myapp text="IP: 192.168.1.1" color="#939393" />
                    </View>
                  
                    <View style={styles.image}>
                        <Image style={{width: 160, height: 24}} source={logoMercurys} />
                    </View>
           
                </TouchableOpacity>
                
                <Animated.View style={{width: '100%', height: altura2, backgroundColor: '#FFF'}}>
                    
                    <View name="modelos" style={{display: item2Display}}>
                        <View style={styles.obs}>
                            <Myapp text="OBS: Os roteadores MW301R e AC12G possuem a mesma configuração e interface." color="#939393" />
                        </View>

                        {/*MODELO ROTEADOR*/}
                        <View style={styles.roteador}>

                            <Myapp text="Mercusys MW301R (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => {setVideo5(video5 ? false : true) }}>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video5 ? 'none' : 'flex')
                                }} 
                                source={mercurysRoteador1}/>
                            </TouchableOpacity>
                            

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yCvpEBKzzQE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video5 ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo5(video5 ? false : true)}}
                                style={{
                                    display: (video5 ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>

                        {/*MODELO ROTEADOR 2*/}
                        <View style={styles.roteador}>

                            <Myapp text="Mercusys AC12G (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => setVideo6(video6 ? false : true) }>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video6 ? 'none' : 'flex')
                                }} 
                                source={mercurysRoteador2}/>
                            </TouchableOpacity>

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yCvpEBKzzQE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video6 ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo6(video6 ? false : true)}}
                                style={{
                                    display: (video6 ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>

                    </View>
                
                </Animated.View>

                {/* ROTEADORES TENDA */}
                <TouchableOpacity style={styles.headerItem} onPress={Toggle3}>


                    <View style={styles.info}>
                        <Myapp text="Sem senha" color="#939393"/>
                        <Myapp text="IP: 192.168.0.1" color="#939393" />
                    </View>
                  
                    <View style={styles.image}>
                        <Image style={{width: 150, height: 40}} source={logoTenda} />
                    </View>
           
                </TouchableOpacity>

                <Animated.View style={{width: '100%', height: altura3, backgroundColor: '#FFF'}}>
                    
                    <View name="modelos" style={{display: item3Display}}>
                        <View style={styles.obs}>
                            <Myapp text="OBS: A configuração do roteador Tenda é genérica e serve para todos os modelos." color="#939393" />
                        </View>

                        {/*MODELO ROTEADOR*/}
                        <View style={styles.roteador}>

                            <Myapp text="Roteadores Tenda (Clique na imagem abaixo)" color="#939393" />
                            
                            <TouchableOpacity onPress={() => {setVideo7(video7 ? false : true) }}>
                                <Image  style={{
                                    width: 250,
                                    height: 250,
                                    display: (video7 ? 'none' : 'flex')
                                }} 
                                source={tendaRoteador}/>
                            </TouchableOpacity>
                            

                            {/*BOX VIDEO*/}
                            <View style={{height: 250}}>
                                {/*VIDEO*/}
                                <WebView 
                                    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/pwtP22E0ItE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                    style={{height: 40, width: 310, display: (video7 ? 'flex' : 'none')}}
                                    />

                                {/*FECHAR*/}
                                <TouchableOpacity onPress={() => {setVideo7(video7 ? false : true)}}
                                style={{
                                    display: (video7 ? 'flex' : 'none'),
                                    padding: 5,
                                    borderRadius: 10,
                                    borderColor: "#939393"
                                }}>
                                    <Myapp text="Fechar" color="#939393" />
                                </TouchableOpacity> 
                            </View>
                        </View>

                    </View>
                
                </Animated.View>

            </ScrollView>
        </View> 
    )
    
}