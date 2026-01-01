import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 3 - 16;

export default function MovieCardItem() {
  const router = useRouter();
  return (
      <Pressable onPress={()=>router.push("/movie/123")}>
        <View style={{ width: CARD_WIDTH, marginBottom: 24 }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1765572446249-a583906255f0",
            }}
            style={{
              width: "100%",
              height: 140,
              borderRadius: 6,
            }}
          />

          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              marginTop: 6,
            }}
          >
            Gladiator II
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons name="star" size={14} color="gold" />
            <Text style={{ color: "white", fontSize: 12 }}>4.6</Text>
          </View>

          <Text style={{ fontSize: 12, color: "gray" }}>
            Action · Movie
          </Text>
        </View>
      </Pressable>
  );
}
