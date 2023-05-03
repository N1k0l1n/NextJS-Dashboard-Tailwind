import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import { useRouter } from "next/router";



const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);
const chats = () => {

    const { username, secret } = useState("");
    const [showChat, setShowChat] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      if (typeof document !== undefined) {
        setShowChat(true);
      }
    }, []);
  
  
    if (!showChat) return <div />;
  

  return (
    <div className="bg-gray-50">
    <ChatEngine
      className="bg-gray-50 dark:bg-gray-900"
      height="calc(125vh - 212px)"
      projectID="70adff44-08c1-4276-9d92-925e0f37acbd"
      userName='dule'
      userSecret='123456'
      renderNewMessageForm={() => <MessageFormSocial />}
    />
  </div>
  )
}

export default chats
