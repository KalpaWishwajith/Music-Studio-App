import { Text, Image, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import TextInputField from "../components/TextInputField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  let isValid = true;
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    if (!userName.trim()) {
      setUserNameError("User Name is required.");
      isValid = false;
    } else {
      setUserNameError("");
    }
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
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required.");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password and Confirm Password must be same.");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSignUp = async () => {
    handleValidation();
    if (isValid) {
      try {
        response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
      } catch (error) {
        console.error(error);
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
              source={require("../assets/signup.png")}
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
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextInputField
              label="User Name"
              value={userName}
              onChangeText={setUserName}
              error={userNameError}
              placeholder="Enter User Name"
            />
            <TextInputField
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              error={emailError}
              placeholder="Enter your Email Address"
            />
            <TextInputField
              label="Password"
              value={password}
              onChangeText={setPassword}
              error={passwordError}
              placeholder="Enter Password"
              secureTextEntry
            />
            <TextInputField
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              error={confirmPasswordError}
              placeholder="Confirm Password"
              secureTextEntry
            />
            <TouchableOpacity
              style={{
                paddingBottom: 12,
                paddingTop: 12,
                backgroundColor: "#facc15",
                borderRadius: 12,
              }}
              onPress={handleSignUp}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#4a5568",
                }}
              >
                Sign Up
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
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                marginRight: 6,
                color: "#4a5568",
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
    </ScrollView>
  );
};

export default SignUpScreen;
