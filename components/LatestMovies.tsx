import { View, Text } from 'react-native'
import React from 'react'
import MovieCardItem from './MovieCardItem'

export default function LatestMovies() {
    return (
        <View >
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10, color: "white" }}>Latest Movies</Text>
            <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
                <MovieCardItem />
                <MovieCardItem />
                <MovieCardItem />
                <MovieCardItem />
                <MovieCardItem />
            </View>
        </View>
    )
}