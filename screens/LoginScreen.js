import {React,useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {KeyboardAvoidingView} from 'react-native';
import{StatusBar} from 'expo-status-bar';

const LoginScreen = ({ navigation }) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = () => {

    }
    
    return(
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <StatusBar style="light"  />
            <Image source = {{
                uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/900px-Signal-Logo.svg.png?20201126050550 "

            }} 
            style= {{width: 200, height: 200, marginBottom: 30}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder='Email' 
                autoFocus 
                type="email" 
                value={email}
                onChangeText = {(text)=> setEmail(text)}
                />
                <Input placeholder="Password"
                secureTextEntry
                type="password"
                value={password}
                onChangeText = {(text)=> setPassword(text)}
                />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn} />
            <Button onPress={()=> navigation.navigate("Register")} containerStyle={styles.button}type="outline" title="Register"  />
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 10,

    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop:10,
    }

})
export default LoginScreen
