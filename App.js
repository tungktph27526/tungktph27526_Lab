import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function App() {
 
  const[stState, setStState] = useState(false);
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.text}>Kieu Thanh Tung</Text>
      <Text style={styles.text}>PH27526</Text>
      
      <Button 
          title={`${stState ? 'an': 'them moi'}`}
          onPress ={() => setStState(!stState)}
      />
      {stState?<>
          <TextInput placeholder='ten'style={styles.boders}/>
          <TextInput placeholder='ma'style={styles.boders}/>
          <TextInput placeholder='dia chi'style={styles.boders}/>
          <TextInput placeholder='sdt'style={styles.boders}/>
          <Button  
          title='luu'
          />
          <Button
          title='huy'
          />
          </>
          : null
      }
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  boders:{
    width: 200,
    height: 54,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
