import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={{ width: wp(100), height: hp(110), position: "absolute" }}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "#fffafa",
            "white",
          ]}
          style={{
            width: wp(100),
            height: hp(65),
            bottom: 0,
            position: "absolute",
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 14,
          }}
        >
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={{
              fontSize: hp(7),
              color: theme.colors.neutral(0.9),
              fontWeight: theme.fontWeights.bold,
            }}
          >
            Wallpix
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={{
              fontSize: hp(2),
              letterSpacing: 1,
              marginBottom: 10,
              fontWeight: theme.fontWeights.medium,
            }}
          >
            Every Pixel Tells A Story
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(500).springify()}>
            <Pressable
              onPress={() => router.push("home")}
              style={{
                marginBottom: 50,
                backgroundColor: theme.colors.white,
                padding: 15,
                paddingHorizontal: 90,
                borderRadius: theme.radius.xl,
                borderCurve: "continuous",
                backgroundColor: theme.colors.black,
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: hp(3),
                  fontWeight: theme.fontWeights.medium,
                }}
              >
                Start Exploring
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;
