import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const mainColor = '#e77707';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.siblings}>
        <Text style={styles.label}>Path to File</Text>
        <View style={styles.inline}>
          <Text style={styles.input}>Path</Text>
          <Button buttonStyle={styles.mainBttn} title="Search"/>
        </View>
      </View>
      <Text style={styles.label}>Text Column</Text>
      <Text style={styles.label}>Label Column</Text>
      <Text style={styles.label}>Number of Classes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191b',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  siblings: {
    justifyContent: 'space-evenly'
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
  },
  label: {
    color: '#e77707',
    fontFamily: "georgia",
    fontSize: 15,
  },
  input: {
    color: '#000000',
    fontFamily: "georgia",
    fontSize: 13,
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.60,
  },
  mainBttn: {
    backgroundColor: mainColor,
    color: 'white',
    width: SCREEN_WIDTH * 0.3,
  }
});
