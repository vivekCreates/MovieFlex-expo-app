import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MovieCardItem from '@/components/MovieCardItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopularMovies from '@/components/PopularMovies'
import LatestMovies from '@/components/LatestMovies'



export default function index() {
  return (
    <SafeAreaView style={{ padding: 12,backgroundColor:"#030014" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <PopularMovies/>
      <LatestMovies/>
      </ScrollView>
    </SafeAreaView>
  )
}