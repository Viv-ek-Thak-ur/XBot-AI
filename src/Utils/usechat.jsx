import { useState } from "react";
import botData from "../Data/sampleData.json";

export default function useChat() {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

 const handleAsk = () => {
  if (!question.trim()) return;

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const matchedQue = botData.find(
    (q) => q.question === question
  );

  setMessage((prev) => [
    ...prev,
    {
      sender: "user",
      text: question,
      createdAt: currentTime,
    },
    {
      sender: "bot",
      text: matchedQue
        ? matchedQue.response
        : "Sorry I dont know the answer to this question",
      createdAt: currentTime,
    },
  ]);

  setQuestion("");
};

const handleFeedback = (index, type) => {
    setMessage((prev) =>
      prev.map((msg, i) =>
        i === index
          ? {
              ...msg,
              feedback: type,
            }
          : msg,
      ),
    );
  };

const saveChat = ({ rating, feedback }) => {
  if (message.length === 0) return false;

  const savedChats =
    JSON.parse(localStorage.getItem("chatHistory")) || [];

  const currentChat = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    message,
    rating,
    feedback,
  };

  savedChats.push(currentChat);

  localStorage.setItem(
    "chatHistory",
    JSON.stringify(savedChats)
  );

  return true;
};
  

  return {
  question,
  message,
  setMessage,
  showModal,
  setShowModal,
  handleChange,
  handleAsk,
  handleFeedback,
  saveChat
};
}