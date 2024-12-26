import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

const FloatingButton = ({ count, increment }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#fbbf24",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      }}
      onPress={increment}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {count}
      </Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
