import { StyleSheet, View } from 'react-native';

import { Stack } from 'expo-router';

import { Container } from '@/components/Container';

export default function Details() {

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <h1> DETAILS PAGE</h1>
        <label for="cars">Choose a car:</label>

        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
