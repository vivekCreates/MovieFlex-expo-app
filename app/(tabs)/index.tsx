import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieCardItem from '@/components/MovieCardItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopularMovies from '@/components/PopularMovies'
import LatestMovies from '@/components/LatestMovies'
import { useRouter } from 'expo-router'
import { Movie, MoviePesponse } from '@/types/movie-types'



export default function index() {
  const [popularMovies,setPopularMovies] = useState<Movie[]>([]);
  const [latestMovies,setLatestMovies] = useState<Movie[]>([]);

  const fetchPopularMovies = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/3/movie/popular?language=en-US&page=1`,{
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`
          }
        });
       
        if (!response.ok){
          console.log("Failed to fetch popular movies")
        }
  
        const data = await response.json() as MoviePesponse;
        setPopularMovies(data?.results)
  
      } catch (error:any) {
        console.log("Error while fetching the popular movies: ",error?.message)
      }
    }

  const fetchLatestMovies = async () => {
      try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}3/movie/now_playing?language=en-US&page=1`,{
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`
          }
        });
       
        if (!response.ok){
          console.log("Failed to fetch latest movies")
        }
  
        const data = await response.json() as MoviePesponse;
        setLatestMovies(data?.results)
  
      } catch (error:any) {
        console.log("Error while fetching the latest movies: ",error?.message)
      }
    }

    useEffect(()=>{
      fetchPopularMovies();
      fetchLatestMovies();
    },[])

  return (
    <SafeAreaView style={{ padding: 12,backgroundColor:"#030014" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <PopularMovies/>
      <LatestMovies/>
      </ScrollView>
    </SafeAreaView>
  )
}