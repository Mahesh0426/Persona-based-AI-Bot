import { useState } from "react";
import "./App.css";
import { Bot, Send, User } from "lucide-react";
import { getResponse } from "./components/prompts";
import TypingIndicator from "./components/TypingIndicator";
import MyPic from "./assets/mahesh.png";

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
        <div className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 flex-shrink-0 overflow-hidden">
              <img
                src={MyPic}
                alt="my photo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="font-medium text-gray-800 text-lg">
                Persona-Based AI Assistant
              </h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
        </div>

        {/* messenger body */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="mx-auto space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "items-start"
                }`}
              >
                <div className="flex items-start space-x-4 max-w-3xl">
                  {/* Show icon for bot */}
                  {msg.role === "bot" && (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={MyPic}
                        alt="my photo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  )}
                  {/* Message bubble */}
                  <div
                    className={`p-4 rounded-lg ${
                      msg.role === "user"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words text-base">
                      {msg.content}
                    </div>
                  </div>

                  {/* Show icon only for user */}
                  {msg.role === "user" && (
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <User size={20} className="text-green-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && <TypingIndicator />}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto p-4">
            <form onSubmit={handleOnSubmit}>
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12 text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <Send size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
