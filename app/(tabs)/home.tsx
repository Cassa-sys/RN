import { View, Text, Pressable, Touchable, Button } from "react-native";
import styles from "../Style/Styles";
import { useContext, useEffect, useRef, useState } from "react";
import { Player } from "../_layout";
import { Ionicons } from "@expo/vector-icons";

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
    const {player, setPlayer} = useContext(Player)
    const buildings = [
        {name: "Building 1", cost: 10, gps: 1},
        {name: "Building 2", cost: 100, gps: 3},
        {name: "Building 3", cost: 1000, gps: 5},
        {name: "Building 4", cost: 10000, gps: 10},
        {name: "Building 5", cost: 100000, gps: 50},
        {name: "Building 6", cost: 1000000, gps: 100},
        {name: "Building 7", cost: 10000000, gps: 1000},
    ]

    return (
        <View style={styles.container}>
            {/* Button to add Gold With the image "hardware-chip-outline" from Ionicons*/}
            <Pressable onPress={() => {
                setPlayer((prevPlayer) => ({
                ...prevPlayer,
                gold: prevPlayer.gold + player.goldPerClick,
                }));
                console.log(player.gold + 1); // This will print the updated value (1)
            }
            }>
                <Ionicons name="hardware-chip-outline" size={100} color="white" />
            </Pressable>

            <View>
                <Text style={styles.headerText}>Buildings</Text>
            </View>


            {/* Buildings */}
            <View>
                {buildings.map((building, index) => {
                    return (
                        <Pressable key={index} onPress={() => {
                            if (player.gold >= building.cost) {
                                setPlayer((prevPlayer) => ({
                                    ...prevPlayer,
                                    gold: prevPlayer.gold - building.cost,
                                    buildings: prevPlayer.buildings.map((owned, i) =>
                                        i === index ? owned + 1 : owned
                                    ),
                                    gps: prevPlayer.gps + building.gps,
                                }));
                            }
                        }} style={{padding: 1, width:screenWidth}}>
                            <Building building={building} player={player} index={index} />
                        </Pressable>
                    )
                })}
            </View>
        </View>
    );
}


const Building = ({building, player, index}) => {
    const canAfford = player.gold >= building.cost;
    const upgradeStyle = canAfford ? "#6272a4" : "#808080";
    return (
        <View style={{backgroundColor:upgradeStyle, width:"100%", alignItems:"center", justifyContent: "center", borderWidth:1, borderColor:"#000", padding:5}}>
            <Text>{`${building.name}`}</Text>
            <Text>{`Cost: ${building.cost}`}</Text>
            <Text>{`GPS: ${building.gps}`}</Text>
            <Text>{`Owned: ${player.buildings[index]}`}</Text>
        </View>
    )
}
