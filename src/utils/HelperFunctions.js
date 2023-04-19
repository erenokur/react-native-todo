import AsyncStorage from '@react-native-community/async-storage';


export const getToken = async () => {
    let value = await AsyncStorage.getItem("@token");
    return value;

}

export const removeToken = () => {
    AsyncStorage.removeItem("@token")
}

export const setToken = (val) => {
    AsyncStorage.setItem("@token", val)
}
