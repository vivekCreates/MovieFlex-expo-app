import { View, Text } from 'react-native'
import React from 'react'
import MovieCardItem from './MovieCardItem'
import { Movie } from '@/types/movie-types'

export default function LatestMovies({latestMovies}:{latestMovies:Movie[]}) {
    return (
        <View >
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10, color: "white" }}>Latest Movies</Text>
            <View style={{ flexDirection: "row", flexWrap: 'wrap' ,gap:10}}>
                <MovieCardItem />
                <MovieCardItem />
                <MovieCardItem />
                <MovieCardItem />
                <MovieCardItem />
            </View>
        </View>
    )
}