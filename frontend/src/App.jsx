import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SweetListPage from "./pages/SweetListPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<SweetListPage />} />
    </Routes>
  );
}

export default App;
