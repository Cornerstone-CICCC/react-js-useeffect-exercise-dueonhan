import React, { useEffect, useState } from "react";

const Message = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    //setMessage(()=> message = "Hello from React!")

    if (message) {
      console.log("Hello from React!");
    }
  }, [message]);

  const sendmessage = () => {
    setMessage("Hello from React!");
  };
  return (
    <div>
      <button onClick={sendmessage}>Click</button>
      <div className="message">{message}</div>
    </div>
  );
};

export default Message;
