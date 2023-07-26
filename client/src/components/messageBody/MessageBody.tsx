import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { TextareaField } from "evergreen-ui";

type MessageBodyProps = {
  message: string;
  setMessageBody: Dispatch<SetStateAction<string>>;
};

const MessageBody: FunctionComponent<MessageBodyProps> = ({
  message,
  setMessageBody,
}) => {
  const [entered, setEntered] = useState<boolean>(false);

  return (
    <>
      <TextareaField
        isInvalid={entered && message.length == 0}
        value={message}
        label="Text Message Content"
        description="Please Enter the text message you want to send."
        required
        validationMessage="This field is required."
        placeholder="Hi."
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setMessageBody(e.target.value);
          setEntered(true);
        }}
      />
    </>
  );
};

export default MessageBody;
