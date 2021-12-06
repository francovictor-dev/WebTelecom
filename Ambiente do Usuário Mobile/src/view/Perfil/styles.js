import { StyleSheet } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

const styles = StyleSheet.create({

    header: {
        flex: 1,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    botaoOpcao: {
        width: '100%',
        height: 70,
        flexDirection: 'row'
    },
    opcaoAtivado:{
        width: '50%',
        height: '100%',
        backgroundColor: '#D8D8D6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    opcaoDesativado:{
        width: '50%',
        height: '100%',
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dadosItem:{
        width: '100%',
        height: 70,
        borderWidth: 1,
        borderColor: '#D8D8D6',
        borderTopWidth: 0,
        justifyContent: 'center',
        paddingLeft: 10
    },
    dadosItem2:{
        width: '100%',
        height: 130,
        borderWidth: 1,
        borderColor: '#D8D8D6',
        borderTopWidth: 0,
        justifyContent: 'center',
        paddingLeft: 10
    },
    textInput:{
        borderColor: '#939393',
        borderRadius: 5,
        borderWidth: 1,
        width: '95%',
        padding: 10,
        marginBottom: 5,
        marginTop: 5
    },
    button:{
        padding: 10,
        alignItems: 'center'
    }

});

export default styles;