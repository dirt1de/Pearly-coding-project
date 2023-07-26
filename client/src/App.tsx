import "./App.css";
import PhoneNumberInput from "./components/numberInput/PhoneNumberInput";
import MessageBody from "./components/messageBody/MessageBody";
import { useState } from "react";
import { Button, toaster } from "evergreen-ui";
import { createApiUrl, postFetch } from "../api.ts";

function App() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessageBody] = useState<string>("");
  const [isValidNumber, setIsValidNumber] = useState<boolean>(false);

  const sendMessage = async () => {
    const prefix = "+1";
    const from: any = `${__FROM_PHONE_NUMBER__}`; // This would work. Ignore the error notice
    const body = {
      body: message,
      from: prefix.concat(from),
      to: prefix.concat(phoneNumber),
    };

    const result = await postFetch(createApiUrl.sendMessage(), body, true);
    if (result.errorCode == null) {
      toaster.success("Message sent successfully");
    } else {
      toaster.danger(`Error Message: ${result.errorMessage}`);
    }
  };

  return (
    <div className="AppWrapper">
      <div style={{ marginBottom: "40px" }}>
        <PhoneNumberInput
          setIsValidNumber={setIsValidNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <MessageBody message={message} setMessageBody={setMessageBody} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          appearance="primary"
          intent="none"
          disabled={!(isValidNumber && message.length > 0)}
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}

export default App;
