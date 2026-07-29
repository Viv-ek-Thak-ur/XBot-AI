import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MobileNavbar from "../../Components/MobileNavbar/MobileNavbar";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";
import HistoryCard from "../../Components/HistoryCard/HistoryCard";
import styles from "./HistoryPage.module.css";
import Hero from "../../Components/Hero/Hero";

export default function HistoryPage() {
  const [savedChats, setSavedChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const chats = JSON.parse(localStorage.getItem("chatHistory")) || [];

    setSavedChats(chats);
  }, []);

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

          <div className={styles.rightContent}>
            <div className={styles.rightHeader}>
              {selectedChat && (
              <button onClick={() => setSelectedChat(null)} className={styles.backBtn} >
                Back to History
              </button>
            )}
            </div>
            {selectedChat ? (
              <ChatWindow message={selectedChat.message} />
            ) : (
              savedChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  style={{ cursor: "pointer" }}
                >
                  <HistoryCard chat={chat} />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}
