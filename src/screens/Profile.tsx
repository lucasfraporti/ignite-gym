import { useState } from 'react'
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { TouchableOpacity } from 'react-native'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={33}
              h={33}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https://github.com/lucasfraporti.png' }}
              alt="Foto do usuário"
              size={33}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading
            color="gray.200"
            fontSize="md"
            fontFamily="heading"
            mb={2}
            alignSelf="flex-start"
          >
            Alterar senha
          </Heading>

          <Input bg="gray.600" placeholder="Senha atual" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar senha" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
