// import React in our code
import React from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
const AddTodoButton = ({ onPress }) => {


    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={styles.touchableOpacityStyle}>
            <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={{
                    uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                }}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.floatingButtonStyle}
            />
        </TouchableOpacity>
    );
}

export default AddTodoButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        zIndex: 1000
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});
