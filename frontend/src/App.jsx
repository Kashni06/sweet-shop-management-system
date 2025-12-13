import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SweetListPage from "./pages/SweetListPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SweetListPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
