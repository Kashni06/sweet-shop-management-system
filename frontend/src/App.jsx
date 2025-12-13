import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SweetListPage from "./pages/SweetListPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<SweetListPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
