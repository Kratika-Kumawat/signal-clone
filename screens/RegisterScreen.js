import {React,useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import {KeyboardAvoidingView} from 'react-native';
import{StatusBar} from 'expo-status-bar';

const RegisterScreen = ({ navigation  }) => {
    return(
        <KeyboardAvoidingView behavior="padding" style = {styles.container}>
            <StatusBar style="Light"  />
            <Text >I am the register screen</Text>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {

    }
})