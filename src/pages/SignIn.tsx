import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'marcelof98@github.com',
      password: '123456',
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="md">
          Ignite Lab
        </Heading>

        <Text size="md" className="text-gray-400 leading-none">Faça login e comece a usar!</Text>
      </header>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-8">
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-1">
          <Text className="font-semibold" size="sm">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="mail" placeholder="meuemail@exemplo.com" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <Text className="font-semibold" size="sm">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="*************" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="xs" className="text-gray-200">Lembrar-me por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-1 mt-6">
        <Text asChild size="xs">
          <a href="" className="text-gray-400 underline">Esqueceu sua senha?</a>
        </Text>

        <Text asChild size="xs">
          <a href="" className="text-gray-400 underline">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div >
  )
}