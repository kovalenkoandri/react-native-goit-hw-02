import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles';

export function LoginScreen() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const inputEmailHandler = (text) => setEmailValue(text);
  const inputPasswordHandler = (text) => setPasswordValue(text);
  const onSubmitHandler = (creds) => console.log({ ...creds });
  return (
    <ImageBackground style={styles.bg} source={require('../assets/bg.png')}>
      <View style={styles.container}>
        <Image
          source={require('../assets/addPhoto.png')}
          style={styles.addPhoto}
        />
        <View style={styles.regTitleWrapper}>
          <Text style={styles.regTitle}>Войти</Text>
        </View>
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
            secureTextEntry={hidePass ? true : false}
          />
          <Pressable
            style={styles.buttonShow}
            onPress={() => setHidePass(!hidePass)}
          >
            <Text style={styles.textShow}>
              {hidePass ? 'Скрыть' : 'Показать'}
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.buttonRegister}
          onPress={() =>
            onSubmitHandler({ emailValue, passwordValue })
          }
        >
          <Text style={styles.textRegister}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
