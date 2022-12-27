import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const inputLoginHandler = (text) => setLoginValue(text);
  const inputEmailHandler = (text) => setEmailValue(text);
  const inputPasswordHandler = (text) => setPasswordValue(text);
  return (
    <ImageBackground style={styles.bg} source={require('./assets/bg.png')}>
      <View style={styles.container}>
        <Image
          source={require('./assets/addPhoto.png')}
          style={styles.addPhoto}
        />
        <View style={styles.regTitleWrapper}>
          <Text style={styles.regTitle}>Регистрация</Text>
        </View>
        <TextInput
          placeholder="Логин"
          value={loginValue}
          onChangeText={inputLoginHandler}
          style={styles.inputLogin}
        />
        <TextInput
          placeholder="Адрес электронной почты"
          value={emailValue}
          onChangeText={inputEmailHandler}
          style={styles.inputEmail}
        />
        <View style={styles.inputPasswordWrapper}>
          <TextInput
            placeholder="Пароль"
            value={passwordValue}
            onChangeText={inputPasswordHandler}
            style={styles.inputPassword}
            secureTextEntry={true}
          />
          <Pressable style={styles.buttonShow} onPress>
            <Text style={styles.textShow}>Показать</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    marginTop: 263,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
  },
  addPhoto: {
    width: 132,
    height: 120,
    position: 'absolute',
    top: -60,
  },
  regTitleWrapper: {
    marginTop: 92,
  },
  regTitle: {
    fontFamily: 'Roboto',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
  },
  inputLogin: {
    marginTop: 32,
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingLeft: 16,
  },
  inputEmail: {
    marginTop: 16,
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderColor: 'red',
    borderStyle: 'solid',
    paddingLeft: 16,
  },
  inputPasswordWrapper: {
    marginTop: 16,
    width: 343,
    height: 50,
  },
  inputPassword: {
    position: 'absolute',
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderColor: 'red',
    borderStyle: 'solid',
    paddingLeft: 16,
    justifyContent: 'center',
  },
  buttonShow: {
    width: 80,
    height: 50,
    marginLeft: 256,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  textShow: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: '#1B4371',
    fontFamily: 'Roboto',
  },
});
