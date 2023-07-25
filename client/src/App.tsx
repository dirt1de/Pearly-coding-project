import "./App.css";
import PhoneNumberInput from "./components/numberInput/PhoneNumberInput";
import MessageBody from "./components/messageBody/MessageBody";
import { useState } from "react";
import { Button } from "evergreen-ui";

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessageBody] = useState<string>("");

  return (
    <>
      <div>{phoneNumber}</div>
      <div>{message}</div>

      <PhoneNumberInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <MessageBody message={message} setMessageBody={setMessageBody} />
      <Button marginRight={16} appearance="primary" intent="none">
        Send Message
      </Button>
    </>
  );
}

export default App;
