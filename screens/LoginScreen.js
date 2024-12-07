import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkTokenValidity = async () => {
      const accessToken = await AsyncStorage.getItem("token");
      const expirationDate = await AsyncStorage.getItem("expirationDate");
      if (accessToken && expirationDate) {
        const currentTime = Date.now();
        if (currentTime < parseInt(expirationDate)) {
          navigation.replace("Main");
        } else {
          AsyncStorage.removeItem("token");
          AsyncStorage.removeItem("expirationDate");
          navigation.replace("Login");
        }
      }
    };
    checkTokenValidity();
  }, []);
  const authenticate = async () => {
    // const config = {
    //   issuer: "https://accounts.spotify.com",
    //   clientId: "f492683078e94923944c43716ae1d752",
    //   scopes: [
    //     "user-read-email",
    //     "user-library-read",
    //     "user-read-recent-played",
    //     "user-top-read",
    //     "playlist-read-private",
    //     "playlist-read-collaborative",
    //     "playlist-modify-public",
    //   ],
    //   redirectUrl: "exp://localhost:19002/--/spotify-auth-callback",
    // };
    // const result = await AppAuth.authAsync(config);
    // console.log(result);
    // if (result.accessToken) {
    //   const expirationDate = new Date(result.accessTokenExpirationDate);
    //   AsyncStorage.setItem("token", result.accessToken);
    //   AsyncStorage.setItem("expirationDate", expirationDat.toString());
    //   navigation.navigate("Main");
    // }
    navigation.navigate("Main");
    console.log("navigated");
  };

  const register = () => {};

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <MaterialCommunityIcons
          style={{ textAlign: "center" }}
          name="music-circle"
          size={80}
          color="white"
        />
        <Text
          style={{
            padding: 10,
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          Millions of Songs free on Music Studio!
        </Text>
        <View style={{ height: 80 }} />
        <Pressable
          onPress={authenticate}
          style={{
            backgroundColor: "blue",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100",
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Log In
          </Text>
        </Pressable>
        <Pressable
          onPress={register}
          style={{
            backgroundColor: "green",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100",
            marginTop: 30,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Register
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
