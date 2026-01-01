import { View, Text } from 'react-native'
import React from 'react'
import SearchItem from '@/components/SearchItem'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function  search() {
  return (
    <SafeAreaView style={{backgroundColor:"#030014",height:"100%"}}>
      <Text> search page</Text>
      <SearchItem/>
    </SafeAreaView>
  )
}