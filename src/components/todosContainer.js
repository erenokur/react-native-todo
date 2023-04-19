import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, FlatList, StatusBar, Platform, Text } from 'react-native';
//import { ReactiveList } from '@appbaseio/reactivesearch-native';
import { useSelector, useDispatch } from 'react-redux';
import { createtask, gettasks, deactivatetask, markdone, markundone } from '../store/tasksSlices/tasksThunk'
import { getToken } from '../utils/HelperFunctions';

import AddTodo from './addTodo';
import AddTodoButton from './addTodoButton';
import TodoItem from './todoItem';
import BottomTab from './bottomTab';
import AsyncStorage from '@react-native-community/async-storage';


const TodosContainer = ({ onExit }) => {
    const [filterType, setFilterType] = useState("ALL");
    const [addingTodo, setAddingTodo] = useState(false);
    const dispatch = useDispatch();
    const { taskList } = useSelector((state) => state.tasks);
    const { token, loading, userName, loginMessage } = useSelector((state) => state.auth);


    useEffect(() => {
        dispatch(gettasks());
    }, []);

    const OnAllData = () => {
        const filteredData = this.filterTodosData(taskList);
        return (
            <FlatList
                style={{ width: '100%', top: 15 }}
                data={filteredData}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <TodoItem
                        _id={item._id}
                        title={item.title}
                        completed={item.completed}
                        onTodoDone={(_id) => {
                            dispatch(markdone({ _id }))
                        }}
                        onTodoUnDone={(_id) => {
                            dispatch(markundone({ _id }))
                        }}
                        onDelete={(_id) => {
                            dispatch(deactivatetask({ _id }))
                        }}
                    />
                )}
            />
        );
    };

    filterTodosData = (todosData) => {
        switch (filterType) {
            case "ALL":
                return todosData;
            case "ACTIVE":
                return todosData.filter(value => !value.completed);
            case "COMPLETED":
                return todosData.filter(value => value.completed);
        }
        return todosData;
    };
    const AddTodoButtonPressed = (childdata) => {
        setAddingTodo(true)
    }
    return (
        <View style={styles.container}>
            <View>
                <Text> {userName} Todo list </Text>
            </View>

            <OnAllData></OnAllData>
            {addingTodo ? (
                <View style={styles.row}>
                    <AddTodo
                        onAdd={(title) => {
                            setAddingTodo(false);
                            dispatch(createtask({ title }));
                        }}
                        onCancelDelete={() => setAddingTodo(false)}
                        onBlur={() => setAddingTodo(false)}
                    />
                </View>
            ) : null}

            <AddTodoButton onPress={() => { AddTodoButtonPressed() }} />
            {addingTodo ? null :
                <BottomTab
                    onShowAll={() => setFilterType("ALL")}
                    onShowDone={() => setFilterType("ACTIVE")}
                    onShowUnDone={() => setFilterType("COMPLETED")}
                    onExit={() => { onExit() }

                    }></BottomTab>}




        </View>
    );
}

export default TodosContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomTab: {
        position: "relative",
        height: "100%",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "black"
    },
    row: {
        top: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
