// utilities/Tabs.js cambiar tipo (pomodoro, descanso, largo)
import { View, Text, Pressable, StyleSheet } from "react-native";

const opciones = [
  { nombre: "Pomodoro", duracion: 25 * 60 },
  { nombre: "Descanso Corto", duracion: 5 * 60 },
  { nombre: "Descanso Largo", duracion: 15 * 60 }
];

const Tabs = ({ setSeleccion, setTiempo, setRun }) => {
  // tambien funciona con Index (la version original es con  )
  const Handle = (opcion) => {
    setSeleccion(opcion.nombre);
    setTiempo(opcion.duracion);
    setRun(false);
  };

  return (
    <View style={styles.container}>
      {opciones.map((opcion, index) => (
        <Pressable
          key={index}
          onPress={() => Handle(opcion)}
          // estilo del borde condicional, segun opcion, si no coincide con la seleccion global bajar ña opacidad
          style={({ pressed }) => [
            styles.tab,
            pressed && { opacity: 0.7 }
            
          ]}
        >
          <Text style={styles.text}>{opcion.nombre}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  tab: {
    backgroundColor: "white", 
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderColor: "black"
  },
  text: {
    fontWeight: "bold"
  }
});

export default Tabs;
