import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieCardItem from '@/components/MovieCardItem'

export default function bookmark() {
  return (
    <SafeAreaView style={{backgroundColor:"#030014",height:"100%",padding:10}}>
      <Text style={{color:"white",fontSize:25,marginTop:20}}>Bookmark Movies</Text>
      <View style={{flexDirection:"row",gap:10,marginTop:20,flexWrap:"wrap"}}>
        <MovieCardItem/>
        <MovieCardItem/>
        <MovieCardItem/>
        <MovieCardItem/>
      </View>
    </SafeAreaView>
  )
}