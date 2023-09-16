import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = ({ currentTime, setCurrentTime, setTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };
 
  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyleFocus,
            currentTime !== index && styles.itemStyleNotFocus,
          ]}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemStyleFocus: {
    alignItems: "center",
    width: "33.3%",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "#fff",
    marginVertical: 20,
  },
  itemStyleNotFocus: {
    borderColor: "transparent",
  },
  text: {
    fontWeight: "bold",
  },
});
