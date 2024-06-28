import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/navbar/Home.tsx";
import MailForm from "./components/navbar/contact-page/MailForm.tsx";
import ErrorPage from "./components/error/ErrorPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mailform" element={<MailForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
