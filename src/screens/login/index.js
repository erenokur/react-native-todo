import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { login, fetchUserData } from '../../store/authSlices/authThunk'
import { getToken } from '../../utils/HelperFunctions';
import { gettasks } from '../../store/tasksSlices/tasksThunk'
import AsyncStorage from '@react-native-community/async-storage';
export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { token, loading, userData, loginMessage } = useSelector((state) => state.auth);

    useEffect(() => {
        AsyncStorage.getItem("@token").then((val) => {
            if (val) {
                dispatch(gettasks());
                navigation.navigate("Home");
            }
        })
    }, [token]);

    function startLogin() {
        dispatch(login({ email, password }));
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
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
            <TouchableOpacity style={styles.loginBtn} onPress={startLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Register") }}>
                <Text style={styles.forgot_button}>Click To Register</Text>
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
    image: {
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