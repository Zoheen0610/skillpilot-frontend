import React, { useState, useEffect, useRef } from "react";
import API_BASE_URL from "../config";
import ChatCard from "./ui/ChatCard";
import Input from "./ui/Input";
import Button from "./ui/Button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [sessionId, setSessionId] = useState(
    localStorage.getItem("session_id") || generateSessionId()
  );

  const chatRef = useRef(null); // Reference for the chatbot container

  function generateSessionId() {
    return Math.floor(Math.random() * 1000000000).toString();
  }

  useEffect(() => {
    if (!localStorage.getItem("session_id")) {
      localStorage.setItem("session_id", sessionId);
    }

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Close the chatbot when clicking outside of the chat window
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [messages, sessionId]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMessage = { from: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userMessage.text,
          session_id: sessionId,
        }),
      });

      const data = await response.json();
      const responseText =
        typeof data.response === "string"
          ? data.response
          : JSON.stringify(data.response || "Invalid response");

      setMessages((prev) => [...prev, { from: "bot", text: responseText }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      style={{ bottom: "40px", right: "40px" }}
    >
      {isOpen ? (
        <div ref={chatRef}>
          <ChatCard>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-t-2xl">
              <span className="font-semibold">Career Assistant</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 overflow-y-auto bg-gray-50">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <p className="text-lg">
                    👋 Hi there! I'm your career assistant.
                  </p>
                  <p className="text-sm mt-1">
                    Ask me anything about careers, skills, or resume advice.
                  </p>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 ${
                      msg.from === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
                        msg.from === "user"
                          ? "bg-purple-600 text-white rounded-br-none"
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input & Button */}
            <div className="px-3 py-2 bg-white border-t border-gray-200 rounded-b-2xl">
              <div className="flex items-center gap-2">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  placeholder="Ask a career question..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSend}
                  disabled={loading}
                  variant="primary"
                  className="text-sm px-4 py-2"
                >
                  {loading ? "..." : "Send"}
                </Button>
              </div>
            </div>
          </ChatCard>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 text-xl rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-200 ease-in-out"
          aria-label="Open chat"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot;
