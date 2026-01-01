import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function MovieCardItem() {
  return (
    <View style={{width:105,height:200,marginBottom:30,marginRight:10}}>
      <Image source={{uri:"https://images.unsplash.com/photo-1765572446249-a583906255f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzR8fHxlbnwwfHx8fHw%3D"}} style={{width:"100%",height:"70%",backgroundColor:"red",borderRadius:6}}>
      </Image>
      <Text style={{fontSize:18,fontWeight:"semibold",paddingTop:5,paddingBottom:2,color:"white"}}>Gladiator II</Text>
      <View style={{flexDirection:"row",gap:5}}>
      <Ionicons name={"star"} size={15} color={"gold"}/>
      <Text style={{color:"white"}}>4.6</Text>
      </View>
       <Text style={{fontSize:12,color:"white"}}>Action . Movie</Text> 
    </View>
  )
}