import { Link, useNavigate } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import SuggestionGrid from "../../Components/SuggestionGrid/SuggestionGrid";
import ChatInput from "../../Components/ChatInput/ChatInput";
import styles from "./HomePage.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import { useState } from "react";
import botData from "../../Data/sampleData.json";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";

export default function HomePage() {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleAsk = () => {
    const matchedQue = botData.find((q) => q.question === question);
    setMessage((prev) => [
      ...prev,
      { sender: "user", text: question },
      {
        sender: "bot",
        text: matchedQue
          ? matchedQue.response
          : "Sorry I dont know the answer to this question",
      },
    ]);
  };

  const handleSave = () => {
    if (message.length === 0) return;

    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];

    const currentChat = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      message,
    };

    savedChats.push(currentChat);

    localStorage.setItem("chatHistory", JSON.stringify(savedChats));

    alert("Chat Saved");
  };

  return (
    <>
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
              <h1>BotAI</h1>
            </header>
            <div className={styles.rightContent}>
              {message.length === 0 && (
                <>
                  <Hero />
                  <SuggestionGrid />
                </>
              )}
              {message.length > 0 && (
                <>
                  <ChatWindow message={message} />
                </>
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
    </>
  );
}
