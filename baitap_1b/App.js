import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  var height = Dimensions.get("window").height;
  return (
    <ImageBackground source={require("./assets/background.png")} style={{ width: "100%", height: "100%", flex: 1 }}>
      <View style={{ height: "20%", width: "100%", marginTop: 0.1 * height, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("./assets/lock.png")} style={{}}></Image>
      </View>
      <View style={{ height: "10%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 0.03 * height }}>
        <Text style={{ textAlign: "justify", width: 250, fontWeight: "700", fontSize: 30, textAlign: "center", lineHeight: 29 }}>FORGET PASSWORD</Text>
      </View>
      <View style={{ height: "5%", width: "100%" ,justifyContent:"center",alignItems:"center"}}>
        <Text style={{ height:"100%",width:"80%",textAlign: "center", fontSize: 15, fontWeight: "700", lineHeight: 18 }}>Provide your account’s email for which you want to reset your password</Text>
      </View>
      <View style={{height:"7%",width:"100%",justifyContent:"center",alignItems:"center",marginTop:0.05*height}}>
          <View style={{height:"100%",width:"80%",flexDirection:'row',alignItems:"center",backgroundColor:"#C4C4C4"}}>
              <Image source={require("./assets/mail.png")}></Image>
              <Text style={{textAlign:"center",textAlignVertical:"center",fontSize:15,fontWeight:"700",lineHeight:18}}>Mail</Text>
              <TextInput style={{width:"80%",height:"100%"}}></TextInput>
          </View>
      </View>
      <View style={{height:"10%",width:"100%",marginTop:0.05*height,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#E3C000",justifyContent:"center",alignItems:"center", width:"80%",height:45}}>
          <Text style={{fontSize:18,fontWeight:"700",lineHeight:21}}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
