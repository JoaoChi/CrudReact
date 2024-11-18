import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import UsersContext from "../context/UsersContext";

export default ({ navigation, route }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text>Url avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o URL do avatar"
                value={user.avatarUrl}
            />
            <Button
                title='Salvar'
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
    }
})