import { StyleSheet } from "react-native";

export const stylesCuenta = StyleSheet.create({
    botonGrandeTexto: {
        borderWidth: 2,
        borderColor: 'black',
        width: 200,
        height: 20
    },
    bannerTop: {
        width: '100%',
        height: 56,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ab9e96',
        shadowColor: "#94867e",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
        flexDirection: 'row',
        alignItems: "center",
    },
    imgUser: {
        marginLeft: 15,
        marginRight: 10,
        width: 40,
        height: 40,
        borderWidth: 0.2,
        borderColor: 'black',
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    iconUser: {
        position: "absolute",
        left: 7,
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    nameUser: {
        fontWeight: 'bold',
        fontSize: 17
    },
    optionsAccount: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
    },
    textOptions: {
        color: 'black',
        marginLeft: 10,
        fontSize: 15,
        // fontWeight:'bold'
    },
    covidTitle: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconBack: {
        marginLeft: 15
    },
    hairline: {
        opacity: 0.2,
        borderWidth: 1,
        borderColor: 'black',
        height: 1,
        width: 220,
        marginBottom: 60
    },

    bottonLearnMore: {
        width: 200,
        height: 55,
        backgroundColor: 'black',
        marginBottom: 50,
        justifyContent: "center"
    },
    pagoTitle: {
        marginLeft: '3%',
        marginRight: '4%',
        fontSize: 40
    },
    metodoPagoLetter: {
        marginTop: '6%',
        marginBottom: '6%',
        marginLeft: '3%',
        marginRight: '4%',
        fontSize: 18
    },
    addMetodPay: {
        color: '#195717',
        marginTop: '3%',
        marginLeft: '5%',
        marginBottom: '5%',
        fontSize: 14
    },
    menuEfectivo: {
        marginTop: '4%',
        marginRight: '4%',
        fontSize: 35,
        marginLeft: '5%'
    },
    tagCupon: {
        backgroundColor: '#b3b3b3',
        marginTop: '5%',
        marginLeft: '5%',
        justifyContent: 'center',
        borderRadius: 100,
        width: 120,
        height: 120,
    },
    inputText: {
        marginRight: '5%',
        marginLeft: '5%',
        width: '90%',
        height: 50
    },
    //Favoritos sección
    tarjeta: {
        height: 130,
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#827878',
        flexDirection: "row"
    },
    tarjetas: {
        width: '100%',
        height: '100%',
        marginTop: 5,
    },
    imageFavorites: {
        marginTop: 8,
        borderRadius: 2,
        resizeMode: 'stretch',
        height: '80%',
        width: '25%'
    },
    favoriteData: {
        flexDirection: "row",
    },
    titleFavoriteName: {
        fontSize: 15,
        fontWeight: "bold",
        flexDirection: 'column'
    },
    descriptionFavorite: {
        width: '80%',
        fontSize: 10,
        flexDirection: 'column'
    },
    iconDelete: {
        position: "absolute",
        right: 40,
        bottom: 30
    }
});