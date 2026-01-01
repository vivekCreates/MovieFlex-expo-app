import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SearchItem() {
  return (
    <View style={{flexDirection:"row",justifyContent:"center"}}>
        <TextInput
             placeholder="Search..."
             placeholderTextColor="#fff"
            //  value={""}
             // onChangeText={}
             style={{
               borderWidth: 1,
               padding: 10,
               borderRadius: 8,
               marginBottom: 10,
               width:"80%",
                backgroundColor:"#212121",
                color:"white"
             }}
         />
    </View>
  )
}