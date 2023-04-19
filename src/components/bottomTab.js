import { View, CheckBox, Body } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';


const BottomTab = ({ onShowAll, onShowDone, onShowUnDone, onExit }) => {
    const [focusedAll, setFocusedAll] = useState(false);
    const [focusedDone, setFocusedDone] = useState(false);
    const [focusedUnDone, setFocusedUnDone] = useState(false);

    const setStatus = (val) => {
        switch (val) {
            case "ALL":
                setFocusedAll(true)
                setFocusedDone(false)
                setFocusedUnDone(false)
                onShowAll(true)
                return
            case "DONE":
                setFocusedAll(false)
                setFocusedDone(true)
                setFocusedUnDone(false)
                onShowDone(true)
                return
            case "UNDONE":
                setFocusedAll(false)
                setFocusedDone(false)
                setFocusedUnDone(true)
                onShowUnDone(true)
                return

        }

    }
    return (
        <View style={{
            position: "absolute",
            bottom: 20,
            width: '100%',
            flexDirection: 'row',
            alignSelf: "baseline",
            paddingRight: 10,
            paddingBottom: -50,
            paddingTop: 5,
        }} >
            <MaterialIcons
                name={'format-list-bulleted'}
                size={63}
                style={{ marginBottom: -3 }}
                color={focusedAll ? '#2f95dc' : '#ccc'}
                onPress={() => {
                    setStatus("ALL")
                }}
            />
            <MaterialIcons
                name={'filter-center-focus'}
                size={63}
                style={{ marginBottom: -3 }}
                color={focusedDone ? '#2f95dc' : '#ccc'}
                onPress={() => {
                    setStatus("DONE")
                }}
            />
            <MaterialIcons
                name={'playlist-add-check'}
                size={63}
                style={{ marginBottom: -3 }}
                color={focusedUnDone ? '#2f95dc' : '#ccc'}
                onPress={() => {
                    setStatus("UNDONE")
                }}
            />
            <Entypo
                name={'cross'}
                size={63}
                style={{ marginBottom: -3 }}
                color={'red'}
                onPress={onExit}
            />
        </View>
    );
}

export default BottomTab