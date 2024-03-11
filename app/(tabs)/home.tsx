import { View, Text, Pressable, Touchable, Button } from "react-native";
import styles from "../Style/Styles";
import { useContext, useEffect, useRef, useState } from "react";
import { Player } from "../_layout";

export default function Home() {
    const {player, setPlayer} = useContext(Player)

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {setPlayer({...player, gold: player.gold+=1000}); console.log(player.gold)}}>
                <Text>Press Me</Text>
            </Pressable>
            <Pressable onPress={() => {
                setPlayer((prevPlayer) => ({
                ...prevPlayer,
                gps: prevPlayer.gps + 100,
                }));
                console.log(player.gps + 1000); // This will print the updated value (200)
            }}>
                <Text>Up GPS</Text>
            </Pressable>
            <Text style={styles.text}>{player.gold.toFixed(2)}</Text>
            <Text>{player.gps}</Text>
        </View>
    );
}
