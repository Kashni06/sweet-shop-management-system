function LoginPage() {
  return (
    <div>
      {/* Page title */}
      <h2>Login</h2>

      {/* Login form starts */}
      <form>
        {/* Email field */}
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>

        {/* Submit button */}
        <button type="button">Login</button>
      </form>
      {/* Login form ends */}
    </div>
  );
}

export default LoginPage;
