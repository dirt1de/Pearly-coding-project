import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { TextInputField } from "evergreen-ui";

type PhoneNumberInputProps = {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
};

const PhoneNumberInput: FunctionComponent<PhoneNumberInputProps> = ({
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <>
      <TextInputField
        required
        value={phoneNumber}
        placeholder="1234567890"
        label="To Phone Number"
        description="The phone number you are going to send message to. "
        hint="Currently only US numbers are supported!"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPhoneNumber(e.target.value);
        }}
      />
    </>
  );
};

export default PhoneNumberInput;
