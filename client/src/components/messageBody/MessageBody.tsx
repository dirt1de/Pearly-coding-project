import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { TextareaField } from "evergreen-ui";

type MessageBodyProps = {
  message: string;
  setMessageBody: Dispatch<SetStateAction<string>>;
};

const MessageBody: FunctionComponent<MessageBodyProps> = ({
  message,
  setMessageBody,
}) => {
  return (
    <>
      <TextareaField
        // isInvalid={true}
        value={message}
        label="Text Message Content"
        description="Please Enter the text message you want to send."
        required
        // validationMessage="This field is required. It's only rendered when isInvalid is true."
        placeholder="Hi."
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setMessageBody(e.target.value);
        }}
      />
    </>
  );
};

export default MessageBody;
