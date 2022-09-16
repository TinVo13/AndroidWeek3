import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  var height = Dimensions.get("window").height;
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <LinearGradient colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]} style={styles.linearGradient}>
        <View style={{ height: "15%", width: "100%", marginTop: 0.2 * height }}>
          <Text style={{ fontSize: 60, fontWeight: "700", lineHeight: 70, textAlign: "center" }}>CODE</Text>
        </View>
        <View style={{ height: "10%", width: "100%", marginTop: 0.05 * height, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "700", fontStyle: "normal", lineHeight: 23 }}>VERIFICATION</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", height: "10%", width: "100%" }}>
          <View style={{ width: "55%", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "700", lineHeight: 18, textAlign: "center" }}>Enter ontime password sent on
              ++849092605798</Text>
          </View>
        </View>
        <View style={{ height: "10%", width: "100%", marginTop: 0.05 * height, justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "80%",flexDirection: "row", justifyContent:"center",alignItems:"center"}}>
            {/* <View style={{ height: 50, width: 50, borderWidth: 1 }}>

            </View> */}
            <TextInput style={{height:50,width:50,borderWidth:1,fontSize:30,textAlign:"center"}}>
            </TextInput>
            <TextInput style={{height:50,width:50,borderWidth:1,fontSize:30,textAlign:"center"}}>
            </TextInput>
            <TextInput style={{height:50,width:50,borderWidth:1,fontSize:30,textAlign:"center"}}>
            </TextInput>
            <TextInput style={{height:50,width:50,borderWidth:1,fontSize:30,textAlign:"center"}}>
            </TextInput>
            <TextInput style={{height:50,width:50,borderWidth:1,fontSize:30,textAlign:"center"}}>
            </TextInput>
            <TextInput style={{height:50,width:50,borderWidth:1,fontSize:30,textAlign:"center"}}>
            </TextInput>
          </View>
        </View>
        <View style={{height:"10%",width:"100%",justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"#E3C000",height:50,width:"90%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:18,fontWeight:"700",lineHeight:21}}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
    flex: 1
  },
});
