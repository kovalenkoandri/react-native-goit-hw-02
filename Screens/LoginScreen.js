import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { styles } from '../styles';
import { ValidateInput } from '../helpers/ValidateInput';
import { CommonRegisterLogin } from '../helpers/CommonRegisterLogin';

export const LoginScreen = () => {
  const {
    inputEmailHandler,
    inputPasswordHandler,
    submitHandler,
    passHideHandler,
    hidePass,
    passwordValue,
    emailValue,
  } = ValidateInput();
  return (
    <ImageBackground style={styles.bg} source={require('../assets/bg.png')}>
      <View style={styles.container}>
        <View style={styles.logTitleWrapper}>
          <Text style={styles.regTitle}>Войти</Text>
        </View>
        <CommonRegisterLogin>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1,
              },
              styles.buttonRegister,
            ]}
            onPress={() => submitHandler({ emailValue, passwordValue })}
          >
            <Text style={styles.textRegister}>Войти</Text>
          </Pressable>
          <Text style={styles.textShow}>Нет аккаунта? Зарегистрироваться</Text>
        </CommonRegisterLogin>
      </View>
    </ImageBackground>
  );
};
