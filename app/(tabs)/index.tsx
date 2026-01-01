import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MovieCardItem from '@/components/MovieCardItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopularMovies from '@/components/PopularMovies'
import LatestMovies from '@/components/LatestMovies'
import { useRouter } from 'expo-router'



export default function index() {

  return (
    <SafeAreaView style={{ padding: 12,backgroundColor:"#030014" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{fontSize:40,color:"#AF91FF",fontWeight:"bold",textAlign:"center",marginVertical:20}}>MovieFlex</Text>
      <PopularMovies/>
      <LatestMovies/>
      </ScrollView>
    </SafeAreaView>
  )
}