import React, { useState, useEffect } from "react";

const ChatBot = ({ toggleChatBot }) => {
  const initialMessages = [
    { text: "Welcome, Officer! It's your first day here.", delay: 1000 },
    {
      text: "We are working on an Artificial Intelligence system that automatically creates profiles of civilians and generates their social credit scores.",
      delay: 3500,
    },
    {
      text: "Your role is to assess data on individuals, helping our AI learn from your expertise.",
      delay: 4500,
    },
  ];

  const [messages, setMessages] = useState([]);
  const [chatDisabled, setChatDisabled] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [showOkButton, setShowOkButton] = useState(false);

  useEffect(() => {
    const typingDelay = 500; // Delay before typing dots appear

    const simulateTyping = (text, delay, index) => {
      setTimeout(() => {
        setShowDots(true); // Show dots before the new message
        setTimeout(() => {
          setShowDots(false); // Hide dots when the new message appears
          setMessages((prevMessages) => {
            const lastMessage = prevMessages[prevMessages.length - 1];
            // Check if the new message is different from the last one
            return lastMessage !== text
              ? [...prevMessages, text]
              : [...prevMessages];
          });
        }, typingDelay);
      }, index * delay);
    };

    const totalDuration =
      initialMessages.reduce((acc, message) => acc + message.delay, 0) +
      initialMessages.length * typingDelay;

    initialMessages.forEach((message, index) => {
      simulateTyping(message.text, message.delay, index);
    });

    // Show the "Ok" button after all messages have been displayed
    setTimeout(() => {
      setShowOkButton(true);
    }, totalDuration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} className="flex items-center border p-3 m-2">
          <img
            src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            alt="Profile"
            className="w-[30px] h-[30px] rounded-full mr-3"
          />
          <div>{message}</div>
        </div>
      ))}
      {showDots && <div>...</div>}
      {showOkButton && !chatDisabled && (
        <button
          className="border w-12 h-12 rounded-full border-black "
          onClick={() => {
            toggleChatBot();
            setChatDisabled(true);
          }}
        >
          Ok
        </button>
      )}
    </div>
  );
};

export default ChatBot;
