import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
}

export default function Input({ name, label, ...rest } : InputProps) {
    return (
        <FormControl>
           { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              id={name}
              name={name}
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="flushed"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}