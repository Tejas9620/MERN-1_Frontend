import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();
  
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, phone, password, confirmPassword };
    
    if (name && email && (password === confirmPassword) && phone) {
      axios.post("http://localhost:4000/signup", data).then((res) => {
        alert(res.data.message);
        navigate('/')
      });
    } else {
      alert("Invalid Credentis")
    }
  };
  return (
    <div className="signup text-center">
      <h1>SignUp Page</h1>

      <div className="singup_form">
        <form action="" className="card m-4 w-50" onSubmit={handleSubmit}>
          <div className="name w-50 p-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="email w-50 p-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter name"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="phone w-50">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="password w-50">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="confirm_password w-50">
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="signUp_button">
            <button className="btn btn-success">Sign Up</button>
          </div>
          <div className="login_button">
            <a href="/">Already A user ?</a>
            <Link className="btn btn-outline-primary">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
