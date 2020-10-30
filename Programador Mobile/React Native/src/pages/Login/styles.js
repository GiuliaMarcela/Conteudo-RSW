import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#722AF7',
        alignItems: 'center'
    },

    image: {        
        width: 175,
        height: 175,
    },

    title: {
        fontFamily: 'Noto Sans TC',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    },


    input: {
        fontFamily: 'Noto Sans TC',
        marginTop: 25,
        borderWidth: 0.5,
        width: 260,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 20,
    },

    textLogin: {
        fontFamily: 'Noto Sans TC',
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 20
    },

    login: {
        marginTop: 75,
        borderWidth: 0.5,
        width: 260,
        height: 50,
        alignItems: "center",
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#72E31A'
    }

});

export default styles;