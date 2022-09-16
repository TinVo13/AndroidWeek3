import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
//import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import {RadioButton} from 'react-native-paper';


export default function App() {
  const [isSelected, setSelection] = useState(false);
  var height = Dimensions.get('window').height;
  //const [agree,setAgree] = useState(false);
  return (
    <View style={{ backgroundColor: 'rgba(49, 170, 82, 0.19)', height: '100%', width: '100%', flex: 1 }}>
      <View style={{ marginTop: 0.1 * height, height: '10%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, lineHeight: 29, fontWeight: '700' }}>REGISTER</Text>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.01 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Name' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}></TextInput>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.01 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Phone' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}></TextInput>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.01 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Email' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}></TextInput>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.01 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Password' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}></TextInput>
        <Image source={require('./assets/Vector.png')} style={{ position: 'absolute', right: 30 }}></Image>
        <Image source={require('./assets/Vector1.png')} style={{ position: 'absolute', right: 43 }}></Image>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.01 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Birthday' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}></TextInput>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.01 * height,alignItems: 'center',justifyContent:'center'}}>
        {/* <CheckBox value={isSelected} onValueChange={setSelection} style={{alignSelf:'center'}}/> */}
        <View style={{height:'100%',width:'90%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          <RadioButton/>
        <Text style={{fontSize:18,fontWeight:'400',lineHeight:21}}>Male</Text>
        <RadioButton/>
        <Text style={{fontSize:18,fontWeight:'400',lineHeight:21}}>Female</Text>
        </View>
      </View>
      <View style={{width:'100%',height:'10%',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'#E53935',height:'80%',width:'90%',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'700',lineHeight:23,color:'white'}}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:14,fontWeight:'400',lineHeight:16}}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
