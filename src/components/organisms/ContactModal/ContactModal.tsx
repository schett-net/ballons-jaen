import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'
import { BallonButton } from '../../molecules/BallonButton'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CheckboxStyled } from '../../CheckboxStyled'

export interface ContactFormValues {
  name: string
  email: string
  message: string

  agreeToTerms: boolean
}

export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void

  onSubmit: (data: ContactFormValues) => Promise<void>

  fixedValues?: {
    name?: string
    email?: string
  }

  defaultValues?: {
    message?: string
  }
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  fixedValues,
  defaultValues
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({})

  React.useEffect(() => {
    reset(fixedValues)
  }, [fixedValues])

  React.useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />

      <ModalContent>
        <form
          onSubmit={event => {
            void handleSubmit(onSubmit)(event)
          }}>
          <ModalCloseButton />
          <ModalBody
            p={{
              base: 4,
              md: 8,
              lg: 12,
              xl: 16
            }}>
            <Stack spacing="6">
              <Heading
                as="h2"
                size={{
                  base: 'md',
                  md: 'lg'
                }}>
                Kontaktieren Sie uns
              </Heading>

              <Text size="b2015">
                Wir freuen uns über Ihre Nachricht und werden uns
                schnellstmöglich bei Ihnen melden.
              </Text>

              <HStack>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel htmlFor="name" fontSize="sm">
                    Name
                  </FormLabel>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    {...register('name', {
                      required: true
                    })}
                    isDisabled={!!fixedValues?.name}
                  />

                  <FormErrorMessage fontSize="sm">
                    {errors.name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email" fontSize="sm">
                    E-Mail
                  </FormLabel>
                  <Input
                    id="email"
                    placeholder="max.mustermann@example.com"
                    type="email"
                    {...register('email', {
                      required: true
                    })}
                    isDisabled={!!fixedValues?.email}
                  />

                  <FormErrorMessage fontSize="sm">
                    {errors.email?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl isInvalid={!!errors.message}>
                <FormLabel htmlFor="message" fontSize="sm">
                  Wie können wir Ihnen helfen?
                </FormLabel>
                <Textarea
                  id="message"
                  placeholder="Nachricht"
                  defaultValue={defaultValues?.message}
                  {...register('message', { required: true })}
                />

                <FormErrorMessage fontSize="sm">
                  {errors.message?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.agreeToTerms}>
                <Controller
                  render={({ field, fieldState, formState }) => (
                    <CheckboxStyled
                      ref={field.ref}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                      checked={field.value}
                      roundedFull>
                      <Text
                        fontSize={{
                          base: 'xs',
                          md: 'sm'
                        }}>
                        Ich bin damit einverstanden, dass meine Angaben zur
                        Kontaktaufnahme und für Rückfragen gespeichert werden.
                      </Text>
                    </CheckboxStyled>
                  )}
                  name="agreeToTerms"
                  control={control}
                  rules={{
                    required:
                      'Bitte bestätigen Sie die Bedinungen zur Kontaktaufnahme'
                  }}
                />
                <FormErrorMessage fontSize="sm">
                  {errors.agreeToTerms?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter borderTop="1px solid" color="gray.200">
            <BallonButton
              isLoading={isSubmitting}
              type="submit"
              py="7 !important"
            >
              Senden
            </BallonButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
