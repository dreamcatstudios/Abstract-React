// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QuestCard from "./pages/QuestCard";
import Question from "./pages/Question";
import Points from "./pages/Points";
import Mobile from "./mobile/MobileLayout";
import { mobileStore } from "./mobile/store/MobileStore";
import Splash from "./pages/Splash";
import ChatBot from "./components/ChatBot"; // Updated import

const App = () => {
  const [showChatbot, setShowChatbot] = useState(true);

  const toggleChatBot = () => {
    setShowChatbot((prev) => !prev);
  };

  return (
    <Provider store={mobileStore}>
      <Router>
        <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover opacity-[100%]  saturate-50  text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/points" element={<Points />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/file/:name" element={<QuestCard />} />
            <Route path="/quest/:difficulty/:number" element={<Question />} />
            {/* Add more routes for different pages if needed */}
          </Routes>
        </div>
        {showChatbot && (
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundColor: "white",
              padding: "20px",
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
