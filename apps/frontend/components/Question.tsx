import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { KeyboardEventHandler } from "react";
import { t } from "@royale/common";

export default function Question({
  question,
  isOpen,
  setQuestion,
  onClose,
}: {
  question: string;
  isOpen: boolean;
  setQuestion: (question: string) => void;
  onClose: () => void;
}) {
  const handleInputChange = ({ target }: { target: HTMLInputElement }) =>
    setQuestion(target!.value);

  const isError = question === "";

  function handleConfirm() {
    if (!isError) {
      onClose();
    }
  }

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleConfirm();
    }
  };

  const bgColor = useColorModeValue("#FFFFF0", "gray.800");
  const buttonColor = useColorModeValue("#F3F3E3", "gray.750");
  const buttonHoverColor = useColorModeValue("#EEEEE0", "gray.700");
  const buttonActiveColor = useColorModeValue("#DDDDD0", "gray.600");

  return (
    <>
      <Text fontSize={"xl"}>{question}</Text>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent bg={bgColor}>
          <ModalHeader>{t('chat.placeholder')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError}>
              <Input
                type={"text"}
                value={question}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
              />
              {!isError ? (
                <FormHelperText>Remember your question while drawing.</FormHelperText>
              ) : (
                <FormErrorMessage>Please enter a question</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleConfirm}
              bgColor={buttonColor}
              _hover={{ bgColor: buttonHoverColor }}
              _active={{ bgColor: buttonActiveColor }}
            >
              {t('spread.start')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
