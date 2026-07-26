import styles from "./HistoryPage.module.css";
import { useState, useEffect } from "react";

export default function HistoryPage() {
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    const chats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setSavedChats(chats);
  },[]);

  console.log(savedChats);
  return <div>History</div>;
}
