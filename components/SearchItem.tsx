import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SearchItem() {
  return (
    <View style={{flexDirection:"row",justifyContent:"center"}}>
        <TextInput
             placeholder="Search through 300 movies online"
             placeholderTextColor="grey"
            //  value={""}
             // onChangeText={}
             style={{
               borderWidth: 1,
               padding: 15,
               borderRadius: 20,
               marginBottom: 10,
               width:"90%",
                backgroundColor:"#0F0D23",
                color:"white"
             }}
         />
    </View>
  )
}