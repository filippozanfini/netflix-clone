import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <TouchableOpacity style={styles.headerBtn} activeOpacity={0.7}>
        <Text style={styles.headerLabel}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerBtn} activeOpacity={0.7}>
        <Text style={styles.headerLabel}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerBtn} activeOpacity={0.7}>
        <Text style={styles.headerLabel}>My List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginTop: 60,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  headerBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  headerLabel: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Header;
