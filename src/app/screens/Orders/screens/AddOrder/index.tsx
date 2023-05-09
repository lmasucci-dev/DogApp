import React, { useState } from "react";
import {
    Button,
    View,
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    Modal,
    Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../../../constants/constants';
import { database } from '../../../../../config/firebaseConfig'
import { collection, addDoc, query, getDocs } from 'firebase/firestore'

const AddOrder = (props) => {
    const navigation = useNavigation();
    const initalState = {
        name: '',
        lastName: '',
        username: '',
        password: '',
        routine: undefined
    };

    const [state, setState] = useState(initalState);
    const [typeError, setTypeError] = useState('none');
    const [modalOk, setModalOk] = useState(false);

    const handleChangeText = (value: string, name: string) => {
        setState({ ...state, [name]: value });
    };

    const addUser = async () => {
        let error: string = 'none';
        if (state.name === '') {
            error = 'nombre';
        } else if (state.lastName === '') {
            error = 'apellido'
        } else if (state.username === '') {
            error = 'usuario'
        } else if (state.password === '') {
            error = 'password'
        }

        if (error === 'none') {
            await addDoc(collection(database, 'users'), { name: state.name, lastName: state.lastName, username: state.username, password: state.password })
            setModalOk(true);
        } else {
            setTypeError(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            {/* Name Input */}
            <View style={styles.inputGroup}>
                <TextInput
                    autoCapitalize={"words"}
                    placeholder="Nombre"
                    onChangeText={(value) => handleChangeText(value, "name")}
                    value={state.name}
                />
            </View>

            <View style={styles.inputGroup}>
                <TextInput
                    autoCapitalize={"words"}
                    placeholder="Apellido"
                    onChangeText={(value) => handleChangeText(value, "lastName")}
                    value={state.lastName}
                />
            </View>

            {/* Input username */}
            <View style={styles.inputGroup}>
                <TextInput
                    autoCapitalize={"none"}
                    placeholder="Usuario"
                    onChangeText={(value) => handleChangeText(value, "username")}
                    value={state.username}
                />
            </View>

            {/* Input password*/}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Contraseña"
                    onChangeText={(value) => handleChangeText(value, "password")}
                    value={state.password}
                    secureTextEntry
                />
            </View>

            <View style={styles.button}>
                <Button title="Guardar" onPress={() => addUser()} />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={typeError !== 'none'}
                onRequestClose={() => {
                    setTypeError('none');
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>El campo {typeError} es requerido</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setTypeError('none')}>
                            <Text style={styles.textStyle}>Entendido</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOk}
                onRequestClose={() => navigation.goBack()}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>El usuario {state.username} para {state.name} se creo con éxito!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => navigation.goBack()}>
                            <Text style={styles.textStyle}>Entendido</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    button: {
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputGroup: {
        flex: 1,
        padding: 10,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default AddOrder;