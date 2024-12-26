import React from "react";
import { Text, TextInput } from "react-native";

const TextInputField = ({ label, value, onChangeText, error, ...props }) => {
  return (
    <>
      <Text style={{ marginLeft: 10, color: "#4a5568" }}>{label}</Text>
      <TextInput
        style={{
          backgroundColor: "#f7fafc",
          borderRadius: 16,
          padding: 12,
          marginBottom: error ? 0 : 16,
        }}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {error ? (
        <Text
          style={{
            marginLeft: 10,
            color: "red",
            fontSize: 12,
            marginBottom: 16,
          }}
        >
          {error}
        </Text>
      ) : null}
    </>
  );
};

export default TextInputField;
