import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { useEffect, useState } from "react";

import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import ButtonCustom from "./src/components/ButtonCustom";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking(prev => !prev);
      setTime(isWorking ? 300 : 1500)
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={styles.subContainer}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />
        <ButtonCustom isActive={isActive} handleStartStop={handleStartStop} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 40,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    
  },
});
