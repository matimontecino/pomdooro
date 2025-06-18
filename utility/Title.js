// utilities/Title.js solo el titulo
import { Text, View } from "react-native";

const Title = ({ Titulo }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
        {Titulo}
      </Text>
    </View>
  );
};

export default Title;