import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const renderItem = ({ item, increment }) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 2,
        backgroundColor: "#44318E",
        borderRadius: 24,
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 8,
      }}
      onPress={increment}
    >
      <TouchableOpacity
        style={{ padding: 2, backgroundColor: "#f3f4f6", borderRadius: 24 }}
      >
        <Image
          source={{
            uri: item.artworkUrl100,
          }}
          style={{
            borderRadius: 24,
            width: 65,
            height: 65,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginLeft: 10,
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          {item.trackName}
        </Text>
        <Text
          style={{
            color: "#facc15",
            fontSize: 16,
            fontWeight: "500",
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          {item.artistName}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "semibold",
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          Genre : {item.primaryGenreName}
        </Text>
        <Text
          style={{
            color: "lightgreen",
            fontSize: 12,
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          Collection : {item.collectionName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default renderItem;
