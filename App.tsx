import { Text, View, StatusBar } from 'react-native'

import { NativeBaseProvider } from '@gluestack-ui/themed-native-base'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // Translucent, se verdadeiro, faz com que a barra de status se torne transparente e o conteúdo do aplicativo pode ser exibido por baixo dela
        translucent
      />
      {/* {fontsLoaded ? <View /> : <Loading />} */}
      <Loading />
    </NativeBaseProvider>
  )
}
