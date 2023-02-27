import { useState } from "react";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = () => {};

  return (
    <div className="login text-center">
      <h1>Login Page</h1>

      <div className="form">
        <form action="" onSubmit={handleSubmit()}>
          <div className="email w-25">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="password w-25">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="button">
            <a href="/signUp">Are you a new user ?</a>
            <button className="btn btn-outline-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
