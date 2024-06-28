import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/navbar/Home.tsx";
import Navbar from "./components/navbar/Navbar";
import MailForm from "./components/navbar/contact-page/MailForm.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mailform" element={<MailForm />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
