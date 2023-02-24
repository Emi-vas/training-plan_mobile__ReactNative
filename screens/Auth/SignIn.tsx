//react
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//assets
import { main } from '../../assets/img';
//firebase
import { useAuth } from '../../auth/UserContext';
//styles
import { buttons } from '../../styles/buttons';

const SignIn = () => {
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const { signIn } = useAuth()

    const submit = () => {
        if(mail == "" || pass == "") return
        signIn(mail, pass)
    }

    return (
        <View style={styles.wrapper}>
            <Image source={main} style={styles.backgroundImage} />
            <View style={styles.signBloc}>
                <Text 
                    style={{ color: "orange", fontSize: 27, textAlign: "center", fontWeight: "bold", marginBottom: 12 }}
                >FitPlan</Text>
                <TextInput 
                    placeholder='mail'
                    style={styles.input}
                    onChangeText={(e) => setMail(e)}
                />
                <TextInput 
                    placeholder='mot de passe'
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(e) => setPass(e)}
                />

                <View style={{ display: "flex", alignItems: "center", margin: 10 }}>
                    <TouchableOpacity style={buttons.main}
                        onPress={submit}
                    >
                        <Text style={{ fontSize: 19, color: "white" }}>Se connecter</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ color: "white", fontSize: 30 }}>{}</Text>
                </View>
            </View>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
    backgroundImage: {
        maxWidth: "100%",
        height: "100%",
        zIndex: 0,
    },
    signBloc: {
        position: "absolute",
        zIndex: 3,
        backgroundColor: "#0000009e",
        padding: 10,
        borderRadius: 20,
        transform: [{ translateY: -100 }]
    },
    input: {
        width: 250,
        backgroundColor: 'white',
        fontSize: 20,
        padding: 15,
        borderRadius: 20,
        margin: 10
    }
})