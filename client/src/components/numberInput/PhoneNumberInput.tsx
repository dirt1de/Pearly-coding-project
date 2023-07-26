import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { TextInputField } from "evergreen-ui";

type PhoneNumberInputProps = {
  setIsValidNumber: Dispatch<SetStateAction<boolean>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
};

const PhoneNumberInput: FunctionComponent<PhoneNumberInputProps> = ({
  setIsValidNumber,
  setPhoneNumber,
}) => {
  const [entered, setEntered] = useState<boolean>(false);
  const [rawPhoneNumber, setRawPhoneNumber] = useState("");

  const processNumber = (rawPhoneNumber: string) => {
    return rawPhoneNumber.replace(/\D/g, "");
  };

  const isValidNumber = () => {
    const phoneReg = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    const digits = processNumber(rawPhoneNumber);
    const status = phoneReg.test(digits);
    if (status) {
      setIsValidNumber(true);
      setPhoneNumber(digits);
    }
    return status;
  };

  return (
    <>
      <TextInputField
        required
        isInvalid={entered && !isValidNumber()}
        value={rawPhoneNumber}
        placeholder="1234567890"
        label="To Phone Number"
        description="The phone number you are going to send message to. "
        validationMessage="Please enter a valid 10-digit US phone number!"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEntered(true);
          setRawPhoneNumber(e.target.value);
        }}
      />
    </>
  );
};

export default PhoneNumberInput;
