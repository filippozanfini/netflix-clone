import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import PlayButton from "../components/PlayButton";

import { Feather } from "@expo/vector-icons";

import { TV_SHOWS } from "../data/sample_data";

const HomeScreen = (props) => {
  const renderTVShows = (itemData) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          source={itemData.item}
          style={{ width: 150, height: 200, marginRight: 30 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsHorizontalScrollIndicator={false}
      >
        <ImageBackground
          source={require("../assets/series/n4.jpg")}
          style={{
            ...styles.headerImage,
            height: Dimensions.get("screen").height - 200,
          }}
        >
          <Header />
          <View style={styles.titleContainer}>
            <Image
              source={require("../assets/strangerlogo.png")}
              style={styles.headerTitle}
            />
            <Text style={{ color: "white", fontSize: 16 }}>
              Ominous • Exciting • Teen
            </Text>
            <View style={styles.buttonContainer}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Feather name="plus" color="white" size={30} />
                <Text style={{ color: "white", marginTop: 7 }}>My List</Text>
              </View>
              <PlayButton />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Feather name="info" color="white" size={30} />
                <Text style={{ color: "white", marginTop: 7 }}>Info</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          Popular on Netflix
        </Text>
        <FlatList
          style={{ width: "100%", flex: 1, marginTop: 10 }}
          data={TV_SHOWS.slice(0, 4)}
          renderItem={renderTVShows}
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 40,
          }}
        >
          Trending Now
        </Text>
        <FlatList
          style={{ width: "100%", flex: 1, marginTop: 10 }}
          data={TV_SHOWS.slice(4, 9)}
          renderItem={renderTVShows}
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 40,
          }}
        >
          Watch it Again
        </Text>
        <FlatList
          style={{ width: "100%", flex: 1, marginTop: 10 }}
          data={TV_SHOWS.slice(9, 16)}
          renderItem={renderTVShows}
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#181818",
  },
  headerImage: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerTitle: {
    width: "85%",
    resizeMode: "contain",
    height: 150,
  },
  titleContainer: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
});

export default HomeScreen;
