import React, { Component, useState } from 'react';
import { View, Body, CheckBox, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddTodo = ({ onAdd, onCancelDelete, onBlur }) => {
    const [title, setTitle] = useState('');

    onSubmit = () => {
        if (title.length > 0) onAdd(title);
        return null;
    };
    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 10,
                paddingBottom: 5,
                paddingTop: 5,
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingLeft: 25,
                }}
            >
                <TextInput
                    style={{ width: '90%' }}
                    placeholder="What needs to be done?"
                    autoFocus
                    underLineColorAndroid="transparent"
                    underlineColor="transparent"
                    blurOnSubmit
                    onSubmitEditing={onSubmit}
                    onChangeText={changedTitle => setTitle(changedTitle)}
                    value={title}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onBlur={onBlur}
                />
            </View>
            <TouchableOpacity
                onPress={onCancelDelete}
                style={{ paddingLeft: 25, paddingRight: 15 }}
            >
                <Ionicons
                    name="ios-trash-outline"
                    color={`${title.length > 0 ? 'black' : 'grey'}`}
                    size={23}
                />
            </TouchableOpacity>
        </View>
    )
}

export default AddTodo 