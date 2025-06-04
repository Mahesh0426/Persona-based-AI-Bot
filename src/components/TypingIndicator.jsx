import { Bot } from "lucide-react";
import React from "react";
import MyPic from "../assets/mahesh.png";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex flex-row items-start gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 flex-shrink-0 overflow-hidden">
          <img
            src={MyPic}
            alt="my photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="px-4 py-3 rounded-2xl bg-gray-100 text-gray-800 rounded-tl-none">
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
