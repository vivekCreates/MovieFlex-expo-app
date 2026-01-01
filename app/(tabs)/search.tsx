import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchItem from '@/components/SearchItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieCardItem from '@/components/MovieCardItem';

export default function search() {
  const FILTERS = ["Adventure", "Action", "Comedy", "Romance"];

  const [active, setActive] = useState("")
  return (
    <SafeAreaView style={{ backgroundColor: "#030014", height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop:50,marginBottom: 10 }}>
          <SearchItem />
        </View>
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 25, color: "white" }}>Seach for Venom</Text>
          <View style={{ flexDirection: "row", gap: 4, marginTop: 10 }}>
            {
              FILTERS.map((item) => (
                <Pressable
                  key={item}
                  onPress={() => setActive(item)}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: active === item ? "#fff" : "#0F0D23",
                  }}
                >
                  <Text style={{ color: active === item ? "#000" : "#fff" }}>
                    {item}
                  </Text>
                </Pressable>
              ))
            }
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 40,gap:10 }}>
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
            <MovieCardItem />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}