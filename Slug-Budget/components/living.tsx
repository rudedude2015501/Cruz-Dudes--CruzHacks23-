import { View, Text, TextInput, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import {Divider, useTheme } from '@rneui/themed';
import React, {useState} from 'react'

function sub(first: string, second: string){
  var newone : number;
  newone = parseInt(first)

  var secondone: number;
  secondone = parseInt(second)

  return secondone - newone;
}

type LivingProps = {
  accountStatus: any;
  setAccountStatus: any;
};

const LivingScreen = (p: LivingProps) => {
  const accountStatus = p.accountStatus;
  const [text, setText] = useState(accountStatus['groceries']);
  const [text2, setText2] = useState(accountStatus['utilities']);
  const [text3, setText3] = useState(accountStatus['tuition']);
  const [text4, setText4] = useState(accountStatus['disposable']);

  return(
    <ScrollView>
      <Text style={styles.subHeader}>Budget</Text>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>Groceries     </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining: {sub(text, accountStatus['groceries'])} </Text> 

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here"
        onChangeText={newText => setText(newText)}
        value={text} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>Utilites          </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining:  {sub(text2, accountStatus['utilities'])}</Text>

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here"
        onChangeText={newText2 => setText2(newText2)}
        value={text2} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>School          </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining: {sub(text3, accountStatus['tuition'])} </Text>

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type  here"
        onChangeText={newText3 => setText3(newText3)}
        value={text3} 
      />
      </View>

      <Divider width={5} color={"#2089dc"} />

      <View style={styles.vertical}>
        <Text style={styles.leftHeader}>Disposable  </Text>
        <Divider orientation="vertical" width={5} />
        <Text>Spent:{"\n"}Remaining: {sub(text4, accountStatus['disposable'])} </Text>

        <TextInput
        keyboardType='numeric'

        style={{
          height: 15,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here"
        onChangeText={newText4 => setText4(newText4)}
        value={text4} 
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