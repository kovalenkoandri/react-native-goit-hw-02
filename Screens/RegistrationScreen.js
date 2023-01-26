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
      <View style={(styles.containerRegister)}>
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
        <CommonRegisterLogin>
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
          <Text style={styles.textShow}>Уже есть аккаунт? Войти</Text>
        </CommonRegisterLogin>
      </View>
    </ImageBackground>
  );
};
