// utilities/Timer.js temporizador el tiempo
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import { enviarNotificacion } from "./notifications.js"; // 


const playAlarm = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require("../assets/series-tv-ringtones-dr-house.mp3")
  );
  await sound.playAsync();
};


const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

const Timer = ({ tiempo, setTiempo, run, setRun }) => {
  useEffect(() => {
    let interval;
    if (run && tiempo > 0) {
      interval = setInterval(() => {
        setTiempo((prev) => prev - 1); // corregir el -100
      }, 1000);
    } else if (tiempo === 0) {
      setRun(false);
      enviarNotificacion(); 
      playAlarm(); // 🔔 Reproduce el sonido al llegar a 0
    }
    return () => clearInterval(interval);
  }, [run, tiempo]);
  
  return (
    <View style={styles.container}>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>{formatTime(tiempo)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: "20%",
    alignSelf: "center", 
  },

  timerBox: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  timerText: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  
});

export default Timer;
