import {
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { styles } from '../styles';
import { ValidateInput } from '../helpers/ValidateInput';
export const CommonRegisterLogin = ({
  children,
  passwordValue,
  emailValue,
  inputEmailHandler,
  inputPasswordHandler,
}) => {
  const { passHideHandler, hidePass } = ValidateInput();
  return (
    <>
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
      {children}
    </>
  );
};
