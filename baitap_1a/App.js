import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  var height = Dimensions.get("window").height;
  var width = Dimensions.get("window").width;
  return (
    <ImageBackground style={{ height: '100%', width: '100%', flex: 1 }} source={require('./assets/background.png')}>
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "30%", width: "100%", marginTop: 0.05 * height, alignItems: "center", justifyContent: "center" }}>
          <View style={styles.circle}>
          </View>
        </View>
        <View style={{ height: "10%", width: "100%", marginTop: 0.05 * height, alignItems: "center" }}>
          <Text style={styles.text}>GROW</Text>
          <Text style={styles.text1}>YOUR BUSINESS</Text>
        </View>
        <View style={{ height: "10%", width: "100%", marginTop: 0.05 * height, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "700", textAlign: "center" }}>We will help you to grow your business using
            online server</Text>
        </View>
        <View style={{ height: "20%", width: "100%", marginTop: 0.05 * height, flexDirection: "row", alignItems: "center", justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height:"10%",width:"100%",alignItems:"center"}}>
          <Text style={{fontSize:18,fontWeight:"700",}}>HOW WE WORK?</Text>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: 200,
    width: 200,
    borderRadius: 1000,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 20,
  },
  text: {
    width: 190,
    height: 40,
    color: "black",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "800",
    textAlign: "center",
  },
  text1: {
    width: 300,
    height: 58,
    color: "black",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "800",
    textAlign: "center",
  },
  button:{
    height: 45,
    width:125,
    backgroundColor:"#E3C000",
    alignItems:"center",
    justifyContent:"center",
    margin:20
  },
  textbutton:{
    fontSize:18,
    fontWeight:'900',
    lineHeight:21,
    fontStyle:'normal',
    fontFamily:"Roboto"
  }
});
