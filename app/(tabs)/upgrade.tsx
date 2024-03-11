import React, { useContext, useState } from 'react';
import { View, Text, Pressable, Dimensions, ScrollView } from 'react-native';
import styles from '../Style/Styles';
import { Player } from '../_layout';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth/3;
const Upgrades = () => {
    const { player, setPlayer } = useContext(Player);
    const [upgrades, setUpgrades] = useState([
        { id: 0, name: "Test Upgrade", cost: 100, effect: () => { }, max: 10, description: "This is a test upgrade" },
        { id: 1, name: "Test Upgrade 2", cost: 1000, effect: () => { }, max: 10, description: "This is another test upgrade" },
        { id: 2, name: "Test Upgrade 3", cost: 500, effect: () => { }, max: 5, description: "This is a third test upgrade" },
        { id: 3, name: "Test Upgrade 4", cost: 2000, effect: () => { }, max: 8, description: "This is a fourth test upgrade" },
        { id: 4, name: "Test Upgrade 5", cost: 10000, effect: () => { }, max: 3, description: "This is a fifth test upgrade" },
        { id: 5, name: "Test Upgrade 6", cost: 50000, effect: () => { }, max: 2, description: "This is a sixth test upgrade" },
        { id: 6, name: "Test Upgrade 7", cost: 100000, effect: () => { }, max: 1, description: "This is a seventh test upgrade" },
        { id: 7, name: "Test Upgrade 8", cost: 200000, effect: () => { }, max: 4, description: "This is an eighth test upgrade" },
        { id: 8, name: "Test Upgrade 9", cost: 500000, effect: () => { }, max: 6, description: "This is a ninth test upgrade" },
        { id: 9, name: "Test Upgrade 10", cost: 1000000, effect: () => { }, max: 10, description: "This is a tenth test upgrade" },
    ]);

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
        <View style={styles.container}>
            {upgradeItems}
        </View>
    );
};

const Upgrade = ({ upgrade, upgradeFn, player }) => {
    const canAfford = player.gold >= upgrade.cost;
    const upgradeStyle = canAfford ? "#6272a4" : "#808080";

    return (
        <View style={{width: itemWidth, padding: 5, borderColor: "#44475a", borderWidth: 1, backgroundColor: upgradeStyle }}>
            <Pressable onPress={() => upgradeFn(upgrade)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>{upgrade.name}</Text>
                <Text style={styles.text}>{upgrade.description}</Text>
                <Text style={styles.text}>Cost: {upgrade.cost.toFixed(2)}</Text>
                <Text style={styles.text}>{player.upgradesOwned[upgrade.id]} / {upgrade.max}</Text>
            </Pressable>
        </View>
    );
};

export default Upgrades;