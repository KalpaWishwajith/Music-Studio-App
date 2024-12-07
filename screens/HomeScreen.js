import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "@expo/vector-icons/AntDesign";
import axios from "axios";

const HomeScreen = () => {
  const [userName, setUserName] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const getUserProfile = async () => {
    const accessToken = AsyncStorage.getItem("token");
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserName(response.data.display_name);
      setUserName("John Doe");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const getPlaylist = async () => {
    try {
      const response = await axios.get(
        "https://openwhyd.org/adrien?format=json"
      );
      setPlaylist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          flex: 1,
          marginHorizontal: 10,
          marginVertical: 8,
          backgroundColor: "#202020",
          borderRadius: 4,
          elevation: 3,
        }}
      >
        <Image
          source={{
            uri: item.img,
          }}
          style={{
            width: 55,
            height: 55,
          }}
        />
        <View style={styles.randomArtists}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                textAlign: "right",
                marginRight: 20,
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              John Doe
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#282828",
              padding: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>Music</Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#282828",
              padding: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              Podcasts & Shows
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 10 }} />
        <View>
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3,
            }}
          >
            <LinearGradient colors={["#33006F", "#FFFFFF"]}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </LinearGradient>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Liked Songs
            </Text>
          </Pressable>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: "#202020",
              borderRadius: 4,
              elevation: 3,
            }}
          >
            <Image
              source={{
                uri: "https://i.pravatar.cc/100",
              }}
              style={{
                width: 55,
                height: 55,
              }}
            />
            <View style={styles.randomArtists}>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Hipop Thamaize
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Playlist
        </Text>
      </ScrollView>
      <FlatList data={playlist} renderItem={renderItem}></FlatList>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
