import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    home: {
        flex: 1,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    titulo: {
        paddingTop: 26
    },
    itens: {
        width: "80%",
        height: 100,
        backgroundColor: "#FFF",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 0,
        borderColor: "#939393",
        borderRadius: 10
        
    }

});

export default styles;