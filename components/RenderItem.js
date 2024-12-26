import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 8,
        backgroundColor: "#202020",
        borderRadius: 24,
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 8,
      }}
    >
      <TouchableOpacity
        style={{ padding: 2, backgroundColor: "#f3f4f6", borderRadius: 24 }}
      >
        <Image
          source={{
            uri: item.img,
          }}
          style={{
            borderRadius: 24,
            width: 55,
            height: 55,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "semibold",
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "semibold",
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default renderItem;
