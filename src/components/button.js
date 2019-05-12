import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, onLongPress, children }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityLabel="Learn more about this button" >
                <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "stretch",
        backgroupColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#003366",
        marginLeft: 5,
        marginRight: 5,
        margin:10,
    },
    textStyle: {
        alignSelf: "center",
        color: "#003366",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;