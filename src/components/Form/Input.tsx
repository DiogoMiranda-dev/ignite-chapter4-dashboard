import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error} >
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
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
          ref={ref}
          {...rest}
        />
        {!!error && (<FormErrorMessage>
          {error.message}
        </FormErrorMessage>)}
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase)