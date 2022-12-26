import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.bg} source={require('./assets/bg.png')}>
      <View style={styles.container}>
        <Image
          source={require('./assets/addPhoto.png')}
          style={styles.addPhoto}
        />
        <Text style={styles.regTitle}>Регистрация</Text>
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
});
