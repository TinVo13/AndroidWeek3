import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  var height = Dimensions.get("window").height;
  return (
    <View style={{ height: "100%", width: "100%", flex: 1 }}>
      <View style={{ height: "30%", backgroundColor: "#51AC54" }}>

      </View>
      <LinearGradient colors={["white", "grey"]} style={styles.linearGradient}>
        <View style={{ width: '100%', height: '40%' }}>
        </View>
        <View style={{ height: "20%", width: "100%", flexDirection: 'row' }}>
          <View style={{ height: "100%", width: "50%", justifyContent: "center", alignItems: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: '700', lineHeight: 33 }}>9.8</Text>
            <Text style={{ fontSize: 17, fontWeight: '700', lineHeight: 20 }}>rating</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '50%' }}>
            <Text style={{ fontSize: 28, fontWeight: '700', lineHeight: 33 }}>178</Text>
            <Text style={{ fontSize: 17, fontWeight: '700', lineHeight: 20 }}>projects</Text>
          </View>
        </View>
        <View style={{ height: '30%', width: '100%', flexDirection: 'row' }}>
          <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderColor:'#580FCE',borderWidth: 2, height: 50, width: 130, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 17, lineHeight: 20, color: '#E710D1' }}>PORTFOLIO</Text>
            </View>
          </View>
          <View style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderColor:'#580FCE',borderWidth: 2, height: 50, width: 130, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 17, lineHeight: 20, color: '#06896A' }}>PORTFOLIO</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ height: 300, width: 300, backgroundColor: "white", position: "absolute", top: 150, left: 50, borderTopLeftRadius: 25, borderTopRightRadius: 25, alignItems: "center", borderWidth: 1 }}>
        <ImageBackground source={require("./assets/donaltrum.png")} style={{ height: 150, width: 150, borderRadius: 100, justifyContent: "center", alignItems: "center", marginTop: -60 }}></ImageBackground>
        <Text style={{ fontSize: 20, fontWeight: "700", lineHeight: 23, textAlign: "center", marginTop: 20 }}>DONAL TRUMP</Text>
        <Text style={{ fontSize: 17, fontWeight: "700", lineHeight: 20, textAlign: "center", marginTop: 10 }}>
          Full Stack developer, Android UI
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "700", lineHeight: 18, textAlign: "center", marginTop: 10, color: "rgba(0, 0, 0, 0.55)" }}>
          Donald Trump is closely associated with the sport of golf. As a real estate developer, Trump began acquiring and constructing golf courses in 1999</Text>
        <Text style={{ fontSize: 17, fontWeight: "700", lineHeight: 20, textAlign: "center", marginTop: 20 }}>New York, USA</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});
