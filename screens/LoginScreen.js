import { Text, Image, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import TextInputField from "../components/TextInputField";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let isValid = true;
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleValidation = () => {
    setEmail(email.toLowerCase().trim());
    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      isValid = false;
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    handleValidation();
    if (isValid) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#7B71F9" }}>
        <SafeAreaView style={{ display: "flex" }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: "#facc15",
                padding: 8,
                borderTopRightRadius: 18,
                borderBottomLeftRadius: 18,
                marginLeft: 16,
              }}
            >
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 28,
            }}
          >
            <Image
              source={require("../assets/login.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </SafeAreaView>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            paddingTop: 32,
            paddingLeft: 32,
            paddingRight: 32,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingBottom: 68,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <TextInputField
              label="Email"
              value={email}
              onChangeText={setEmail}
              error={emailError}
              placeholder="Enter Your Email"
            />
            <TextInputField
              label="Password"
              value={password}
              onChangeText={setPassword}
              error={passwordError}
              placeholder="Enter Password"
              secureTextEntry
            />
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: 2,
                marginBottom: 20,
              }}
            >
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingBottom: 12,
                paddingTop: 12,
                backgroundColor: "#facc15",
                borderRadius: 12,
              }}
              onPress={handleLogin}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#4a5568",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "#4a5568",
              fontWeight: "bold",
              marginTop: 14,
            }}
          >
            OR
          </Text>
          <View
            style={{
              marginTop: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 48,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: "#f3f4f6",
                borderRadius: 24,
              }}
            >
              <Image
                source={require("../assets/google.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: "#f3f4f6",
                borderRadius: 24,
              }}
            >
              <Image
                source={require("../assets/apple.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: "#f3f4f6",
                borderRadius: 24,
              }}
            >
              <Image
                source={require("../assets/fb.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>
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
                color: "#4a5568",
                fontWeight: "semibold",
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{
                  fontWeight: "semibold",
                  color: "#facc15",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
