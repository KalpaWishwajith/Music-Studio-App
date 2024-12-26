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
import { UserCircleIcon } from "react-native-heroicons/solid";
import axios from "axios";
import renderItem from "../components/RenderItem";

const HomeScreen = ({ route }) => {
  const { userName = "Guest" } = route.params || {};

  const [playlist, setPlaylist] = useState([]);
  const slideAnim = useRef(new Animated.Value(300)).current;

  const getPlaylist = async () => {
    try {
      const response = await axios.get(
        "https://binaryjazz.us/wp-json/genrenator/v1/story/25/"
      );
      console.log(response.data);
      setPlaylist(response.data);
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

  return (
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
            <TouchableOpacity style={{ marginLeft: "auto", marginRight: 16 }}>
              <UserCircleIcon size="36" color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 30,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/icon.png")}
              style={{ width: 120, height: 120, marginBottom: 16 }}
            />
            <Animated.View
              style={{
                transform: [{ translateX: slideAnim }],
              }}
            >
              <Text
                style={{ fontSize: 24, color: "#facc15", fontWeight: "bold" }}
              >
                Welcome to Music Studio !
              </Text>
            </Animated.View>
          </View>
        </SafeAreaView>
      }
      keyExtractor={(item, index) => (item.name ? item.name : index.toString())}
    />
  );
};

export default HomeScreen;
