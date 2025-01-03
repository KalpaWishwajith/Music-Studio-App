import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#7B71F9" }}>
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-around",
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 120, height: 120 }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 36,
            lineHeight: 40,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Music Studio
        </Text>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Image
            source={require("../assets/welcome.png")}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: "#facc15",
              marginLeft: 28,
              marginRight: 28,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                lineHeight: 28,
                fontWeight: "bold",
                color: "#4a5568",
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginRight: 6,
                color: "white",
                fontWeight: "semibold",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontWeight: "semibold",
                  color: "#facc15",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
