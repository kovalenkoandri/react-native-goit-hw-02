import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.image} source={require('./assets/bg.png')}>
      <View style={styles.container}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: 200,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
