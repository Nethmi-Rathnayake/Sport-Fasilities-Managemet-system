import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import StudentRegistration from "./pages/auth/StudentRegistration";
import ClubRegistration from "./pages/auth/ClubRegistration";


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/clubregister" element={<ClubRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;