import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="w-full bg-blue-900 p-5">
      <nav>
        <header className="flex justify-between">
          <div className="">
            <h1 className="text-white text-3xl pl-10">Task Manager App</h1>
          </div>

          <div>
            <h2 className="bg-red-500 p-2 px-6 text-lg">Log Out</h2>
          </div>
        </header>
      </nav>
    </section>
  );
};

export default Navbar;
