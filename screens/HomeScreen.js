import {
  Animated,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Easing,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "react-native-heroicons/solid";
import axios from "axios";
import renderItem from "../components/RenderItem";
import { create } from "zustand";
import FloatingButton from "../components/FloatingButton";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const HomeScreen = () => {
  const { user } = useAuth();
  const userName = user?.email.split("@")[0].replace(/\d+/g, "");
  const [playlist, setPlaylist] = useState([]);
  const slideAnim = useRef(new Animated.Value(300)).current;
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      alert(error.message);
    }
  };
  const getPlaylist = async () => {
    try {
      const response = await axios.get(
        "https://itunes.apple.com/search?term=ed+sheeran&entity=song"
      );
      setPlaylist(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 2300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const { count, increment } = useStore();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1, backgroundColor: "#7B71F9" }}
        data={playlist}
        renderItem={renderItem}
        ListHeaderComponent={
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                marginLeft: 16,
                marginTop: 16,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {userName}
              </Text>
              <TouchableOpacity style={{ marginLeft: "auto", marginRight: 4 }}>
                <UserCircleIcon size="36" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={handleLogout}
              >
                <ArrowLeftStartOnRectangleIcon
                  size="34"
                  color="white"
                  rotation={180}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 30,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Image
                source={require("../assets/welcomeHome.png")}
                style={{ width: 130, height: 130, marginBottom: 16 }}
              />
              <Animated.View
                style={{
                  transform: [{ translateX: slideAnim }],
                }}
              >
                <Text
                  style={{ fontSize: 24, color: "#fbbf24", fontWeight: "bold" }}
                >
                  Welcome to Music Studio !
                </Text>
              </Animated.View>
            </View>
          </SafeAreaView>
        }
        keyExtractor={(item, index) =>
          item.name ? item.name : index.toString()
        }
      />
      <FloatingButton count={count} increment={increment} />
    </View>
  );
};

export default HomeScreen;
