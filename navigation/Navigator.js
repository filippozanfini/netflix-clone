import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";

import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="home" color={tabInfo.tintColor} size={25} />;
        },
        tabBarLabel: "Home",
      },
    },
    SearchScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="search" color={tabInfo.tintColor} size={25} />;
        },
        tabBarLabel: "Search",
      },
    },
    ComingSoonScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="video-library"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        },
        tabBarLabel: "Coming Soon",
      },
    },
    DownloadScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Feather name="download" color={tabInfo.tintColor} size={25} />
          );
        },
        tabBarLabel: "Downloads",
      },
    },
    MoreScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Feather name="menu" color={tabInfo.tintColor} size={25} />;
        },
        tabBarLabel: "More",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#ccc",
      inactiveTintColor: "#777",
      style: {
        backgroundColor: "black",
        borderTopWidth: 0,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
