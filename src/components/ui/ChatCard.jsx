import React from "react";

const ChatCard = ({ children }) => {
  return (
    <div className="flex flex-col w-80 h-[30rem] overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white">
      {children}
    </div>
  );
};

export default ChatCard;
