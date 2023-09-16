import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Chat() {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:3000/v1/chats/");
    console.log(typeof data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h1>Remote eye Chats</h1>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}
