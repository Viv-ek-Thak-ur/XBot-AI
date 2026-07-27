import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import ChatInput from "../../Components/ChatInput/ChatInput";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";
import HistoryCard from "../../Components/HistoryCard/HistoryCard";
import botData from "../../Data/sampleData.json";
import styles from "../HomePage/HomePage.module.css";

export default function HistoryPage() {
  const [savedChats, setSavedChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
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
    if (question.trim() === "") return;

    const matchedQue = botData.find(
      (q) => q.question.toLowerCase() === question.toLowerCase()
    );

    const updatedMessage = [
      ...message,
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
    ];

    setMessage(updatedMessage);
    setSelectedChat(updatedMessage);
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
            {selectedChat ? (
              <ChatWindow message={selectedChat} />
            ) : (
              savedChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.message)}
                  style={{ cursor: "pointer" }}
                >
                  <HistoryCard chat={chat} onClick={() => setSelectedChat(chat.message)} />
                </div>
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