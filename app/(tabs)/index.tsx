import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MovieCardItem from '@/components/MovieCardItem'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function index() {
  return (
    <SafeAreaView style={{ padding: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "semibold",padding:12 }}>Popular Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          paddingHorizontal: 10,
        }}>
        <MovieCardItem />
        <MovieCardItem />
        <MovieCardItem />
        <MovieCardItem />
      </ScrollView>
    </SafeAreaView>
  )
}