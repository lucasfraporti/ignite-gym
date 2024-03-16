import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { THEME } from 'src/theme'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { SignIn } from '@screens/SignIn'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // Translucent, se verdadeiro, faz com que a barra de status se torne transparente e o conteúdo do aplicativo pode ser exibido por baixo dela
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  )
}
