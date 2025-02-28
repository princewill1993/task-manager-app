import { Input, Button } from "antd";
import React from "react";
import { Link } from "react-router";
import validator from "validator";

const LoginPage = () => {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleUserLogin() {
    console.log(loginFormData);
  }

  return (
    <section className="h-screen bg-gray-800 justify-center pt-56">
      <form className="py-14 px-10 bg-white max-w-[550px] grid container  item-center mx-auto gap-6 rounded-lg">
        <h1 className="text-5xl font-bold text-center pb-6 text-gray-700">
          Login
        </h1>

        <div className="bg-gray-700 text-white p-2">
          <h5 className="text-center text-2xl font-sans">Welcome back</h5>
          <p className="text-center text-lg  font-light font-sans -mt-0">
            Enter you details to continue
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-lg text-gray-800">Email: </label>
          <Input
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, email: e.target.value })
            }
            style={{ color: "red", marginLeft: "2rem" }}
            placeholder="Enter your email"
            size="large"
          />
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-lg text-gray-800">Password: </label>
          <Input.Password
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, password: e.target.value })
            }
            style={{ color: "red" }}
            placeholder="Enter your password"
            size="large"
          />{" "}
        </div>

        <div onClick={handleUserLogin} className=" grid gap-5">
          <Button
            style={{
              width: "4rem",
              padding: "1.5rem",
              fontSize: "1rem",
              paddingLeft: "2.2rem",
              paddingRight: "2.2rem",
              backgroundColor: "#2f3848",
              color: "white",
            }}
          >
            Login
          </Button>
          <h3 className="text-gray-500">
            Create New Account?{" "}
            <Link
              to={"/register"}
              className="text-gray-900 font-bold hover:underline"
            >
              Register here
            </Link>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
