import { Pressable, View, Text } from "react-native";
import styles from "../Style/Styles";
import { useState,useContext, useEffect } from "react";
import { Player } from "../_layout";

export default function Settings() {
  const {player, setPlayer} = useContext(Player)

  return (
    <View style={styles.container}>
            <Pressable onPress={() => {setPlayer({...player, gold: player.gold+=100}); console.log(player.gold)}}>
                <Text>Press Me</Text>
            </Pressable>
      <Text style={styles.text}>{player.gold}</Text>

    </View>
  );
}
