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

export function RegistrationScreen() {
  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const inputLoginHandler = (text) => setLoginValue(text);
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
            secureTextEntry={hidePass ? true : false}
          />
          <Pressable
            style={styles.buttonShow}
            onPress={() => setHidePass(!hidePass)}
          >
            <Text style={styles.textShow}>Показать</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.buttonRegister}
          onPress={() =>
            onSubmitHandler({ loginValue, emailValue, passwordValue })
          }
        >
          <Text style={styles.textRegister}>Зарегистрироваться</Text>
        </Pressable>
        <Text style={(styles.textShow, styles.alreadyHaveAccount)}>
          Уже есть аккаунт? Войти
        </Text>
      </View>
    </ImageBackground>
  );
}
