import React, { useContext, useState } from 'react';
import { View, Text, Pressable, Dimensions, ScrollView, StyleSheet } from 'react-native';
// import styles from '../Style/Styles';
import { Player } from '../_layout';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const itemWidth = screenWidth/3;

const Upgrades = () => {
    const { player, setPlayer } = useContext(Player);
    const upgrades = [
        { id: 0, name: "Test Upgrade", cost: 100, effect: () => {setPlayer((prevPlayer) => ({
            ...prevPlayer,
            goldPerClick: prevPlayer.goldPerClick + 10,
        }));}, max: 10, description: "Increase your gold per click" },
        { id: 1, name: "Test Upgrade 2", cost: 1000, effect: () => { }, max: 10, description: "This is another test upgrade" },
        { id: 2, name: "Test Upgrade 3", cost: 500, effect: () => { }, max: 5, description: "This is a third test upgrade" },
        { id: 3, name: "Test Upgrade 4", cost: 2000, effect: () => { }, max: 8, description: "This is a fourth test upgrade" },
        { id: 4, name: "Test Upgrade 5", cost: 10000, effect: () => { }, max: 3, description: "This is a fifth test upgrade" },
        { id: 5, name: "Test Upgrade 6", cost: 50000, effect: () => { }, max: 2, description: "This is a sixth test upgrade" },
        { id: 6, name: "Test Upgrade 7", cost: 100000, effect: () => { }, max: 1, description: "This is a seventh test upgrade" },
        { id: 7, name: "Test Upgrade 8", cost: 200000, effect: () => { }, max: 4, description: "This is an eighth test upgrade" },
        { id: 8, name: "Test Upgrade 9", cost: 500000, effect: () => { }, max: 6, description: "This is a ninth test upgrade" },
        { id: 9, name: "Test Upgrade 10", cost: 1000000, effect: () => { }, max: 10, description: "This is a tenth test upgrade" },
        { id: 10, name: "Test Upgrade 11", cost: 2000000, effect: () => { }, max: 5, description: "This is an eleventh test upgrade" },
        { id: 11, name: "Test Upgrade 12", cost: 5000000, effect: () => { }, max: 3, description: "This is a twelfth test upgrade" },
        { id: 12, name: "Test Upgrade 13", cost: 10000000, effect: () => { }, max: 2, description: "This is a thirteenth test upgrade" },
        { id: 13, name: "Test Upgrade 14", cost: 20000000, effect: () => { }, max: 4, description: "This is a fourteenth test upgrade" },
        { id: 14, name: "Test Upgrade 15", cost: 50000000, effect: () => { }, max: 6, description: "This is a fifteenth test upgrade" },
        { id: 15, name: "Test Upgrade 16", cost: 100000000, effect: () => { }, max: 10, description: "This is a sixteenth test upgrade" },
        { id: 16, name: "Test Upgrade 17", cost: 200000000, effect: () => { }, max: 5, description: "This is a seventeenth test upgrade" },
        { id: 17, name: "Test Upgrade 18", cost: 500000000, effect: () => { }, max: 3, description: "This is an eighteenth test upgrade" },
        { id: 18, name: "Test Upgrade 19", cost: 1000000000, effect: () => { }, max: 2, description: "This is a nineteenth test upgrade" },
        { id: 19, name: "Test Upgrade 20", cost: 2000000000, effect: () => { }, max: 4, description: "This is a twentieth test upgrade" },
    ];

    const upgradeFn = (upgrade) => {
        if (player.gold >= upgrade.cost) {
            setPlayer(prevPlayer => ({
                ...prevPlayer,
                gold: prevPlayer.gold - upgrade.cost,
                upgradesOwned: prevPlayer.upgradesOwned.map((owned, index) =>
                    upgrades[index].name === upgrade.name ? owned + 1 : owned
                ),
            }));
            upgrade.effect();
        }
    };

    const upgradeItems = upgrades.filter((upgrade, index) => player.upgradesOwned[index] < upgrade.max).map((upgrade, index) => {
        return <Upgrade key={index} upgrade={upgrade} upgradeFn={upgradeFn} player={player} />;
    });

    return (
        <View style={{...styles.container, flex:1}}>
            <ScrollView style={{height: "auto", maxHeight:screenHeight}} contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', flex:0, flexGrow:1, paddingBottom:20 }} scrollEnabled={true} nestedScrollEnabled={true} >
                {upgradeItems}
            </ScrollView>
        </View>
    );
};

const Upgrade = ({ upgrade, upgradeFn, player }) => {
    const canAfford = player.gold >= upgrade.cost;
    const upgradeStyle = canAfford ? "#6272a4" : "#808080";

    return (
        <View style={{width: itemWidth, padding: 5, borderColor: "#44475a", borderWidth: 1, backgroundColor: upgradeStyle }}>
            <Pressable onPress={() => upgradeFn(upgrade)} style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>{upgrade.name}</Text>
                <Text style={styles.text}>{upgrade.description}</Text>
                <Text style={styles.text}>Cost: {upgrade.cost.toFixed(2)}</Text>
                <Text style={styles.text}>{player.upgradesOwned[upgrade.id]} / {upgrade.max}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: "#f8f8f2"
    },
    text:{
        color:"#f8f8f2"
    },
    container: {
        backgroundColor: "#44475a",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexBasis: "auto",
        justifyContent: 'space-between',
        height: 1000
    },
});

export default Upgrades;