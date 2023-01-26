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
export const RegistrationScreen = () => {
  const {
    inputLoginHandler,
    inputEmailHandler,
    inputPasswordHandler,
    submitHandler,
    passHideHandler,
    hidePass,
    passwordValue,
    emailValue,
    loginValue,
  } = ValidateInput();
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
            onPress={() => passHideHandler(hidePass)}
          >
            <Text style={styles.textShow}>
              {hidePass ? 'Скрыть' : 'Показать'}
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
            styles.buttonRegister,
          ]}
          onPress={() =>
            submitHandler({ loginValue, emailValue, passwordValue })
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
