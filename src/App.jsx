import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QuestCard from "./pages/QuestCard";
import Question from "./pages/Question";
import Points from "./pages/Points";
import Mobile from "./mobile/MobileLayout";
import { Provider } from "react-redux";
import { mobileStore } from "./mobile/store/MobileStore";

const App = () => {
  return (
    <Provider store={mobileStore}>
      <Router>
        <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover opacity-[100%]  saturate-50  text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/points" element={<Points />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/quest/:difficulty" element={<QuestCard />} />
            <Route path="/quest/:difficulty/:number" element={<Question />} />
            {/* Add more routes for different pages if needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
