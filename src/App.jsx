// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QuestCard from "./pages/QuestCard";
import Mobile from "./mobile/MobileLayout";
import { mobileStore } from "./mobile/store/MobileStore";
import ChatBot from "./components/ChatBot";
import Scores from "./pages/Scores";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const hasSeenChatbot = localStorage.getItem("hasSeenChatbot");

    if (!hasSeenChatbot) {
      const timer = setTimeout(() => {
        setShowChatbot(true);
      }, 8000); // Adjust the delay time as needed
      return () => clearTimeout(timer);
    }

    return () => {}; // No need to clear the timer if chatbot has been seen
  }, []);

  const toggleChatBot = () => {
    localStorage.setItem("hasSeenChatbot", "true");
    setShowChatbot((prev) => !prev);
  };

  return (
    <Provider store={mobileStore}>
      <Router>
        <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover opacity-[100%]  saturate-50  text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mobile/:level" element={<Mobile />} />
            <Route path="/file/:name" element={<QuestCard />} />
            <Route path="/scores" element={<Scores />} />
            {/* Add more routes for different pages if needed */}
          </Routes>
        </div>
        {showChatbot && (
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px]"
            style={{
              backgroundColor: "#fafafa",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              zIndex: "1000",
            }}
          >
            <ChatBot toggleChatBot={toggleChatBot} />
          </div>
        )}
      </Router>
    </Provider>
  );
};

export default App;
