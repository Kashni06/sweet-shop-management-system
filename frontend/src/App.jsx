import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SweetListPage from "./pages/SweetListPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<SweetListPage />} />
      </Routes>
    </div>
  );
}

export default App;
