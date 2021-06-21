import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input';


type SignInFormData = {
  email: string,
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: yup.string().required('Senha obrigatória.')
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })

  const errors = formState.errors

  const handleSign: SubmitHandler<SignInFormData> = async (values) => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSign)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            error={errors.email}
            type="email"
            placeholder="Digite o e-mail"
            {...register('email')} />
          <Input
            name="password"
            label="Senha"
            error={errors.password}
            type="password"
            placeholder="Digite a senha"
            {...register('password')} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
