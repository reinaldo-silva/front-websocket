import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Container } from "./styles";

interface Message {
  room: string;
  text: string;
  createdAt: Date;
  username: string;
}

const Chat: React.FC = () => {
  const [socket] = useState<Socket>(io("http://localhost:3333"));

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([] as Message[]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    socket.emit("room", { room: "teste", username: "Reinaldo" });

    socket.emit("getMessages", { room: "teste", username: "Reinaldo" });

    socket.emit("teste", { room: "teste", username: "Reinaldo" });

    socket.on("teste", (data) => {
      console.log(data);
      setProgress(data.indice);
    });
    socket.on("message", (data) => {
      setMessages(data);
    });
  }, [socket]);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    socket.emit("message", { username: "Reinaldo", room: "teste", message });
    setMessage("");
  };

  return (
    <Container>
      <ul id="messages">
        {messages.map((message, key) => (
          <li key={key}>{message.text}</li>
        ))}
      </ul>
      <span>{progress * 10}%</span>
      <form onSubmit={handleSendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Chat;
