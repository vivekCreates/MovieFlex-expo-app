import { View, Text } from 'react-native'
import React from 'react'
import MovieCardItem from '@/components/MovieCardItem'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function index() {
  return (
    <SafeAreaView style={{padding:12}}>
      <Text>index Page</Text>
     
    </SafeAreaView>
  )
}