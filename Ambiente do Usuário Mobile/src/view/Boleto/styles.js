import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    boleto: {
        flex: 1,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    titulo: {
        paddingTop: 26
    },
    inicioTabela:{
        width: '100%',
        height: 80,
        marginTop: 0,
        borderWidth: 2,
        borderColor: '#D8D8D6',
        backgroundColor: '#D8D8D6',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "row",
        
    },
    tabelaItem: {
        height: '100%',
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    registro:{
        width: '100%',
        height: 80,
        borderTopWidth: 0,
        borderWidth: 2,
        borderColor: '#D8D8D6',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "row" 
    }


});

export default styles;