import { Input, Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router";
import validator from "validator";
import axios from "axios";
import { serverUrl } from "../../utils/helper";

const RegisterPage = () => {
  const [registerFormData, setRegisterFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  async function handleRegisterFormData() {
    if (validator.isEmpty(registerFormData.name, { ignore_whitespace: true })) {
      return alert("Please provide your name");
    }

    if (validator.isEmail(registerFormData.email) === false) {
      return alert("Email must be provided");
    }

    if (
      validator.isStrongPassword(registerFormData.password, {
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      }) === false
    ) {
      return alert(
        "password must contain uppercase, lowercase, number, special character and a digit "
      );
    }
    setIsLoading(true);
    // lets go ahead and register our user

    try {
      const response = await axios.post(
        `${serverUrl}/auth/signup`,
        registerFormData
      );
      if (response.data.status === "success") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="h-screen bg-gray-800 justify-center pt-56">
      <form className="py-14 px-10 bg-white max-w-[550px] grid container  item-center mx-auto gap-6 rounded-lg">
        <h1 className="text-5xl font-bold text-center pb-6 text-gray-700">
          Register
        </h1>

        <div className="bg-gray-700 text-white p-2">
          <h5 className="text-center text-lg font-sans">Welcome </h5>
          <p className="text-center text-sm  font-light font-sans -mt-0">
            Register here to keep track of your tasks
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-lg text-gray-800">Name: </label>
          <Input
            onChange={(e) =>
              setRegisterFormData({ ...registerFormData, name: e.target.value })
            }
            style={{ marginLeft: "2rem" }}
            placeholder="Enter your email"
            size="large"
          />
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-lg text-gray-800">Email: </label>
          <Input
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                email: e.target.value,
              })
            }
            style={{ marginLeft: "2rem" }}
            placeholder="Enter your email"
            size="large"
          />
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-lg text-gray-800">Password: </label>
          <Input.Password
            onChange={(e) =>
              setRegisterFormData({
                ...registerFormData,
                password: e.target.value,
              })
            }
            placeholder="Enter your password"
            size="large"
          />{" "}
        </div>

        <div onClick={handleRegisterFormData} className=" grid gap-5">
          <Button
            loading={isLoading}
            style={{
              width: "4rem",
              padding: "1.5rem",
              fontSize: "1rem",
              paddingLeft: "3rem",
              paddingRight: "3rem",
              backgroundColor: "#2f3848",
              color: "white",
            }}
          >
            Register
          </Button>
          <h3 className="text-gray-500">
            Already have an Account?
            <Link
              to={"/login"}
              className="text-gray-900 font-bold hover:underline"
            >
              Login here
            </Link>
          </h3>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
