import React from "react";
import { View, StyleSheet } from "react-native";
import TodosContainer from '../../components/todosContainer';
import TodoItem from '../../components/todoItem';
import AsyncStorage from '@react-native-community/async-storage';
export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <TodosContainer style={styles.container}
                onExit={() => {
                    AsyncStorage.removeItem("@token").then(() => {
                        navigation.navigate("Login")
                    })
                }}>
            </TodosContainer>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

