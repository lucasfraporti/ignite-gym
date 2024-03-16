import { Spinner, Center } from '@gluestack-ui/themed-native-base'

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner />
    </Center>
  )
}
