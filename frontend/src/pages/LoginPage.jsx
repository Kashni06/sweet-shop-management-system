import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function handleLoginClick() {
    // For now, directly move user to dashboard
    navigate("/dashboard");
  }

  return (
    <div>
      {/* Page heading */}
      <h2>Login</h2>

      {/* Email input */}
      <label>
        Email
        <input type="email" />
      </label>

      {/* Password input */}
      <label>
        Password
        <input type="password" />
      </label>

      {/* Login button */}
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default LoginPage;
