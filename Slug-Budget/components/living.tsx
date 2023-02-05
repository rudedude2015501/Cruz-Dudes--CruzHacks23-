import { View, Text, TextInput, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import {Divider, useTheme } from '@rneui/themed';
import React, {useState} from 'react'

function sub(first: string, second: string){
  var newone : number;
  newone = Number(first)

  var secondone: number;
  secondone = Number(second)

  return newone - secondone;
}

const LivingScreen = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');

  return(
    <ScrollView>
      <Text style={styles.subHeader}>Budget</Text>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>Groceries     </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining:  </Text> 

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here"
        onChangeText={newText => setText(newText)}
        defaultValue={text} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>Utilites          </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining:  </Text>

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here"
        onChangeText={newText2 => setText2(newText2)}
        defaultValue={text2} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>School          </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining:  </Text>

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type  here"
        onChangeText={newText3 => setText3(newText3)}
        defaultValue={text3} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>Disposable  </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining:  </Text>

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here"
        onChangeText={newText4 => setText4(newText4)}
        defaultValue={text4} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "yellow",
    fontSize: 50,
    textAlign : "center",
    paddingVertical : 45
  },
  vertical: {
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  leftHeader: {
    fontSize: 30,
  }
  })

export default LivingScreen