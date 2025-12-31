import { View, Text } from 'react-native'
import React from 'react'

export default function MovieCardItem() {
  return (
    <View style={{width:105,height:200,marginBottom:10}}>
      <Text style={{width:"100%",height:"70%",backgroundColor:"red",borderRadius:6}}>
      </Text>
      <Text style={{fontSize:18,fontWeight:"semibold",paddingTop:5,paddingBottom:2}}>Gladiator II</Text>
       <Text style={{fontSize:12}}>Action . Movie</Text> 
    </View>
  )
}