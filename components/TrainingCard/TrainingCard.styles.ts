import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 230,
        overflow: 'hidden',
        borderRadius: 0,
        marginBottom: 20,

        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        position: 'absolute'
    },
    blocTxt: {
        backgroundColor: "rgba(0, 0, 0, 0.561);",
        padding: 10,
        borderRadius: 40
    },
    title: {
        fontSize: 30,
        color: "white"
    },
    subTitle: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    }
})