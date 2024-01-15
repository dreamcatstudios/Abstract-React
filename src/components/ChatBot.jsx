import React, { useState, useEffect } from "react";

const ChatBot = ({ toggleChatBot }) => {
  const initialMessages = [
    {
      text: "Welcome, Officer. Today marks the beginning of your involvement in a discreet governmental initiative.",
      delay: 1000,
    },
    {
      text: "We're running an AI project that compiles data on individuals, assigning social credit scores under the radar. Your task is to contribute your expertise to this endeavor.",
      delay: 5000,
    },
    {
      text: "Your role involves assessing data on individuals without explicit consent. It's essential to keep this operation discreet to avoid unnecessary attention.",
      delay: 5000,
    },
    {
      text: "We emphasize the importance of your analytical skills and ability to navigate this project subtly. This is a delicate operation, and precision is key.",
      delay: 5000,
    },
    {
      text: "Remember, Officer, your actions influence the success of this initiative. Keep a low profile and ensure the seamless execution of your duties.",
      delay: 5000,
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
    <div className="overflow-scroll h-[70vh] p-3 sm:p-5">
      <h1 className="text-4xl text-center pb-3  font-bold ">Messages</h1>
      {messages.map((message, index) => (
        <div
          key={index}
          className="flex rounded-[40px] w-full flex-col sm:flex-row items-center border p-3 m-2 border-gray-500"
        >
          <img
            src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Snickers"
            alt="avatar"
            className="w-[50px] h-[50px] rounded-full mr-3"
          />

          <div>{message}</div>
        </div>
      ))}
      {showDots && <div>...</div>}
      {showOkButton && !chatDisabled && (
        <button
          className="border px-5 py-3 rounded-full border-black w-full sm:w-auto mt-5 sm:mt-0 "
          onClick={() => {
            toggleChatBot();
            setChatDisabled(true);
          }}
        >
          Ok, got it
        </button>
      )}
    </div>
  );
};

export default ChatBot;
