import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const PlayButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <FontAwesome name="play" color="black" size={23} />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
        Play
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "45%",
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export default PlayButton;
