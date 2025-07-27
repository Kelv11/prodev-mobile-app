import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find Your Dream Home</Text>
          </View>

          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Discover the perfect place to call home with our extensive
              property listings
            </Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={{ color: "white" }}>Already have an account? </Text>
          <Link href="/signin">
            <Text style={{ color: "white", textDecorationLine: "underline" }}>
              Sign In
            </Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}
