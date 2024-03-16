import { Text, View, StatusBar } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202024',
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // Translucent, se verdadeiro, faz com que a barra de status se torne transparente e o conteúdo do aplicativo pode ser exibido por baixo dela
        translucent
      />
      {fontsLoaded ? <Text>Ignite Gym</Text> : <View></View>}
    </View>
  )
}
