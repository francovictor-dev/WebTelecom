import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header: {
        flex: 1,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    headerItem:{
        width: '100%',
        height: 70,
        borderWidth: 1,
        borderColor: '#D8D8D6',
        borderTopWidth: 0,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    info:{
        height: '100%',
        width: '50%',
        justifyContent: 'center'
    },
    image:{
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item:{
        width: '100%',
        height: 200,
        backgroundColor: '#FFF'
    },
    obs:{
        width: "100%",
        margin: 10
    },
    roteador:{
        height: 300,
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center'

    }

});

export default styles;