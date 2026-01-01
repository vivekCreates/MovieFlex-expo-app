import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

export default function movie() {
  const params = useLocalSearchParams();
  console.log(params.id)
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#030014" }}>
      <Image style={{ width: "100%", height: "30%" }} source={{ uri: "https://images.unsplash.com/photo-1765572446249-a583906255f0" }} />
      <View style={{ height: "60%", padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>Squid Game 2</Text>
        <Text style={{}}>2024 . PG-13 . 2h 46min</Text>
        <View style={{ width: 120, padding: 10, backgroundColor: "#221F3D", flexDirection: "row", gap: 6, borderRadius: 6 }}>
          <Ionicons name='star' size={15} color={"gold"} />
          <Text style={{ color: "white" }}>8.4/10 (200K)</Text>
        </View>
        <View>
          <Text style={{ color: "white", marginTop: 10, fontSize: 15 }}>Overview</Text>
          <Text style={{ color: "grey" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos minus qui accusamus hic quam officiis ab dolore nobis dignissimos, laborum est earum, perspiciatis excepturi? Fuga dolorum id totam eveniet voluptate.</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ color: "grey" }}>Release date</Text>
              <Text style={{ color: "#AF91FF" }}>December 26 2024 (WorldWide)</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ color: "grey" }}>Status</Text>
              <Text style={{ color: "#AF91FF" }}>Released</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", gap: 6 }}>
            <Text style={{ color: "grey" }}>Generes</Text>
            <View style={{ flexDirection: "row", gap: 6 }}>
              <Text style={{ width: 90, color: "white", padding: 10, backgroundColor: "#221F3D", flexDirection: "row", gap: 6, borderRadius: 6 }}>Adventure</Text>
              <Text style={{ width: 90, color: "white", padding: 10, backgroundColor: "#221F3D", flexDirection: "row", gap: 6, borderRadius: 6 }}>Action</Text>
              <Text style={{ width: 90, color: "white", padding: 10, backgroundColor: "#221F3D", flexDirection: "row", gap: 6, borderRadius: 6 }}>Romance</Text>
            </View>
          </View>
          <View style={{ flexDirection: "column", gap: 6, marginTop: 10 }}>
            <Text style={{ color: "grey" }}>Country</Text>
            <View style={{ flexDirection: "row", gap: 6 }}>
              <Text style={{ color: "#AF91FF" }}>

                NewZealand . Australia . South Africa . England
              </Text>
            </View>
          </View>


          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ color: "grey" }}>Budget</Text>
              <Text style={{ color: "#AF91FF" }}>$21 million</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <Text style={{ color: "grey" }}>Revenue</Text>
              <Text style={{ color: "#AF91FF" }}>$900 million</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{width:"100%",paddingVertical:10,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#AF91FF",marginTop:20}}>
        <Text>Visit Homepage</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}