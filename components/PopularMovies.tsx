import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieCardItem from './MovieCardItem'
import { Movie } from '@/types/movie-types'




export default function PopularMovies({popularMovies}:{popularMovies:Movie[]}) {
  

  return (
    <View >
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10, color: "white" }}>Popular Movies</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          gap: 10
        }}>
        <MovieCardItem />
        <MovieCardItem />
        <MovieCardItem />
        <MovieCardItem />
      </ScrollView>
    </View>
  )
}