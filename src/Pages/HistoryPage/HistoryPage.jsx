import { useState, useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import SuggestionGrid from "../../Components/SuggestionGrid/SuggestionGrid";
import ChatInput from "../../Components/ChatInput/ChatInput";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";
import botData from "../../Data/sampleData.json";
import styles from "../HomePage/HomePage.module.css";
import HistoryCard from "../../Components/HistoryCard/HistoryCard";

export default function HistoryPage() {
  const [savedChats, setSavedChats] = useState([]);
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const chats = JSON.parse(localStorage.getItem("chatHistory")) || [];

    setSavedChats(chats);
  }, []);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAsk = () => {
    const matchedQue = botData.find((q) => q.question === question);

    setMessage((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
      {
        sender: "bot",
        text: matchedQue
          ? matchedQue.response
          : "Sorry I dont know the answer to this question",
      },
    ]);

    setQuestion("");
  };

  const handleSave = () => {
    if (message.length === 0) return;

    const chats = JSON.parse(localStorage.getItem("chatHistory")) || [];

    const currentChat = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      message,
    };

    chats.push(currentChat);

    localStorage.setItem("chatHistory", JSON.stringify(chats));

    setSavedChats(chats);

    alert("Chat Saved");
  };

  return (
    <main className={styles.home}>
      <div className={styles.mobileNavbar}>
        <MobileNavbar />
      </div>

      <div className={styles.desktopHome}>
        <div className={styles.left}>
          <Sidebar />
        </div>

        <div className={styles.right}>
          <header className={styles.rightHeader}>
            <h1>Conversation History</h1>
          </header>

          <div className={styles.rightContent}>
            {savedChats.length === 0 ? (
              <>
                <Hero />
                <div>Sorry no saved chats</div>
              </>
            ) : (
              savedChats.map((chat) => (
                <HistoryCard key={chat.id} chat={chat} />
              ))
            )}

            <ChatInput
              value={question}
              onChange={handleChange}
              onAsk={handleAsk}
              onSave={handleSave}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
