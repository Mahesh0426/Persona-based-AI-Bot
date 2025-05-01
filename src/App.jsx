import { useState } from "react";
import "./App.css";
import { Bot, Send, User } from "lucide-react";
import { getResponse } from "./components/prompts";
import TypingIndicator from "./components/TypingIndicator";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Function to handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message to the chat
    const userMessage = { role: "user", content: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    try {
      // Call the gemini-API to get the response
      const response = await getResponse(inputText);
      // Add bot message to the chat
      const botMessage = { role: "bot", content: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-4 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="font-medium text-gray-800">
                Persona-Based AI Assistant
              </h2>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
        </div>

        {/* messenger body */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {/* Bot message */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "items-start"
              }`}
            >
              <div className="flex items-start space-x-2 max-w-xs">
                {/* Show icon for bot */}
                {msg.role === "bot" && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Bot size={18} className="text-blue-600" />
                  </div>
                )}
                {/* Message bubble */}
                <div
                  className={`p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {msg.content}
                </div>

                {/* Show icon only for user */}
                {msg.role === "user" && (
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <User size={18} className="text-green-600" />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleOnSubmit}
          className="border-t border-gray-200 p-4 bg-white"
        >
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
              />
            </div>
            <button
              type="submit"
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
