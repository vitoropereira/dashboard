import {
  Button,
  Flex,
  Stack
} from '@chakra-ui/react'
import { Input } from '../components/form/Input'

export default function SingIn() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing='4'>
          <Input
            name='email'
            type="email"
            label='E-mail'
          />

          <Input
            name='password'
            type="password"
            label='Senhas'
          />
        </Stack>

        <Button type="submit" mt='6' colorScheme='blue'>Entrar</Button>
      </Flex>
    </Flex>
  )
}