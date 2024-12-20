import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button, Icon } from "@react-navigation/elements";
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screensOptions}>
                <Stack.Screen 
                name ="UserList" 
                component={UserList}
                options={({ navigation }) => {
                    return {
                        title: 'Lista de Usuários',
                        headerRight: () => (
                            <Button 
                                onPress={() => navigation.navigate('UserForm')}
                                type='clear'
                                icon={<Icon name="add" size={25} color="white"/>}
                            />
                        )
                    }
                }}
                />
                <Stack.Screen 
                name ="UserForm" 
                component={UserForm}
                options={{
                    title: "Formulário de Usuários"
                }}
                />    
            </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>
    )
}

const screensOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    HeaderTitleStyle: {
        fontWeight: 'bold',

    }
}