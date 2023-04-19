import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../store/authSlices/authThunk'
import { resetRegisterMessage } from '../../store/authSlices/auth'

export default function Register({ navigation }) {
    const { loading, registerMessage } = useSelector((state) => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function startRegister() {
        dispatch(register({ username, email, password }));
    }

    useEffect(() => {
        if (registerMessage) {
            dispatch(resetRegisterMessage())
        }
    }, []);
    return (
        <View style={styles.container}>
            <Text sytle={styles.InfoMessage}>{registerMessage}</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setUsername(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setEmail(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={startRegister}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                <Text style={styles.forgot_button}>Click To Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    InfoMessage: {
        marginBottom: 40
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        marginTop: 40,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },


});