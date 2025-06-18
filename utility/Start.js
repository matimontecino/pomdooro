// utilities/Start.js  //Boton de iniciar-parar
import { Text, View, Pressable } from "react-native";
import {Audio} from "expo-av";

const PlaySound = async() =>{
  const { sound } = await Audio.Sound.createAsync(
    require("../assets/mouse-click-sound.mp3")
  );
  await sound.playAsync();
}

const Start = ({ run, setRun }) => {
  return (
    <View>
      <Pressable
        onPress={async () => {
          await PlaySound();
          setRun(!run);
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            fontWeight: "bold",
            padding: 10,
            backgroundColor: "blue",
            opacity: 1, 
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          {run ? "Pausar" : "Iniciar"}
        </Text>
      </Pressable>
    </View>
  );
};


export default Start;
