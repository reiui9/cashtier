import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
        state = { text: "" };
        const { containerStyle, inputStyle } = styles;

        return (
            <View style={containerStyle}>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText} />
            </View>
        );
};

const styles = {
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: "column",
    }
};

 export default Input;