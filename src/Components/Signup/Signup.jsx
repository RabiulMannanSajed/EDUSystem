import student from "../../assets/student.jpg";
import teacher from "../../assets/teacher.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("student");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <div>
      <div>
        <div className="hero bg-base-200 h-auto">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              {role === "student" && <img src={student} alt="" />}
              {role === "teacher" && <img src={teacher} alt="" />}
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <h1 className="text-5xl font-bold text-center">SignUp</h1>{" "}
                <select name="role" value={role} onChange={handleRoleChange}>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>{" "}
                {role === "student" && (
                  <>
                    {" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">School ID</span>
                      </label>
                      <input
                        type="text"
                        placeholder="School ID"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">FullName</span>
                      </label>
                      <input
                        type="text"
                        placeholder="FullName"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Parent's Nnmber</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Parent's Number"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">UserName</span>
                      </label>
                      <input
                        type="text"
                        placeholder="UserName"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Create Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Create Password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </>
                )}
                {role === "teacher" && (
                  <>
                    {" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">ID</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Teacher ID"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">FullName</span>
                      </label>
                      <input
                        type="text"
                        placeholder="FullName"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone number</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="input input-bordered"
                        required
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">UserName</span>
                      </label>
                      <input
                        type="text"
                        placeholder="UserName"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Create Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Create Password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </>
                )}
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white text-xl">
                    SignUp
                  </button>
                </div>
                <p>
                  <span className="underline">Already have an account</span>{" "}
                  <Link to="/login">
                    {" "}
                    <span className="text-blue-500 underline font-bold">
                      Login
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
