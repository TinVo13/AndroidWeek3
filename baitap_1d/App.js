import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  var height = Dimensions.get('window').height;
  return (
    <View style={{ backgroundColor: 'rgba(49, 170, 82, 0.19)', height: '100%', width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '10%', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 0.03 * height }}>
        <Text style={{ fontSize: 20, lineHeight: 23, fontWeight: '700' }}>LOGIN</Text>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 0.1 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Email' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}></TextInput>
      </View>
      <View style={{ flexDirection: 'row', height: '10%', width: '100%', marginTop: 0.01 * height, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput placeholder='Password' style={{ width: '90%', paddingLeft: 20, height: '80%', backgroundColor: 'rgba(196, 196, 196, 0.3)' }}>
        </TextInput>
        <Image source={require('./assets/Vector.png')} style={{ position: 'absolute', right: 30 }}></Image>
        <Image source={require('./assets/Vector1.png')} style={{ position: 'absolute', right: 43 }}></Image>
      </View>
      <View style={{ marginTop: 0.1 * height, justifyContent: 'center', alignItems: 'center', height: '10%', width: '100%' }}>
        <TouchableOpacity style={{ backgroundColor: '#E53935', height: '80%', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '700', lineHeight: 23, color: 'white' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: '10%', width: '100%', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: '100%', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 16 }}>When you agree to terms and conditions</Text>
          <Text style={{ color: '#5D25FA', fontSize: 14, fontWeight: '400', lineHeight: 16, marginTop: 10 }}>For got your password?</Text>
          <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 16, marginTop: 10 }}>Or login with</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'yellow', width: '90%', height: '8%', marginTop: 0.03 * height, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: '#25479B', height: '100%', width: '33%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./assets/icofacebook.png')} style={{ height: '80%', width: '50%' }}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#0F8EE0', height: '100%', width: '33%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./assets/z_icon.png')} style={{ height: '80%', width: '50%' }}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', height: '100%', width: '34%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./assets/icogoogle.png')} style={{ height: '80%', width: '40%' }}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
