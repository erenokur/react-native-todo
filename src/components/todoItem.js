import React, { Component } from 'react';
import { StyleSheet, Text, View, Body, Button, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';


const TodoItem = ({ _id, title, completed, onTodoDone, onTodoUnDone, onDelete }) => {

    const CheckThenGet = () => {
        if (completed) {
            onTodoUnDone(_id)
        } else {
            onTodoDone(_id)
        }
    }
    return (
        <View style={styles.row}>
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingRight: 10,
                    paddingVertical: 5,
                }}
            >
                <TouchableOpacity
                    key={_id}
                    onPress={() => CheckThenGet()}
                    style={{
                        flex: 1,
                        width: '100%',
                        flexDirection: 'row',
                    }}>
                    <Checkbox
                        value={completed}
                        onChange={() => CheckThenGet()}
                    />
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            paddingLeft: 25,
                        }}
                    >
                        <Text
                            style={{
                                color: completed ? 'grey' : 'black',
                                textDecorationLine: completed ? 'line-through' : 'none',
                            }}
                        >
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity >
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => { onDelete(_id) }}
                    style={{ paddingLeft: 25, paddingRight: 15 }}
                >
                    <Ionicons
                        key={_id}
                        name="ios-trash-outline"
                        color={'black'}
                        size={23}
                    />
                </TouchableHighlight>
            </View>
        </View >
    );
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
    },

    row: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});