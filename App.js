import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const inputHandler = (text) => setValue(text);
  return (
    <ImageBackground style={styles.bg} source={require('./assets/bg.png')}>
      <View style={styles.container}>
        <Image
          source={require('./assets/addPhoto.png')}
          style={styles.addPhoto}
        />
        <Text style={styles.regTitle}>Регистрация</Text>
        <TextInput
          placeholder="Type text"
          value={value}
          onChangeText={inputHandler}
          style={styles.inputLogin}
        />
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
  regTitle: {
    fontFamily: 'Roboto',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    position: 'absolute',
    top: 92,
  },
  inputLogin: {
    top: 160,
    position: 'absolute',
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
  },
});
