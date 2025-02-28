import React from "react";
import Navbar from "../components/ui/Navbar";
import AddTasks from "../components/AddTasks";
import DisplayUserTasks from "../components/DisplayUserTasks";

const Home = () => {
  return (
    <section className=" h-screen">
      <Navbar />
      <div className="w-[1300px] shadow-md p-2 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-500 text-center">
          My Task App
        </h1>

        <AddTasks />
        <DisplayUserTasks />
      </div>
    </section>
  );
};

export default Home;
