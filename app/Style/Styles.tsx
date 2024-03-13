import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#44475a",
        flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // flexBasis: "auto",
        // justifyContent: 'space-between',
        // //center
        alignItems: 'center',
    },
    text: {
        color:"#f8f8f2"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: "#f8f8f2"
    },
    headerContainer: {
        marginTop: 16,
        marginBottom: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#f8f8f2",
    },
})

export default styles;