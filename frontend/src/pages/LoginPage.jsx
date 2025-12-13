function LoginPage() {
  return (
    <div>
      {/* Login form heading */}
      <h2>Login</h2>

      {/* Email input field */}
      <label>
        Email
        <input type="email" />
      </label>

      {/* Password input field */}
      <label>
        Password
        <input type="password" />
      </label>

      {/* Login button */}
      <button>Login</button>
    </div>
  );
}

export default LoginPage;
