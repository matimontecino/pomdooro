import { View } from "react-native";

//es una funcion de js que deuelve una vista
export default function Visor({tiempo}){

    
//logica del compnente - codigo de js
    return <View>
        <Text>
            //codigo de js
            {
            tiempo
            }
        </Text>
    </View>;
}