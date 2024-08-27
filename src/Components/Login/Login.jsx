import { Link } from "react-router-dom";
import loginImg from "../../assets/loginpage.jpg";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-[80%]" src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              {" "}
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ID</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your ID"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white text-xl">
                  Login
                </button>
              </div>
              <p>
                <span className="underline">Create an account</span>{" "}
                <Link to="/signUp">
                  <span className="text-blue-500 underline font-bold">
                    SignUp
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;