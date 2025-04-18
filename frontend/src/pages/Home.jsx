import React from "react";
// import Navbar from "../components/ui/Navbar";
// import AddTasks from "../components/AddTasks";
// import DisplayUserTasks from "../components/DisplayUserTasks";
import { Button } from "antd";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="bg-gray-950 h-screen flex flex-col items-center gap-3 justify-center">
      <h1 className="text-5xl text-white ">WELCOME TO MY TASK MANAGER APP</h1>
      <p className="text-gray-500 text-3xl font-bold">Sign in to add task</p>
      <div>
        <Link to={"/login"}>
          <Button
            style={{
              color: "black",
              fontSize: "1.3rem",
              padding: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            click to signin
          </Button>
        </Link>
      </div>
      {/* <Navbar />
      <div className="w-[1300px] shadow-md p-2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-500 text-center">
          My Task App
        </h1>

        <AddTasks />
        <DisplayUserTasks />
      </div> */}
    </section>
  );
};

export default Home;
