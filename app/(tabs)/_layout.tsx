import { Tabs } from 'expo-router';
import { StyleSheet } from "react-native";
import React, { useContext, useState } from 'react';
import { Player } from '../_layout';

const tabStyle = StyleSheet.create({
  tab: {
    backgroundColor: "#282a36",
    borderTopColor: "#282a36"
  },
  label: {
    color: "#fff"
  }
});
const layout = () => {
    const { player, setPlayer } = useContext(Player);
    return (
        <Tabs>
            <Tabs.Screen
                name='home'
                options={{
                    tabBarActiveTintColor: "#8be9fd",
                    tabBarStyle: tabStyle.tab,
                    unmountOnBlur: true,
                    tabBarLabel: 'Home',
                    headerTitle: `${player.gold.toFixed(2)} Gold`,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {color: "#f8f8f2"},
                    headerStyle: {backgroundColor: "#282a36", borderColor: "#282a36", borderBottomWidth:0, shadowOpacity:0},
                }}
            />
            <Tabs.Screen
                name='upgrade'
                options={{
                    tabBarActiveTintColor: "#8be9fd",
                    tabBarStyle: tabStyle.tab,
                    unmountOnBlur: true,
                    tabBarLabel: 'Upgrades',
                    headerTitle: `${player.gold.toFixed(2)} Gold`,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {color: "#f8f8f2"},
                    headerStyle: {backgroundColor: "#282a36", borderColor: "#282a36", borderBottomWidth:0, shadowOpacity:0},

                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    tabBarActiveTintColor: "#8be9fd",
                    tabBarStyle: tabStyle.tab,
                    title: 'Settings',
                    headerShown: false,
                    unmountOnBlur: true
                }}
            />
        </Tabs>
    );
}

export default layout;